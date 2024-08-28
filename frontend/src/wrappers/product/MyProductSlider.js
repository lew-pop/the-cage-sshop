import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "../../components/section-title/SectionTitle.js";
import SectionTitleFour from "../../components/section-title/SectionTitleFour";
import ProductGridTwelve from "./ProductGridTwelve";

const MyProductSlider = ({
  spaceBottomClass,
  category,
  colorClass,
  modelName,
}) => {
  return (
    <div className={clsx("related-product-area", spaceBottomClass, colorClass)}>
      <div className="container">
      <SectionTitle
          titleText="Shop Our Products"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass=""
        />
        <SectionTitleFour
          titleText={modelName}
          positionClass="text-center"
          customClass="my-product-title"
        />
        <ProductGridTwelve
          category={category}
          limit={20}
          colorClass={colorClass}
        />
      </div>
    </div>
  );
};

MyProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default MyProductSlider;
