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
              <Link className="btn btn-lg btn-primary" to={"/introduction"}>
                Introduction
              </Link>
              <Link className="btn btn-lg btn-default" to={"/quickstart"}>
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
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>
                      Featherweight
                    </h3>
                  </div>
                  <div className="panel-body">
                    <p>
                      You don't have to know the knitty-gritty details of how a
                      serverless function handler must be defined, or how a
                      react frontend wires up routing. If you know some React
                      and Typescript that's all you need to get started
                      immediately. Your application code base will be tiny
                      compared with the overhead and ceremony of other
                      frameworks yet very powerful. The Core of the framework is
                      also as small as possible, with heavy tooling outsourced
                      into a dedicated CLI companion tool.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>Zero-Config</h3>
                  </div>
                  <div className="panel-body">
                    <p>
                      Install the Seagull-CLI on your machine and you're ready
                      to go. The CLI also handles setting up Apps for you,
                      bootstraps a development server, scaffolds code and deals
                      with deployment processes for you. It brings back the{" "}
                      <em>Convention-over-Configuration</em> mindset into the
                      javascript world, so you just have to place stuff in
                      specific places and implement some given APIs and
                      everything else is taken care of for you.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>Typesafe</h3>
                  </div>
                  <div className="panel-body">
                    <p>
                      The framework and tooling is not only completely tested
                      following TDD, but also written in Typescript all the way
                      down. Literally everything you face is thoroughly typed.
                    </p>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>Isomorphic</h3>
                  </div>
                  <div className="panel-body">
                    <p>stuff</p>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>Cloud</h3>
                  </div>
                  <div className="panel-body">
                    <p>stuff</p>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 style={{ color: "white", margin: "0" }}>Framework</h3>
                  </div>
                  <div className="panel-body">
                    <p>stuff</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
