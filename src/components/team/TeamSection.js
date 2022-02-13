import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './assets/Card'
import './team.css'

const TeamSection = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="team-section" id="team-section">
                    <h1 style={{paddingBottom: '50px'}}>THE TEAM</h1>
                    <ul class="cards">
                        <Card image={"./assets/HG/M4.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#D3F8E2"} title={"EL"} subtitle={"Founder"} description={"EL is the lead director and co-founder of NGC."} />
                        <Card image={"./assets/HG/M2.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#D68FD6"} title={"Iinko"} subtitle={"Founder"} description={"Iinko is the head of partnerships and promotions and co-founder of NGC."} />
                        <Card image={"./assets/HG/F2.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#EDAFB8"} title={"Pemmie"} subtitle={"Artist"} description={"Pemmie is the art director of NGC."} />
                        <Card image={"./assets/HG/M5.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#E4D6A7"} title={"Charles"} subtitle={"Artist"} description={"Charles is the lead artist of NGC under Pemmie."} />
                        <Card image={"./assets/HG/M4.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#D1B1C8"} title={"Yves"} subtitle={"Staff"} description={"Yves is the head of logistics and tech in NGC."} />
                        <Card image={"./assets/HG/M3 copy.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#DDDDDD"} title={"Polly"} subtitle={"Staff"} description={"Polly is the resident graphic designer of NGC."} />
                        <Card image={"./assets/HG/F5.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#809BCE"} title={"Abby"} subtitle={"Staff"} description={"Abby is the resident web developer of NGC."} />
                        <Card image={"./assets/HG/M1.png"} xlmns={"http://www.w3.org/2000/svg"} background={"#F7F052"} title={"Kenzero"} subtitle={"Staff"} description={"KKenzero is the marketing director of NGC."} />
                    </ul>
                </div>
            </Container>
        </>
    )
}

export default TeamSection

// Team:

// Founders:

// EL is the lead director and co-founder of NEAR Gang Couture (NGC). As an interior designer and artist who has a background in P2E games and NFT Art, he strives to bring NGC to a platform that meets the current industry standard and more.

// Iinko is the marketing director and co-founder of NGC. He pitched the project to EL as a means to further the community and to help in charity. With a background in the arts and a keen interest in NFTs, NGC was formed.

// Artists:

// Pemmie is the art director of NGC. She met Iinko during his start in using the NEAR network and became quick friends. She was tapped as the art director for her background in design and NFTs. She used to spend her days doodling in her notebook.

// Charles is the lead artist of NGC under Pemmie. He started his art journey at a young age, and eventually transitioned to the digital medium. Turning his passion into NFTs was the next step towards being tapped by Pemmie to join NGC as a founding artist.

// Staff:

// Yves is the head of tech in NGC. He is a computer engineering graduate who combines his passion for the arts and tech in making simple yet creative designs. He was tapped by El to share his expertise in development and gain more knowledge in the blockchain community.

// Polly is the resident graphic designer of NGC. He is an artist and designer by trade as he manages multiple businesses. He got interested in NFTs to fund his needs but struggled with the idea of a genesis piece. That was when El tapped him to be part of NGC.

// Abby is the web developer of NGC. She is EL’s sister, an I.T. student, and a web developer based in the Philippines. El naturally stuck to close ties when he tapped his sister to be the creator of NGC’s website.

// Kenzero is the marketing consultant of NGC. 
