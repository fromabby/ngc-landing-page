import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import Roadmap from './home/Roadmap'
import HauteSection from './home/HauteSection'
import Offers from './home/Offers'
import TeamSection from './home/TeamSection'

const Home = () => {
    return (
        <div className="home">
            <LandingSection/>
            <IdeaSection/>
            <HauteSection/>
            <Offers/>
            <Roadmap/>
            <TeamSection/>
        </div>
    )
}

export default Home