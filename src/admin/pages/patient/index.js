import React, { Fragment, useEffect, useRef, useState } from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import validator from 'validator';
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
  Input,
} from "reactstrap";

import { ValidationForm, Checkbox, TextInput, SelectGroup, FileInput } from 'react-bootstrap4-form-validation';
import moment from "moment";
import { toast } from 'react-toastify'
import $ from 'jquery';
import DataTable from 'datatables.net';
import { uploadFile } from 'react-s3';

toast.configure();

const Patient = (props) => {
  const [loading, setLoading] = useState(true);
  const [rightSidebar, setRightSidebar] = useState(true);
  const [edit, setEdit] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [description, setDescription] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [country, setCountry] = useState("india");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState(null);
  const [editImgUrl, setEditImgUrl] = useState("");
  const [templeId, setTempleId] = useState([]);
  const [areaType, setAreaType] = useState("");
  const [address, setAddress] = useState("");
  const [templeList, setTempleList] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [stateName, setStateName] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [imageUrl, setImageUrl] = useState("");


  const getTempleList = () => {

    $('#templeTable').dataTable().fnDestroy();
    var tkn = `Bearer ${token}`;

    // const temple = fetchTemples(tkn).then((res) => {
    //   if (res.data.success === true) {
    //     setTempleList(res.data.data);
    //     setLoading(false);
    //   } else {
    //     setLoading(false);
    //   }

    // });
  };

  const formRef = useRef(null);
  useEffect(() => {
    getStateList();
    getTempleList();

  }, []);

  useEffect(() => {
    if (templeList.length > 0) {
      $("#templeTable").dataTable({
        'columnDefs': [{
          'targets': [5], // column index (start from 0)
          'orderable': false, // set orderable false for selected columns
        }]
      });
    }
  }, [templeList]);



  const clearValues = () => {
    // setLoading(false);
    // setName('');
    // setEmail('');
    // setMobileno('');
    // setCity('');
    // setState('');
    // setCityList([]);
    // setAddress('');
    // setDescription('')
    // setIsActive(true);
    // setPicture(null);
    // setStateName('');
    // setImageUrl('');
    // setEditImgUrl('');
    // let curentRormRef = formRef.current;
    // curentRormRef.resetValidationState(true);
  }

  const editTemple = (temple) => {
    // setEdit(true);
    // setTempleId(temple._id);
    // setIsActive(temple.isActive);
    // setName(temple.temple_name);
    // setEmail(temple.temple_email);
    // setMobileno(temple.contactNo);
    // if (temple.state) {
    //   const stateCode = stateList.filter(x => x.name === temple.state);
    //   const state = stateCode[0].key;
    //   setStateName(state);
    //   getCityList(state);
    // }
    // handleCityChange(temple.city);
    // // setCity(temple.city);
    // setAddress(temple.address);
    // setDescription(temple.temple_description);
    // setEditImgUrl(temple.templeImages[0].imageUrl);
    // openCustomizer();
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };


  const getStateList = () => {
    // const state = fetchState().then((res) => {
    //   if (res.data.success === true) {
    //     setStateList(res.data.data);
    //   }
    // });
  };



  const getCityList = (stateCode) => {
    setCityList([]);
    // const city = fetchCity(stateCode).then((res) => {
    //   if (res.data.success === true) {
    //     const citylist = res.data.data[0][stateCode];
    //     setCityList(citylist);
    //   }
    // });
  };



  const onCitySelect = (e) => {
    setCity(e.target.value);
  };

  const onStateSelect = (e) => {
    getCityList(e.target.value, true);
    setCity("");
    setState(e.target.options[e.target.selectedIndex].text);
    setStateName(e.target.value);
  };

  const updateTempleProcess = (event) => {
    event.preventDefault();
    setLoading(true);
    var tkn = `Bearer ${token}`;

    if (picture != null) {
      // handleFileUpload(picture);
    }
    else {
      setImageUrl(editImgUrl);
    }

    const body = JSON.stringify({
      temple_name: name,
      temple_description: description,
      temple_email: email,
      contactNo: mobileno,
      address: address,
      city: city,
      state: state,
      country: country,
      isActive: isActive,

      templeImages: [
        {
          imageUrl: imageUrl,
          imageDescription: description
        }
      ]


    });
    // updateTemple(templeId, body, tkn).then((res) => {

    //   if (res.data.success) {
    //     getTempleList();
    //     toast.success("Temple details updated successfully.", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 2000,
    //     });
    //     clearValues();
    //     setEdit(false);
    //     setLoading(false);
    //     closeCustomizer();
    //   } else {
    //     toast.warning(res.data.data, {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 2000,
    //     });
    //     setLoading(false);
    //   }
    // });
  };



  const openCustomizer = () => {
    if (rightSidebar) {
      setRightSidebar(!rightSidebar);
      document.querySelector(".customizer-contain").classList.add("open");
    }

  };

  const closeCustomizer = () => {
    setRightSidebar(!rightSidebar);
    clearValues();
    document.querySelector(".customizer-contain").classList.remove("open");
  };

  const addTemple = (event) => {
    event.preventDefault();
    setLoading(true);

    var tkn = `Bearer ${token}`;
    if (picture != null) {

      // handleFileUpload(picture);
      const body = JSON.stringify({

        temple_name: name,
        temple_description: description,
        temple_email: email,
        contactNo: mobileno,
        address: address,
        city: city,
        state: state,
        country: country,
        isActive: isActive,
        templeImages: [
          {
            imageUrl: imageUrl,
            imageDescription: description
          }
        ]
      });

      clearValues();
      // createNewTemple(body, tkn).then((res) => {

      //   if (res.data.success) {
      //     getTempleList();
      //     clearValues();
      //     toast.success("Temple details added successfully.", {
      //       position: toast.POSITION.TOP_RIGHT,
      //       autoClose: 3000,
      //     });
      //     setLoading(false);
      //     closeCustomizer();
      //   } else {
      //     toast.warning(res.data.data, {
      //       position: toast.POSITION.TOP_RIGHT,
      //       autoClose: 3000,
      //     });
      //     setLoading(false);
      //   }
      // });

    }
    else {
      toast.error("temple image adding error", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      setLoading(false);
    }


  };


  const assignImage = (event) => {
    if (event.target.files[0]) {
      setPicture(event.target.files[0]);
    }
  };

 
  return (
    <Fragment>
      <Breadcrumb parent="InXpector" title="Patient Master" />
      <Container className="master-container" fluid={true}>
        <Card>
          <CardHeader>
            <Button onClick={openCustomizer} color="primary" size="md">
              <i className="fa fa-plus-circle"></i> Add
            </Button>
          </CardHeader>
          <CardBody>
            <Table id="patientTable" className="master-table" bordered responsive>
              <thead>
                <tr>
                  <th>S.No&nbsp;&nbsp;</th>
                  <th className="name-col">patient Name</th>
                  <th className="name-col">Description</th>
                  <th className="name-col">Email</th>
                  <th>Active?&nbsp;&nbsp;</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                {templeList.length > 0 ? templeList.map((temple, index) => (
                  <tr key={temple._id}>
                    <td>{index + 1}</td>
                    <td>{temple.temple_name}</td>
                    <td>{temple.temple_description}</td>
                    <td>{temple.temple_email}</td>
                    <td data-order={temple.isActive} className="text-center">
                      {temple.isActive ? (
                        <i className="icon-green fa fa-check-square-o"></i>
                      ) : (
                        <i className="icon fa fa-minus-circle"></i>
                      )}
                    </td>
                    <td className="text-center">
                      <i onClick={() => editTemple(temple)} className="icon fa fa-pencil-square"></i>
                    </td>
                  </tr>
                )) :
                  <tr>
                    <td colSpan="12" className="text-center">
                      {" "}
                      No data found.{" "}
                    </td>
                    <td className="d-none"></td>
                    <td className="d-none"></td>
                    <td className="d-none"></td>
                    <td className="d-none"></td>
                    <td className="d-none"></td>
                  </tr>
                }
              </tbody>
            </Table>
            {loading && (
              <div className="text-center">
                <div className="loader-box">
                  <div className="loader-9"></div>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Container>
      <div className="customizer-contain">
        <div className="customizer-header">
          <i className="icon-close" onClick={closeCustomizer}></i>
          <h6>{edit ? `Edit` : `Add`} Patient</h6>
        </div>
        <ValidationForm onSubmit={edit ? updateTempleProcess : addTemple} ref={formRef} className='theme-form customizer-body custom-scrollbar'>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <TextInput
                  className="form-control"
                  type="text"
                  required
                  placeholder="Enter Name"
                  errorMessage={{ required: "Name Is Required" }}
                  value={name}
                  name="name"
                  onChange={e => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextInput
                  value={description}
                  className="form-control"
                  required
                  multiline
                  rows="3"
                  name="description"
                  placeholder="Enter Description"
                  errorMessage={{ required: "Description Is Required" }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Email">Email</Label>
                <TextInput
                  className="form-control"
                  type="text"
                  value={email}
                  name="waferEmail"
                  required
                  validator={validator.isEmail}
                  errorMessage={{
                    required: "Email Is Required",
                    validator: "Invalid Email",
                  }}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="mobileNo">Mobile No</Label>
                <TextInput
                  className="form-control"
                  required
                  type="number"
                  name="mobileno"
                  value={mobileno}
                  errorMessage={{ required: "Mobile No Is Required" }}
                  placeholder="Enter Mobile No"
                  onChange={(e) => setMobileno(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Address</Label>
                <TextInput
                  className="form-control"
                  type="text"
                  required
                  placeholder="Enter Address"
                  errorMessage={{ required: "Address Is Required" }}
                  value={address}
                  name="address"
                  onChange={e => setAddress(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="country">Select country</Label>
                <SelectGroup
                  type="select"
                  name="state-type"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  errorMessage={{ required: "Country Is Required" }}
                  className="form-control digits"
                  selected={country}
                >
                  <option value="india">{"India"}</option>
                </SelectGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="state-type">Select State</Label>
                <SelectGroup
                  type="select"
                  name="state"
                  value={stateName}
                  required
                  errorMessage={{ required: "State Is Required" }}
                  onChange={(e) => onStateSelect(e)}
                  className="form-control digits"
                  selected="Select State"
                >
                  <option value="">{"Select State"}</option>
                  {stateList &&
                    stateList.map((state, index) => (
                      <option value={state.key} key={state.key}>
                        {state.name}
                      </option>
                    ))}
                </SelectGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="city-type">Select City</Label>
                <select
                  type="select"
                  name="city"
                  value={city.value}
                  required
                  errorMessage={{ required: "City Is Required" }}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="form-control digits"
                  selected="Select City"
                >
                  <option value="">{"Select City"}</option>
                  {cityList &&
                    cityList.map((city, index) => (
                      <option value={city} key={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="image">Image</Label>
                {edit ? (
                  <FileInput
                    //required
                    className="form-control"
                    //errorMessage={{ required: "Defects Image Is Required" }}
                    type="file"
                    name="temple-image"
                    placeholder="temple image"
                    onChange={(e) => assignImage(e)}
                  />
                ) : (
                  <FileInput
                    required
                    className="form-control"
                    errorMessage={{ required: "Temple Image Is Required" }}
                    type="file"
                    name="temple-image"
                    placeholder="temple image"
                    onChange={(e) => assignImage(e)}
                  />
                )}

                {picture != null && (
                  <img
                    className="img-thumbnail defect-image"
                    src={URL.createObjectURL(picture)}
                  />
                )}
                {edit && picture === null ? (
                  <img
                    className="img-thumbnail defect-image"
                    src={editImgUrl}
                  />
                ) : (
                  ""
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="master-pl-0" >
                <Checkbox
                  name="active"
                  className="master-checkbox"
                  label="Active?"
                  id="active"
                  value={isActive}
                  onChange={e => setIsActive(!isActive)} />
              </FormGroup>

            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="text-center">
                {edit ? (
                  <Button disabled={loading} className="success">
                    Update
                  </Button>
                ) : (
                  <Button disabled={loading} className="success" >
                    Add
                  </Button>
                )}
              </FormGroup>
            </Col>
          </Row>
        </ValidationForm>

      </div>
    </Fragment>
  );
};

export default Patient;
