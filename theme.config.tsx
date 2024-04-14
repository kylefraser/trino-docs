import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <>Trino</>,
  project: {
    link: 'https://',
  },
  banner: {
    dismissible: true,
    key: 'welcome-banner',
    text: 'Do you ❤️ Trino? Give us a 🌟 on GitHub',
  },
  primaryHue: 32,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  feedback: {
    content: null,
  },
  chat: {
    link: 'https://',
  },
  editLink: {
    text: null,
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Starburst | Brand Guidelines',
  },
};

export default config;
