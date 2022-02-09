import React from 'react'
import { Container } from 'react-bootstrap'
import './phases.css'

const Roadmap = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="phases-section">
                    <h3 style={{ color: '#fff', textAlign: 'center' }}>phases</h3>
                    <div className="phases">
                        <h4>Phase 1</h4>
                        <p>
                            Community Building in Discord and Twitter<br />
                            Securing Genesis Partners<br />
                            Genesis Collection Launch<br />
                            Community Fund Launch<br />
                            Charity Fund Launch<br />
                            Merging Platform Launch
                        </p>
                        <h4>Phase 2</h4>
                        <p>
                            Open to Collaborations<br />
                            Collaboration Collection Launch<br />
                            Artist Platform Launch<br />
                            Voting Platform Launch
                        </p>
                        <h4>Phase 3</h4>
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
