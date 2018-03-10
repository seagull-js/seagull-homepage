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

export default class Measure extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/measure'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Meta
          title="Measure | The Seagull Framework"
          description={
            'Data Driven Development: Start measuring user interactions and conversion rates for your seagull app. '
          }
        />

        <div
          style={{
            background: 'url("/assets/content/macbook-charts.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Block>
            <H1 inverse>Measure</H1>
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
              <img
                src="/assets/content/pirate-metrics.png"
                style={{ maxWidth: '100%' }}
              />
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
              <img
                src="/assets/content/traffic-sources.png"
                style={{ maxWidth: '100%' }}
              />
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
                  is an art called <em>Content Marketing</em>.
                </li>
                <li>
                  <strong>Paid</strong>: sidetrack people who are looking for
                  something else or nothing at all through advertising. From
                  classical Banners over sponsored search results to
                  blogvertising, this includes everything where you buy clicks
                  to your application in cash.
                </li>
                <li>
                  <strong>Direct</strong>: People in this traffic category have
                  been on the website before or heard from your app via
                  mouth-to-mouth. High rates of direct traffic are the result of{' '}
                  <em>Brand Awareness</em> and <em>high retention rates</em>.
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
            listening on browser history change events. Users who do a click on
            any second page within a session are tracked as "activated".
          </InfoMedia>

          <Row>
            <Col xs={12} md={6}>
              <div>
                <img
                  src="/assets/content/website-ux.jpg"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Text lead>Give users what they look for</Text>
              <Text>
                User who do not <em>bounce</em> but actually do something on
                your app, like clicking through a few things are{' '}
                <em>activated</em>. Keeping it even simpler: any "second" click
                counts as activation, meaning coming to your web app and
                clicking at least <em>one</em> internal link. This also means
                that your activation rate is measured as the acquired traffic
                that doesn't bounce.
              </Text>

              <Text>
                Increasing the user activation rates translates into optimizing
                the actual user experience (UX). Strictly speaking, aim for a
                low complexity, high accessability and make your point short and
                clear. Mostly you only have around 5 seconds to convince the
                user not to bounce immediately, <em>page load time included</em>.
              </Text>
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Retentions</H2>

          <InfoMedia
            title="Advanced User Session Management"
            image="/assets/seagull-icon.png"
          >
            Seagull does identify users across sessions by storing an UUID in
            the localStorage of the Browser. Every visit after the first one
            counts as retention event. This way, real customer journeys can be
            reconstructed instead of often meaningless session-based guessing.
          </InfoMedia>

          <Row>
            <Col xs={12} md={6}>
              <img
                src="/assets/content/customer-churn.jpg"
                style={{ maxWidth: '100%' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Text lead>Keep your users</Text>
              <Text>
                Retention rate is the the rate of users that come back after the
                first visit (and how often). Users that don't come back are{' '}
                <em>churning</em>. Your goal here is to minimize the churn rates
                and to get users to come back frequently and often.
              </Text>
              <Text>
                It is very costly to acquire new users to your app, so you
                really want to keep them. Generating revenue from retention
                users is comparably cheap and easy. High retention rates also is
                the core for slowly builing brand awareness, which then leads to
                more user acquisitions{' '}
                <em>while keeping the users you already have</em>.
              </Text>
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Revenue</H2>

          <Row>
            <Col xs={12} md={6}>
              <img
                src="/assets/content/website-monetization.jpg"
                style={{ maxWidth: '100%' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Text lead>Turn a profit</Text>
              <Text>
                This metric is highly individual to the kind of product you're
                building, and not everyone optimizes for something money-related
                at all. But what you <em>do</em> have in any case is a
                transaction of any kind. Seagull provides an easy tracking
                helper to trigger the event with data:
              </Text>

              <CodeSnippet code={codeTrackRevenue} />

              <Text>
                The interface definition will aid you to achieve data cleanness,
                and because of the well-defined structure of the data object,
                reports can be derived easily.
              </Text>
              <Text>
                Caution: traditional display advertising (banners, popups,
                textboxes) is a soon-dying monetization strategy, so consider
                something more substantial for your app.
              </Text>
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Referral</H2>

          <Row>
            <Col xs={12} md={6}>
              <img
                src="/assets/content/social-media.jpg"
                style={{ maxWidth: '100%' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <Text>
                Referral rate is the rate of users who recommend ("share") your
                app to other users via social networks or messengers (and how
                many acquisitons occur per share).
              </Text>
              <Text>
                Seagull currently <strong>will not</strong> measure this rate
                automatically for now, since this is highly individual per app
                and non-trivial to measure without manual assistance. However,
                you can just invoke the following:
              </Text>
              <CodeSnippet code={codeTrackReferral} />
              <Text>
                The most important thing is having content worth sharing in the
                first place. Strictly speaking: you need web pages with
                optimized metadata and actually interesting things your users
                might share with their friends.
              </Text>
            </Col>
          </Row>
        </Block>
      </PageWrapper>
    )
  }
}
