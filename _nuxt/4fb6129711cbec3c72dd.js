(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,n){"use strict";n.r(t);var l={name:"Pricing",data:function(){return{tiers:{1:3,2:5,3:10,4:100},selected:null}}},c=n(15),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("div",{staticClass:"columns is-centered is-multiline is-mobile"},[n("div",{staticClass:"column is-half",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"is-size-2"},[e._v("Pricing:")]),e._v(" "),n("ul",e._l(e.tiers,(function(t,l){return n("li",{key:l,staticClass:"is-size-3"},[n("b-radio",{attrs:{"native-value":l,name:"pricing"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("\n            Tier "+e._s(l)+": £"+e._s(t)+" per month\n          ")])],1)})),0),e._v(" "),n("br"),e._v(" "),n("b-button",{attrs:{disabled:null===e.selected,type:"is-primary is-large","icon-left":"cart"}},[e._v("\n        Add to Cart\n      ")])],1)])])}),[],!1,null,"1af1e44b",null);t.default=component.exports}}]);