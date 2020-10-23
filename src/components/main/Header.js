import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <Navbar bg='black' variant='dark' expand='lg' collapseOnSelect style={{boxShadow: '-2px 17px 20px -13px rgba(79,74,230,1)'}} >
        <Container fluid>
          
            <Navbar.Brand style={{color:'rgba(79,74,230,1)'}}><strong>NewsAI</strong></Navbar.Brand>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {/* <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              
              
                <Nav.Link>
                  <i className='fas fa-user pr-1'></i>Mridul Khurana
                </Nav.Link>
              
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
