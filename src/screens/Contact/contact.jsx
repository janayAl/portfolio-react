import React from 'react'
import './contact.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}
function contact() {
    return (
        <div id="contact">
            <div>
                <div>
                    <p>Janay Allen</p>
                    <p>janaythedeveloper@gmail.com</p>
                    <p>Contact Me for serious inquiries.</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div>Copyright&copy;</div>
        </div>
    )
}


export default contact
