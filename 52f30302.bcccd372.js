(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(105)),i={id:"custom-validation",title:"Custom validation"},c={unversionedId:"Validation/custom-validation",id:"Validation/custom-validation",isDocsHomePage:!1,title:"Custom validation",description:"Query, reqHeaders and reqBody are validated by specifying Class with class-validator.",source:"@site/docs/Validation/custom-validation.md",slug:"/Validation/custom-validation",permalink:"/docs/Validation/custom-validation",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Validation/custom-validation.md",version:"current",sidebar:"someSidebar",previous:{title:"JSON body",permalink:"/docs/Validation/json-body"},next:{title:"Error handling",permalink:"/docs/Advanced/error-handling"}},s=[],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Query, reqHeaders and reqBody are validated by specifying Class with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/typestack/class-validator"}),"class-validator"),".",Object(o.b)("br",{parentName:"p"}),"\n","The class needs to be exported from ",Object(o.b)("inlineCode",{parentName:"p"},"server/validators/index.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/validators/index.ts"',title:'"server/validators/index.ts"'}),"import { MinLength, IsString } from 'class-validator'\n\nexport class LoginBody {\n  @MinLength(5)\n  id: string\n\n  @MinLength(8)\n  pass: string\n}\n\nexport class TokenHeader {\n  @IsString()\n  @MinLength(10)\n  token: string\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/token/index.ts"',title:'"server/api/token/index.ts"'}),"import { LoginBody, TokenHeader } from '$/validators'\n\nexport type Methods = {\n  post: {\n    reqBody: LoginBody\n    resBody: {\n      token: string\n    }\n  }\n\n  delete: {\n    reqHeaders: TokenHeader\n  }\n}\n")),Object(o.b)("p",null,"Results"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"correctId","pass":"correctPass"}\' http://localhost:8080/api/token\n{"token":"XXXXXXXXXX"}\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"abc","pass":"12345"}\' http://localhost:8080/api/token -i\nHTTP/1.1 400 Bad Request\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"id":"incorrectId","pass":"incorrectPass"}\' http://localhost:8080/api/token -i\nHTTP/1.1 401 Unauthorized\n')))}d.isMDXComponent=!0}}]);