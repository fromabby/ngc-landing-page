import React from 'react'
import { Container } from 'react-bootstrap'
import './phases.css'

const Roadmap = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="phases-section">
                    <h3 style={{ color: '#fff', textAlign: 'center' }} className="highlight purple pb-0 mb-4">phases</h3>
                    <div className="phases">
                        <h5>Phase 1</h5>
                        <p>
                            Community Building in Discord and Twitter<br />
                            Securing Genesis Partners<br />
                            Genesis Collection Launch<br />
                            Community Fund Launch<br />
                            Charity Fund Launch<br />
                            Merging Platform Launch<br/>
                            Open to Collaborations
                        </p>
                        <h5>Phase 2</h5>
                        <p>
                            Collaboration Collection Launch<br />
                            Artist Platform Launch<br />
                            Voting Platform Launch
                        </p>
                        <h5>Phase 3</h5>
                        <p>
                            Seasonal Collection Launch<br />
                            Continuous Operation of the Organization
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Roadmap

// Phases:

// Phase 1
// Community Building in Discord and Twitter
// Securing Genesis Partners
// Genesis Collection Launch
// Community Fund Launch
// Charity Fund Launch
// Merging Platform Launch

// Phase 2
// Open to Collaborations
// Collaboration Collection Launch
// Artist Platform Launch
// Voting Platform Launch

// Phase 3
// Seasonal Collection Launch
// Continuous Operation of the Organization
