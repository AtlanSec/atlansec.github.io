"use strict";
exports.id = 823;
exports.ids = [823];
exports.modules = {

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

/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2006);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9357);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(393);
// Step 1: Import React
// Step 2: Define your component
const CategoriesPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{pageTitle:"Categorias"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Categorias..."));};const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:"Categorias"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:"Seccion de categorias"}));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-categories-js.js.map