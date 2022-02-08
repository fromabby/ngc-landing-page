import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Faqs from './Faqs'
import Roadmap from './Roadmap'

const FaqsRoadmap = () => {
    return (
        <>
            <Container fluid className='p-0' style={{ background: '#170c42', color: '#fff', padding: '50px' }}>
                <Row>
                    <Col md={4}>
                        <Roadmap />
                    </Col>
                    <Col md={8}>
                        <Faqs />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FaqsRoadmap