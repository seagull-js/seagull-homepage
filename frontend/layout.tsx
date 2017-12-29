import * as React from "react";
import {} from "react-bootstrap";

// this is what your index.html looks like
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>seagull-homepage</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
        />
      </head>
      <body>
        <div id="root" className="container">
          {children}
        </div>
        <script src="/assets/bundle.js" />
      </body>
    </html>
  );
}
