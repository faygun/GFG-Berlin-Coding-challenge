import React, {Component, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container } from 'reactstrap';

class AppNavbar extends Component{
    state = {
        isOpen:false
    };

    toogle = ()=>{
        this.setState({
            isOpen : !this.state.isOpen
        });
    };

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">E Commerse Admin</NavbarBrand>
                        <NavbarToggler onClick={this.toogle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/product">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/order">Orders</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/setting">Setting</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;