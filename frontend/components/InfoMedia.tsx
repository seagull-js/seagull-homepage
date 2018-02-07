import * as React from 'react'
import { Panel, Media } from 'react-bootstrap'

export default ({ image, title, children }) => (
  <Panel>
    <Media>
      <Media.Left>
        <img width={64} height={64} src={image} />
      </Media.Left>
      <Media.Body>
        <Media.Heading>{title}</Media.Heading>
        <div>{children}</div>
      </Media.Body>
    </Media>
  </Panel>
)
