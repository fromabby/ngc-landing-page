import React from 'react'
import Timeline from './Timeline'
import Roadmap from './Roadmap'
import { Container, Row, Col } from 'react-bootstrap'

const TimeSection = () => {
    return (
        <>
            <Container fluid className="p-0">
                <Row style={{ width: "99.78vw" }}>
                    <Col md={6} className="p-0">
                        <Roadmap />
                    </Col>
                    <Col md={6} className="p-0">
                        <Timeline />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TimeSection