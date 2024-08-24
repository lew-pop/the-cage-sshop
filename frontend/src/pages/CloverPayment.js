/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../helpers/product";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import {
  useListOrderDetailsQuery,
  usePayOrderMutation,
  useDeliverOrderMutation,
  
} from "../store/services/order";


const CloverPayment = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  let { orderId } = useParams();

  //const { formData } = pathname.state || {};
 // const orderId = formData.orderId;
  const orderDetails = useListOrderDetailsQuery(orderId);
  const { order, error, loading } = orderDetails;
  const [sdkReady, setSdkReady] = useState(false);
  const [clover, setClover] = useState(null);
  const [orderData, setOrderData] = useState({
    _id: "",
    source: "",
  });
  /*useEffect(() => {
    // Load the Clover SDK script
    const script = document.createElement('script');
    script.src = "https://checkout.sandbox.dev.clover.com/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);*/

  const addCloverScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://checkout.sandbox.dev.clover.com/sdk.js";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
      initializeClover();
    };
    document.body.appendChild(script);
  };

  //const Clover = require("clover")(process.env.CLOVER_PUBLIC_KEY);
  const initializeClover = () => {
    const apiKey = process.env.CLOVER_API_KEY;
    const cloverInstance = new window.Clover(apiKey, {
      merchantId: process.env.CLOVER_MERCHANT_ID,
    });

    setClover(cloverInstance);
    const elements = clover.elements();

    //create card elements
    const cardNumber = elements.create("CARD_NUMBER");
    const cardName = elements.create("CARD_NAME");
    const cardDate = elements.create("CARD_DATE");
    const cardCvv = elements.create("CARD_CVV");
    const cardPostalCode = elements.create("CARD_POSTAL_CODE");

    //mount each element
    cardNumber.mount("#card-number");
    cardName.mount("#card-name");
    cardDate.mount("#card-date");
    cardCvv.mount("#card-cvv");
    cardPostalCode.mount("#card-postal-code");

    // Add event listeners for validation errors
    const addEventListeners = (element, errorElementId, errorKey) => {
      const displayError = document.getElementById(errorElementId);
      element.addEventListener("change", function (event) {
        displayError.innerHTML = event[errorKey].error || "";
      });
      element.addEventListener("blur", function (event) {
        displayError.innerHTML = event[errorKey].error || "";
      });
    };

    addEventListeners(cardNumber, "card-number-errors", "CARD_NUMBER");
    addEventListeners(cardName, "card-name-errors", "CARD_NAME");
    addEventListeners(cardDate, "card-date-errors", "CARD_DATE");
    addEventListeners(cardCvv, "card-cvv-errors", "CARD_CVV");
    addEventListeners(
      cardPostalCode,
      "card-postal-code-errors",
      "CARD_POSTAL_CODE"
    );
  };

  useEffect(() => {
    if (!order || order._id !== Number(orderId)) {
     // dispatch({ type: ORDER_PAY_RESET });
      dispatch(useListOrderDetailsQuery.initiate(orderId));
    } else if (!order.isPaid) {
      if (!sdkReady) {
        addCloverScript();
      }
    }
  }, [dispatch, order, orderId, sdkReady]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (clover) {
      try {
        const result = await clover.createToken();
        if (result.errors) {
          Object.values(result.errors).forEach((value) => {
            console.log(value);
          });
        } else {
          const token = await result.token;
          setOrderData({
            ...orderData,
            _id: orderId,
            source: token
          })
          alert(token);
          usePayOrderMutation.initiate(orderData);
          //createCharge(token);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  /*
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clover
      .createToken()
      .then(async function (result) {
        if (result.errors) {
          Object.values(result.errors).forEach(function (value) {
            console.log(value);
          });
        } else {
          const token = await result.token;
          alert(token);
          //cloverTokenHandler(token);
          createCharge(token);
        }
      })
      .catch(function (data) {
        console.log(data);
      });
  });

*/

  //use token as parameter in a create charge function
  const createCharge = (token) => {
    fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 1000,
        source: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Clover Secure Payment Page for The Cage SShop"
      />
      <LayoutOne headerTop="visibile">
        {/*breadcrumb*/}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="/assets/img/bg/breadcrumb.png"
        />
        <div class="container">
          <form
            action="/charge"
            method="post"
            id="payment-form"
            onSubmit={handleSubmit}
          >
            <div class="form-row top-row">
              <div id="card-number" class="field card-number"></div>
              <div
                class="input-errors"
                id="card-number-errors"
                role="alert"
              ></div>
            </div>
            <div class="form-row">
              <div id="card-name" class="field card-name"></div>
              <div
                class="input-errors"
                id="card-name-errors"
                role="alert"
              ></div>
            </div>
            <div class="form-row">
              <div id="card-date" class="field card-date"></div>
              <div
                class="input-errors"
                id="card-date-errors"
                role="alert"
              ></div>
            </div>
            <div class="form-row">
              <div id="card-cvv" class="field card-cvv"></div>
              <div class="input-errors" id="card-cvv-errors" role="alert"></div>
            </div>
            <div class="form-row">
              <div id="card-postal-code" class="field card-postal-code"></div>
              <div
                class="input-errors"
                id="card-postal-code-errors"
                role="alert"
              ></div>
            </div>
            <div class="form-row">
              <div
                id="card-street-address"
                class="field card-street-address"
              ></div>
              <div
                class="input-errors"
                id="card-street-address-errors"
                role="alert"
              ></div>
            </div>

            {/*<!--Card Response-->*/}
            <div id="card-response" role="alert"></div>
            {/*<!--Button Container-->*/}
            <div class="button-container">
              <button id="submit_button">Submit Payment</button>
            </div>
          </form>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default CloverPayment;
