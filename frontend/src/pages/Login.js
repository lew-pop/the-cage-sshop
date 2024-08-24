import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../store/services/user";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/slices/user-slice";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import FormContainer from "../components/util/FormContainer";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin.userInfo);

  const [loginUser, { isLoading, error, isError }] = useLoginUserMutation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(formData).unwrap();
      console.log("User Login Success!!", userData); // Debug log
      dispatch(setUserInfo(userData));
      console.log("User Set Info Success!!"); // Debug log
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of The Cage SShop Online | Vape and Smoke Accessories."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Login", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <Container className="py-4 login-form-container">
          <FormContainer>
            <h1>Sign In</h1>
            {isError && (
              <Message variant="danger">
                {error?.data?.detail || error.error}
              </Message>
            )}
            {isLoading && <Loader />}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="username"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                ></Form.Control>
              </Form.Group>

              <Button className="my-2" type="submit" variant="primary">
                Sign In
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                New Customer? <Link to={"/register"}>Register</Link>
              </Col>
            </Row>
          </FormContainer>
        </Container>
      </LayoutOne>
    </Fragment>
  );
};

export default Login;
