import React, { useState } from 'react';
import './portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/Button';

//usign bootstrap
//line 18 and beyond creates an on click function using the info recorded in the model, this is jsx
function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({})
    const mapped = portfolioData.map((e, idx) => {
        return (
            <Card key={idx}>
                <Image
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech
                        })
                    }}

                    src={e.image} />

                //add the images with src before the closing image tag//
            //closing image tag for image in the jsx way//
            </Card>
        )
    })
    return (
        <div className="portfolio_main_container" id="portfolio">
            <h1>Portfolio</h1>
            <p>Take a peek into my Github Repo!
                <a href="https://github.com/janayAl" target="blank" rel="noreferrer">https://github.com/janayAl</a>
            </p>
            <Container fluid="lg" style={{ padding: '2rem 0' }}>
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio