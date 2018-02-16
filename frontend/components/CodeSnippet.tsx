import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { okaidia as theme } from 'react-syntax-highlighter/styles/prism'

export default props => (
  <SyntaxHighlighter
    language={props.language || 'typescript'}
    style={theme}
    showLineNumbers={props.language !== 'bash'}
  >
    {props.code.trim()}
  </SyntaxHighlighter>
)
