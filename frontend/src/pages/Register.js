import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../store/services/user";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/slices/user-slice";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import FormContainer from "../components/util/FormContainer";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";

const Register = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { isLoading, error, isError }] = useRegisterUserMutation();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.userLogin.userInfo);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debug log
    if (formData.password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      try {
        const registeredUser = await registerUser(formData).unwrap();
        setMessage('Check your email for a confirmation link!');
        console.log("User Registered Successfully!!", registeredUser); // Debug log
        dispatch(setUserInfo(registeredUser));
      } catch (err) {
        console.error("Failed to register:", err);
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Register"
        description="Register page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Register", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          <FormContainer>
            <h1>Sign In</h1>
            {message && <Message variant="danger">{message}</Message>}
            {isError && (
              <Message variant="danger">
                {error?.data?.detail || error.error}
              </Message>
            )}
            {isLoading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="passwordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button className="my-3" type="submit" variant="primary">
                Register
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                Have an Account? <Link to={"/login"}>Sign In</Link>
              </Col>
            </Row>
          </FormContainer>
        </Container>
      </LayoutOne>
    </Fragment>
  );
};

export default Register;
