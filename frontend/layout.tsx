import * as React from "react";
import {} from "react-bootstrap";
import HeaderNavigation from './components/HeaderNavigation'

// this is what your index.html looks like
export default function Layout({ children }) {
  return <html>
      <head>
        <title>seagull-homepage</title>
        <link rel="stylesheet" href="/assets/bootstrap.min.css" />
      </head>
      <body>
        <HeaderNavigation />
        <div id="root" className="container">
          {children}
        </div>
        <script src="/assets/bundle.js" />
      </body>
    </html>;
}
