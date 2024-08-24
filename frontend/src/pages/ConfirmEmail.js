import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useConfirmEmailQuery } from "../store/services/user";

const ConfirmEmail = () => {
  const { pathname } = useLocation();
  const { uidb64, token } = useParams();
  const [message, setMessage] = useState("");
  const { data, error, isLoading } = useConfirmEmailQuery({ uidb64, token });

  console.log("The data: ", data);
  return (
    <Fragment>
      <SEO
        titleTemplate="Confirm Email"
        description="Confirm Email page of The Cage SShop Online | Vape and Smoke Accessories."
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
        <Row className="justify-content-center text-center mb-4">
            <Col md={8} className="bg-secondary p-4 rounded shadow">
              <h1 className="text-light">Confirm Email</h1>
              {message && <Message variant="info">{message}</Message>}
              {error && (
                <Message variant="info">
                  {error?.data?.detail || error.error}
                </Message>
              )}
              {isLoading && <Loader />}
              <h3 className="text-light">Please check your email to activate your account.</h3>
            </Col>
          </Row>

         
        </Container>
      </LayoutOne>
    </Fragment>
  );
};

export default ConfirmEmail;
