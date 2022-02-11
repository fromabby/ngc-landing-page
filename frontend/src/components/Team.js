import React from 'react'
import { Container } from 'react-bootstrap'
import TeamSection from './team/TeamSection'
import MetaData from './layout/MetaData'

const Team = () => {
    return (
        <>
            <MetaData title={'Team'}/>
            <Container fluid className="p-0">
                <TeamSection/>
            </Container>
        </>
    )
}

export default Team
