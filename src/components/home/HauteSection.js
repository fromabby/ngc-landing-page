import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HauteSection = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="haute-section">
                    <Container fluid className="p-0">
                        <Row>
                            <Col>
                                <img src="./assets/logos/hautegang-logo.png" className="haute-icon" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <img src="./assets/icons/F-model.png" className="haute-icon-1" />
                                <img src="./assets/icons/M-model.png" className="haute-icon-1" />
                            </Col>
                            <Col md={6}>
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
    // <Container fluid className = "p-0" >
    //     <section id="second" className="gold">
    //         <svg className="separator" width="100%" height="120" viewBox="0.1 0.1 180 40" preserveAspectRatio="none">
    //             <g transform="translate(-18.298844,-77.973964)">
    //                 <path style={{ fill: "#d4810c" }} d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z" />
    //                 <path style={{ fill: "#060809" }} d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z" />
    //             </g>
    //         </svg>
    //         <div className="idea-section">
    //             <Row className="section-title what-we-do">

    //             </Row>
    //             <Row className="section-title">
    //                 <Col md={4}>
    //                     <img src='./assets/hautegang-logo.png' height='300px' />
    //                 </Col>
    //                 <Col md={8}>
    //                     <p>Once minted, the owner of a Haute Gang can get themselves verified in the NGC Discord Server. The Haute Gang Role gives access to its recipient a multitude of perks. Aside from being part of a Premiere Gang of Metaverse Explorers, it also gives them power to vote on certain parts of the NGC Organization, claim shop discounts from partners, and be part of events organized by NGC and its partners.</p>
    //                     <p><em>*A collector must have at least 1 Haute Gang in their collection to retain their membership in the gang.</em></p>
    //                 </Col>
    //             </Row>
    //         </div>
    //     </section>

    //         </Container >