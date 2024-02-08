import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../api'

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
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState(
      localStorage.getItem('Name')
  );
  const [userType, setUserType] = useState(
    localStorage.getItem('UserType')
);

useEffect(() => {
  
  localStorage.setItem('Name', name);
  localStorage.setItem('UserType', userType);

  }, [name, userType]);

  const loginWithUser = (event) => {
    event.preventDefault();
    setLoading(true);
    let user= JSON.stringify({ email, password });
    login(user).then((res) => {
      if (res.data.success) {
        const user = res.data.user;
        setName(user.name);
        setUserType(user.role.toUpperCase());
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", user.role);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        // localStorage.setItem('cid', user.company._id);
        clearValues();
        window.location.href = `${process.env.PUBLIC_URL}/dashboard`;
      } else {
        clearValues();
        toast.error(res.data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    });
    
  }

  const clearValues = () => {
    setLoading(false);
  };


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

                <ValidationForm className="theme-form" onSubmit={loginWithUser} ref={formRef}>
                  <h4>Sign in</h4>
                  <p>{"Enter your email & password to login"}</p>

                  <FormGroup>
                    <Label htmlFor="signinEmail" className="col-form-label">{"Email Address"}</Label>
                    <TextInput
                      required
                      name="signinEmail"
                      className="form-control"
                      type="email"
                      validator={validator.isEmail}
                      errorMessage={{ required: "Email Is Required", validator: "Invalid Email" }}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your email id"
                      defaultValue={email} />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="signinPassword" className="col-form-label">{"Password"}</Label>
                    <TextInput
                      required
                      name="signinPassword"
                      className="form-control"
                      type={togglePassword ? "text" : "password"}
                      placeholder="password"
                      validator={validator.isStrongPassword}
                      errorMessage={{ required: "Password Is Required", validator: "Use 8 or more characters with a mix of letters, numbers & symbols" }}
                      onChange={e => setPassword(e.target.value)}
                      defaultValue={password} />
                    <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>

                  <div className="form-group mb-0">
                    <div className="checkbox ml-3">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">{"Remember Password"}</Label>
                    </div>

                    <Button color="primary" disabled={loading} className="btn-block" >Login</Button>
                  </div>
                  {loading && (
                    <div className="text-center">
                      <div className="loader-box">
                        <div className="loader-9"></div>
                      </div>
                    </div>
                  )}
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