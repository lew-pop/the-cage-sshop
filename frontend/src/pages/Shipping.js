import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import CheckoutSteps from "../components/cage/CheckoutSteps";
import { Link, useLocation } from "react-router-dom";
import { saveShippingAddress } from "../store/slices/cart-slice";

const Shipping = () => {
  let { pathname } = useLocation();

  const { shippingAddress } = useSelector((state) => state.cart);

  const dispatch = useDispatch();  
  
  const [formData, setFormData] = useState({
    state: "",
    streetAddress: "",
    apartment: "",
    city: "",
    postcode: "",
    orderNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
   const handleClick = () => {
    const { state, address, apartment, city, postcode, notes } = formData;
     dispatch(
       saveShippingAddress({ address, apartment, city, postcode, state, notes })
     );
   };

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of The Cage SShop, vapes and smoking accessories."
      />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shipping", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        <CheckoutSteps step1 step2 />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Shipping Details</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Street Address</label>
                        <input
                          required
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                          name="streetAddress"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                        <input
                          placeholder="Apartment, suite, unit etc."
                          type="text"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Town / City</label>
                        <input
                          required
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input
                          required
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-select mb-20">
                        <label>State</label>
                        <select
                          required
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                        >
                          <option>Select a state</option>
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>Arizona</option>
                          <option>Arkansas</option>
                          <option>California</option>
                          <option>Colorado</option>
                          <option>Connecticut</option>
                          <option>Delaware</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Hawaii</option>
                          <option>Idaho</option>
                          <option>Illinois</option>
                          <option>Indiana</option>
                          <option>Iowa</option>
                          <option>Kansas</option>
                          <option>Kentucky</option>
                          <option>Louisiana</option>
                          <option>Maine</option>
                          <option>Maryland</option>
                          <option>Massachusetts</option>
                          <option>Michigan</option>
                          <option>Minnesota</option>
                          <option>Mississippi</option>
                          <option>Missouri</option>
                          <option>Montana</option>
                          <option>Nebraska</option>
                          <option>Nevada</option>
                          <option>New Hampshire</option>
                          <option>New Jersey</option>
                          <option>New Mexico</option>
                          <option>New York</option>
                          <option>North Carolina</option>
                          <option>North Dakota</option>
                          <option>Ohio</option>
                          <option>Oklahoma</option>
                          <option>Oregon</option>
                          <option>Pennsylvania</option>
                          <option>Rhode Island</option>
                          <option>South Dakota</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Utah</option>
                          <option>Vermount</option>
                          <option>Virginia</option>
                          <option>Washington</option>
                          <option>West Virgina</option>
                          <option>Wisconsin</option>
                          <option>Wyoming</option>
                          {formData.state}
                        </select>
                      </div>
                    </div>
                    <div className="additional-info-wrap">
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="place-order mt-25">
                      <Link
                        onClick={handleClick}
                        to={{
                          pathname: process.env.PUBLIC_URL + "/payment",
                          state: { formData },
                        }}
                        className="btn-hover"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};
export default Shipping;
