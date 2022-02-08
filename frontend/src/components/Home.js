import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import HauteSection from './home/HauteSection'
import Offers from './home/Offers'
import Roadmap from './home/Roadmap'
import Timeline from './home/Timeline'

import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container fluid className="p-0">
            <LandingSection />
            <IdeaSection />
            <Offers />
            {/* <HauteSection /> */}
            <Timeline />
            {/* <Roadmap /> */}

        </Container>
    )
}

export default Home