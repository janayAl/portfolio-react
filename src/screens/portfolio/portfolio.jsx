import React from 'react';
import './portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/Button';


function Portfolio() {
    return (
        <div className="portfolio_main_container" id="portfolio">
            <h1>Portfolio</h1>
            <p>Take a peek into my Github Repo!
                <a href="https://github.com/janayAl" target="blank" rel="noreferrer">https://github.com/janayAl</a>
            </p>
        </div>
    )
}

export default Portfolio
