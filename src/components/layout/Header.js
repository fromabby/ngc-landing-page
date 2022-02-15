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
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/">home</Nav.Link>
                            <Nav.Link href="/team">who we are</Nav.Link>
                            <Nav.Link href="/gallery">gallery</Nav.Link>
                            <Nav.Link href="/marketplace">marketplace</Nav.Link>
                            <Nav.Link href="/" disabled>whitepaper</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

