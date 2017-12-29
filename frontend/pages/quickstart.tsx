import { Page } from "@seagull-js/seagull";
import * as React from "react";
import { Jumbotron, PageHeader, Tab, Tabs } from "react-bootstrap";

// the (stateful) component for the page with type checking
export default class QuickstartPage extends Page<{}, {}> {
  path = "/quickstart";

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Quickstart</h1>
          <p>Featherweight Zero-Config Typesafe Isomorphic Cloud Framework.</p>
        </Jumbotron>
        <PageHeader>
          Seagull Quickstart &nbsp;
          <small>From Zero to Cloud</small>
        </PageHeader>
        <Tabs defaultActiveKey={1} id="quickstart-setup">
          <Tab eventKey={1} title="Mac OS">
            <p>If you haven't already, install the node version manager:</p>
            <pre>$ brew install nvm</pre>
            <p>reload current shell with tweaked environment for nvm</p>
            <pre>$ echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile</pre>
            <p>latest LTS version which AWS Lambda supports</p>
            <pre>$ nvm install 6.10.3</pre>
            <p># always use this node.js version as default in new shells</p>
            <pre>$ nvm alias default 6.10.3</pre>
          </Tab>
          <Tab eventKey={2} title="Windows">
            ToDo
          </Tab>
          <Tab eventKey={3} title="Linux" disabled>
            ToDo
          </Tab>
        </Tabs>

        <PageHeader>
          Seagull Quickstart &nbsp;
          <small>From Zero to Cloud</small>
        </PageHeader>
      </div>
    );
  }
}
