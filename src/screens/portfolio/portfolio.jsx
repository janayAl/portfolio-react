import React, { useState } from 'react';
import './portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// usign bootstrap
// line 18 and beyond creates an on click function using the info recorded in the model, this is jsx
function Portfolio() {
    // const [modalShow, setModalShow] = useState(false);
    // const [tempData, setTempData] = useState({})


    const mapped = portfolioData.map((e, idx) => {
        return (
            <Card key={idx} id="portfolio_card_container">

                <Image className="portfolio_image"

                    src={e.image} />
                {e.title} {e.summary} {e.tech} {e.link}


            </Card>

        )
    });
    // < div id="content2" >
    //     <p id="worksection1">Password Generator</p>
    //     <a href="https://janayal.github.io/passwordgenerator/">
    //         <img src="../images/projectsicon/NoteTakerApp.png" onClick /></a>

    // </div >


    return (
        <div className="portfolio_main_container" id="portfolio">
            <h1>Portfolio</h1>
            <p>Take a peek into my Github Repo!
                <a href="https://github.com/janayAl" target="blank" rel="noreferrer">https://github.com/janayAl</a>
            </p>
            <Container fluid="lg" style={{ padding: '2rem 0' }}>
                {/* //render the imaves here, since the images are wrapped in the mapped const you render it here in jsx// */}
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
