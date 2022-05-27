import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateList = ({ Person }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" >
                <div className="rectangle p-4">
                    {Person.length ? (Person.map((items) => {
                        return (
                            <div key={items.id} className="d-flex border-bottom mx-3 my-4" >
                                <img className="img-avatar " src="avatar.jpg" alt="s" />
                                <div className="px-3">
                                    <p className="d-inline fs-5" > {items.name}</p>
                                    <p className="fs-6" > {items.date}  </p>
                                </div>
                            </div>
                        )
                    })) : <h2 className="p-5 text-center" > لا يوجد مواعيد اليوم</h2>}

                </div>
            </Col>
        </Row>
    )
}

export default DateList