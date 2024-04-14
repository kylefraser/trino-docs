import Image from 'next/image';
import { Section } from 'components';

const WhyTrino = () => {
  return (
    <Section>
      <h2>Why Trino?</h2>
      <div className="grid grid-cols-3 gap-8">
        {whyTrino.map((item) => (
          <div className="flex flex-col items-center justify-center p-8 gap-4 bg-background rounded-lg">
            <div className="w-[48px] h-[48px] relative">
              <Image
                src={'/icons/' + item.icon}
                fill
                alt={item.icon}
                className="object-contain"
              />
            </div>
            <h3>{item.title}</h3>
            <p
              className="mb-auto"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyTrino;

export const whyTrino = [
  {
    icon: 'icon-speed.svg',
    title: 'Speed',
    description:
      'Trino is a highly parallel and distributed query engine, that is built from the ground up for efficient, low latency analytics.',
  },
  {
    icon: 'icon-scale.svg',
    title: 'Scale',
    description:
      'The largest organizations in the world use Trino to query exabyte scale data lakes and massive data warehouses alike.',
  },
  {
    icon: 'icon-simplicity.svg',
    title: 'Simplicity',
    description:
      'Trino is an ANSI SQL compliant query engine, that works with BI tools such as R, Tableau, Power BI, Superset and many others.',
  },
  {
    icon: 'icon-versatile.svg',
    title: 'Versatile',
    description:
      'Supports diverse use cases: ad-hoc analytics at interactive speeds, massive multi-hour batch queries, and high volume apps that perform sub-second queries.',
  },
  {
    icon: 'icon-analytics.svg',
    title: 'In-place analysis',
    description:
      'You can natively query data in Hadoop, S3, Cassandra, MySQL, and many others, without the need for complex, slow, and error-prone processes for copying the data.',
  },
  {
    icon: 'icon-query.svg',
    title: 'Query federation',
    description:
      'Access data from multiple systems within a single query. For example, join historic log data stored in an S3 object storage with customer data stored in a MySQL relational database.',
  },
  {
    icon: 'icon-everywhere.svg',
    title: 'Runs everywhere',
    description:
      'Trino is optimized for both on-premise and cloud environments such as Amazon, Azure, Google Cloud, and others.',
  },
  {
    icon: 'icon-trusted.svg',
    title: 'Trusted',
    description:
      'Trino is used for critical business operations, including financial results for public markets, by some of the largest organizations in the world.',
  },
  {
    icon: 'icon-open.svg',
    title: 'Open',
    description: `The Trino project is community driven project under the non-profit <a href=\"https://trino.io/foundation\">Trino Software Foundation</a>.`,
  },
];
