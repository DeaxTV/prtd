"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 4053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_2__, remark_gfm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Page = ({ id , data  })=>{
    function getDate(date) {
        let d = new Date(date);
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let year = d.getFullYear();
        return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
        ;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-7xl mx-auto py-12 w-full px-6 lg:px-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative h-96 w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: data.image,
                            alt: data.title,
                            className: "rounded-lg absolute h-full w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute bottom-0 left-0 w-full h-full dark:bg-black/50 shadow-xl"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-4xl font-bold mt-8",
                            children: data.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-clock text-zinc-400"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-zinc-400 ml-2",
                                            children: [
                                                data.readTime.minutes,
                                                " minutes of reading"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-calendar-alt text-zinc-400"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-zinc-400 ml-2",
                                            children: getDate(data.createdAt)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            className: "mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                children: Buffer?.from(data?.content || Buffer.from("Something went wrong...").toString("base64"), "base64").toString(),
                                remarkPlugins: [
                                    remark_gfm__WEBPACK_IMPORTED_MODULE_3__["default"]
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const getServerSideProps = async (context)=>{
    const request = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://clqu.me/api/post?id=" + context?.query.id).then((res)=>res.data).catch((err)=>err.response);
    if (!request) return {
        notFound: true
    };
    if (request.success) {
        return {
            props: {
                data: request.data
            }
        };
    } else {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4053));
module.exports = __webpack_exports__;

})();