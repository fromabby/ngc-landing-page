import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LandingSection = () => {
    const defaultColor = 'white'

    const [fbColor, setFbColor] = useState(defaultColor)
    const [twtColor, setTwtColor] = useState(defaultColor)
    const [igColor, setIgColor] = useState(defaultColor)
    const [discColor, setDiscColor] = useState(defaultColor)
    const [linColor, setLinColor] = useState(defaultColor)
    const [mailColor, setMailColor] = useState(defaultColor)

    return (
        <div className="landing-section">
            <img src={`./assets/NGC-logo.png`} className="image-logo" />
            <h3 className="brand-name" style={{ color: "#FF9601" }}>NEAR GANG<span style={{ paddingLeft: "5px", color: "#fff" }}>COUTURE</span></h3>
            <p style={{ margin: "50px 0", textAlign: 'center', width: "65%", fontSize: '16px', lineHeight: '27px' }}>NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.</p>
            <div className="socials">
                <a style={{ color: fbColor }} href="https://www.facebook.com/neargangcouture" onMouseEnter={() => {
                    setFbColor('#3b5998')
                }} onMouseLeave={()=>{
                    setFbColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="social-link"
                    />
                </a>
                <a style={{ color: twtColor }} href="https://twitter.com/neargangcouture" onMouseEnter={() => {
                    setTwtColor('#1DA1F2')
                }} onMouseLeave={()=>{
                    setTwtColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-link"
                    />
                </a>
                <a style={{ color: discColor }} href="https://discord.gg/qkTevDBaN9" onMouseEnter={() => {
                    setDiscColor('#5865F2')
                }} onMouseLeave={()=>{
                    setDiscColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faDiscord}
                        className="social-link"
                    />
                </a>
                <a style={{ color: igColor }} href="https://instagram.com/neargangcouture" onMouseEnter={() => {
                    setIgColor('#e1306c')
                    // setIgColor('linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d')
                }} onMouseLeave={()=>{
                    setIgColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="social-link"
                    />
                </a>
                <a style={{ color: linColor }} href="https://www.linkedin.com/company/near-gang-couture" onMouseEnter={() => {
                    setLinColor('#0e76a8')
                }} onMouseLeave={()=>{
                    setLinColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="social-link"
                    />
                </a>
                <a style={{ color: mailColor }} href="mailto:neargangcouture@gmail.com" onMouseEnter={() => {
                    setMailColor('#FB9702')
                }} onMouseLeave={()=>{
                    setMailColor(defaultColor)
                }}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="social-link"
                    />
                </a>
            </div>
            <div className="hello">
                <a href="https://discord.gg/qkTevDBaN9" id="join-button"></a>
            </div>
        </div>
    )
}

export default LandingSection

// Description:
// NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.
