import React from 'react'
import { Col } from 'react-bootstrap'

const Card = (props) => {

    const { link, title, icon, background } = props

    return (
        <>
            <Col md={3} className="marketplace-card" style={{ background }}>
                <a href={link} target="_blank">
                    <img src={icon} />
                    <h4>{title}</h4>
                </a>
            </Col>
        </>
    )
}

export default Card
