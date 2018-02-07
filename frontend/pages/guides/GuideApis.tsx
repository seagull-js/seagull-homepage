import * as React from 'react'
import { Page } from '@seagull-js/seagull'
import InfoMedia from '../../components/InfoMedia'
import { Panel, Media } from 'react-bootstrap'
import PageWrapper from '../../components/PageWrapper'

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

        <InfoMedia title="Heading" image="/assets/seagull-icon.png">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </InfoMedia>
      </PageWrapper>
    )
  }
}
