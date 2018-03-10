import { Meta, Page } from '@seagull/core'
import { Block, H1, H2, H3, Text } from '@seagull/ui'
import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import CodeSnippet from '../components/CodeSnippet'
import InfoMedia from '../components/InfoMedia'
import PageWrapper from '../components/PageWrapper'

export default class Learn extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/learn'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Meta
          title="Learn | The Seagull Framework"
          description={
            'Seagull timely reports: Gather insights and learn what actually matters for your app.'
          }
        />

        <div
          style={{
            background: 'url("/assets/content/learn-insights.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Block>
            <H1 inverse>Learn</H1>
            <Text inverse lead>
              Gather insights about your users and how your app is actually
              performing. Seagull can crunch the numbers and create timely
              reports automatically for you. Testing hypotheses has never been
              easier!
            </Text>
          </Block>
        </div>

        <Block>
          <H2>Monitoring in Realtime</H2>

          <p>
            Seagull does track everything it can to your GA account, so you have
            a nice overview about how stuff is going on anytime, everywhere.
            This does help in becoming a feeling about your user behaviors, but
            beware that google analytics is <strong>not</strong> a reliable data
            source at all. An increasing number of people are blocking any
            tracking efforts completely or (even worse) use tools which
            automatically interfere with data.
          </p>

          <p>
            This growing issue can be circumvented by adding reliable tracking
            right into your app code bundle and leveraging the cloud backend of
            your app. This is why seagull will send events not only to GA, but
            also to itself, which can't be intercepted automatically since this
            communication channel is also the way SPAs work in general and with
            their own domain. Currently, monitoring this data is not possible in
            realtime, though. This is why GA is added, in addition to other
            tooling integration options once you have data in GA.
          </p>
        </Block>

        <Block>
          <H2>Reporting Precise Data</H2>

          <p>
            The tracking data in the backend can be inspected manually in server
            logs, but the recommended way to go is: using the Seagull CLI to
            generate a report for your desired time frame. Many people want
            standard daily/weekly/monthly reports about how stuff is going, and
            this is exactly what the CLI can do for you. Here are the reporting
            time ranges:
          </p>

          <CodeSnippet
            language="bash"
            code={`# default is yesterday\n$ seagull report daily`}
          />

          <CodeSnippet
            language="bash"
            code={`# specific date with format YYYY-MM-DD\n$ seagull report daily --date 2018-02-17`}
          />

          <CodeSnippet
            language="bash"
            code={`# default is last week\n$ seagull report weekly`}
          />

          <CodeSnippet
            language="bash"
            code={`# specific date with format YYYY-WW\n$ seagull report weekly --date 2018-07`}
          />

          <CodeSnippet
            language="bash"
            code={`# default is last month\n$ seagull report monthly`}
          />

          <CodeSnippet
            language="bash"
            code={`# specific date with format YYYY-MM\n$ seagull report monthly --date 2018-02`}
          />

          <p>
            By default, a JSON file will be generated in the{' '}
            <code>reports/</code> folder. Experimental Excel spreadsheet
            generation is work-in-progress.
          </p>
        </Block>
      </PageWrapper>
    )
  }
}
