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
import {logout, isAuthenticated, getName } from '../helper/jwt';
import {withRouter} from 'react-router-dom'

class AppNavbar extends Component{
    state = {
        isOpen:false
    };

    logoutUser = () =>{
        logout();
        this.props.history.push('/login');
    }
      
    toogle = ()=>{
        this.setState({
            isOpen : !this.state.isOpen
        });
    };

    render(){
        var authLink;

        if(isAuthenticated()){
        authLink =(  
          <Fragment>
            <NavItem>
                <NavLink href="#" onClick={()=>{ this.logoutUser();}}>Logout</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-white small mt-1">Welcome {getName()}</NavLink>
            </NavItem>
          </Fragment>
          );
        }
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
                                    <NavLink  href="/order">Orders</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/setting">Setting</NavLink>
                                </NavItem>
                                {authLink}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(AppNavbar);