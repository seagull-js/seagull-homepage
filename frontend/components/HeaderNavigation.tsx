import * as React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default () => (
  <Navbar inverse collapseOnSelect style={{ borderRadius: 0 }}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={"/"}>The Seagull Framework</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/quickstart">
          Quickstart
        </NavItem>
        <NavDropdown eventKey={2} title="Guides" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
