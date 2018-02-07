import * as React from 'react'
import HeaderNavigation from './HeaderNavigation'
import FooterNavigation from './FooterNavigation'

export default ({ children }) => (
  <>
    <HeaderNavigation />
    <div className="container">{children}</div>
    <FooterNavigation />
  </>
)
