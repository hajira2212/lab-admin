import React, { Fragment } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Home } from 'react-feather';
import { Link } from 'react-router-dom'
import AlertComponent from '../../components/alert';

const Breadcrumbs = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <h3>{props.title}</h3>
            </Col>
            <Col xs="6">
              <Breadcrumb>
                <BreadcrumbItem><Link to={`${process.env.PUBLIC_URL}/dashboard`}><Home /></Link></BreadcrumbItem>
                 <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                <BreadcrumbItem active>{props.title}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        <AlertComponent/>
      </Container>
    </Fragment>
  );
}

export default Breadcrumbs;