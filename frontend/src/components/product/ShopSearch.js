import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useListProductsByTagQuery } from "../../store/api/product";


const ShopSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const HandleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Fetch products from backend using searchTerm
    const { data, isLoading, error } = useListProductsByTagQuery(searchTerm);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    navigate(`/shop-filtered-grid/${data}`);
  };

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" onSubmit={HandleSearch}>
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
