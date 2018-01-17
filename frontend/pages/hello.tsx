import { Page } from "@seagull-js/seagull";
import * as React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from 'react-router-dom'

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = "/";

  render() {
    return <div>
        <Jumbotron>
          <h1>Seagull Framework Logo</h1>
          <p>
            Featherweight Zero-Config Typesafe Isomorphic Cloud Framework.
          </p>
          <p>
            <Link className="btn btn-primary" to={"/introduction"}>
              Introduction
            </Link>
            <Link className="btn btn-default" to={"/quickstart"}>
              Quickstart
            </Link>
            <Link className="btn btn-default" to={"/features"}>
              Features
            </Link>
          </p>
        </Jumbotron>
      </div>;
  }
}
