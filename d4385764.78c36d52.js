(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(111)),l=n(115),o=n(116),c={id:"posting-formdata",title:"Posting FormData"},b={unversionedId:"controller/posting-formdata",id:"controller/posting-formdata",isDocsHomePage:!1,title:"Posting FormData",description:'`ts title="server/api/user/_userId/index.ts"',source:"@site/docs/controller/posting-formdata.mdx",slug:"/controller/posting-formdata",permalink:"/docs/controller/posting-formdata",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/controller/posting-formdata.mdx",version:"current",sidebar:"someSidebar",previous:{title:"POST - /tasks",permalink:"/docs/controller/post-tasks"},next:{title:"Hooks types and lifecycle",permalink:"/docs/hooks/lifecycle"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("br",null),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/_userId/index.ts"',title:'"server/api/user/_userId/index.ts"'}),"export type Methods = {\n  post: {\n    reqFormat: FormData // required\n    reqBody: { icon: Blob }\n    status: 204 // optional\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/_userId/controller.ts"',title:'"server/api/user/_userId/controller.ts"'}),"import { defineController } from './$relay'\nimport { changeIcon } from '$/service/user'\n\nexport default defineController(() => ({\n  post: async ({ params, body }) => {\n    await changeIcon(params.userId, body.icon)\n\n    return { status: 204 }\n  }\n}))\n")),Object(i.b)(l.a,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"fastify",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/service/user.ts"',title:'"server/service/user.ts"'}),"import fs from 'fs'\nimport path from 'path'\nimport { Multipart } from 'fastify-multipart'\n\nexport const changeIcon = async (id: string, iconFile: Multipart) => {\n  const iconName = `${Date.now()}${path.extname(iconFile.filename)}`\n\n  await fs.promises.writeFile(\n    path.resolve('public/icons', id, iconName),\n    await iconFile.toBuffer()\n  )\n}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fastify/fastify-multipart#usage"}),"fastify-multipart")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/index.ts"',title:'"server/index.ts"'}),"import Fastify from 'fastify'\nimport server from './$server' // '$server.ts' is automatically generated by frourio\n\nconst fastify = Fastify()\n\nserver(fastify, { basePath: '/api/v1', multipart: { fileSize: 1024 ** 3 } })\nfastify.listen(3000)\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mscdex/busboy#busboy-methods"}),"Multipart options"))),Object(i.b)(o.a,{value:"express",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/service/user.ts"',title:'"server/service/user.ts"'}),"import fs from 'fs'\nimport path from 'path'\nimport { MulterFile } from '$/$server'\n\nexport const changeIcon = async (id: string, iconFile: MulterFile) => {\n  const iconName = `${Date.now()}${path.extname(iconFile.originalname)}`\n\n  await fs.promises.copyFile(iconFile.path, path.resolve('public/icons', id, iconName))\n  await fs.promises.unlink(iconFile.path)\n}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/expressjs/multer#file-information"}),"MulterFile information")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fieldname")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Field name specified in the form"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"originalname")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the file on the user's computer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"encoding")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Encoding type of the file"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mimetype")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mime type of the file"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"size")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Size of the file in bytes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"destination")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The folder to which the file has been saved"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"DiskStorage"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"filename")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the file within the ",Object(i.b)("inlineCode",{parentName:"td"},"destination")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"DiskStorage"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The full path to the uploaded file"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"DiskStorage"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"buffer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A ",Object(i.b)("inlineCode",{parentName:"td"},"Buffer")," of the entire file"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"MemoryStorage"))))),Object(i.b)("br",null),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/index.ts"',title:'"server/index.ts"'}),"import express from 'express'\nimport server from './$server' // '$server.ts' is automatically generated by frourio\n\nconst app = express()\n\nserver(app, { basePath: '/api/v1', multer: { limits: { fileSize: 1024 ** 3 } } })\napp.listen(3000)\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/expressjs/multer#multeropts"}),"Multer options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dest")," or ",Object(i.b)("inlineCode",{parentName:"td"},"storage")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Where to store the files"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"path.join(__dirname, '.upload')")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fileFilter")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function to control which files are accepted"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"limits")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Limits of the uploaded data"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{ fileSize: 1024 ** 3 }")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"preservePath")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Keep the full path of files instead of just the base name"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))),Object(i.b)(l.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"next",mdxType:"TabItem"},Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aspida/aspida"}),"aspida")," for the frontend HTTP client.",Object(i.b)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/UserBanner.tsx"',title:'"components/UserBanner.tsx"'}),"import { useCallback, ChangeEvent } from 'react'\nimport { apiClient } from '~/utils/apiClient'\n\nconst UserBanner = () => {\n  const editIcon = useCallback(\n    async (e: ChangeEvent<HTMLInputElement>) => {\n      if (!e.target.files?.length) return\n\n      await apiClient.user._userId(1).$post({\n        body: { icon: e.target.files[0] }\n      })\n    },\n    []\n  )\n\n  return <input type=\"file\" accept=\"image/*\" onChange={editIcon} />\n}\n\nexport default UserBanner\n"))),Object(i.b)(o.a,{value:"nuxt",mdxType:"TabItem"},Object(i.b)("p",null,"Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aspida/aspida"}),"aspida")," for the frontend HTTP client.",Object(i.b)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="components/UserBanner.vue"',title:'"components/UserBanner.vue"'}),"import Vue from 'vue'\n\nexport default Vue.extend({\n  methods: {\n    async editIcon(e: { target: HTMLInputElement }) {\n      if (!e.target?.files?.length) return\n\n      await this.$api.user._userId(1).$post({\n        body: { icon: e.target.files[0] }\n      })\n    },\n  }\n})\n")))))}u.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},113:function(e,t,n){"use strict";var a=n(0),r=n(114);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},114:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(113),l=n(112),o=n(47),c=n.n(o),b=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(a.useState)(o),g=j[0],N=j[1],y=Object(a.useState)(!1),h=y[0],v=y[1];if(null!=u){var x=f[u];null!=x&&x!==g&&p.some((function(e){return e.value===x}))&&N(x)}var w=function(e){N(e),null!=u&&O(u,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},E=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",E)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),T(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},116:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);