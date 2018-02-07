import * as React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => (
  <div style={{ background: '#222', color: 'white' }}>
    <div className="container" style={{ padding: 20 }}>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6} md={3}>
            <h4>
              <Link to={'/'}>Introduction</Link>
            </h4>
            <ul>
              <li>
                <Link to={'/quickstart'}>Quickstart</Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h4>Guides</h4>
            <ul>
              <li>
                <Link to={'/guides/apis'}>Building APIs</Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h4>CLI Reference</h4>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <h4>Community</h4>
            <ul>
              <li>
                <Link to={'https://github.com/seagull-js'}>Github</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)
