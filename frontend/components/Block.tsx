import * as React from 'react'
import { style } from 'typestyle'

export default ({ wide, children }) => {
  const bsClass = wide ? '' : 'container'
  const gradientStyle = style({
    background:
      'linear-gradient(135deg,  #1e5799 0%,#2989d8 50%,#207cca 63%,#7db9e8 100%);',
    color: 'white',
  })
  const css = wide ? gradientStyle : ''
  return (
    <div className={bsClass}>
      <div className={css}>{children}</div>
    </div>
  )
}
