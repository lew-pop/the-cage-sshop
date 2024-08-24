"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[770],{7770:function(e,t,r){r.r(t);var s=r(5544),a=r(5043),n=r(7804),o=r(3003),i=r(3216),u=r(2821),c=r(2168),d=r(5873),l=r(970),g=r(7720),p=r(5929),h=r(7577),m=r(579);t.default=function(){var e=(0,i.zy)().pathname,t=(0,i.g)().id,r=(0,a.useState)("grid three-column"),f=(0,s.A)(r,2),x=f[0],j=f[1],v=(0,a.useState)("brand"),P=(0,s.A)(v,2),y=P[0],b=P[1],S=(0,a.useState)(t),C=(0,s.A)(S,2),A=C[0],N=C[1],T=(0,a.useState)(""),L=(0,s.A)(T,2),w=L[0],q=L[1],k=(0,a.useState)(""),E=(0,s.A)(k,2),F=E[0],Z=E[1],I=(0,a.useState)(0),Q=(0,s.A)(I,2),B=Q[0],M=Q[1],D=(0,a.useState)(1),G=(0,s.A)(D,2),O=G[0],R=G[1],z=(0,a.useState)([]),U=(0,s.A)(z,2),H=U[0],V=U[1],W=(0,a.useState)([]),J=(0,s.A)(W,2),K=J[0],X=J[1],Y=(0,o.d4)((function(e){return e.product})).products;return(0,a.useEffect)((function(){var e=(0,u.Gj)(Y,y,A),t=(0,u.Gj)(e,w,F);X(e=t),V(e.slice(B,B+15))}),[B,Y,y,A,w,F]),(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(c.A,{titleTemplate:"The Cage Product Catalog",description:"The Cage SShop Product Catalog."}),(0,m.jsxs)(d.A,{headerTop:"visible",children:[(0,m.jsx)(l.A,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+e}],backgroundImage:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"}),(0,m.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,m.jsx)(g.A,{products:Y,getSortParams:function(e,t){b(e),N(t)},sideSpaceClass:"mr-30"})}),(0,m.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,m.jsx)(p.A,{getLayout:function(e){j(e)},getFilterSortParams:function(e,t){q(e),Z(t)},productCount:Y.length,sortedProductCount:H.length}),(0,m.jsx)(h.A,{layout:x,products:H}),(0,m.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,m.jsx)(n.A,{totalRecords:K.length,pageLimit:15,pageNeighbours:2,setOffset:M,currentPage:O,setCurrentPage:R,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},7944:function(e,t,r){r.d(t,{Fc:function(){return o},LZ:function(){return i},WI:function(){return a},lZ:function(){return n},tA:function(){return u}});var s=r(8381).F.injectEndpoints({endpoints:function(e){return{listProducts:e.query({query:function(){return"/products/"},providesTags:["Product"]}),listProductsByCategory:e.query({query:function(e){return"/products/category/".concat(e,"/")},providesTags:["Product"]}),listProductsByTag:e.query({query:function(e){return"/products/tag/".concat(e,"/")},providesTags:["Product"]}),listTopProducts:e.query({query:function(){return"/products/top/"},providesTags:["Product"]}),getProduct:e.query({query:function(e){return"/products/".concat(e,"/")},providesTags:function(e,t,r){return[{type:"Product",id:r}]}}),deleteProduct:e.mutation({query:function(e){return{url:"/products/delete/".concat(e,"/"),method:"DELETE"}},invalidatesTags:["Product"]}),createProduct:e.mutation({query:function(){return{url:"/products/create/",method:"POST",body:{}}},invalidatesTags:["Product"]}),updateProduct:e.mutation({query:function(e){return{url:"/products/update/".concat(e.id,"/"),method:"PUT",body:e}},invalidatesTags:function(e,t,r){return[{type:"Product",id:r.id}]}}),createProductReview:e.mutation({query:function(e){var t=e.productId,r=e.review;return{url:"/products/".concat(t,"/reviews/"),method:"POST",body:r}},invalidatesTags:function(e,t,r){return[{type:"Product",id:r.productId}]}})}}}),a=s.useListProductsQuery,n=s.useListProductsByCategoryQuery,o=s.useListProductsByTagQuery,i=s.useListTopProductsQuery,u=s.useGetProductQuery;s.useDeleteProductMutation,s.useCreateProductMutation,s.useUpdateProductMutation,s.useCreateProductReviewMutation},7720:function(e,t,r){r.d(t,{A:function(){return p}});var s=r(3024),a=r(2821),n=r(5544),o=r(5043),i=r(3216),u=r(7944),c=r(579),d=function(){var e=(0,o.useState)(""),t=(0,n.A)(e,2),r=t[0],s=t[1],a=(0,i.Zp)();return(0,c.jsxs)("div",{className:"sidebar-widget",children:[(0,c.jsx)("h4",{className:"pro-sidebar-title",children:"Search "}),(0,c.jsx)("div",{className:"pro-sidebar-search mb-50 mt-25",children:(0,c.jsxs)("form",{className:"pro-sidebar-search-form",onSubmit:function(e){e.preventDefault();var t=(0,u.Fc)(r),s=t.data,n=t.isLoading,o=t.error;return n?(0,c.jsx)("div",{children:"Loading..."}):o?(0,c.jsxs)("div",{children:["Error: ",o.message]}):void a("/shop-filtered-grid/".concat(s))},children:[(0,c.jsx)("input",{type:"text",placeholder:"Search here...",value:r,onChange:function(e){return s(e.target.value)}}),(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)("i",{className:"pe-7s-search"})})]})})]})},l=function(e){var t=e.categories,r=e.getSortParams,s=(0,o.useState)(""),d=(0,n.A)(s,2),l=d[0],g=d[1],p=(0,o.useState)(""),h=(0,n.A)(p,2),m=h[0],f=h[1],x=(0,i.Zp)(),j=(0,u.lZ)(l),v=j.data,P=j.isLoading,y=j.error;return(0,o.useEffect)((function(){f(v),m&&x("/shop-filtered-grid/".concat(m))}),[l,m,x]),P?(0,c.jsx)("div",{children:"Loading..."}):y?(0,c.jsxs)("div",{children:["Error: ",y.message]}):(0,c.jsxs)("div",{className:"sidebar-widget",children:[(0,c.jsx)("h4",{className:"pro-sidebar-title",children:"Categories "}),(0,c.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("div",{className:"sidebar-widget-list-left",children:(0,c.jsxs)("button",{onClick:function(e){r("category",""),(0,a.nL)(e)},children:[(0,c.jsx)("span",{className:"checkmark"})," All Categories"]})})}),t.map((function(e,t){return(0,c.jsx)("li",{children:(0,c.jsx)("div",{className:"sidebar-widget-list-left",children:(0,c.jsxs)("button",{onClick:function(t){r("category",e),(0,a.nL)(t),g(e)},children:[" ",(0,c.jsx)("span",{className:"checkmark"})," ",e," "]})})},t)}))]}):"No categories found"})]})},g=function(e){var t=e.tags,r=e.getSortParams,s=(0,o.useState)(""),d=(0,n.A)(s,2),l=d[0],g=d[1],p=(0,o.useState)(""),h=(0,n.A)(p,2),m=h[0],f=h[1],x=(0,i.Zp)(),j=(0,u.Fc)(l),v=j.data,P=j.isLoading,y=j.error;return(0,o.useEffect)((function(){f(v),m&&x("/shop-filtered-grid/".concat(m))}),[l,m,x]),P?(0,c.jsx)("div",{children:"Loading..."}):y?(0,c.jsxs)("div",{children:["Error: ",y.message]}):(0,c.jsxs)("div",{className:"sidebar-widget mt-50",children:[(0,c.jsx)("h4",{className:"pro-sidebar-title",children:"Tag "}),(0,c.jsx)("div",{className:"sidebar-widget-tag mt-25",children:t?(0,c.jsx)("ul",{children:t.map((function(e,t){return(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:function(s){r("tag",e),(0,a.nL)(s),g(t)},children:e})},t)}))}):"No tags found"})]})},p=function(e){var t=e.products,r=e.getSortParams,n=e.sideSpaceClass,o=(0,a.SC)(t),i=(0,a.VI)(t);return(0,c.jsxs)("div",{className:(0,s.A)("sidebar-style",n),children:[(0,c.jsx)(d,{}),(0,c.jsx)(l,{categories:o,getSortParams:r}),(0,c.jsx)(g,{tags:i,getSortParams:r})]})}},5929:function(e,t,r){var s=r(5043),a=r(1172),n=r(579);t.A=function(e){var t=e.getLayout,r=e.getFilterSortParams,o=e.productCount,i=e.sortedProductCount,u=e.products,c=e.getSortParams;return(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(a.A,{getLayout:t,getFilterSortParams:r,productCount:o,sortedProductCount:i,products:u,getSortParams:c})})}}}]);
//# sourceMappingURL=770.3726afcd.chunk.js.map