import React from 'react'
import './Home.css'
import LandingSection from './home/LandingSection'
import IdeaSection from './home/IdeaSection'
import Roadmap from './home/Roadmap'
import TeamSection from './home/TeamSection'

const Home = () => {
    return (
        <div className="home">
            <LandingSection/>
            <IdeaSection/>
            <Roadmap/>
            <TeamSection/>
        </div>
    )
}

export default Home