import { Page } from "@seagull-js/seagull";
import * as React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from 'react-router-dom'
import HeaderNavigation from "../components/HeaderNavigation";

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = "/";

  render() {
    const eyeCatcherStyle = {
      maxWidth: '100%',
      display: 'block',
      margin: '15 0 15 0'
    }
    return <div>
      <HeaderNavigation />
      <div className="container">
        <img src="/assets/seagull-logo.png" style={eyeCatcherStyle} />
        <Jumbotron>
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
      </div>
    </div>
  }
}
