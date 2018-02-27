import { Page } from '@seagull/core'
import * as React from 'react'
import { Jumbotron, PageHeader } from 'react-bootstrap'
import Block from '../components/Block'
import CodeSnippet from '../components/CodeSnippet'
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
        <Block wide="">
          <Jumbotron>
            <h1>Analytics</h1>
            <p>
              Instantly start measuring user interactions and conversion rates
              for your app. Seagull implements <strong>Pirate Metrics</strong>{' '}
              with multiplex reporting (realtime with google analytics, precise
              historical data in the backend).
            </p>
          </Jumbotron>
        </Block>

        <Block wide="">
          <PageHeader>
            Data Driven Development <small>right from the start</small>
          </PageHeader>

          <p>
            Old-fashioned managers, first-time entrepreneurs as well as
            corporate developers often make the same big mistake: building
            things based on emotions, specifications or theoretical
            profitability. The thing is: nothing will have success if you don't
            build explicitly for your target users. If you give customers
            exactly what they need, even if they didn't even know they wanted it
            in the first place, success will follow.{' '}
            <em>
              Profit and growth always are side-effects of customer satisfaction
              rates
            </em>.
          </p>

          <p>
            How do you know your customers like what you're building right now?
            You measure user interactions. But what do you actually want to
            measure? Which numbers are really important? It's easy to be drawn
            into a complex tracking dashboard but generating zero insights. Many
            teams experience the problem from starting completely blind to
            over-track everything leading to analytics paralysis. Not to mention
            that implementing all kinds of data tracking consumes huge amounts
            of development efforts, time that doesn't flow into actual product
            development.
          </p>

          <p>
            How to solve these issues? Actually, it's quite easy to get going in
            the right direction. Nearly every startup and product can begin with
            the exact same analytical framework:{' '}
            <a
              href="https://de.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version"
              target="_blank"
            >
              Pirate Metrics
            </a>. In short, it measures the following key metrics:{' '}
            <strong>A</strong>cquisition, <strong>A</strong>ctivation,{' '}
            <strong>R</strong>etention, <strong>R</strong>eferral and{' '}
            <strong>R</strong>venue. You only have to provide a few simple event
            triggers to seagull to implement all tracking and analytics
            pipelines deriving off Pirate Metrics.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Activate Metrict Tracking <small>with one line</small>
          </PageHeader>

          <p>
            Because Seagull can also be used for building internal tools,
            visualizations or dashboards, all metric tracking is disabled by
            default. To enable it, execute the following CLI command:
          </p>

          <CodeSnippet
            language="bash"
            code={`$ seagull enable analytics --id UA-XXXXXX-X`}
          />

          <p>
            The important thing is to provide a real, valid google analytics
            tracking id. This will setup all neccessary steps to enable google
            analytics tracking, scaffolding a backend API handler for storing
            additional data and exposes a set of simple triggers for the pirate
            metrics.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Acquisitions <small>where users come from</small>
          </PageHeader>

          <p>
            The frontend of any Seagull web application is a so called{' '}
            <em>Single-Page-App (SPA)</em>. Therefore, the type of user
            acquisition is called <em>traffic</em>. Traffic can originate from
            different sources:
          </p>

          <ul>
            <li>
              <strong>Organic</strong>: people ask search engines (mostly:
              google) for answers to their current problems and click on search
              results that may have the answer. Optimizing this traffic origin
              is a craft called <em>Search Engine Optimization (SEO)</em> and
              Seagull may help you automatizing all the details for you.
            </li>
            <li>
              <strong>Social</strong>: people follow recommendations of other
              people they might know or follow, clicking links on social
              networks or messengers. Optimizing this traffic origin is an art
              called <em>Branding</em> and for digital products has a strong
              focus on the sub-discipline of <em>Content Marketing</em>:
              creating interesting content that users will share.
            </li>
            <li>
              <strong>Paid</strong>: sidetrack people who are looking for
              something else or nothing at all through advertising. From
              classical Banners over sponsored search results to blogvertising,
              this includes everything where you buy clicks to your application
              in cash.
            </li>
            <li>
              <strong>Direct</strong>: aside from very strong brands, this
              traffic only comes through retention from users who have already
              been on your web app. This is a topic of the dedicated metric{' '}
              <em>Retention</em> further below. Also, Seagull automatically
              separates real retention users from first-time direct traffic
              cleanly.
            </li>
          </ul>

          <p>
            All these Acquisition Origins are combined into a single Metric by
            Seagull, but the individual origins are tracked as well. You don't
            need to do anything here once `analytics` is enabled correctly for
            your app. Seagull will initiate a hidden session with uuid for every
            visitor which is persistent through visits (as much as possible).
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Activations <small>where users actually do something</small>
          </PageHeader>

          <p>
            User who do not <em>bounce</em> but actually do something on your
            app, like clicking through a few things are <em>ectivated</em>.
            Keeping it even simpler: any "second" click counts as activation,
            meaning coming to your web app and clicking at least <em>one</em>{' '}
            internal link. This also means that your activation rate is measured
            as the acquired traffic that doesn't bounce.
          </p>

          <p>
            Seagull will handle this automatically for you by listening on
            browser history change events.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Retentions <small>when users come back</small>
          </PageHeader>

          <p>
            Retention rate is the the rate of users that come back after the
            first visit (and how often).
          </p>
          <p>
            Seagull will handle this automatically for you by inspecting the
            hidden session initiated on the first visit.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Referrals <small>when users recommend your app</small>
          </PageHeader>

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

        <Block wide="">
          <PageHeader>
            Revenue <small>when users finally do what you want</small>
          </PageHeader>

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

        <Block wide="">
          <PageHeader>
            Monitoring in Realtime <small>via Google Analytics</small>
          </PageHeader>

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

        <Block wide="">
          <PageHeader>
            Reporting Precise Data <small>with the CLI</small>
          </PageHeader>

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
