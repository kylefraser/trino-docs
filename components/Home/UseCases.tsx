import { Section } from 'components';

const UseCases = () => {
  return (
    <Section>
      <h2> Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full text-left">
        {useCases.map((item) => (
          <div className="bg-background border-l-2 border-l-pink rounded-lg p-8">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UseCases;

export const useCases = [
  {
    title: 'Interactive data analytics',
    description:
      'A primary driver for Trino usage is interactive analytics. A user enters the query either directly using SQL or generated through a user interface, and is waiting for the results to come back as quickly as possible. Trino returns results to the user as soon as they are available. This offers data analysts and data scientists the ability to query large amounts of data, test hypotheses, run A/B testing, and build visualizations or dashboards.',
  },
  {
    title: 'High performance analytics of object storage with SQL',
    description:
      'The original use case for the development of Trino, is enabling SQL-based analytics of HDFS/Hive object storage systems. Trino is so performant that it enables analytics that used to be impossible or take hours. Migrating from Hive-based systems and querying cloud object storage systems is still a major use case for Trino.',
  },
  {
    title: 'Centralized data access and analytics with query federation',
    description:
      'The ability to query many disparate datasource in the same system with the same SQL greatly simplifies analytics that require understanding the large picture of all your data. Federated queries in Trino can access your object storage, your main relational databases, and your new streaming or NoSQL system, all in the same query. Trino completely changes what is possible in this central data consumption layer.',
  },
  {
    title: 'Batch ETL processing across disparate systems',
    description:
      'Large Extract, Transform, Load (ETL) processes running in batches≈ are generally very resource intensive. Routinely run by engineers, they are low priority to return as long as they eventually finish. Trino is able to tremendously speed up ETL processes, allow them all to use standard SQL statement, and work with numerous data sources and targets all in the same system.',
  },
];
