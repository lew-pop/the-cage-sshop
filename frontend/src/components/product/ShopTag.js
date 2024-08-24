import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useListProductsByTagQuery } from "../../store/services/product";

import { setActiveSort } from "../../helpers/product";

const ShopTag = ({ tags, getSortParams }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState("");
  const navigate = useNavigate();

  const { data, isLoading, error } = useListProductsByTagQuery(searchTerm);
    
  useEffect(() => {   
    setProductData(data);

    if (productData) {
      navigate(`/shop-filtered-grid/${productData}`);
    }
  }, [searchTerm, productData, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
      <div className="sidebar-widget-tag mt-25">
        {tags ? (
          <ul>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={e => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                      setSearchTerm(key);                      
                    }}
                  >
                    {tag}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No tags found"
        )}
      </div>
    </div>
  );
};

ShopTag.propTypes = {
  getSortParams: PropTypes.func,
  tags: PropTypes.array
};

export default ShopTag;
