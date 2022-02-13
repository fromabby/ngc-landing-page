import React from 'react'
import { Container } from 'react-bootstrap'
import GalleryPage from './gallery/GalleryPage'
import MetaData from './layout/MetaData'

const Gallery = () => {
    return (
        <>
            <MetaData title={'Gallery'} />
            <Container fluid className="p-0">
                <GalleryPage />
            </Container>
        </>
    )
}

export default Gallery
