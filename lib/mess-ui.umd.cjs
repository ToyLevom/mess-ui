(function(u,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(u=typeof globalThis<"u"?globalThis:u||self,s(u.MessUI={},u.Vue))})(this,function(u,s){"use strict";const a={name:"MessButton",methods:{handleClick(e){this.$emit("click",e)},handleFocus(e){this.$emit("focus",e)},handleBlur(e){this.$emit("blur",e)},handleMouseDown(e){this.$emit("mousedown",e)},handleMouseUp(e){this.$emit("mouseup",e)}}},M="",f=(e,n)=>{const d=e.__vccOpts||e;for(const[i,r]of n)d[i]=r;return d};function c(e,n,d,i,r,t){return s.openBlock(),s.createElementBlock("div",{class:"btn",onClick:n[0]||(n[0]=(...o)=>t.handleClick&&t.handleClick(...o)),onFocus:n[1]||(n[1]=(...o)=>t.handleFocus&&t.handleFocus(...o)),onBlur:n[2]||(n[2]=(...o)=>t.handleBlur&&t.handleBlur(...o)),onMousedown:n[3]||(n[3]=(...o)=>t.handleMouseDown&&t.handleMouseDown(...o)),onMouseup:n[4]||(n[4]=(...o)=>t.handleMouseUp&&t.handleMouseUp(...o))},[s.renderSlot(e.$slots,"default",{},void 0,!0)],32)}const l=f(a,[["render",c],["__scopeId","data-v-6142841e"]]);l.install=function(e){return e.component(l.name,l),e};const m=[l],h={install:function(e){m.forEach(n=>{e.use(n)})}};u.Button=l,u.default=h,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});