import { Page } from "@seagull-js/seagull";
import * as React from "react";
import {
  Alert,
  Button,
  Col,
  Grid,
  Jumbotron,
  PageHeader,
  Panel,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderNavigation from "../components/HeaderNavigation";
import InfoPanel from "../components/InfoPanel";

// the (stateful) component for the page with type checking
export default class HelloPage extends Page<{}, {}> {
  path = "/";

  render() {
    const eyeCatcherStyle = {
      maxWidth: "100%",
      display: "block",
      margin: "15 0 15 0"
    };
    return (
      <div>
        <HeaderNavigation />
        <div className="container">
          <h1 style={{ textAlign: "center" }}>
            <img src="/assets/seagull-logo.png" style={eyeCatcherStyle} />
            <p>
              Featherweight Zero-Config Typesafe Isomorphic Cloud Framework.
            </p>
          </h1>

          <Alert bsStyle="warning">
            <strong>This is an pre-alpha framework!</strong>
            <br />
            The project is under heavy development and APIs will change. Only
            use it for experimentational stuff right now.
          </Alert>

          <Jumbotron>
            <p className="lead">
              The Seagull Framework will empower you to build sophisticated web
              applications (leveraging pre-configured React) and deploy it
              straight to a highly scalable and cheap serverless infrastructure
              (AWS Lambda). Creating fullstack web applications on cloud scale
              have never been easier and faster!
            </p>
            <div>
              <Link className="btn btn-lg btn-primary" to={"/quickstart"}>
                Quickstart
              </Link>
              <Link className="btn btn-lg btn-default" to={"/guides"}>
                Guides
              </Link>
            </div>
          </Jumbotron>

          <PageHeader>
            Core Features &nbsp;
            <small>Why use it?</small>
          </PageHeader>

          <p className="hidden">
            The following buzzwords describe the framework and should give you
            an idea of the functionalities:
          </p>

          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Featherweight">
                  Enjoy a <strong>tiny codebase</strong> for your app as well as{" "}
                  <strong>lightweight deployment bundles</strong> and a{" "}
                  <strong>small learning curve</strong>.
                </InfoPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Zero-Config">
                  <strong>No configuration hell</strong>, thanks to a
                  <strong>dedicated CLI tool</strong> which manages the
                  development workflows in the spirit of{" "}
                  <strong>Convention over Configuration</strong>.
                </InfoPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Typesafe">
                  Seagull leverages <strong>Typescript</strong> extensively to
                  make <strong>features discoverable</strong> and introduce a{" "}
                  <strong>safety layer</strong> back into fullstack web
                  development.
                </InfoPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Isomorphic">
                  Built ontop of the <strong>Javascript ecosystem</strong> and
                  embracing <strong>write once - run everywhere</strong>,
                  extending the boundaries of{" "}
                  <strong>don't repeat yourself</strong>.
                </InfoPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Cloud">
                  Your deployed app will run on a{" "}
                  <strong>clean serverless architecture</strong>, resulting in{" "}
                  <strong>minimal maintenance costs</strong> and{" "}
                  <strong>maximal scalability</strong>.
                </InfoPanel>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <InfoPanel title="Framework">
                  Seagull comes with <strong>batteries included</strong> for
                  building interactive <strong>fullstack web apps</strong>,
                  including features like{" "}
                  <strong>ORM, SSR, caching and CDN</strong>.
                </InfoPanel>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
