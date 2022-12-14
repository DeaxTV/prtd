"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 6157:
/***/ ((module) => {

module.exports = require("@softwareer/node");

/***/ }),

/***/ 6899:
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

/***/ 2588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const clquConfig = __webpack_require__(6899);
const { Softwareer  } = __webpack_require__(6157);
const softwareer = new Softwareer(clquConfig.softwareerKey);
module.exports = softwareer;


/***/ }),

/***/ 5590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Softwareer = __webpack_require__(2588);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    let page = req.query?.page || 1;
    let limit = req.query?.limit || 10;
    page = parseInt(page);
    limit = parseInt(limit);
    Softwareer.getProjects(page, limit).then((profile)=>{
        res.status(200).json({
            success: true,
            message: null,
            data: profile
        });
    }).catch((error)=>{
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: null
        });
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5590));
module.exports = __webpack_exports__;

})();