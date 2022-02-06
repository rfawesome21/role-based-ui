import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PermissionProvider from '../context/PermissionProvider';
import RestrictPermissions from '../context/RestrictPermissions';
import { RootState } from '../store';
import {User} from '../Types/Permissions'

type Props = {};



const NavBar = (props: Props) => {


  const user = useSelector((state: RootState) => state.user.value)



  return (
    <PermissionProvider permissions={[user.role]}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">{user.role}</Nav.Link>
              <RestrictPermissions to='Client'>
                <Nav.Link href="#link">Link</Nav.Link>
              </RestrictPermissions>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <RestrictPermissions to='Admin'>
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </RestrictPermissions>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </PermissionProvider>
  )
}

export default NavBar;