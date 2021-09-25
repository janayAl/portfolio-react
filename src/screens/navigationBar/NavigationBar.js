import React from 'react'
import './navigation.css'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { navigationLinks } from '../../helpers/navigationLinks'

//create a function for your nav links. pass through an element and index
//e.name is from the objects created in the nav links file
//render this inside the collapse
function createLinks() {
    return navigationLinks.map((e, idx) => ( //idx stands for index
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link> //ref because this is what we called it in the navlinks file
    ))
}

function NavigationBar() {
    return (
        <div id="home">
            {/* use expand =md (medium)to collapse the navbar */}
            <Navbar className="navigation_container" expand="md">
                <Navbar.Brand href="#home">JANAY A.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    {/* use the helper to create links with the name of each name from the nav links */}
                    <Nav>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
