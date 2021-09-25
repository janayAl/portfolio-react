import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { navigationLinks } from '../../helpers/navigationLinks'

function NavigationBar() {
    return (
        <div id="home">
            <Navbar>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavigationBar
