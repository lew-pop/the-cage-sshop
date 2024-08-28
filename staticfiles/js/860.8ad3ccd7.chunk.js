"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[860],{5908:function(e,t,r){r.r(t);var a=r(5544),n=r(5043),s=r(7804),i=r(3003),o=r(3216),c=r(1966),u=r(2821),d=r(2168),l=r(5873),f=r(970),g=r(4159),h=r(7446),p=r(7577),m=r(8300),v=r(7975),x=(r(6749),r(579));t.default=function(){var e=(0,o.g)().id,t=(0,c.WI)(),r=t.data,j=t.error,b=t.isLoading;v.M_.dispatch((0,m.d9)(r));var y=(0,n.useState)("grid three-column"),P=(0,a.A)(y,2),N=P[0],A=P[1],w=(0,n.useState)("category"),C=(0,a.A)(w,2),S=C[0],T=C[1],L=(0,n.useState)(e),k=(0,a.A)(L,2),q=k[0],O=k[1],D=(0,n.useState)(""),I=(0,a.A)(D,2),E=I[0],F=I[1],B=(0,n.useState)(""),R=(0,a.A)(B,2),K=R[0],M=R[1],Q=(0,n.useState)(0),H=(0,a.A)(Q,2),Z=H[0],G=H[1],U=(0,n.useState)(1),W=(0,a.A)(U,2),z=W[0],V=W[1],_=(0,n.useState)([]),J=(0,a.A)(_,2),X=J[0],Y=J[1],$=(0,n.useState)([]),ee=(0,a.A)($,2),te=ee[0],re=ee[1],ae=(0,i.d4)((function(e){return e.product})).products,ne=(0,o.zy)().pathname;return(0,n.useEffect)((function(){var e=(0,u.Gj)(ae,S,q),t=(0,u.Gj)(e,E,K);re(e=t),Y(e.slice(Z,Z+15))}),[Z,ae,S,q,E,K]),b?(0,x.jsx)("div",{children:"Loading..."}):j?(0,x.jsxs)("div",{children:["Error: ",j.message]}):(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)(d.A,{titleTemplate:"The Cage Product Catalog",description:"The Cage SShop Product Catalog."}),(0,x.jsxs)(l.A,{headerTop:"visible",children:[(0,x.jsx)(f.A,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+ne}],backgroundImage:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"}),(0,x.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,x.jsx)(g.A,{products:ae,getSortParams:function(e,t){T(e),O(t)},sideSpaceClass:"mr-30"})}),(0,x.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,x.jsx)(h.A,{getLayout:function(e){A(e)},getFilterSortParams:function(e,t){F(e),M(t)},productCount:ae.length,sortedProductCount:X.length}),(0,x.jsx)(p.A,{layout:N,products:X}),(0,x.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,x.jsx)(s.A,{totalRecords:te.length,pageLimit:15,pageNeighbours:2,setOffset:G,currentPage:z,setCurrentPage:V,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},1966:function(e,t,r){r.d(t,{Fc:function(){return i},LZ:function(){return o},WI:function(){return n},lZ:function(){return s},tA:function(){return c}});var a=r(6749).l.injectEndpoints({endpoints:function(e){return{listProducts:e.query({query:function(){return"products/"},providesTags:["Product"]}),listProductsByCategory:e.query({query:function(e){return"products/category/".concat(e,"/")},providesTags:["Product"]}),listProductsByTag:e.query({query:function(e){return"products/tag/".concat(e,"/")},providesTags:["Product"]}),listTopProducts:e.query({query:function(){return"products/top/"},providesTags:["Product"]}),getProduct:e.query({query:function(e){return"products/".concat(e,"/")},providesTags:function(e,t,r){return[{type:"Product",id:r}]}}),getProducts:e.query({query:function(e){return"products/query/".concat(e,"/")},providesTags:["Product"]}),deleteProduct:e.mutation({query:function(e){return{url:"products/delete/".concat(e,"/"),method:"DELETE"}},invalidatesTags:["Product"]}),createProduct:e.mutation({query:function(){return{url:"products/create/",method:"POST",body:{}}},invalidatesTags:["Product"]}),updateProduct:e.mutation({query:function(e){return{url:"products/update/".concat(e.id,"/"),method:"PUT",body:e}},invalidatesTags:function(e,t,r){return[{type:"Product",id:r.id}]}}),createProductReview:e.mutation({query:function(e){var t=e.productId,r=e.review;return{url:"products/".concat(t,"/reviews/"),method:"POST",body:r}},invalidatesTags:function(e,t,r){return[{type:"Product",id:r.productId}]}})}}}),n=a.useListProductsQuery,s=a.useListProductsByCategoryQuery,i=a.useListProductsByTagQuery,o=a.useListTopProductsQuery,c=a.useGetProductQuery;a.useGetProductsQuery,a.useDeleteProductMutation,a.useCreateProductMutation,a.useUpdateProductMutation,a.useCreateProductReviewMutation},4159:function(e,t,r){r.d(t,{A:function(){return g}});var a=r(3024),n=r(2821),s=r(5544),i=r(5043),o=r(3216),c=r(1966),u=r(579),d=function(){var e=(0,i.useState)(""),t=(0,s.A)(e,2),r=t[0],a=t[1],n=(0,o.Zp)();return(0,u.jsxs)("div",{className:"sidebar-widget",children:[(0,u.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,u.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,u.jsxs)("form",{className:"pro-sidebar-search-form",onSubmit:function(e){e.preventDefault();var t=(0,c.Fc)(r),a=t.data,s=t.isLoading,i=t.error;return s?(0,u.jsx)("div",{children:"Loading..."}):i?(0,u.jsxs)("div",{children:["Error: ",i.message]}):void n("/shop-filtered-grid/".concat(a))},children:[(0,u.jsx)("input",{type:"text",placeholder:"Search here...",value:r,onChange:function(e){return a(e.target.value)}}),(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("i",{className:"pe-7s-search"})})]})})]})},l=function(e){var t=e.categories,r=e.getSortParams,a=(0,o.Zp)(),c=(0,i.useState)(""),d=(0,s.A)(c,2),l=d[0],f=d[1];return(0,i.useEffect)((function(){l&&a("/shop-catalog/".concat(l))}),[l]),(0,u.jsxs)("div",{className:"sidebar-widget",children:[(0,u.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,u.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("div",{className:"sidebar-widget-list-left",children:(0,u.jsxs)("button",{onClick:function(e){r("category",""),(0,n.nL)(e)},children:[(0,u.jsx)("span",{className:"checkmark"})," All Categories"]})})}),t.map((function(e,t){return(0,u.jsx)("li",{children:(0,u.jsx)("div",{className:"sidebar-widget-list-left",children:(0,u.jsxs)("button",{onClick:function(t){r("category",e),(0,n.nL)(t),f(e)},children:[" ",(0,u.jsx)("span",{className:"checkmark"})," ",e," "]})})},t)}))]}):"No categories found"})]})},f=function(e){var t=e.tags,r=e.getSortParams,a=(0,o.Zp)(),c=(0,i.useState)(""),d=(0,s.A)(c,2),l=d[0],f=d[1];return(0,i.useEffect)((function(){l&&a("/shop-catalog/".concat(l))}),[l]),(0,u.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,u.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,u.jsx)("div",{className:"sidebar-widget-tag mt-25",children:t?(0,u.jsx)("ul",{children:t.map((function(e,t){return(0,u.jsx)("li",{children:(0,u.jsx)("button",{onClick:function(t){r("tag",e),(0,n.nL)(t),f(e)},children:e})},t)}))}):"No tags found"})]})},g=function(e){var t=e.products,r=e.getSortParams,s=e.sideSpaceClass,i=(0,n.SC)(t),o=(0,n.VI)(t);return(0,u.jsxs)("div",{className:(0,a.A)("sidebar-style",s),children:[(0,u.jsx)(d,{}),(0,u.jsx)(l,{categories:i,getSortParams:r}),(0,u.jsx)(f,{tags:o,getSortParams:r})]})}},7446:function(e,t,r){r.d(t,{A:function(){return o}});var a=r(5043),n=r(2821),s=r(579),i=function(e){var t=e.getLayout,r=e.getFilterSortParams,a=e.productCount,i=e.sortedProductCount;return(0,s.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,s.jsxs)("div",{className:"select-shoing-wrap",children:[(0,s.jsx)("div",{className:"shop-select",children:(0,s.jsxs)("select",{onChange:function(e){return r("filterSort",e.target.value)},children:[(0,s.jsx)("option",{value:"default",children:"Default"}),(0,s.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,s.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,s.jsxs)("p",{children:["Showing ",i," of ",a," result"]})]}),(0,s.jsxs)("div",{className:"shop-tab",children:[(0,s.jsx)("button",{onClick:function(e){t("grid two-column"),(0,n.L)(e)},children:(0,s.jsx)("i",{className:"fa fa-th-large"})}),(0,s.jsx)("button",{onClick:function(e){t("grid three-column"),(0,n.L)(e)},children:(0,s.jsx)("i",{className:"fa fa-th"})}),(0,s.jsx)("button",{onClick:function(e){t("list"),(0,n.L)(e)},children:(0,s.jsx)("i",{className:"fa fa-list-ul"})})]})]})},o=function(e){var t=e.getLayout,r=e.getFilterSortParams,n=e.productCount,o=e.sortedProductCount;return(0,s.jsx)(a.Fragment,{children:(0,s.jsx)(i,{getLayout:t,getFilterSortParams:r,productCount:n,sortedProductCount:o})})}},2673:function(e,t,r){r.d(t,{A:function(){return d}});var a=r(5544),n=r(5043),s=(r(2667),r(8232),r(1456));r(6723),r(1342);r(4723),new WeakMap;var i=r(4140),o=r(579),c=["onKeyDown"];var u=n.forwardRef((function(e,t){var r,n=e.onKeyDown,u=function(e,t){if(null==e)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,c),d=(0,i.Am)(Object.assign({tagName:"a"},u)),l=(0,a.A)(d,1)[0],f=(0,s.A)((function(e){l.onKeyDown(e),null==n||n(e)}));return(r=u.href)&&"#"!==r.trim()&&"button"!==u.role?(0,o.jsx)("a",Object.assign({ref:t},u,{onKeyDown:n})):(0,o.jsx)("a",Object.assign({ref:t},u,l,{onKeyDown:f}))}));u.displayName="Anchor";var d=u},4140:function(e,t,r){r.d(t,{Am:function(){return o}});var a=r(5544),n=r(5043),s=r(579),i=["as","disabled"];function o(e){var t=e.tagName,r=e.disabled,a=e.href,n=e.target,s=e.rel,i=e.role,o=e.onClick,c=e.tabIndex,u=void 0===c?0:c,d=e.type;t||(t=null!=a||null!=n||null!=s?"a":"button");var l={tagName:t};if("button"===t)return[{type:d||"button",disabled:r},l];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===t&&(a||(a="#"),r&&(a=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:r?void 0:u,href:a,target:"a"===t?n:void 0,"aria-disabled":r||void 0,rel:"a"===t?s:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},l]}var c=n.forwardRef((function(e,t){var r=e.as,n=e.disabled,c=function(e,t){if(null==e)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,i),u=o(Object.assign({tagName:r,disabled:n},c)),d=(0,a.A)(u,2),l=d[0],f=d[1].tagName;return(0,s.jsx)(f,Object.assign({},c,l,{ref:t}))}));c.displayName="Button",t.Ay=c},9397:function(e,t,r){r.d(t,{A:function(){return m}});var a=r(9379),n=r(45),s=r(8139),i=r.n(s),o=r(5043),c=r(7852),u=r(2673),d=r(579),l=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.active,o=void 0!==s&&s,f=e.children,g=e.className,h=e.as,p=void 0===h?"li":h,m=e.linkAs,v=void 0===m?u.A:m,x=e.linkProps,j=void 0===x?{}:x,b=e.href,y=e.title,P=e.target,N=(0,n.A)(e,l),A=(0,c.oU)(r,"breadcrumb-item");return(0,d.jsx)(p,(0,a.A)((0,a.A)({ref:t},N),{},{className:i()(A,g,{active:o}),"aria-current":o?"page":void 0,children:o?f:(0,d.jsx)(v,(0,a.A)((0,a.A)({},j),{},{href:b,title:y,target:P,children:f}))}))}));f.displayName="BreadcrumbItem";var g=f,h=["bsPrefix","className","listProps","children","label","as"],p=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,o=e.listProps,u=void 0===o?{}:o,l=e.children,f=e.label,g=void 0===f?"breadcrumb":f,p=e.as,m=void 0===p?"nav":p,v=(0,n.A)(e,h),x=(0,c.oU)(r,"breadcrumb");return(0,d.jsx)(m,(0,a.A)((0,a.A)({"aria-label":g,className:s,ref:t},v),{},{children:(0,d.jsx)("ol",(0,a.A)((0,a.A)({},u),{},{className:i()(x,null==u?void 0:u.className),children:l}))}))}));p.displayName="Breadcrumb";var m=Object.assign(p,{Item:g})}}]);
//# sourceMappingURL=860.8ad3ccd7.chunk.js.map