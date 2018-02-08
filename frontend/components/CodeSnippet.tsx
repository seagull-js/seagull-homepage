import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { okaidia as theme } from 'react-syntax-highlighter/styles/prism'

export default ({ code }) => (
  <SyntaxHighlighter language="typescript" style={theme}>
    {code}
  </SyntaxHighlighter>
)
