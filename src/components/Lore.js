import React from 'react'
import LorePage from './lore/LorePage'
import MetaData from './layout/MetaData'
import { Container } from 'react-bootstrap'

const Lore = () => {
    return (
        <>
            <MetaData title={'Lore'}/>
            <Container fluid className="p-0">
                <LorePage/>
            </Container>
        </>
    )
}

export default Lore
