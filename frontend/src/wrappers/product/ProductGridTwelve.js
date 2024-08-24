import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Slider from '../../components/slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { useListProductsByCategoryQuery } from "../../store/services/product";
import ProductGridSingleTwelve from "../../components/product/ProductGridSingleTwelve";


const settings = {
  loop: true,
  grabCursor: true,
  observer: true,
  observeParents: true,  
  spaceBetween: 30,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const ProductGridTwelve = ({
  spaceBottomClass,
  colorClass,
  titlePriceClass,
  category,
  type,             
  limit,
}) => {
  const { data, isLoading, error } = useListProductsByCategoryQuery(category);
 
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  //const prods = getProducts(data, category, type, limit);
  if (!data?.length) return <p>No products found</p>;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("ProductGridTwelve: ", data)
  return (
    <Slider sliderOptions={settings}>
      {data &&
        data.map((product) => {
          return (
            <SwiperSlide key={product.id}>              
              <ProductGridSingleTwelve
                spaceBottomClass={spaceBottomClass}
                colorClass={colorClass}
                product={product}
                currency={currency}
                cartItem={cartItems.find(
                  (cartItem) => cartItem.id === product.id
                )}
                wishlistItem={wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )}
                compareItem={compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )}
                titlePriceClass={titlePriceClass}
              />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
};

ProductGridTwelve.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGridTwelve;
