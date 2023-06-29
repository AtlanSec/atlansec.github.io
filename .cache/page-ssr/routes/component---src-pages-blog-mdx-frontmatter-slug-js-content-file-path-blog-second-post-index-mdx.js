"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 6192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ GatsbyMDXWrapper)
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(1151);
// EXTERNAL MODULE: external "/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(2006);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./blog/secondPost/index.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h3:"h3",p:"p"},(0,lib/* useMDXComponents */.ah)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h3,null,"Segundo Post"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Segundo post neneeee"));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.ah)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const secondPost = (MDXContent);
// EXTERNAL MODULE: ./src/components/layout.js + 1 modules
var layout = __webpack_require__(393);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(9357);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
;// CONCATENATED MODULE: ./src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/blog/secondPost/index.mdx





const BlogPost = ({
  data,
  children
}) => {
  const image = (0,gatsby_image_module/* getImage */.gJ)(data.mdx.frontmatter.hero_image);
  return /*#__PURE__*/index_js_.createElement(layout/* default */.Z, {
    pageTitle: data.mdx.frontmatter.title
  }, /*#__PURE__*/index_js_.createElement(gatsby_image_module/* GatsbyImage */.HN, {
    image: image,
    alt: data.mdx.frontmatter.hero_image_alt,
    style: {
      maxWidth: '100%'
    },
    quality: 50
  }), /*#__PURE__*/index_js_.createElement("p", null, data.mdx.frontmatter.date), children);
};
const query = "421266626";
const Head = ({
  data
}) => /*#__PURE__*/index_js_.createElement(seo/* default */.Z, {
  title: data.mdx.frontmatter.title
});
BlogPost;
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/index_js_.createElement(BlogPost, props, /*#__PURE__*/index_js_.createElement(secondPost, props));
}

/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// NAMESPACE OBJECT: ./src/components/layout.module.css
var layout_module_namespaceObject = {};
__webpack_require__.r(layout_module_namespaceObject);
__webpack_require__.d(layout_module_namespaceObject, {
  nC: () => (container),
  nP: () => (heading),
  up: () => (navLinkItem),
  cP: () => (navLinkText),
  FV: () => (navLinks)
});

// EXTERNAL MODULE: external "/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(2006);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/layout.module.css
// Exports
var container = "layout-module--container--78b04";
var heading = "layout-module--heading--f158c";
var siteTitle = "layout-module--site-title--e4dea";
var navLinks = "layout-module--nav-links--1113b";
var navLinkItem = "layout-module--nav-link-item--a5f0a";
var navLinkText = "layout-module--nav-link-text--69cda";

;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({pageTitle,children})=>{return/*#__PURE__*/index_js_.createElement("div",{className:container},/*#__PURE__*/index_js_.createElement("nav",{className:layout_module_namespaceObject.navWrapper},/*#__PURE__*/index_js_.createElement("ul",{className:navLinks},/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",className:navLinkText},"Home")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/about",className:navLinkText},"About")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/blog",className:navLinkText},"Blog")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/categories",className:navLinkText},"Categorias")),/*#__PURE__*/index_js_.createElement("li",{className:navLinkItem},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/authors",className:navLinkText},"Autores")))),/*#__PURE__*/index_js_.createElement("main",null,/*#__PURE__*/index_js_.createElement("h1",{className:heading},pageTitle),children));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2006);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
const Seo=({title})=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3159585216");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,title," | ",data.site.siteMetadata.title);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-second-post-index-mdx.js.map