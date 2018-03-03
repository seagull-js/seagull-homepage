import { Body, Favicons, Head } from '@seagull/core'
import * as React from 'react'
import {} from 'react-bootstrap'
// this is what your index.html looks like
export default function Layout({ content }) {
  return (
    <html>
      <Head>
        <Favicons favicons={['favicon.ico']} />
        <link rel="stylesheet" href="/assets/bootstrap.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body renderedContent={content}>
        <script src="/assets/bundle.js" />
      </Body>
    </html>
  )
}
