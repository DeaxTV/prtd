"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 3108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ./src/pages/api/contact.js

/* harmony default export */ const contact = ((req, res)=>{
    let { name , email , message  } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({
            success: true,
            message: "All fields are required",
            data: null
        });
    }
    let mailTo = "deaxhelp@gmail.com";
    let mailSubject = "Contact Form Submission";
    let mailBody = `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    let mailOptions = {
        from: email,
        to: mailTo,
        subject: mailSubject,
        html: mailBody
    };
    res.status(200).json({
        success: true,
        message: "Message sent successfully",
        data: {
            subject: mailSubject,
            body: mailBody
        }
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3108));
module.exports = __webpack_exports__;

})();