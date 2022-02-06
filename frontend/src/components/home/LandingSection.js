import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LandingSection = () => {
    return (
        <div className="landing-section">
            <img src={`./assets/NGC-logo.png`} className="image-logo" />
            <h3 className="brand-name" style={{ color: "#FF9601" }}>NEAR GANG<span style={{ paddingLeft: "5px", color: "#fff" }}>COUTURE</span></h3>
            <p style={{ margin: "50px 0", textAlign: 'center', width: "65%", fontSize: '16px', lineHeight: '27px' }}>NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.</p>
            <div className="socials">
                <a style={{ color: "white" }} href="https://www.facebook.com/neargangcouture">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="social-link"
                    />
                </a>
                <a style={{ color: "white" }} href="https://twitter.com/neargangcouture">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-link"
                    />
                </a>
                <a style={{ color: "white" }} href="https://discord.gg/qkTevDBaN9">
                    <FontAwesomeIcon
                        icon={faDiscord}
                        className="social-link"
                    />
                </a>
                <a style={{ color: "white" }} href="https://instagram.com/neargangcouture">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="social-link"
                    />
                </a>
                <a style={{ color: "white" }} href="https://www.linkedin.com/company/near-gang-couture">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="social-link"
                    />
                </a>
                <a style={{ color: "white" }} href="mailto:neargangcouture@gmail.com">
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