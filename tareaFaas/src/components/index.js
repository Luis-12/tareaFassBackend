
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

export default  _ =>{
    return(
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tutorial6</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/artistas">Artistas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pinturas">Pinturas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/museos">Museos</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
}