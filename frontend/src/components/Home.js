import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import Roadmap from './home/Roadmap'
import TeamSection from './home/TeamSection'
import HauteSection from './home/HauteSection'

const Home = () => {
    return (
        <div className="home">
            <LandingSection/>
            <IdeaSection/>
            <HauteSection/>
            <Roadmap/>
            <TeamSection/>
        </div>
    )
}

export default Home