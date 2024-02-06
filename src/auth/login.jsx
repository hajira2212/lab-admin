import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginInspectors } from '../api'

import { connect } from 'react-redux';
import { setAlert } from '../actions/alert'
import PropTypes from 'prop-types';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator';

toast.configure();

const Login = (props) => {

  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword)
  }

  const [loading, setLoading] = useState(false)
  const [togglePassword, setTogglePassword] = useState(false)
  const formRef = useRef(null);




  return (
    <Container fluid={true}>
      <Row>
        <Col xl="7" className="b-center bg-size" style={{ backgroundImage: `url(${require("../assets/images/login/1.jpg")})`, backgroundSize: "cover", backgroundPosition: "center", display: "block" }}>
          <img className="bg-img-cover bg-center" style={{ display: "none" }} src={require("../assets/images/login/1.jpg")} alt="looginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <div className="login-card">
            <div>
              <div>
                <a className="logo text-left" href="#javascript">
                  <img className="img-fluid" src={require("../assets/images/logo/logic-lab-logo.png")} alt="looginpage" />
                  {/* <img className="img-fluid for-dark" src={require("../assets/images/logo/logo_dark.png")} alt="looginpage"/> */}
                </a>
              </div>
              <div className="login-main login-tab">

                <ValidationForm className="theme-form" ref={formRef}>
                  <h4>Sign in</h4>
                  <p>{"Enter your email & password to login"}</p>

                  <FormGroup>
                    <Label htmlFor="signinEmail" className="col-form-label">{"Email Address"}</Label>
                    <TextInput
                      name="signinEmail"
                      className="form-control"
                      type="email"
                      placeholder="your email id"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="signinPassword" className="col-form-label">{"Password"}</Label>
                    <TextInput
                      name="signinPassword"
                      className="form-control"
                      type={togglePassword ? "text" : "password"}
                      placeholder="password"
                      />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <div className="checkbox ml-3">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">{"Remember Password"}</Label>
                    </div>
                    {/* <a className="link" href="#javascript">{"Forgot Password"}</a> */}

                    <Button color="primary" disabled={loading} className="btn-block" >Login</Button>
                  </div>
                  {loading && (
                    <div className="text-center">
                      <div className="loader-box">
                        <div className="loader-9"></div>
                      </div>
                    </div>
                  )}
                  {/* <p></p> */}
                  {/* <div className="text-center"><a href="/signin">Login as Company</a></div> */}
                </ValidationForm>

              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

Login.prototypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(withRouter(Login));