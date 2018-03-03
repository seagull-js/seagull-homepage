import { Page } from '@seagull/core'
import * as React from 'react'
import {
  Alert,
  Button,
  Col,
  Grid,
  Jumbotron,
  PageHeader,
  Panel,
  Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Block from '../components/Block'
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

        <Block wide="true">
          <Block>
            <h1 style={{ color: 'white' }}>Launch your idea today!</h1>
            <hr />
            <p className="lead">
              The Seagull Framework empowers <em>you</em> to <em>build</em>{' '}
              sophisticated web applications and <em>deploy</em> it straight to
              your highly scalable serverless infrastructure. With feedback
              loops included, it is the ideal tool for LEAN software
              development.
            </p>
            <div>
              <Link className="btn btn-lg btn-primary" to={'/quickstart'}>
                Quickstart
              </Link>{' '}
              <Link className="btn btn-lg btn-default" to={'/guides'}>
                Guides
              </Link>
            </div>
          </Block>
        </Block>

        <Block>
          <h2>
            Overview <small>What is this?</small>
          </h2>
          <hr />
          <Alert bsStyle="warning">
            <strong>This is an pre-alpha framework!</strong>
            <br />
            The project is under heavy development and APIs will change. Only
            use it for experimentational stuff right now.
          </Alert>
          <p className="lead">
            TL;DR: it is <strong>React.js</strong> and{' '}
            <strong>Typescript Code</strong> running on{' '}
            <strong>AWS Lambda</strong> and deployed via{' '}
            <strong>Serverless</strong>.
          </p>
          <p>
            The longer story is that seagull combines the most powerful and
            popular web development options into one nifty package and builds on
            top of it. Getting started with React is simple, but deploying a
            final product with all things like server-side rendering, routing,
            SEO and so on is a totally different thing. Also developing node.js
            backend apps is fairly easy at the beginning, but deploying things
            is such a hassle with choosing server providers, setting things up,
            doing deployment steps manually, the list goes on.
          </p>

          <p>
            If you went through <em>all this pain</em> before, like most
            developers and entrepreneurs nowadays, you know how much of a show
            stopper this is when it comes to <em>"just getting started"</em>.
            Seagull solves all of this at once. If you know javascript, the
            learning curve should only be a few minutes.
          </p>

          <p>
            The Seagull Framework provides you with a immediately usable
            React.js frontend structure with local development server included.
            Also, backend code can be written like they're just API functions.
            Once you're done prototyping, seagull will compile everything for
            you and deploys the app into your AWS account.
          </p>
        </Block>

        <Block wide="true">
          <Block>
            <h2 style={{ color: 'white' }}>
              Features <small>Why use it?</small>
            </h2>
            <hr />
            <p className="lead">
              Seagull is a Featherweight Zero-Config Typesafe Isomorphic Cloud
              Framework. If you're curious, this is what it means:
            </p>

            <Row className="show-grid">
              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Featherweight">
                  Enjoy a <strong>tiny codebase</strong> for your app as well as{' '}
                  <strong>lightweight deployment bundles</strong> and a{' '}
                  <strong>small learning curve</strong>.
                </DefaultPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Zero-Config">
                  <strong>No configuration hell</strong>, thanks to a{' '}
                  <strong>dedicated CLI tool</strong> which manages the
                  development workflows in the spirit of{' '}
                  <strong>Convention over Configuration</strong>.
                </DefaultPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Typesafe">
                  Seagull leverages <strong>Typescript</strong> extensively to
                  make <strong>features discoverable</strong> and introduce a{' '}
                  <strong>safety layer</strong> back into fullstack web
                  development.
                </DefaultPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Isomorphic">
                  Built ontop of the <strong>Javascript ecosystem</strong> and
                  embracing <strong>write once - run everywhere</strong>,
                  extending the boundaries of{' '}
                  <strong>don't repeat yourself</strong>.
                </DefaultPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Cloud">
                  Your deployed app will run on a{' '}
                  <strong>clean serverless architecture</strong>, resulting in{' '}
                  <strong>minimal maintenance costs</strong> and{' '}
                  <strong>maximal scalability</strong>.
                </DefaultPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <DefaultPanel title="Framework">
                  Seagull comes with <strong>batteries included</strong> for
                  building interactive <strong>fullstack web apps</strong>,
                  including features like{' '}
                  <strong>ORM, SSR, caching and CDN</strong>.
                </DefaultPanel>
              </Col>
            </Row>
          </Block>
        </Block>

        <Block>
          <h2>
            Basis <small>What's inside?</small>
          </h2>
          <hr />

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
