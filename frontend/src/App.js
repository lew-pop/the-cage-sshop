import React, { Suspense, lazy } from 'react';
import ScrollToTop from "./helpers/scroll-top";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AgeVerification from "./components/age-verification/AgeVerification";

// home page
const Home = lazy(() => import("./pages/Home"));
// shop pages
const ShopGridStandard = lazy(() => import("./pages/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/ShopGridFilter"));
const ShopFilteredGrid = lazy(() => import("./pages/ShopFilteredGrid"));
const ShopBrandGrid = lazy(() => import("./pages/ShopBrandGrid"));

// product pages
const Product = lazy((productId) => import("./pages/Product"));
const ProductTabLeft = lazy(() => import("./pages/ProductTabLeft"));
const ProductSticky = lazy(() => import("./pages/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/ProductSlider"));
const ProductFixedImage = lazy(() =>  import("./pages/ProductFixedImage"));

// other pages
//const MyComponent = lazy(() => import("./pages/MyComponent"))
const MyAccount = lazy(() => import("./pages/MyAccount"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));
const CloverPayment = lazy(() => import("./pages/CloverPayment"));
const ConfirmEmail = lazy(() => import("./pages/ConfirmEmail"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  /*const [showAgeVerification, setShowAgeVerification] = useState(false);

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (!ageVerified) {
      setShowAgeVerification(true);
    }
  }, []);

  if (showAgeVerification) {
    return <AgeVerification />;  // Render only the age verification if needed
  }*/
  
  return (
    <Router>
      <AgeVerification />
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="cage-preloader-wrapper">
              <div className="cage-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />
            {/* 
             <Route path={process.env.PUBLIC_URL + "/my-component"} element={<MyComponent />} />
            Shop pages 
            */}
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-filtered-grid/:id"}
              element={<ShopFilteredGrid />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-brand-grid/:id"}
              element={<ShopBrandGrid />}
            />
            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              element={<ProductSticky />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />
            {/* Other pages */}          
            <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              element={<MyAccount />}
            /> 
            <Route
              path={process.env.PUBLIC_URL + "/login"}
              element={<Login />}
            />   
            <Route
              path={process.env.PUBLIC_URL + "/register"}
              element={<Register />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/confirm-email"}
              element={<ConfirmEmail />}
            />            
            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
                      
            <Route
              path={process.env.PUBLIC_URL + "/clover/:id"}
              element={<CloverPayment />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />
            <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
