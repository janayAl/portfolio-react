import React from 'react'
import './contact.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}>{e.name}</p>
    ))
}
function Contact() {
    return (
        <div>
            <div>
                <div>
                    Janay Allen
                    <div>

                    </div>
                    {createLinks()}
                </div>
            </div>
            <div>Date</div>
        </div>
    )
}


export default contact
