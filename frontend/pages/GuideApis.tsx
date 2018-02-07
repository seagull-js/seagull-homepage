import * as React from 'react'
import { Page } from '@seagull-js/seagull'
import InfoMedia from '../components/InfoMedia'
import { Media, PageHeader } from 'react-bootstrap'
import PageWrapper from '../components/PageWrapper'

export default class GuideApis extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/guides/apis'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <h1>Building APIs</h1>

        <InfoMedia
          title="Futuristic Backend Technology"
          image="/assets/seagull-icon.png"
        >
          Seagull provides you with a truly simple building block for building
          backend systems: <strong>API Classes</strong>. They are really easy to
          use and will transform into massively scalable nano-services, running
          as <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> functions.
          This allows you to skip configuring server instances, monitoring load
          or calculating fixed monthly costs.
        </InfoMedia>

        <p>
          This Guide will ... Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto quasi quibusdam officiis ratione impedit nihil tenetur
          recusandae voluptas voluptatum, odit possimus dicta, vel nobis soluta
          fugiat non atque dignissimos aperiam.
        </p>

        <PageHeader>
          Scaffolding API Classes <small>with the CLI</small>
        </PageHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
          voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
          dignissimos aperiam.
        </p>

        <PageHeader>
          Mounting API Classes <small>to URL endpoints</small>
        </PageHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
          voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
          dignissimos aperiam.
        </p>

        <PageHeader>
          Access Parameters <small>from Requests</small>
        </PageHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
          voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
          dignissimos aperiam.
        </p>

        <PageHeader>
          Format Responses <small>and return them</small>
        </PageHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
          voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
          dignissimos aperiam.
        </p>

        <PageHeader>
          Schedule Tasks <small>like cronjobs</small>
        </PageHeader>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
          voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
          dignissimos aperiam.
        </p>
      </PageWrapper>
    )
  }
}
