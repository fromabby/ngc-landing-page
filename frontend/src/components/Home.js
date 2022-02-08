import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import HauteSection from './home/HauteSection'
import Offers from './home/Offers'
import FaqsRoadmap from './home/FaqsRoadmap'
import Timeline from './home/Timeline'
import Faqs from './home/Faqs'

import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container fluid className="p-0">
            <LandingSection />
            <IdeaSection />
            <Offers />
            {/* <HauteSection /> */}
            <Timeline />
            <FaqsRoadmap />
            {/* <Roadmap /> */}

        </Container>
    )
}

export default Home