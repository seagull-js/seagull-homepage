import { Page } from '@seagull-js/seagull'
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
import PageWrapper from '../components/PageWrapper'
import DefaultPanel from '../components/DefaultPanel'
import InfoMedia from '../components/InfoMedia'
import Block from '../components/Block'

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = '/'

  render() {
    const eyeCatcherStyle = {
      maxWidth: '100%',
      display: 'block',
      margin: '15 0 15 0',
    }
    return (
      <PageWrapper>
        <Block wide="">
          <h1 style={{ textAlign: 'center' }}>
            <img src="/assets/seagull-logo.png" style={eyeCatcherStyle} />
            <p>
              Featherweight Zero-Config Typesafe Isomorphic Cloud Framework.
            </p>
          </h1>

          <Alert bsStyle="warning">
            <strong>This is an pre-alpha framework!</strong>
            <br />
            The project is under heavy development and APIs will change. Only
            use it for experimentational stuff right now.
          </Alert>

          <Jumbotron>
            <p className="lead">
              The Seagull Framework will empower you to build sophisticated web
              applications (leveraging pre-configured React) and deploy it
              straight to a highly scalable and cheap serverless infrastructure
              (AWS Lambda). Creating fullstack web applications on cloud scale
              have never been easier and faster!
            </p>
            <div>
              <Link className="btn btn-lg btn-primary" to={'/quickstart'}>
                Quickstart
              </Link>
              <Link className="btn btn-lg btn-default" to={'/guides'}>
                Guides
              </Link>
            </div>
          </Jumbotron>
        </Block>

        <Block wide="">
          <PageHeader>
            Core Features <small>Why use it?</small>
          </PageHeader>

          <Grid>
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
          </Grid>
        </Block>

        <Block wide="">
          <PageHeader>
            Building Blocks <small>What's inside?</small>
          </PageHeader>

          <InfoMedia title="Node.js" image="/assets/icon-nodejs.png">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </InfoMedia>

          <InfoMedia title="Typescript" image="/assets/icon-typescript.png">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </InfoMedia>

          <InfoMedia title="React" image="/assets/icon-react.png">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </InfoMedia>

          <InfoMedia title="Serverless" image="/assets/icon-serverless.png">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </InfoMedia>

          <InfoMedia title="Amazon Web Services" image="/assets/icon-aws.png">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </InfoMedia>
        </Block>
      </PageWrapper>
    )
  }
}
