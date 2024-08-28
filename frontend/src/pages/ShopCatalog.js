import { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../wrappers/product/ShopSidebar";
import ShopTopbar from "../wrappers/product/ShopTopbar";
import ShopProducts from "../wrappers/product/ShopProducts";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";
import { useListProductsByTagQuery } from "../store/api/product";

const ShopCatalog = () => {
  let { id } = useParams();
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("category");
  const [sortValue, setSortValue] = useState(id);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedCount, setSortedCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const { data, isLoading, isError, error } = useListProductsByTagQuery(id);
  console.log("Sorted Products: ", data);
  
  const { products } = useSelector((state) => state.product);
  let { pathname } = useLocation();
  const getLayout = (layout) => {
    setLayout(layout);
  };
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };  
  useEffect(() => {
    if (data) {
      setSortedCount(data.length);
    }
    if (products) {
      setProductCount(products.length);
    }
  }, [data, isLoading, error]);

  console.log("Count: ", products);
  return (
    <Fragment>
      <SEO
        titleTemplate="The Cage Product Catalog"
        description="The Cage SShop Product Catalog."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop", path: process.env.PUBLIC_URL + pathname },
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getSortParams}
                  productCount={productCount}
                  sortedProductCount={sortedCount}
                />
                {isError && (
                  <Message variant="danger">
                    {error?.data?.detail || error.error}
                  </Message>
                )}
                {isLoading && <Loader />}
                {/* shop page content default */}
                <ShopProducts layout={layout} products={data} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={productCount}
                    pageLimit={15}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopCatalog;
