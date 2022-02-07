import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HauteSection = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="haute-section">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <img src="./assets/hautegang-logo.png" className="haute-icon" />
                            </Col>
                            <Col md={8}>
                                <h3>haute gang collection</h3>
                                <p>Once minted, the owner of a Haute Gang can get themselves verified in the NGC Discord Server. The Haute Gang Role gives access to its recipient a multitude of perks. Aside from being part of a Premiere Gang of Metaverse Explorers, it also gives them power to vote on certain parts of the NGC Organization, claim shop discounts from partners, and be part of events organized by NGC and its partners.</p>
                                <p><em>*A collector must have at least 1 Haute Gang in their collection to retain their membership in the gang.</em></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default HauteSection

// Haute Gang:
// Once minted, the owner of a Haute Gang can get themselves verified in the NGC Discord Server. The Haute Gang Role gives access to its recipient a multitude of perks. Aside from being part of a Premiere Gang of Metaverse Explorers, it also gives them power to vote on certain parts of the NGC Organization, claim shop discounts from partners, and be part of events organized by NGC and its partners.

// A collector must have at least 1 Haute Gang in their collection to retain their membership in the gang.
