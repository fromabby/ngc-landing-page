import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './section.css'
import { Container } from 'react-bootstrap'

const LandingSection = () => {
    const defaultColor = 'white'

    const [twtColor, setTwtColor] = useState(defaultColor)
    const [discColor, setDiscColor] = useState(defaultColor)

    return (
        <>
            <Container fluid className="p-0">
                <div className="body">
                    <section id="first" className="landing-section">
                        <img src={`./assets/NGC-logo.png`} className="image-logo" />
                        <h3 className="brand-name" style={{ color: "#FF9601" }}>NEAR GANG<span style={{ paddingLeft: "5px", color: "#fff" }}>COUTURE</span></h3>
                        <p style={{ margin: "10px 0", textAlign: 'center', width: "65%", fontSize: '16px', lineHeight: '27px' }}>NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.</p>
                        <div className="socials">
                            <Link style={{ color: twtColor }} to="https://twitter.com/neargangcouture" onMouseEnter={() => {
                                setTwtColor('#1DA1F2')
                            }} onMouseLeave={() => {
                                setTwtColor(defaultColor)
                            }}>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="social-link"
                                />
                            </Link>
                            <Link style={{ color: discColor }} to="https://discord.gg/qkTevDBaN9" onMouseEnter={() => {
                                setDiscColor('#5865F2')
                            }} onMouseLeave={() => {
                                setDiscColor(defaultColor)
                            }}>
                                <FontAwesomeIcon
                                    icon={faDiscord}
                                    className="social-link"
                                />
                            </Link>
                            <div className="hello">
                                <Link to="https://paras.id/neargangcouture.near/collections" target="_blank" id="join-button"></Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <div className="landing-section">
                    <img src={`./assets/NGC-logo.png`} className="image-logo" />
                    <h3 className="brand-name" style={{ color: "#FF9601" }}>NEAR GANG<span style={{ paddingLeft: "5px", color: "#fff" }}>COUTURE</span></h3>
                    <p style={{ margin: "50px 0", textAlign: 'center', width: "65%", fontSize: '16px', lineHeight: '27px' }}>NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.</p>
                    <div className="socials">
                        <Link style={{ color: twtColor }} to="https://twitter.com/neargangcouture" onMouseEnter={() => {
                            setTwtColor('#1DA1F2')
                        }} onMouseLeave={() => {
                            setTwtColor(defaultColor)
                        }}>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="social-link"
                            />
                        </Link>
                        <Link style={{ color: discColor }} to="https://discord.gg/qkTevDBaN9" onMouseEnter={() => {
                            setDiscColor('#5865F2')
                        }} onMouseLeave={() => {
                            setDiscColor(defaultColor)
                        }}>
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="social-link"
                            />
                        </Link>
                    </div>
                    <div className="hello">
                        <Link to="https://paras.id/neargangcouture.near/collections" target="_blank" id="join-button"></Link>
                    </div>
                </div> */}
            </Container>
        </>
    )
}

export default LandingSection

// Description:
// NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.
