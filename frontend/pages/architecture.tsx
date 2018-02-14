import * as React from 'react'
import { Page } from '@seagull/core'
import { Jumbotron, PageHeader } from 'react-bootstrap'
import PageWrapper from '../components/PageWrapper'
import Block from '../components/Block'

export default class architecture extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/architecture'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Block wide="">
          <Jumbotron>
            <h1>Architecture</h1>
            <p>
              Optimally configured serverless cloud architecture out-of-the-box.
              Seagull leverages battle-tested services from AWS as you need
              them.
            </p>
          </Jumbotron>
        </Block>

        <Block wide="">
          <p>cloudformation (via serverless)</p>
        </Block>

        <Block wide="">
          <p>cloudfront</p>
          <p>api gateway | s3 assets</p>
          <p>aws lambda</p>
          <p>external services | dynamodb | spa/react-router</p>
        </Block>

        <Block wide="">
          <p>cloudfront: cdn, caching, request pooling, traffic splitting</p>
        </Block>

        <Block wide="">
          <p>api gateway: serverside routing, rate limiting, access control</p>
        </Block>

        <Block wide="">
          <p>s3: file storage (unlimited)</p>
        </Block>

        <Block wide="">
          <p>aws lambda: nano-services, parallelism, javascript, ssr</p>
        </Block>

        <Block wide="">
          <p>dynamodb: document database, autoscale, flexible</p>
        </Block>

        <Block wide="">
          <p>react: JSX components, routing, mobx, pages</p>
        </Block>
      </PageWrapper>
    )
  }
}
