"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 4587:
/***/ ((module) => {


module.exports = {
    name: "deax",
    version: "3.0.0",
    githubName: "DeaxTV",
    githubKey: process.env.GITHUB_KEY,
    softwareerKey: process.env.SOFTWAREER_KEY,
    email: "deaxhelp@gmail.com",
    errors: {
        404: "This page could not be found.",
        500: "An error occurred while processing your request."
    }
};


/***/ }),

/***/ 5329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button({ children , className ="" , disabled , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `min-h-[44px] relative overflow-hidden px-4 py-2 rounded-lg hover:shadow-2xl transition-all duration-200 bg-primary group text-white ${className}`,
        ...props,
        children: [
            !disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "opacity-0 group-hover:opacity-10 group-active:opacity-20 bg-white absolute left-0 top-0 w-full h-full transition-all duration-200"
            }),
            children
        ]
    });
};


/***/ }),

/***/ 8762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ti": () => (/* binding */ PageProvider),
/* harmony export */   "qt": () => (/* binding */ usePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const usePage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PageContext);
const PageProvider = ({ children , value  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    function getPage() {
        if (router.pathname === "/_error") {
            return "/error";
        }
        return router.pathname;
    }
    let { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("/");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setPage(getPage());
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageContext.Provider, {
        value: {
            page
        },
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PageContext)));


/***/ }),

/***/ 8961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useSwr)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useSwr(url, refreshInterval = 1000) {
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
    return (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(url, (href)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(href, {
            withCredentials: true
        }).then((res)=>res.data).catch((res)=>res?.response?.data), {
        refreshInterval
    });
};
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;