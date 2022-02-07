import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import HauteSection from './home/HauteSection'
import Offers from './home/Offers'
import TimeSection from './home/TimeSection'
import TeamSection from './home/TeamSection'

import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container fluid className="p-0">
            <LandingSection />
            <IdeaSection />
            <HauteSection />
            <Offers />
            <TimeSection />
            <TeamSection />
        </Container>
    )
}

export default Home