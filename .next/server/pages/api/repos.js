"use strict";
(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

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

/***/ 6487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6899);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let _ = await (await fetch("https://api.github.com/users/" + (_clqu_config__WEBPACK_IMPORTED_MODULE_0___default().githubName) + "/repos", {
        headers: {
            Authorization: "token " + (_clqu_config__WEBPACK_IMPORTED_MODULE_0___default().githubKey)
        }
    })).json();
    try {
        res.send({
            success: true,
            data: [
                ..._
            ]
        });
    } catch  {
        res.status(500).send({
            success: false,
            data: []
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6487));
module.exports = __webpack_exports__;

})();