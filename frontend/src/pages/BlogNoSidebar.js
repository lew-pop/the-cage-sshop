import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../wrappers/blog/BlogPostsNoSidebar";

const BlogNoSidebar = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Blog"
        description="Blog of The Cage SShop Online."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Blog", path: process.env.PUBLIC_URL + pathname }
          ]}
          backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png" 
        />
        <div className="blog-area pt-100 pb-100 blog-no-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    {/* blog posts */}
                    <BlogPostsNoSidebar />
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogNoSidebar;
