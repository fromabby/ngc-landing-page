import React from 'react'
import Card from './assets/Card'
import './gallery.css'
import { Container, Row } from 'react-bootstrap'

const GalleryPage = () => {
    return (
        <>
        {/* send brick wall for background */}
            <Container fluid className="p-0">
                <div className="gallery-section">
                    <h1>GALLERY</h1>
                    <Row>
                        <Card title={"Haute Gang"} link={"https://paras.id/collection/haute-gang-by-neargangcouturenear"} icon={"./assets/logos/hautegang-logo.jpg"} style={{marginLeft: "auto"}}/>
                        <Card title={"Haute Gang Specials"} link={"https://paras.id/collection/haute-gang-specials-by-neargangcouturenear"} icon={"./assets/logos/hautegang-specials-logo.jpg"} style={{marginLeft: "auto"}}/>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default GalleryPage
