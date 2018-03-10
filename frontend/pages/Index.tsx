import { Page } from '@seagull/core'
import { Alert, Block, H1, H2, H3, Text } from '@seagull/ui'
import * as React from 'react'
import { Button, Col, Grid, Jumbotron, Panel, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DefaultPanel from '../components/DefaultPanel'
import InfoMedia from '../components/InfoMedia'
import PageWrapper from '../components/PageWrapper'

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = '/'

  render() {
    const eyeCatcherStyle = {
      display: 'block',
      margin: '15 0 auto',
      maxWidth: '100%',
      textAlign: 'center',
    }
    return (
      <PageWrapper>
        <Block>
          <div style={{ textAlign: 'center', margin: '50px 0' }}>
            <img src="/assets/seagull-logo.png" style={eyeCatcherStyle} />
          </div>
        </Block>
        <div
          style={{
            background: 'url("/assets/content/software-building.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Block>
            <H1 inverse>Launch your idea today!</H1>
            <Text inverse lead>
              The Seagull Framework empowers <em>you</em> to build sophisticated
              web applications and deploy it straight to your highly scalable
              serverless infrastructure. With feedback loops included, it is the
              ideal tool for LEAN software development.
            </Text>
            <br />
          </Block>
        </div>

        <Block>
          <Alert title="This is a pre-alpha framework!">
            The project is under heavy development and APIs will change. Only
            use it for experimental stuff right now.
          </Alert>

          <H2>Overview</H2>

          <Text lead>
            TL;DR: it is <strong>React.js</strong> and{' '}
            <strong>Typescript Code</strong> running on{' '}
            <strong>AWS Lambda</strong> and deployed via{' '}
            <strong>Serverless</strong>. The framework is designed for{' '}
            <strong>LEAN product development</strong> and especially tailored
            for <strong>experienced developers</strong> and{' '}
            <strong>serial solopreneurs</strong>.
          </Text>

          <div style={{ textAlign: 'center' }}>
            <img
              src="/assets/content/lean-circle.svg"
              style={{ maxHeight: 300, maxWidth: '100%' }}
            />
          </div>

          <Row>
            <Col xs={12} md={4}>
              <H3>Build.</H3>
              <Text>
                The Seagull Framework combines the most powerful and popular web
                development options into one nifty package. Hit the ground
                running immediately with preconfigured React.js and deploy to
                the AWS Cloud within minutes.
              </Text>
            </Col>
            <Col xs={12} md={4}>
              <Link to="/measure">
                <H3>Measure.</H3>
              </Link>
              <Text>
                Enable analytics for your app and seagull will track user
                interactions to Google Analytics (realtime dashboards) and it's
                own backend (exact historical data). Pirate Metrics are already
                implemented, too. <Link to="/measure">read more &raquo;</Link>
              </Text>
            </Col>
            <Col xs={12} md={4}>
              <Link to="/measure">
                <H3>Learn.</H3>
              </Link>
              <Text>
                Generate daily/weekly/monthly reports from your app with
                actionable metrics and results. There might even be automatic
                hypothesis management in the future.{' '}
                <Link to="/learn">read more &raquo;</Link>
              </Text>
            </Col>
          </Row>
        </Block>

        <Block inverse>
          <H2 inverse>What's inside?</H2>

          <InfoMedia
            title="Node.js"
            image="/assets/icon-nodejs.png"
            link="https://nodejs.org/en/"
          >
            Every web developer knows Javascript nowadays, and node.js brings
            Javascript from browsers to servers and has the biggest library
            ecosystem in the world called <em>npm</em>. It is also the{' '}
            <Link
              to="https://insights.stackoverflow.com/survey/2017#technology-programming-languages"
              target="_blank"
            >
              most popular
            </Link>{' '}
            and{' '}
            <Link to="https://octoverse.github.com/" target="_blank">
              most widely used
            </Link>{' '}
            programming language for web development today.
          </InfoMedia>

          <InfoMedia
            title="Typescript"
            image="/assets/icon-typescript.png"
            link="https://www.typescriptlang.org/"
          >
            The Typescript language is a superset of Javascript and allows you
            to use the latest and greatest additions to the Javascript language
            even if your customers (and their browsers) don't support them.
            Also, as the name implies, it adds optional static typing to the
            mix, a really great safety net and productivity boost.
          </InfoMedia>

          <InfoMedia
            title="React"
            image="/assets/icon-react.png"
            link="https://reactjs.org/"
          >
            The{' '}
            <Link
              to="https://www.npmjs.com/npm/state-of-javascript-frameworks-2017-part-1"
              target="_blank"
            >
              most popular
            </Link>{' '}
            frontend framework as of today is React.js and it's component syntax
            called <em>JSX</em>. It is also the only frontend component
            abstraction which can be compiled by Typescript natively and is
            completely typesafe. This combination <em>eliminates</em> the need
            of Flow and similar clunky tools.
          </InfoMedia>

          <InfoMedia
            title="Serverless"
            image="/assets/icon-serverless.png"
            link="https://serverless.com/"
          >
            This backend framework simplifies the deployment of web applications
            which follow a generic serverless architecture. Using CloudFormation
            on AWS, applications have the benefits of{' '}
            <Link
              to="https://www.digitalocean.com/community/tutorials/what-is-immutable-infrastructure"
              target="_blank"
            >
              immutable infrastructure
            </Link>{' '}
            and{' '}
            <Link
              to="https://en.wikipedia.org/wiki/Infrastructure_as_Code"
              target="_blank"
            >
              infrastructure-as-code
            </Link>, but without all the pains of{' '}
            <Link
              to="https://en.wikipedia.org/wiki/Orchestration_(computing)"
              target="_blank"
            >
              orchestration tools
            </Link>.
          </InfoMedia>

          <InfoMedia
            title="Amazon Web Services"
            image="/assets/icon-aws.png"
            link="https://aws.amazon.com/"
          >
            By choosing the{' '}
            <Link
              to="http://fortune.com/2017/06/15/gartner-cloud-rankings/"
              target="_blank"
            >
              most popular
            </Link>{' '}
            cloud provider, Seagull is able to leverage the serverless framework
            completely autonomous for you. You never have to configure anything
            on your own and there also are generous free tiers for AWS usage
            (most small/mid-sized web apps should be free).
          </InfoMedia>
        </Block>
      </PageWrapper>
    )
  }
}
