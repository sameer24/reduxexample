import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { searchText as SEARCHTEXT } from '../actions/postActions';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick(e) {
        e.preventDefault();
        const searchText = {
            params: {
                id: this.state.searchtext,
            }
        }
        this.props.SEARCHTEXT(searchText);
        alert("your form was submitted!" + this.state.searchtext);
    }
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" activeClassName="active"> Home </NavLink >
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <NavLink to="posts" activeClassName="active"> Posts </NavLink >
                    </NavItem>
                    <NavItem>
                        <NavLink to="postform" activeClassName="active"> Postform </NavLink >
                    </NavItem>
                    <NavItem>
                        <NavLink to="gridag" activeClassName="active"> Grid AG </NavLink >
                    </NavItem>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" name="searchtext" placeholder="Search" onChange={this.onChange} />
                        </FormGroup>{' '}
                        <Button type="submit" onClick={this.handleClick} >Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default connect(null, { SEARCHTEXT })(NavBar);