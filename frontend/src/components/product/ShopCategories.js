import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useListProductsByCategoryQuery } from "../../store/services/product";
import { setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getSortParams }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState("");
  const navigate = useNavigate();

  const { data, isLoading, error } = useListProductsByCategoryQuery(searchTerm);

  useEffect(() => {
    setProductData(data);

    if (productData) {
      navigate(`/shop-filtered-grid/${productData}`);
    }
  }, [searchTerm, productData, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e) => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={(e) => {
                        getSortParams("category", category);
                        setActiveSort(e);
                        setSearchTerm(category);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopCategories;
