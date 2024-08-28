import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../wrappers/product/ProductImageDescription";
import { useGetProductQuery } from '../store/api/product'
/*import Loader from "../components/util/Loader";
import Message from "../components/util/Message";*/

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  console.log("Product Page ID:", id); // Debug log
  const { data, isLoading, error } = useGetProductQuery(id);

  console.log("Product Page Data:", data); // Debug log
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of The Cage Online SShop Online | Vape and Smoke Accessories."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
           backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />
        

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={data}
        />       

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
