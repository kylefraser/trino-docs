import { GetStaticPaths, GetStaticProps } from 'next';
import { buildDynamicMDX, buildDynamicMeta } from 'nextra/remote';
import json from '../remote-files/sql.json' assert { type: 'json' };

const { user, repo, branch, docsPath, filePaths } = json;

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: 'blocking',
  paths: filePaths
    // this fix `TOO MANY REDIRECTS` error in CF
    .map((filePath) => ({
      params: {
        slug: filePath.replace(/\.md\.txt?$/, '').split('/'),
      },
    })),
});

export const getStaticProps: GetStaticProps<
  {
    __nextra_dynamic_mdx: string,
    __nextra_dynamic_opts: string,
  },
  { slug?: string[] }
> = async ({ params }) => {
  const path = params?.slug?.join('/') ?? 'index';
  const foundPath = filePaths.find((filePath) => filePath.startsWith(path));

  const baseURL = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${docsPath}${foundPath}`;
  const response = await fetch(baseURL);
  const data = await response.text();

  const mdx = await buildDynamicMDX(data.replace(/({|})/gi, '"'), {
    defaultShowCopyCode: true,
  });

  return {
    props: {
      ...mdx,
      ...(await buildDynamicMeta()),
    },
  };
};
