import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Offers = () => {
    return (
        <>
            <Container fluid className="p-0">
                <section id="third">
                    <svg className="separator" xmlns="http://www.w3.org/2000/svg" width="100%" height="140" viewBox="0.5 0.2 176 30" preserveAspectRatio="none" style={{ zIndex: "0" }}>
                        <g transform="translate(-13.668562,-111.38266)">
                            <path style={{ fill: "#FF9601" }} d="M 13.898015,111.51495 H 190.83044 v 26.19241 l -45.97036,-14.43255 -42.22858,7.48354 -45.970361,-14.96709 -31.003265,16.03617 z" />
                        </g>
                    </svg>
                    <div className="offer-section section-title">
                        <Container style={{ color: 'white', marginTop: '-30px', zIndex: '1' }}>
                            <Row>
                                <Col md={6} style={{ marginBottom: '50px' }}>
                                    <img src="./assets/icons/Charity.png" className="offer-icon" />
                                    <h1 className="highlight gold">charity of choice</h1>
                                    <p className='pt-6'>The team will pick a charity of its choosing to award a portion of the sales. The suggestions of the community will be greatly considered, especially the vote of the Haute Gang.
                                    </p><p>
                                        The allocated funds will be used every four cycles to be donated to the charity of choice. For full transparency, it will be documented in the NGC Discord Server.</p>
                                </Col>
                                <Col md={6} style={{ marginBottom: '50px' }}>
                                    <img src="./assets/icons/Fund.png" className="offer-icon" />
                                    <h1 className="highlight gold">community fund</h1>
                                    <p className='pt-4'>NEAR Gang Couture thrives in a community of artists. It aims to help struggling and upstart artists in the space by giving them a “Blue Dot Cutie” moment where the fund personally purchases art from them, and helps promote it using its platform.
                                    </p><p>
                                        This will be managed by a fund manager who will also be responsible for awarding new artists .5N+ for them to start their wallet and be able to mint their art pieces as well.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </Container>
        </>

    )
}

export default Offers



// Charity of Choice:
// The team will pick a charity of its choosing to award a portion of the sales. The suggestions of the community will be greatly considered, especially the vote of the Haute Gang.

// The allocated funds will be used every four cycles to be donated to the charity of choice. For full transparency, it will be documented in the NGC Discord Server.

// Community Fund:
// NEAR Gang Couture thrives in a community of artists. It aims to help struggling and upstart artists in the space by giving them a “Blue Dot Cutie” moment where the fund personally purchases art from them, and helps promote it using its platform.

// This will be managed by a fund manager who will also be responsible for awarding new artists .5N+ for them to start their wallet and be able to mint their art pieces as well.
