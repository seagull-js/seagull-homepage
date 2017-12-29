import { Page } from "@seagull-js/seagull";
import * as React from "react";
import { Button, Jumbotron } from "react-bootstrap";

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = "/";

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Seagull Framework Logo</h1>
          <p>Featherweight Zero-Config Typesafe Isomorphic Cloud Framework.</p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
            <Button bsStyle="default">Quickstart</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
