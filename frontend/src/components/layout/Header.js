import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="logo">
                            <a href="/"><span style={{ color: "#FF9601" }}>NEAR GANG</span><span style={{ paddingLeft: "5px", color: "#fff" }}> COUTURE</span></a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">home</Nav.Link>
                            <Nav.Link href="/team">who we are</Nav.Link>
                            <Nav.Link href="/gallery">gallery</Nav.Link>
                            <Nav.Link href="/marketplace">marketplace</Nav.Link>

                            {/* <Nav.Link href="https://paras.id/neargangcouture.near/collections" target="_blank">paras collection</Nav.Link> */}
                            {/* <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        {/* <div>
            <header className="header">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        
                        <input type="checkbox" id="nav-check"/>
                        <label for="nav-check" className="nav-toggler">
                            <span></span>
                        </label>
                        <nav className="nav">
                            <ul>
                                <li><a href="#idea-section">what we do</a></li>
                                <li><a href="#team-section">who we are</a></li>
                                <li><a href="#gallery">gallery</a></li>
                                <li><a href="https://paras.id/neargangcouture.near/collections" target="_blank">paras collection</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div> */}
        </>
    )
}

export default Header

