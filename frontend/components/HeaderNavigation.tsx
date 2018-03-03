import * as React from 'react'
import { Link } from 'react-router-dom'
import Block from './Block'

export default () => (
  <Block>
    <div style={{ textAlign: 'center' }}>
      <Link to="/">
        <img src="/assets/seagull-logo.png" style={{ height: 64 }} />
      </Link>
    </div>
  </Block>
)
