import React from 'react';
import { Button, Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import {Link} from 'react-router-dom'

export default function Navibar() {
  return ( 
    <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='p-2'>
      <NavbarBrand>Bobrs</NavbarBrand>
      <NavbarToggle aria-controls='responsive-navbar-nav'></NavbarToggle>
      <NavbarCollapse id='responsive-navbar-nav'>
        <Nav className="me-auto">
          <NavLink as={Link} to="/">Home</NavLink>
          <NavLink as={Link} to="/users">Users</NavLink>
          <NavLink as={Link} to="/about">About</NavLink>
        </Nav>
        <Nav>
          <Button variant='primary' className='me-2'>Log in</Button>
          <Button variant='primary'>Sign out</Button>
        </Nav>
      </NavbarCollapse>
    </Navbar>
    </>
  )
}

