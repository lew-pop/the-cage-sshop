import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import categoryData from "../../data/category/shop-by-brand.json";
import CategoryFourSingle from "../../components/category/CategoryFourSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle.js";

// swiper slider settings
const settings = {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
};

const CategoryfourSlider = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("collections-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Shop By Brand"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass=""
        />
        <div className="collection-wrap">
          <div className="collection-active">
            {categoryData && (
              <Swiper options={settings}>
                {categoryData.map((single, key) => (
                  <SwiperSlide key={key}>
                    <CategoryFourSingle data={single} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryfourSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CategoryfourSlider;
