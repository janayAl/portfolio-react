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
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({})

    // function createModal(data) {
    //     return (
    //         <Modal
    //             show={modalShow}
    //             onHide={() => setModalShow(false)}
    //             size="lg"
    //             arial-labelledby="container-modal-title-vcenter"
    //             centered
    //         >
    //             <Modal.Header>
    //                 <Modal.Title id="container-modal-title-vcenter">
    //                     {data.title}
    //                 </Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <p>{data.summary}</p>
    //                 <Image src={data.image} style={{ width: '200px' }} />
    //             </Modal.Body>
    //             <a id="portfolio_modal_link" href={data.link} target="blank" rel="noreferrer">Visit Site</a>
    //             <Modal.Footer>
    //                 <div>Technologies used: </div>
    //                 <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
    //                 <Button onClick={() => setModalShow(false)}>Close</Button>
    //             </Modal.Footer>
    //         </Modal >
    //     )

    // }

    const mapped = portfolioData.map((e, idx) => {
        return (
            <Card key={idx} id="portfolio_card_container">

                <Image className="portfolio_image"
                    // onClick={() => {
                    //     setTempData({
                    //         image: e.image,
                    //         link: e.link,
                    //         title: e.title,
                    //         summary: e.summary,
                    //         tech: e.tech
                    //     })
                    //     setModalShow(true)
                    // }}
                    src={e.image} />
                {e.title} {e.summary} {e.tech}

                <div className="portfolio_click_info" id="portfolio"></div>

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
                {/* //render the imaves here, since the images are wrapped in the mapped const you render it here in jsx// */}
                <Row>
                    {mapped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
