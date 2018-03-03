import * as React from 'react'
import { style } from 'typestyle'

export interface IProps {
  wide?: any
  children: any
}

export default (props: IProps) => {
  const bsClass = props.wide ? '' : 'container'
  const gradientStyle = style({
    background:
      'linear-gradient(135deg,  #1e5799 0%,#2989d8 50%,#207cca 63%,#7db9e8 100%);',
    color: 'white',
    padding: '20px 0',
  })
  const css = props.wide ? gradientStyle : ''
  return (
    <div className={bsClass} style={{ marginTop: 15, marginBottom: 15 }}>
      <div className={css}>{props.children}</div>
    </div>
  )
}
