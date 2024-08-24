import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import BannerOne from "../wrappers/banner/BannerOne";
import TextGridOne from "../wrappers/text-grid/TextGridOne";
import BrandLogoSliderOne from "../wrappers/brand-logo/BrandLogoSliderOne";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of The Cage SShop Online."
      /> 
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "About us", path: process.env.PUBLIC_URL + pathname }
          ]} 
           backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        <BannerOne spaceBottomClass="pb-70" />

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

      

       

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
