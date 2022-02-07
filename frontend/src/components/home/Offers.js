import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Offers = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="offer-section">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <img src="./assets/Necklace.png" className="offer-icon"/>
                                <h1>Charity of Choice</h1>
                                <p>The team will pick a charity of its choosing to award a portion of the sales. The suggestions of the community will be greatly considered, especially the vote of the Haute Gang.</p>
                                <p>The allocated funds will be used every four cycles to be donated to the charity of choice. For full transparency, it will be documented in the NGC Discord Server.</p>
                            </Col>
                            <Col md={4}>
                                <img src="./assets/Earrings.png" className="offer-icon"/>
                                <h1>Community Fund</h1>
                                <p>NEAR Gang Couture thrives in a community of artists. It aims to help struggling and upstart artists in the space by giving them a “Blue Dot Cutie” moment where the fund personally purchases art from them, and helps promote it using its platform.</p>
                                <p>This will be managed by a fund manager who will also be responsible for awarding new artists .5N+ for them to start their wallet and be able to mint their art pieces as well.</p>
                            </Col>
                            <Col md={4}>
                                <img src="./assets/Female-Clothes.png" className="offer-icon"/>
                                <h1>Who we are</h1>
                                <p>Team</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
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
