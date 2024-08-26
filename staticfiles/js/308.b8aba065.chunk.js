"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[308],{3308:function(e,s,i){i.r(s),i.d(s,{default:function(){return k}});var a=i(5043),r=i(3003),c=i(3216),n=i(2168),l=i(5873),t=i(970),d=i(904),o=i(2731),m=i(3024),u=i(2821),h=i(7362),j=i(579),x=function(e){var s,i=e.product;return(0,j.jsx)("div",{className:"product-large-image-wrapper product-large-image-wrapper--slider",children:null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,j.jsx)(h.A,{options:{spaceBetween:15,slidesPerView:3,loop:!0,navigation:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}},children:i.image.map((function(e,s){return(0,j.jsx)(h.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:e,className:"img-fluid",alt:""})})},s)}))}):null})},p=i(9379),v=i(5544),f=i(5475),N=i(5913),g=i(5721),w=i(4990),b=i(3492),y=function(e){var s=e.product,i=e.discountedPrice,c=e.currency,n=e.finalDiscountedPrice,l=e.finalProductPrice,t=e.cartItems,d=e.wishlistItem,o=e.compareItem,m=(0,r.wA)(),h=(0,a.useState)(s.variation?s.variation[0].color:""),x=(0,v.A)(h,2),y=x[0],A=x[1],k=(0,a.useState)(s.variation?s.variation[0].size[0].name:""),P=(0,v.A)(k,2),C=P[0],S=P[1],z=(0,a.useState)(s.variation?s.variation[0].size[0].stock:s.stock),I=(0,v.A)(z,2),D=I[0],V=I[1],R=(0,a.useState)(1),q=(0,v.A)(R,2),L=q[0],B=q[1],K=(0,u.pQ)(t,s,y,C);return(0,j.jsxs)("div",{className:"product-details-content pro-details-slider-content",children:[(0,j.jsx)("h2",{children:s.name}),(0,j.jsx)("div",{className:"product-details-price justify-content-center",children:null!==i?(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)("span",{children:c.currencySymbol+n})," ",(0,j.jsx)("span",{className:"old",children:c.currencySymbol+l})]}):(0,j.jsxs)("span",{children:[c.currencySymbol+l," "]})}),s.rating&&s.rating>0?(0,j.jsx)("div",{className:"pro-details-rating-wrap justify-content-center",children:(0,j.jsx)("div",{className:"pro-details-rating mr-0",children:(0,j.jsx)(N.A,{ratingValue:Number(s.rating)})})}):"",(0,j.jsx)("div",{className:"pro-details-list",children:(0,j.jsx)("p",{children:s.shortDescription})}),s.variation?(0,j.jsxs)("div",{className:"pro-details-size-color justify-content-center",children:[(0,j.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,j.jsx)("span",{children:"Color"}),(0,j.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,j.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===y?"checked":"",onChange:function(){A(e.color),S(e.size[0].name),V(e.size[0].stock),B(1)}}),(0,j.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,j.jsxs)("div",{className:"pro-details-size",children:[(0,j.jsx)("span",{children:"Size"}),(0,j.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===y?e.size.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,j.jsx)("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){S(e.name),V(e.stock),B(1)}}),(0,j.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,j.jsx)("div",{className:"pro-details-quality justify-content-center",children:(0,j.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,j.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,j.jsxs)("div",{className:"pro-details-quality justify-content-center",children:[(0,j.jsxs)("div",{className:"cart-plus-minus",children:[(0,j.jsx)("button",{onClick:function(){return B(L>1?L-1:1)},className:"dec qtybutton",children:"-"}),(0,j.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:L,readOnly:!0}),(0,j.jsx)("button",{onClick:function(){return B(L<D-K?L+1:L)},className:"inc qtybutton",children:"+"})]}),(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:D&&D>0?(0,j.jsxs)("button",{onClick:function(){return m((0,g.bE)((0,p.A)((0,p.A)({},s),{},{quantity:L,selectedProductColor:y||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:C||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:K>=D,children:[" ","Add To Cart"," "]}):(0,j.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,j.jsx)("div",{className:"pro-details-wishlist",children:(0,j.jsx)("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to wishlist":"Add to wishlist",onClick:function(){return m((0,w.U4)(s))},children:(0,j.jsx)("i",{className:"pe-7s-like"})})}),(0,j.jsx)("div",{className:"pro-details-compare",children:(0,j.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to compare":"Add to compare",onClick:function(){return m((0,b.wL)(s))},children:(0,j.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,j.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,j.jsx)("span",{children:"Categories :"}),(0,j.jsx)("ul",{children:s.category.map((function(e,s){return(0,j.jsx)("li",{children:(0,j.jsx)(f.N_,{to:"/shop-grid-standard",children:e})},s)}))})]}):"",s.tag?(0,j.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,j.jsx)("span",{children:"Tags :"}),(0,j.jsx)("ul",{children:s.tag.map((function(e,s){return(0,j.jsx)("li",{children:(0,j.jsx)(f.N_,{to:"/shop-grid-standard",children:e})},s)}))})]}):"",(0,j.jsx)("div",{className:"pro-details-social",children:(0,j.jsxs)("ul",{className:"justify-content-center",children:[(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"//facebook.com",children:(0,j.jsx)("i",{className:"fa fa-facebook"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"//dribbble.com",children:(0,j.jsx)("i",{className:"fa fa-dribbble"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"//pinterest.com",children:(0,j.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"//twitter.com",children:(0,j.jsx)("i",{className:"fa fa-twitter"})})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:"//linkedin.com",children:(0,j.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})},A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.product,c=(0,r.d4)((function(e){return e.currency})),n=(0,r.d4)((function(e){return e.cart})).cartItems,l=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,t=(0,r.d4)((function(e){return e.compare})).compareItems,d=l.find((function(e){return e.id===a.id})),o=t.find((function(e){return e.id===a.id})),h=(0,u.do)(a.price,a.discount),p=+(a.price*c.currencyRate).toFixed(2),v=+(h*c.currencyRate).toFixed(2);return(0,j.jsx)("div",{className:(0,m.A)("shop-area",s,i),children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-lg-12 mb-50",children:(0,j.jsx)(x,{product:a})}),(0,j.jsx)("div",{className:"col-lg-12 text-center",children:(0,j.jsx)(y,{product:a,discountedPrice:h,currency:c,finalDiscountedPrice:v,finalProductPrice:p,cartItems:n,wishlistItem:d,compareItem:o})})]})})})},k=function(){var e=(0,c.zy)().pathname,s=(0,c.g)().id,i=(0,r.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,j.jsxs)(a.Fragment,{children:[(0,j.jsx)(n.A,{titleTemplate:"Product Page",description:"Product page of The Cage SShop Online | Vape and Smoke Accessories."}),(0,j.jsxs)(l.A,{headerTop:"visible",children:[(0,j.jsx)(t.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}],backgroundImage:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"}),(0,j.jsx)(A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i}),(0,j.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,j.jsx)(d.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},2731:function(e,s,i){var a=i(3024),r=i(3702),c=i(7580),n=i(579);s.A=function(e){var s=e.spaceBottomClass,i=e.productFullDesc;return(0,n.jsx)("div",{className:(0,a.A)("description-review-area",s),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"description-review-wrapper",children:(0,n.jsxs)(r.A.Container,{defaultActiveKey:"productDescription",children:[(0,n.jsxs)(c.A,{variant:"pills",className:"description-review-topbar",children:[(0,n.jsx)(c.A.Item,{children:(0,n.jsx)(c.A.Link,{eventKey:"additionalInfo",children:"Additional Information"})}),(0,n.jsx)(c.A.Item,{children:(0,n.jsx)(c.A.Link,{eventKey:"productDescription",children:"Description"})}),(0,n.jsx)(c.A.Item,{children:(0,n.jsx)(c.A.Link,{eventKey:"productReviews",children:"Reviews(2)"})})]}),(0,n.jsxs)(r.A.Content,{className:"description-review-bottom",children:[(0,n.jsx)(r.A.Pane,{eventKey:"additionalInfo",children:(0,n.jsx)("div",{className:"product-anotherinfo-wrapper",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Weight"})," 400 g"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Dimensions"}),"10 x 10 x 15 cm"," "]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Materials"})," 60% cotton, 40% polyester"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{children:"Other Info"})," American heirloom jean shorts pug seitan letterpress"]})]})})}),(0,n.jsx)(r.A.Pane,{eventKey:"productDescription",children:i}),(0,n.jsx)(r.A.Pane,{eventKey:"productReviews",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-7",children:(0,n.jsxs)("div",{className:"review-wrapper",children:[(0,n.jsxs)("div",{className:"single-review",children:[(0,n.jsx)("div",{className:"review-img",children:(0,n.jsx)("img",{src:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"review-content",children:[(0,n.jsxs)("div",{className:"review-top-wrap",children:[(0,n.jsxs)("div",{className:"review-left",children:[(0,n.jsx)("div",{className:"review-name",children:(0,n.jsx)("h4",{children:"White Lewis"})}),(0,n.jsxs)("div",{className:"review-rating",children:[(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"})]})]}),(0,n.jsx)("div",{className:"review-left",children:(0,n.jsx)("button",{children:"Reply"})})]}),(0,n.jsx)("div",{className:"review-bottom",children:(0,n.jsx)("p",{children:"Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla."})})]})]}),(0,n.jsxs)("div",{className:"single-review child-review",children:[(0,n.jsx)("div",{className:"review-img",children:(0,n.jsx)("img",{src:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"review-content",children:[(0,n.jsxs)("div",{className:"review-top-wrap",children:[(0,n.jsxs)("div",{className:"review-left",children:[(0,n.jsx)("div",{className:"review-name",children:(0,n.jsx)("h4",{children:"White Lewis"})}),(0,n.jsxs)("div",{className:"review-rating",children:[(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"})]})]}),(0,n.jsx)("div",{className:"review-left",children:(0,n.jsx)("button",{children:"Reply"})})]}),(0,n.jsx)("div",{className:"review-bottom",children:(0,n.jsx)("p",{children:"Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla."})})]})]})]})}),(0,n.jsx)("div",{className:"col-lg-5",children:(0,n.jsxs)("div",{className:"ratting-form-wrapper pl-50",children:[(0,n.jsx)("h3",{children:"Add a Review"}),(0,n.jsx)("div",{className:"ratting-form",children:(0,n.jsxs)("form",{action:"#",children:[(0,n.jsxs)("div",{className:"star-box",children:[(0,n.jsx)("span",{children:"Your rating:"}),(0,n.jsxs)("div",{className:"ratting-star",children:[(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"}),(0,n.jsx)("i",{className:"fa fa-star"})]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"rating-form-style mb-10",children:(0,n.jsx)("input",{placeholder:"Name",type:"text"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"rating-form-style mb-10",children:(0,n.jsx)("input",{placeholder:"Email",type:"email"})})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"rating-form-style form-submit",children:[(0,n.jsx)("textarea",{name:"Your Review",placeholder:"Message",defaultValue:""}),(0,n.jsx)("input",{type:"submit",defaultValue:"Submit"})]})})]})]})})]})})]})})]})]})})})})}}}]);
//# sourceMappingURL=308.b8aba065.chunk.js.map