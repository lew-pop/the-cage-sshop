"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[63],{63:function(e,i,n){n.r(i);var s=n(4467),l=n(9379),a=n(675),r=n(467),o=n(5544),t=n(5043),c=n(3216),d=n(5475),h=n(3003),x=n(2821),p=n(2168),m=n(5873),j=n(970),u=n(2769),v=n(579);i.default=function(){var e=0,i=(0,c.zy)().pathname,n=(0,c.Zp)(),N=(0,h.d4)((function(e){return e.currency})),g=(0,h.d4)((function(e){return e.cart})),b=g.cartItems,y=g.shippingAddress,f=(0,t.useState)({firstName:(null===y||void 0===y?void 0:y.firstName)||"",lastName:(null===y||void 0===y?void 0:y.lastName)||"",state:(null===y||void 0===y?void 0:y.state)||"",address:(null===y||void 0===y?void 0:y.address)||"",apartment:(null===y||void 0===y?void 0:y.apartment)||"",city:(null===y||void 0===y?void 0:y.city)||"",postcode:(null===y||void 0===y?void 0:y.postcode)||"",phone:(null===y||void 0===y?void 0:y.phone)||"",email:(null===y||void 0===y?void 0:y.email)||"",orderNotes:(null===y||void 0===y?void 0:y.orderNotes)||""}),P=(0,o.A)(f,2),k=P[0],w=P[1],A=(0,u.xj)(),C=(0,o.A)(A,2),F=C[0],S=C[1],M=(S.isLoading,S.isError,S.error,S.data),I={};I.itemsPrice=b.reduce((function(e,i){return e+i.price*i.qty}),0).toFixed(2),I.shippingPrice=(I.itemsPrice>100?0:10).toFixed(2),I.taxPrice=Number(.082*I.itemsPrice).toFixed(2),I.totalPrice=(Number(I.itemsPrice)+Number(I.shippingPrice)+Number(I.taxPrice)).toFixed(2);var T=function(){var e=(0,r.A)((0,a.A)().mark((function e(i){return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),e.prev=1,e.next=4,F({orderItems:b,shippingAddress:k,itemsPrice:I.itemsPrice,shippingPrice:I.shippingPrice,taxPrice:I.taxPrice,totalPrice:I.totalPrice}).unwrap();case 4:n("/clover/".concat(M._id)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Failed to create order: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(i){return e.apply(this,arguments)}}(),q=function(e){var i=e.target,n=i.name,a=i.value;w((0,l.A)((0,l.A)({},k),{},(0,s.A)({},n,a)))};return(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)(p.A,{titleTemplate:"Checkout",description:"Checkout page of The Cage SShop, vapes and smoking accessories."}),(0,v.jsxs)(m.A,{headerTop:"visible",children:[(0,v.jsx)(j.A,{pages:[{label:"Home",path:"/"},{label:"Checkout",path:""+i}],backgroundImage:"https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"}),(0,v.jsx)("div",{className:"checkout-area pt-95 pb-100",children:(0,v.jsx)("div",{className:"container",children:b&&b.length>=1?(0,v.jsx)("form",{onSubmit:T,children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-lg-7",children:(0,v.jsxs)("div",{className:"billing-info-wrap",children:[(0,v.jsx)("h3",{children:"Shipping Details"}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"First Name"}),(0,v.jsx)("input",{type:"text",name:"firstName",value:k.firstName,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Last Name"}),(0,v.jsx)("input",{type:"text",name:"lastName",value:k.lastName,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-12",children:(0,v.jsxs)("div",{className:"billing-select mb-20",children:[(0,v.jsx)("label",{children:"State"}),(0,v.jsxs)("select",{className:"billing-select",name:"state",value:k.state,onChange:q,children:[(0,v.jsx)("option",{children:"Select a state"}),(0,v.jsx)("option",{children:"Alabama"}),(0,v.jsx)("option",{children:"Alaska"}),(0,v.jsx)("option",{children:"Arizona"}),(0,v.jsx)("option",{children:"Arkansas"}),(0,v.jsx)("option",{children:"California"}),(0,v.jsx)("option",{children:"Colorado"}),(0,v.jsx)("option",{children:"Connecticut"}),(0,v.jsx)("option",{children:"Delaware"}),(0,v.jsx)("option",{children:"Florida"}),(0,v.jsx)("option",{children:"Georgia"}),(0,v.jsx)("option",{children:"Hawaii"}),(0,v.jsx)("option",{children:"Idaho"}),(0,v.jsx)("option",{children:"Illinois"}),(0,v.jsx)("option",{children:"Indiana"}),(0,v.jsx)("option",{children:"Iowa"}),(0,v.jsx)("option",{children:"Kansas"}),(0,v.jsx)("option",{children:"Kentucky"}),(0,v.jsx)("option",{children:"Louisiana"}),(0,v.jsx)("option",{children:"Maine"}),(0,v.jsx)("option",{children:"Maryland"}),(0,v.jsx)("option",{children:"Massachusetts"}),(0,v.jsx)("option",{children:"Michigan"}),(0,v.jsx)("option",{children:"Minnesota"}),(0,v.jsx)("option",{children:"Mississippi"}),(0,v.jsx)("option",{children:"Missouri"}),(0,v.jsx)("option",{children:"Montana"}),(0,v.jsx)("option",{children:"Nebraska"}),(0,v.jsx)("option",{children:"Nevada"}),(0,v.jsx)("option",{children:"New Hampshire"}),(0,v.jsx)("option",{children:"New Jersey"}),(0,v.jsx)("option",{children:"New Mexico"}),(0,v.jsx)("option",{children:"New York"}),(0,v.jsx)("option",{children:"North Carolina"}),(0,v.jsx)("option",{children:"North Dakota"}),(0,v.jsx)("option",{children:"Ohio"}),(0,v.jsx)("option",{children:"Oklahoma"}),(0,v.jsx)("option",{children:"Oregon"}),(0,v.jsx)("option",{children:"Pennsylvania"}),(0,v.jsx)("option",{children:"Rhode Island"}),(0,v.jsx)("option",{children:"South Dakota"}),(0,v.jsx)("option",{children:"Tennessee"}),(0,v.jsx)("option",{children:"Texas"}),(0,v.jsx)("option",{children:"Utah"}),(0,v.jsx)("option",{children:"Vermount"}),(0,v.jsx)("option",{children:"Virginia"}),(0,v.jsx)("option",{children:"Washington"}),(0,v.jsx)("option",{children:"West Virgina"}),(0,v.jsx)("option",{children:"Wisconsin"}),(0,v.jsx)("option",{children:"Wyoming"}),k.state]})]})}),(0,v.jsx)("div",{className:"col-lg-12",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Street Address"}),(0,v.jsx)("input",{placeholder:"House number and street name",type:"text",name:"address",value:k.address,onChange:q}),(0,v.jsx)("input",{placeholder:"Apartment, suite, unit etc.",type:"text",name:"apartment",value:k.apartment,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-12",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Town / City"}),(0,v.jsx)("input",{type:"text",name:"city",value:k.city,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Postcode / ZIP"}),(0,v.jsx)("input",{type:"text",name:"postcode",value:k.postcode,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Phone"}),(0,v.jsx)("input",{type:"text",name:"phone",value:k.phone,onChange:q})]})}),(0,v.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,v.jsxs)("div",{className:"billing-info mb-20",children:[(0,v.jsx)("label",{children:"Email Address"}),(0,v.jsx)("input",{type:"text",name:"email",value:k.email,onChange:q})]})})]}),(0,v.jsxs)("div",{className:"additional-info-wrap",children:[(0,v.jsx)("h4",{children:"Additional information"}),(0,v.jsxs)("div",{className:"additional-info",children:[(0,v.jsx)("label",{children:"Order notes"}),(0,v.jsx)("textarea",{placeholder:"Notes about your order, e.g. special notes for delivery. ",name:"message",value:k.orderNotes,onChange:q})]})]})]})}),(0,v.jsx)("div",{className:"col-lg-5",children:(0,v.jsxs)("div",{className:"your-order-area",children:[(0,v.jsx)("h3",{children:"Your order"}),(0,v.jsxs)("div",{className:"your-order-wrap gray-bg-4",children:[(0,v.jsxs)("div",{className:"your-order-product-info",children:[(0,v.jsx)("div",{className:"your-order-top",children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:"Product"}),(0,v.jsx)("li",{children:"Total"})]})}),(0,v.jsx)("div",{className:"your-order-middle",children:(0,v.jsx)("ul",{children:b.map((function(i,n){var s=(0,x.do)(i.price,i.discount),l=(i.price*N.currencyRate).toFixed(2),a=(s*N.currencyRate).toFixed(2);return e+=null!=s?a*i.quantity:l*i.quantity,(0,v.jsxs)("li",{children:[(0,v.jsxs)("span",{className:"order-middle-left",children:[i.name," X ",i.quantity]})," ",(0,v.jsx)("span",{className:"text-color order-price",children:null!==s?N.currencySymbol+(a*i.quantity).toFixed(2):N.currencySymbol+(l*i.quantity).toFixed(2)})]},n)}))})}),(0,v.jsx)("div",{className:"your-order-bottom",children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{className:"your-order-shipping",children:"Shipping"}),(0,v.jsx)("li",{children:"Free shipping"})]})}),(0,v.jsx)("div",{className:"your-order-total",children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{className:"order-total",children:"Total"}),(0,v.jsx)("li",{children:N.currencySymbol+e.toFixed(2)})]})})]}),(0,v.jsx)("div",{className:"payment-method"})]}),(0,v.jsx)("div",{className:"place-order mt-25",children:(0,v.jsx)("button",{type:"submit",children:"Make Payment"})})]})})]})}):(0,v.jsx)("div",{className:"row",children:(0,v.jsx)("div",{className:"col-lg-12",children:(0,v.jsxs)("div",{className:"item-empty-area text-center",children:[(0,v.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,v.jsx)("i",{className:"pe-7s-cash"})}),(0,v.jsxs)("div",{className:"item-empty-area__text",children:["No items found in cart to checkout ",(0,v.jsx)("br",{})," ",(0,v.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})})})})})]})]})}}}]);
//# sourceMappingURL=63.c77f1244.chunk.js.map