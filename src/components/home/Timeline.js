import './roadmap.css'
import { Container } from 'react-bootstrap'

const Timeline = () => {

    return (
        <>
            <Container fluid className="p-0" >
                <div className="roadmap">
                    <h3 className="roadmap-heading highlight white0"><span>short-term timeline</span></h3>
                    <div className="roadmap-container">
                        <div className="timeline-block timeline-block-right">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>January 2022</h3>
                                <p>Inception of Idea<br />
                                    Creation of Base Assets<br />
                                    Securing Core Team

                                </p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>February 2022</h3>
                                <p>Discord Launch<br />
                                    Twitter Launch<br />
                                    Creation of Peripheral Assets<br />
                                    Securing Partners<br />
                                    White Paper Reveal<br />
                                    Art Reveal<br />
                                    Giveaways and Promotions<br />
                                    Whitelisting Process

                                </p>
                            </div>
                        </div>

                        <div className="timeline-block timeline-block-right">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>March 2022</h3>
                                <p>Lore Drop<br />
                                    Whitelist Genesis Auction<br />
                                    Genesis Gacha Drop<br />
                                    Cycle 1 of Merging Start

                                </p>
                            </div>
                        </div>
                        <div className="timeline-block timeline-block-left">
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <h3>April 2022</h3>
                                <p>
                                    Big Asset Giveaway<br />
                                    Community Auction<br />
                                    Charity Drive Launch<br />
                                    2 Cycle Pause on Merging
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Timeline