import { Meta } from '@seagull/core'
import * as React from 'react'
import { withRouter } from 'react-router'
import Block from './Block'
import FooterNavigation from './FooterNavigation'
import HeaderNavigation from './HeaderNavigation'

export interface IProps {
  match: any
  location: any
  history: any
  children: any
}

const Wrapper = (props: IProps) => (
  <>
    <Meta title="Seagull">
      <link rel="stylesheet" href="/assets/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Meta>

    {props.location.pathname === '/' ? <></> : <HeaderNavigation />}
    <div className="">{props.children}</div>
    <FooterNavigation />
  </>
)

export default withRouter(Wrapper)
