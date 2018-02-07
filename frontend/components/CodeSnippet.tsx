import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { dark } from 'react-syntax-highlighter/styles/prism'

export default ({ code }) => (
  <SyntaxHighlighter language="typescript" style={dark}>
    {code}
  </SyntaxHighlighter>
)
