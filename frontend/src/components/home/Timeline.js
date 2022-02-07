import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const Timeline = () => {

    return (
        <>
            <div className="timeline-section">
                <h3 style={{ color: '#fff', textAlign: 'center' }}>short-term timeline</h3>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            height="400px"
                            width="500px"
                            src={`./assets/black.jpeg`}
                        />
                        <Carousel.Caption>
                            <h3>January 2022</h3>
                            <p>
                                Inception of Idea<br />
                                    Creation of Base Assets<br />
                                    Securing Core Team
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            height="400px"
                            width="500px"
                            src={`./assets/black.jpeg`}
                        />
                        <Carousel.Caption>
                            <h3>February 2022</h3>
                            <p>
                                Discord Launch<br />
                                    Twitter Launch<br />
                                    Creation of Peripheral Assets<br />
                                    Securing Partners<br />
                                    White Paper Reveal<br />
                                    Art Reveal<br />
                                    Giveaways and Promotions<br />
                                    Whitelisting Process
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="400px"
                            width="500px"
                            src={`./assets/black.jpeg`}
                        />
                        <Carousel.Caption>
                            <h3>March 2022</h3>
                            <p>
                                Whitelist Genesis Auction<br />
                                    Genesis Drop<br />
                                    Cycle 1 of Merging Start
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            height="400px"
                            width="500px"
                            src={`./assets/black.jpeg`}
                        />
                        <Carousel.Caption>
                            <h3>April 2022</h3>
                            <p>
                                Big Asset Giveaway<br />
                                    Community Auction<br />
                                    Charity Drive Launch<br />
                                    2 Cycle Pause on Merging
                                </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Timeline

// Short-term Timeline:

// January 2022
// Inception of Idea
// Creation of Base Assets
// Securing Core Team

// February 2022
// Discord Launch
// Twitter Launch
// Creation of Peripheral Assets
// Securing Partners
// White Paper Reveal
// Art Reveal
// Giveaways and Promotions
// Whitelisting Process

// March 2022
// Whitelist Genesis Auction
// Genesis Drop
// Cycle 1 of Merging Start

// April 2022
// Big Asset Giveaway
// Community Auction
// Charity Drive Launch
// 2 Cycle Pause on Merging
