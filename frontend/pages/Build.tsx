import { Meta, Page } from '@seagull/core'
import { Block, H1, H2, H3, Text } from '@seagull/ui'
import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import CodeSnippet from '../components/CodeSnippet'
import InfoMedia from '../components/InfoMedia'
import PageWrapper from '../components/PageWrapper'

const codeInstallOSX = `
# If you haven't already, install the node version manager:
$ brew install nvm

# reload current shell with tweaked environment for nvm:
$ echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile

# latest LTS version which AWS Lambda supports:
$ nvm install 6.10.3

# always use this node.js version as default in new shells:
$ nvm alias default 6.10.3

# install the seagull CLI:
$ npm install -g @seagull/cli
`

export default class Build extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/build'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Meta title="Build | The Seagull Framework" description={''} />

        <div
          style={{
            background: 'url("/assets/content/coding-freedom.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Block>
            <H1 inverse>Build</H1>
            <Text inverse lead>
              Hit the ground running with the Seagull CLI, which creates a
              pre-configured React app with a serverless backend architecture
              and instant deployment to your AWS account. There is only one
              programming language to know: Typescript.
            </Text>
          </Block>
        </div>

        <Block>
          <H2>Getting started</H2>

          <Row>
            <Col xs={12} md={6}>
              <Text lead>Seagull requires node.js version 6 (LTS)</Text>
              <Text>
                AWS Lambda currently only supports node.js version 6, so seagull
                enforces this version, too. In terms of possible cross-cloud
                support, the only language <em>every</em> cloud provider
                supports is: Javascript.
              </Text>
              <Text>
                Here are the steps for installing node.js and the CLI for Mac
                OS:
              </Text>
            </Col>
            <Col xs={12} md={6}>
              <CodeSnippet language="bash" code={codeInstallOSX} />
            </Col>
          </Row>
        </Block>

        <Block>
          <H2>Serverless Infrastructure</H2>
          <Text lead>
            The true power of seagull unfolds when you deploy your app. The CLI
            will compile your code into a <em>featherweight</em> bundle and
            leverages the serverless framework to orchestrate the deployment
            process.
          </Text>

          <Row>
            <Col xs={12}>
              <InfoMedia
                title="CloudFormation"
                image="/assets/logos/cloudformation.png"
                link="https://aws.amazon.com/cloudformation/"
              >
                infrastructure-as-code, immutable infrastructure, cloud
                orchestration
              </InfoMedia>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <InfoMedia
                title="CloudFront"
                image="/assets/logos/cloudfront.png"
                link="https://aws.amazon.com/de/cloudfront/"
              >
                cdn, caching, request pooling, traffic splitting
              </InfoMedia>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <InfoMedia
                title="API Gateway"
                image="/assets/logos/api-gateway.png"
                link="https://aws.amazon.com/api-gateway/"
              >
                serverside routing, rate limiting, access control
              </InfoMedia>
            </Col>
            <Col xs={12} md={6}>
              <InfoMedia
                title="S3"
                image="/assets/logos/s3.png"
                link="https://aws.amazon.com/de/s3/"
              >
                file storage (unlimited), assets, frontend code
              </InfoMedia>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <InfoMedia
                title="Lambda"
                image="/assets/logos/lambda.png"
                link="https://aws.amazon.com/de/lambda/"
              >
                nano-services, parallelism, javascript, ssr
              </InfoMedia>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <InfoMedia
                title="React Router"
                image="/assets/logos/react-router.png"
                link="https://reacttraining.com/react-router/"
              >
                JSX components, routing, mobx, pages
              </InfoMedia>
            </Col>

            <Col xs={12} md={4}>
              <InfoMedia
                title="CloudWatch"
                image="/assets/logos/cloudwatch.png"
                link="https://aws.amazon.com/cloudwatch/"
              >
                document database, autoscale, flexible
              </InfoMedia>
            </Col>

            <Col xs={12} md={4}>
              <InfoMedia
                title="DynamoDB"
                image="/assets/logos/dynamodb.png"
                link="https://aws.amazon.com/de/dynamodb/"
              >
                document database, autoscale, flexible
              </InfoMedia>
            </Col>
          </Row>
        </Block>
      </PageWrapper>
    )
  }
}
