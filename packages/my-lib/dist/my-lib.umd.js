(function(u,c){typeof exports=="object"&&typeof module!="undefined"?c(exports,require("styled-components"),require("react")):typeof define=="function"&&define.amd?define(["exports","styled-components","react"],c):(u=typeof globalThis!="undefined"?globalThis:u||self,c(u.MyLib={},u.styled,u.React))})(this,function(u,c,O){"use strict";function l(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var d=l(c),g=l(O);const j=d.default.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #186faf;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        background-color: #0a558c;
    }
`;var p={exports:{}},s={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var b=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function x(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function w(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o;var t=Object.getOwnPropertyNames(r).map(function(a){return r[a]});if(t.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(a){n[a]=a}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}w();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=g.default,y=60103;if(s.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var m=Symbol.for;y=m("react.element"),s.Fragment=m("react.fragment")}var P=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function v(e,r,o){var t,n={},a=null,f=null;o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)E.call(r,t)&&!T.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:y,type:e,key:a,ref:f,props:n,_owner:P.current}}s.jsx=v,s.jsxs=v,p.exports=s;const k=p.exports.jsx,R=d.default.input`
    border: 1px solid;
    border-radius: 0.5rem;
    border-color: #186faf;
    color: black;
    padding: 0.75rem;
    &:hover {
        border-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        border-color: #0a558c;
    }
`,M=()=>k(R,{id:"123"});u.MyButton=j,u.MyTextBox=M,Object.defineProperty(u,"__esModule",{value:!0}),u[Symbol.toStringTag]="Module"});
//# sourceMappingURL=my-lib.umd.js.map
