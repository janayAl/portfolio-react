//snippet short cut rfce
import React from 'react'
import Typed from 'react-typed'
import './header.css'

function Header() {
    return (
        <div className="main-info">
            <h1>Who am I?</h1>
            {/* passes an array of whatever you want to type */}
            <Typed
                strings={[
                    'An Educator',
                    'A Developer',
                    'A Creative',
                    'A Student',
                    'An analyzer']}
                typeSpeed={40}
                backSpeed={50}

                loop
            />
        </div>
    )
}

export default Header
