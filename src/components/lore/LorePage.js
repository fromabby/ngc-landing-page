import React from 'react'
import { Container } from 'react-bootstrap'
import './lore.css'

const LorePage = () => {
    return (
        <Container className='p-0' fluid style={{ background: '#060809', marginBottom: '-20px', paddingBottom: '10px', color: 'white' }}>
            <div className='lore-section'>
                <h1 style={{ paddingBottom: '50px' }}>LORE</h1>
                <p style={{ margin: "10px auto", textAlign: 'center', width: "65%", fontSize: '16px', lineHeight: '27px' }}>There is an underlying storyline that is built by the team and the community’s cooperation. A lore-smith will be present to collate the ideas and build upon the greater Haute Gang canon. Wherein every collection drop expands the story even further, which will be done in seasons - monthly basis.</p>
            </div>
        </Container>
    )
}

export default LorePage
