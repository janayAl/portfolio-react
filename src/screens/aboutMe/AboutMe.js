import React from 'react'
import './aboutMe.css'
import IMG_0253_Original from '../../images/IMG_0253_Original.JPG'

function AboutMe() {
    return (
        <div className='about_container' id='about-me'>
            {/* create a div for the image container */}
            <div>
                <img src={IMG_0253_Original} alt="woman smiling" width="100" height="120" />
            </div>
            <div className="about_text">
                <h1>About Me</h1>
                <p>Hi! My name is Janay and I'm a full stack web developer student at Southern Methodist
                    Universtiy's Coding Bootcamp. I have completed several front-end and backend projects using
                    Javascript, HTML, CSS, and node.js. I'm also a teacher of students with visual impairments and
                    proud to say that
                    writing Braille in multiple languages is my superpower!
                    I have mastered the Art of making the classroom accessible for individuals with blindness or low
                    vision.
                    So now it's time for me to transition into a role that would allow me to make the web accessible
                    for them as well!</p>
            </div>
        </div>
    )
}

export default AboutMe
