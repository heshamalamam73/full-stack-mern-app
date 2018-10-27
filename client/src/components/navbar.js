import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
      this.setState({
          isOpen:!this.state.isOpen
      });
  }
  render() {

    return (
      
        <Navbar color="dark" dark expand="md" className='mb-5'> 
          <NavbarBrand href="/">momuzio-food</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add">Add food</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
export default Header;