import React, { Fragment, useState, useEffect } from 'react';
import Breadcrumb from "../../../layout/breadcrumb";

import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import CountUp from 'react-countup';
import { Database, ShoppingBag, Clock, User, Search, Archive } from 'react-feather';

const Dashboard = (props) => {

    const [loading, setLoading] = useState(true);

    const [token, setToken] = useState(
        localStorage.getItem('token')
    );
    useEffect(() => {
    }, [])



    return (
        <Fragment>
            <Breadcrumb parent="InXpector" title="Admin Dashboard" />
            <Container fluid={true}>
                <Row>
                    <Col sm="6" xl="4" lg="6">
                        <Card className="o-hidden">
                            <CardBody className="bg-primary b-r-4 card-body">
                                <div className="media static-top-widget">
                                    <div className="align-self-center text-center"><User /></div>
                                    <div className="media-body"><span className="m-0">Active patient</span>
                                        <h4 className="mb-0 counter"><CountUp end={"0"} /></h4><User className="icon-bg" />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" xl="4" lg="6">
                        <Card className="o-hidden">
                            <CardBody className="bg-secondary b-r-4">
                                <div className="media static-top-widget">
                                    <div className="align-self-center text-center"><Clock /></div>
                                    <div className="media-body"><span className="m-0">Active Test</span>
                                        <h4 className="mb-0 counter"><CountUp end={"0"} /></h4><Clock className="icon-bg" />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="6" xl="4" lg="6">
                        <Card className="o-hidden">
                            <CardBody className="bg-primary b-r-4 card-body">
                                <div className="media static-top-widget">
                                    <div className="align-self-center text-center"><Search /></div>

                                    <div className="media-body"><span className="m-0"></span>
                                        <h4 className="mb-0 counter"><CountUp end={""} /></h4><Search className="icon-bg" />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="6" xl="4" lg="6">
                        <Card className="o-hidden">
                            <div className="bg-warning b-r-4 card-body">
                                <div className="media static-top-widget">
                                    <div className="align-self-center text-center"><ShoppingBag /></div>
                                    <div className="media-body">
                                        <span className="m-0"></span>
                                        <a href="/admin/disposition" style={{ color: "white" }}><h4 className="mb-0 counter"><CountUp end={""} /></h4></a><ShoppingBag className="icon-bg" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col sm="6" xl="4" lg="6">
                        <Card className="o-hidden">
                            <CardBody className="bg-success b-r-4">
                                <div className="media static-top-widget">
                                    <div className="align-self-center text-center"><Archive /></div>
                                    <div className="media-body"><span className="m-0"></span>
                                        <a href="/admin/archived" style={{ color: "white" }}> <h4 className="mb-0 counter"><CountUp end={""} /></h4></a><Archive className="icon-bg" />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Dashboard;