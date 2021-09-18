import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
             <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/ViewStocks">
                    View Stocks
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/AddPortfolioStock">
                    Add Stocks Here
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>        
        </div>
    )
}

export default Navigation
