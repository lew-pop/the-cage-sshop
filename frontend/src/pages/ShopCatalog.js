import { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useListProductsByCategoryQuery, useListProductsByTagQuery } from "../store/services/product";
import { getSortedProducts } from "../helpers/product";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../wrappers/product/ShopSidebar";
import ShopTopbar from "../wrappers/product/ShopTopbar";
import ShopProducts from "../wrappers/product/ShopProducts";

const ShopFilteredGrid = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const [sortType, setSortType] = useState("category");
  const [sortValue, setSortValue] = useState(id);
  
  const { data, isLoading, error } = useListProductsByTagQuery(id);
  const [layout, setLayout] = useState("grid three-column");
  
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  console.log("Data: ", data);
  const pageLimit = 15;

  const getLayout = (layout) => {
    setLayout(layout);
  };

 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
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
                 
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={products.length}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={data} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={data.length}
                    pageLimit={pageLimit}
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

export default ShopFilteredGrid;
