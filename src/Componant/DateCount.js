import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateCount = ({ Person }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" >
                لديك {Person.length} مواعيد
            </Col>
        </Row>
    )
}

export default DateCount