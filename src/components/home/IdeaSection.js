import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const IdeaSection = () => {
    return (
        <>
            <Container fluid className="p-0">
                <section id="second" className="gold">
                    <svg className="separator" width="100%" height="120" viewBox="0.1 0.1 180 40" preserveAspectRatio="none">
                        <g transform="translate(-18.298844,-77.973964)">
                            <path style={{ fill: "#d4810c" }} d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z" />
                            <path style={{ fill: "#060809" }} d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z" />
                        </g>
                    </svg>
                    <div className="idea-section">
                        <Row className="section-title what-we-do">
                            <h2 className="highlight white">what we do</h2>
                        </Row>
                        <Row className="section-title">
                            <Col md={6}>
                                <p>The Idea behind the project is to give back the reign to the buyer on what avatar they’ll use for the Metaverse. Like in character creation programs and RPGs, the buyer can choose the attributes they want from a catalog of clothes and accessories. The buyer also has a choice of different avatars that they can buy from the collection in Paras.</p>
                        
                            </Col>
                            <Col md={6}>
                                <p>
                                    After procuring an avatar and at least 3 accessories, the buyer can submit a ticket in the NGC Discord server to merge their assets into one Haute Gang Picture. The team will work on a maximum of 50 a week merges that will be based on the ticket queue, and then transfer the minted Haute Gang to its respective owner.</p>
                            </Col>
                        </Row>
                    </div>
                </section>

            </Container>
        </>
    )
}

export default IdeaSection

// Idea:
// The Idea behind the project is to give back the reign to the buyer on what avatar they’ll use for the Metaverse. Like in character creation programs and RPGs, the buyer can choose the attributes they want from a catalog of clothes and accessories. The buyer also has a choice of 10 different base models that they can buy from the collection.

// After procuring a base model and accessories, the buyer can submit a ticket in the NGC Discord server to merge their assets into one Haute Gang Picture. The team will work on a maximum of 50 a week merges that will be based on the ticket queue, and then transfer the minted Haute Gang to its respective owner.
