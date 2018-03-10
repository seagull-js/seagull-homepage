import { Text } from '@seagull/ui'
import * as React from 'react'
import { Media, Panel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const withLink = ({ image, title, link, children }) => (
  <Media>
    <Media.Left>
      <Link to={link} target="_blank">
        <img width={64} height={64} src={image} />
      </Link>
    </Media.Left>
    <Media.Body>
      <Link to={link} target="_blank">
        <Media.Heading>{title}</Media.Heading>
      </Link>
      <div style={{ color: 'black' }}>
        <Text>{children}</Text>
      </div>
    </Media.Body>
  </Media>
)

const withoutLink = ({ image, title, children }) => (
  <Media>
    <Media.Left>
      <img width={64} height={64} src={image} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>{title}</Media.Heading>
      <div style={{ color: 'black' }}>
        <Text>{children}</Text>
      </div>
    </Media.Body>
  </Media>
)

export interface IProps {
  image: string
  title: string
  link?: string
  children: any
}

export default (props: IProps) => (
  <Panel>{props.link ? withLink(props as any) : withoutLink(props)}</Panel>
)
