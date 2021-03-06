import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    const defaultColor = 'white'

    const [fbColor, setFbColor] = useState(defaultColor)
    const [twtColor, setTwtColor] = useState(defaultColor)
    const [igColor, setIgColor] = useState(defaultColor)
    const [discColor, setDiscColor] = useState(defaultColor)
    const [linColor, setLinColor] = useState(defaultColor)
    const [mailColor, setMailColor] = useState(defaultColor)

    return (
        <>
            <Container fluid className="p-0">
                <div className="footer">
                    <footer>
                        <div className="footer-content">
                            <div style={{marginBottom: '5px'}}>
                                <h4>CHOOSE YOUR STYLE. OWN IT!</h4>
                            </div>
                            <div className="logo">
                                <Link to="/"><span style={{ color: "#FF9601" }}>NEAR GANG</span><span style={{ paddingLeft: "5px", color: "#fff" }}> COUTURE</span></Link>
                            </div>
                            {/* <p>NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.</p> */}
                            <div className="footer-socials" style={{fontSize: '20px'}}>
                                <a style={{ color: fbColor }} target="_blank" href="https://www.facebook.com/neargangcouture" onMouseEnter={() => {
                                    setFbColor('#3b5998')
                                }} onMouseLeave={() => {
                                    setFbColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="footer-social-link"
                                    />
                                </a>
                                <a style={{ color: twtColor }} target="_blank" href="https://twitter.com/neargangcouture" onMouseEnter={() => {
                                    setTwtColor('#1DA1F2')
                                }} onMouseLeave={() => {
                                    setTwtColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="footer-social-link"
                                    />
                                </a>
                                <a style={{ color: discColor }} target="_blank" href="https://discord.gg/qkTevDBaN9" onMouseEnter={() => {
                                    setDiscColor('#5865F2')
                                }} onMouseLeave={() => {
                                    setDiscColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className="footer-social-link"
                                    />
                                </a>
                                <a style={{ color: igColor }} target="_blank" href="https://instagram.com/neargangcouture" onMouseEnter={() => {
                                    setIgColor('#e1306c')
                                    // setIgColor('linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d')
                                }} onMouseLeave={() => {
                                    setIgColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="footer-social-link"
                                    />
                                </a>
                                <a style={{ color: linColor }} target="_blank" href="https://www.linkedin.com/company/near-gang-couture" onMouseEnter={() => {
                                    setLinColor('#0e76a8')
                                }} onMouseLeave={() => {
                                    setLinColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="footer-social-link"
                                    />
                                </a>
                                <a style={{ color: mailColor }} target="_blank" href="mailto:neargangcouture@gmail.com" onMouseEnter={() => {
                                    setMailColor('#FB9702')
                                }} onMouseLeave={() => {
                                    setMailColor(defaultColor)
                                }}>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="footer-social-link"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>copyright &copy; 2022</p>
                        </div>
                    </footer>
                </div>
            </Container>
        </>
    )
}

export default Footer

// Description:
// NEAR Gang Couture is an NFT brand that aims to build a premiere community of Haute Gang members in the NEAR Protocol that is for the community, by the community. It has its roots in PFP-based projects, character creators, and the fashion industry.
