import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Action = ({ Delet, Show }) => {
    return (
        <Row className="justify-content-center" >
            <Col sm="8" className="d-flex justify-content-between">
                <Button onClick={Delet} className="btn-style p-2 mt-2">مسح الكل</Button>
                <Button onClick={Show} className="btn-style p-2 mt-2">عرض البيانات </Button>

            </Col>
        </Row>
    )
}

export default Action