import { Meta, Page } from '@seagull/core'
import { Block, H1, H2, H3, Text } from '@seagull/ui'
import * as React from 'react'
import { Col, Panel, Row, Well } from 'react-bootstrap'
import CodeSnippet from '../components/CodeSnippet'
import InfoMedia from '../components/InfoMedia'
import PageWrapper from '../components/PageWrapper'

const codeTrackRevenue = `
import { Tracking } from '@seagull/core'

Tracking.trackRevenue({
  id: 'purchase order id', // whatever this is for you
  revenue: 1234.56 // the money amount paid (full)
})
`

const codeTrackReferral = `
import { Tracking } from '@seagull/core'

Tracking.trackReferral('twitter')
`

export default class Architecture extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/analytics'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Meta title="Analytics | Seagull" />

        <div
          style={{
            background: 'url("/assets/content/macbook-charts.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Block>
            <H1 inverse>Analytics</H1>
            <Text inverse lead>
              Instantly start measuring user interactions and conversion rates
              for your app. Seagull has <strong>Pirate Metrics</strong> built
              in. In this short guide you will learn how to work truly
              data-driven, what your essential metrics are and how the seagull
              framework can help you succeed.
            </Text>
          </Block>
        </div>

        <Block>
          <H2>Data Driven Development</H2>

          <Row>
            <Col xs={12} md={6}>
              <Text lead>
                Success, Profit and Growth are side-effects of customer
                satisfaction.
              </Text>
              <Text>
                How do you know your customers like what you're building right
                now? You measure user interactions. But what do you actually
                want to measure? Which numbers are really important? Which ones
                are not? How to implement tracking ideally? These are hard
                questions and need time to figure out <em>in addition to</em>{' '}
                actually building the software product.
              </Text>

              <Text>
                Seagull gives you an easy analytical framework to start
                measuring user interactions right away: The famously known{' '}
                <a
                  href="https://de.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version"
                  target="_blank"
                >
                  Pirate Metrics
                </a>.
              </Text>
              <Text>
                With just these five key performance indicators (KPIs) you are
                able to have a clear picture about the customer journeys using
                your app. Strictly speaking, these numbers tell you exactly what
                you should focus on next for maximum growth.
              </Text>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/assets/content/pirate-metrics.png"
                  style={{ maxWidth: '100%', maxHeight: 300 }}
                />
              </div>
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Activate Analytics</H2>

          <Text>
            Enable automatic tracking of the metrics with the following CLI
            command:
          </Text>

          <CodeSnippet
            language="bash"
            code={`$ seagull enable analytics --id UA-XXXXXX-X`}
          />

          <Text>
            The important thing is to provide a real, valid google analytics
            tracking id. This will setup all neccessary steps to enable google
            analytics tracking, scaffolding a backend API handler for storing
            additional data and exposes a set of simple triggers for the pirate
            metrics.
          </Text>
        </Block>

        <Block>
          <H2>Acquisitions</H2>

          <InfoMedia
            title="Zero-Configuration Data Collector"
            image="/assets/seagull-icon.png"
          >
            Seagull automatically tracks all user acquisitions to google
            analytics as well as your own CloudWatch log streams. The basic
            issues of tracking Single-Page-Apps are already solved for you.
          </InfoMedia>

          <Row>
            <Col xs={12} sm={6}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/assets/content/traffic-sources.png"
                  style={{ maxWidth: '100%', maxHeight: 300 }}
                />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <Text lead>Start with getting as much traffic as possible:</Text>
              <ul>
                <li>
                  <strong>Organic</strong>: people ask search engines for
                  answers to their current problems and click on search results
                  that may have the answer. Optimizing this traffic origin is a
                  craft called <em>Search Engine Optimization (SEO)</em>.
                </li>
                <li>
                  <strong>Social</strong>: people follow recommendations of
                  other people they might know or follow, clicking links on
                  social networks or messengers. Optimizing this traffic origin
                  is an art called <em>Branding</em>.
                </li>
                <li>
                  <strong>Paid</strong>: sidetrack people who are looking for
                  something else or nothing at all through advertising. From
                  classical Banners over sponsored search results to
                  blogvertising, this includes everything where you buy clicks
                  to your application in cash.
                </li>
                <li>
                  <strong>Direct</strong>: aside from very strong brands, this
                  traffic only comes through retention from users who have
                  already been on your web app. This is a topic of the dedicated
                  metric <em>Retention</em> further below.
                </li>
              </ul>
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Activations</H2>

          <InfoMedia
            title="User Interaction Tracking"
            image="/assets/seagull-icon.png"
          >
            Seagull does track the exact consecutive page views of your users by
            listening on browser history change events.
          </InfoMedia>

          <Text>
            User who do not <em>bounce</em> but actually do something on your
            app, like clicking through a few things are <em>activated</em>.
            Keeping it even simpler: any "second" click counts as activation,
            meaning coming to your web app and clicking at least <em>one</em>{' '}
            internal link. This also means that your activation rate is measured
            as the acquired traffic that doesn't bounce.
          </Text>
        </Block>

        <Block>
          <H2>Retentions</H2>

          <InfoMedia
            title="Advanced User Session Management"
            image="/assets/seagull-icon.png"
          >
            Seagull does identify users across sessions by storing an UUID in
            the localStorage of the Browser. Every visit after the first one
            counts as retention event.
          </InfoMedia>

          <Text>
            Retention rate is the the rate of users that come back after the
            first visit (and how often).
          </Text>
        </Block>

        <Block>
          <H2>Referrals</H2>

          <p>
            Referral rate is the rate of users who recommend ("share") your app
            to other users via social networks or messengers (and how many
            acquisitons occur per share).
          </p>
          <p>
            Seagull <strong>will not</strong> measure this rate automatically
            for now, since this is highly individual per app and non-trivial to
            measure without manual assistance. However, you can just invoke the
            following:
          </p>

          <CodeSnippet code={codeTrackReferral} />
        </Block>

        <Block>
          <H2>Revenue</H2>

          <p>
            This metric is highly individual to the kind of product you're
            building, and not everyone optimizes for something money-related at
            all. But what you <em>do</em> have in any case is a transaction of
            any kind. Seagull provides an easy tracking helper to trigger the
            event with data:
          </p>

          <CodeSnippet code={codeTrackRevenue} />

          <p>
            The interface definition will aid you to achieve data cleanness, and
            because of the well-defined structure of the data object, reports
            can be derived easily.
          </p>
        </Block>

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
