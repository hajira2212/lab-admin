import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { useHistory } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  CardHeader,
  Button,
  FormGroup,
  Label,
  Form,
} from "reactstrap";

import { toast } from "react-toastify";
import validator from 'validator'
import {
  ValidationForm,
  TextInput,
} from "react-bootstrap4-form-validation";
toast.configure();


const Profile = (props) => {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(
    localStorage.getItem('UserType')
  );

  const matchPassword = (value) => {
    return value && value === password;
  }

  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('currentUser')

  );

  useEffect(() => {
    loadUser();
  }, [])


  const loadUser = () => {

    const user = JSON.parse(currentUser);
    setEmail(user.email);
    setName(user.name);
    setUid(user._id);
  }


  // const updateUser = (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   var tkn = `Bearer ${token}`;
  //   const body = JSON.stringify({
  //     id: uid,
  //     name: name,
  //     password: password
  //   });
  //   UpdateInspector(uid, body, tkn).then((res) => {

  //     if (userType === "INXPECTOR" || userType === 'MANAGER') {
  //       localStorage.removeItem("UserType");
  //       history.push(`${process.env.PUBLIC_URL}/login`);
  //     } else {
  //       localStorage.removeItem("UserType");
  //       history.push(`${process.env.PUBLIC_URL}/signin`);
  //     }

  //     // toast.success("Account Details Updated successfully.", {
  //     //   position: toast.POSITION.TOP_RIGHT,
  //     //   autoClose: 5000,
  //     // });
  //   });
    
  // };



  return (
    <Fragment>
      <Breadcrumb parent="InXpector" title="Account" />
      <Container fluid={true}>

        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Card>
              <CardBody>

                <ValidationForm  className='theme-form customizer-body custom-scrollbar'>
                  <FormGroup>
                    <Label htmlFor="waferName">Name</Label>
                    <TextInput
                      className="form-control"
                      required
                      type="text"
                      name="waferName"
                      value={name}
                      errorMessage={{ required: "Name Is Required" }}
                      placeholder="Enter Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="waferEmail">Email</Label>
                    <TextInput
                      className="form-control"
                      type="text"
                      value={email}
                      name="waferEmail"
                      required
                      disabled="true"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="waferPassword">Password</Label>
                    <TextInput
                      value={password}
                      required
                      type="password"
                      className="form-control"
                      nane="waferPassword"
                      validator={validator.isStrongPassword}
                      errorMessage={{
                        required: "Password Is Required",
                        validator:
                          "Use 8 or more characters with a mix of letters, numbers & symbols",
                      }}
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setConfirmPassword("");
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="wafer">Confirm Password</Label>
                    <TextInput
                      value={confrimPassword}
                      className="form-control"
                      type="password"
                      required
                      name="waferConPassword"
                      validator={matchPassword}
                      errorMessage={{
                        required: "Confirm Password Is Required",
                        validator: "Password does not match",
                      }}
                      placeholder="Enter password"

                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Button className="success">
                          Update Account
                  </Button>
                      </FormGroup>
                    </Col> </Row>
                </ValidationForm>

              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </Fragment>

  );

};

export default Profile;
