import { Fragment } from "react";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import { useListProductDetailsQuery } from "../store/services/product";
import { Row, Col } from "react-bootstrap";
import Product from "../components/util/Product";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";

const MyComponent = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data } = useListProductDetailsQuery(133);
  const product = data;
  
  return (
     // Debug log
    <Fragment>
       <SEO
        titleTemplate="My Component Home"
        description="Auto parts home of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
      <div>
      <h1>Latest Products</h1>
      
        <div>
          <Row>
            {product && (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product  product={product} />
              </Col>
            )}
          </Row>
        </div>
    
    </div>
      </LayoutOne>
    </Fragment>
    
  );
};

export default MyComponent;
