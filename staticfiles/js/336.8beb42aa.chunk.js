"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[336],{931:function(r,e,n){n.d(e,{FE:function(){return o},Uc:function(){return i},xj:function(){return a}});var t=n(8314).J.injectEndpoints({endpoints:function(r){return{createOrder:r.mutation({query:function(r){return{url:"orders/add/",method:"POST",body:r}},invalidatesTags:["Order"]}),listOrderDetails:r.query({query:function(r){return"orders/".concat(r,"/")},providesTags:function(r,e,n){return[{type:"Order",id:n}]}}),payOrder:r.mutation({query:function(r){var e=r.id,n=r.paymentResult;return{url:"orders/".concat(e,"/pay/"),method:"PUT",body:n}},invalidatesTags:function(r,e,n){return[{type:"Order",id:n.id}]}}),deliverOrder:r.mutation({query:function(r){return{url:"orders/".concat(r,"/deliver/"),method:"PUT",body:{}}},invalidatesTags:function(r,e,n){return[{type:"Order",id:n}]}}),listMyOrders:r.query({query:function(){return"orders/myorders/"},providesTags:["Order"]}),listOrders:r.query({query:function(){return"orders/"},providesTags:["Order"]})}}}),a=t.useCreateOrderMutation,i=t.useListOrderDetailsQuery,o=t.usePayOrderMutation;t.useDeliverOrderMutation,t.useListMyOrdersQuery,t.useListOrdersQuery},970:function(r,e,n){var t=n(9397),a=n(5475),i=n(579);e.A=function(r){var e=r.pages,n=r.backgroundImage;return(0,i.jsx)("div",{className:"breadcrumb-area pt-120 pb-120 bg-gray-3 bg-img",style:{backgroundImage:" ".concat(n?"url(".concat(""+n,")"):"url()")},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(t.A,{children:null===e||void 0===e?void 0:e.map((function(r,n){var o=r.path,u=r.label;return n!==e.length-1?(0,i.jsx)(t.A.Item,{linkProps:{to:o},linkAs:a.N_,children:u},u):(0,i.jsx)(t.A.Item,{active:!0,children:u},u)}))})})})}},2673:function(r,e,n){n.d(e,{A:function(){return l}});var t=n(5544),a=n(5043),i=(n(2667),n(8232),n(1456));n(6723),n(1342);n(4723),new WeakMap;var o=n(4140),u=n(579),s=["onKeyDown"];var d=a.forwardRef((function(r,e){var n,a=r.onKeyDown,d=function(r,e){if(null==r)return{};var n={};for(var t in r)if({}.hasOwnProperty.call(r,t)){if(e.indexOf(t)>=0)continue;n[t]=r[t]}return n}(r,s),l=(0,o.Am)(Object.assign({tagName:"a"},d)),c=(0,t.A)(l,1)[0],f=(0,i.A)((function(r){c.onKeyDown(r),null==a||a(r)}));return(n=d.href)&&"#"!==n.trim()&&"button"!==d.role?(0,u.jsx)("a",Object.assign({ref:e},d,{onKeyDown:a})):(0,u.jsx)("a",Object.assign({ref:e},d,c,{onKeyDown:f}))}));d.displayName="Anchor";var l=d},4140:function(r,e,n){n.d(e,{Am:function(){return u}});var t=n(5544),a=n(5043),i=n(579),o=["as","disabled"];function u(r){var e=r.tagName,n=r.disabled,t=r.href,a=r.target,i=r.rel,o=r.role,u=r.onClick,s=r.tabIndex,d=void 0===s?0:s,l=r.type;e||(e=null!=t||null!=a||null!=i?"a":"button");var c={tagName:e};if("button"===e)return[{type:l||"button",disabled:n},c];var f=function(r){(n||"a"===e&&function(r){return!r||"#"===r.trim()}(t))&&r.preventDefault(),n?r.stopPropagation():null==u||u(r)};return"a"===e&&(t||(t="#"),n&&(t=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:d,href:t,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?i:void 0,onClick:f,onKeyDown:function(r){" "===r.key&&(r.preventDefault(),f(r))}},c]}var s=a.forwardRef((function(r,e){var n=r.as,a=r.disabled,s=function(r,e){if(null==r)return{};var n={};for(var t in r)if({}.hasOwnProperty.call(r,t)){if(e.indexOf(t)>=0)continue;n[t]=r[t]}return n}(r,o),d=u(Object.assign({tagName:n,disabled:a},s)),l=(0,t.A)(d,2),c=l[0],f=l[1].tagName;return(0,i.jsx)(f,Object.assign({},s,c,{ref:e}))}));s.displayName="Button",e.Ay=s},9397:function(r,e,n){n.d(e,{A:function(){return y}});var t=n(9379),a=n(45),i=n(8139),o=n.n(i),u=n(5043),s=n(7852),d=n(2673),l=n(579),c=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=u.forwardRef((function(r,e){var n=r.bsPrefix,i=r.active,u=void 0!==i&&i,f=r.children,v=r.className,b=r.as,m=void 0===b?"li":b,y=r.linkAs,p=void 0===y?d.A:y,g=r.linkProps,h=void 0===g?{}:g,O=r.href,A=r.title,x=r.target,j=(0,a.A)(r,c),N=(0,s.oU)(n,"breadcrumb-item");return(0,l.jsx)(m,(0,t.A)((0,t.A)({ref:e},j),{},{className:o()(N,v,{active:u}),"aria-current":u?"page":void 0,children:u?f:(0,l.jsx)(p,(0,t.A)((0,t.A)({},h),{},{href:O,title:A,target:x,children:f}))}))}));f.displayName="BreadcrumbItem";var v=f,b=["bsPrefix","className","listProps","children","label","as"],m=u.forwardRef((function(r,e){var n=r.bsPrefix,i=r.className,u=r.listProps,d=void 0===u?{}:u,c=r.children,f=r.label,v=void 0===f?"breadcrumb":f,m=r.as,y=void 0===m?"nav":m,p=(0,a.A)(r,b),g=(0,s.oU)(n,"breadcrumb");return(0,l.jsx)(y,(0,t.A)((0,t.A)({"aria-label":v,className:i,ref:e},p),{},{children:(0,l.jsx)("ol",(0,t.A)((0,t.A)({},d),{},{className:o()(g,null==d?void 0:d.className),children:c}))}))}));m.displayName="Breadcrumb";var y=Object.assign(m,{Item:v})}}]);
//# sourceMappingURL=336.8beb42aa.chunk.js.map