import PropTypes from "prop-types";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopTag from "../../components/product/ShopTag";
import { useListProductsQuery } from "../../store/services/product";
import { setProducts } from "../../store/slices/product-slice";
import { store } from "../../store/store";

const ShopSidebar = ({  products, getSortParams, sideSpaceClass }) => {
 
  const uniqueCategories = getIndividualCategories(products);
  const uniqueTags = getIndividualTags(products);
  
  
  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />

      {/* filter by tag */}
      <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string,
};

export default ShopSidebar;
