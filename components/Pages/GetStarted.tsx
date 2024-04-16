import { Button, Hero, Section } from 'components';

const GetStarted = () => {
  return (
    <>
      <Hero title="Get started with Trino" />
      <Section>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Trino on Kubernetes</h3>
            <p>
              Run Trino on
              <a href="https://kubernetes.io/docs/setup/">Kubernetes</a> using
              the{' '}
              <a href="https://trinodb.github.io/charts/">Trino Helm chart</a>.
              This allows you to deploy locally, or running full-scale systems
              on the cloud.
            </p>
            <Button>Try Trino on Kubernetes</Button>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Run a Trino container</h3>
            <p>
              Start Trino using container tools like
              <a href="https://docs.docker.com/get-started/overview/">Docker</a>
              . Use this method to experiment with Trino without worrying about
              scalability and orchestration.
            </p>
            <Button>Spin up Trino on Docker</Button>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Deploy Trino manually</h3>
            <p>
              Use the tarball for fine-tuned deployments and customizing the
              installment of Trino. Learn the fundamentals of deploying a Trino
              cluster.
            </p>
            <Button>Learn how to deploy Trino</Button>
          </div>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Downloads</h2>
          <p>
            The current Trino release is version <b>444</b>. Learn more details
            from the <a href="docs/release/release-444.html">release notes</a>.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Server packages</h3>
            <p>
              Utilize the <code>.tar.gz</code> package to manually deploy. See{' '}
              <a href="docs/installation/rpm.html">RPM Deployment</a> for the{' '}
              <code>.rpm</code> package.
            </p>
            <Button>trino-server-444.tar.gz</Button>
            <Button>trino-server-rpm-444.rpm</Button>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Command line client</h3>
            <p>
              You can run queries using the interactive
              <a href="docs/client/cli.html"> command line interface</a>.
            </p>
            <Button>trino-cli-444-executable.jar</Button>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>JDBC Driver</h3>
            <p>
              Connect to Trino from Java using the{' '}
              <a href="docs/client/jdbc.html">JDBC driver</a>, which is
              available in
              <a href="https://search.maven.org/artifact/io.trino/trino-jdbc/444/jar">
                Maven Central
              </a>
              .
            </p>
            <Button>trino-jdbc-444.jar</Button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-[1fr,1px,1fr,1px,1fr] gap-8">
          <div>
            <h2>Community resources</h2>
            <ul>
              <li>
                <strong>Chat on Slack:</strong>{' '}
                <a href="/slack">trinodb.slack.com</a>
              </li>
              <li>
                <strong>Issues:</strong>{' '}
                <a href="https://github.com/trinodb/trino/issues">
                  GitHub issues
                </a>
              </li>
              <li>
                <strong>Twitter:</strong>{' '}
                <a href="https://twitter.com/trinodb">@trinodb</a>{' '}
                <a href="https://twitter.com/search?q=%23trinodb">#trinodb</a>{' '}
                <a href="https://twitter.com/search?q=%23prestosql">
                  #prestosql
                </a>{' '}
                <a href="https://twitter.com/search?q=%23prestodb">#prestodb</a>
              </li>
              <li>
                <strong>Live show and podcast:</strong>{' '}
                <a href="/broadcast/">Trino Community Broadcast</a>
              </li>
              <li>
                <strong>YouTube:</strong>{' '}
                <a href="https://www.youtube.com/c/trinodb">Trino Channel</a>
              </li>
            </ul>
          </div>
          <div className="h-[1px] lg:h-full w-full lg:w-[1px] bg-pink-900"></div>
          <div>
            <h2 id="getting-help">Getting help</h2>

            <p>
              If you need help using or running Trino, please ask a question on{' '}
              <a href="/slack">Slack</a>. Please{' '}
              <a href="https://github.com/trinodb/trino/issues/new">report</a>{' '}
              any issue you find with Trino.
            </p>
          </div>
          <div className="h-[1px] lg:h-full w-full lg:w-[1px] bg-pink-900"></div>
          <div>
            <h2 id="guidelines">Guidelines</h2>

            <ul>
              <li>
                <a href="/individual-code-of-conduct">Code of conduct</a> for
                individuals
              </li>
              <li>
                <a href="/guidelines-corporate">Guidelines</a> for participants
                with corporate interests
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <h2>External resources</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Trino on Kubernetes</h3>
            <p>
              <a href="/trino-the-definitive-guide">
                Trino: The Definitive Guide
              </a>
              <br />
              SQL at Any Scale, on Any Storage, in Any Environment
            </p>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Research papers</h3>
            <p>
              <a href="/paper">Presto: SQL on Everything</a>
            </p>
            <p>
              <a href="http://vldb.org/pvldb/vol12/p2170-tan.pdf">
                Choosing A Cloud DBMS: Architectures and Tradeoffs
              </a>
            </p>
          </div>
          <div className="bg-background p-8 rounded-lg flex flex-col items-center gap-4">
            <h3>Starburst newsletter</h3>
            <p>Monthly newsletter on Trino and surrounding technologies.</p>
            <p>
              <a href="https://www.starburst.io/learn/open-source-trino/newsletter/">
                Subscribe
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GetStarted;
