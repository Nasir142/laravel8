(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: "nasir@email.com",
      password: "password"
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    _loginHandler: "LOGIN_HANDLER"
  })), {}, {
    loginHandler: function loginHandler() {
      var _this = this;

      this._loginHandler({
        email: this.email,
        password: this.password
      }).then(function () {
        _this.$router.replace({
          name: "dashboard"
        });
      })["catch"](function () {
        _this.$toast.show("login failed unauthorized");
      });
    },
    goToRegister: function goToRegister() {
      this.$router.push("register");
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_authStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../styles/authStyles.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/authStyles.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_styles_authStyles_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/authStyles.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/js/styles/authStyles.css ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-color: #2a4494;\n    --secondary-color: #db3a34;\n    --white: #fff;\n    --black: #000;\n}\nbody {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    background-color: var(--secondary-color);\n    font-family: \"Roboto\", sans-serif;\n    display: flex;\n}\n\n.main {\n    display: flex;\n    flex: 1;\n    background-color: var(--secondary-color);\n    height: 100vh;\n}\n.left-side,\n.right-side {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n}\n.left-side {\n    background-color: var(--primary-color);\n    border-radius: 0px 200px 200px 0;\n    margin-right: 20px;\n    box-shadow: 2px 3px 17px -2px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 2px 3px 17px -2px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 2px 3px 17px -2px rgba(0, 0, 0, 0.75);\n}\n.right-side {\n    background-color: var(--secondary-color);\n}\n\n.left-box {\n    background-color: transparent;\n    color: white;\n    max-width: 400px;\n    text-transform: capitalize;\n}\n.left-box h1 {\n    font-weight: bold;\n}\n.left-box p {\n    color: lightgray;\n}\n\n.register-img {\n    width: 280px;\n    height: 195px;\n    background-color: transparent;\n}\n.right-box {\n    max-width: 350px;\n    padding: 10px 20px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 10px 17px -10px rgba(0, 0, 0, 0.75);\n}\n.right-box h1 {\n    margin-bottom: 5px;\n}\n.input-contianer {\n    margin-top: 10px;\n    margin-bottom: 3px;\n}\n.input-contianer input {\n    width: 90%;\n    height: 45px;\n    border: 1px solid #ebebe4;\n    border-radius: 7px;\n    padding: 0px 15px;\n    transition: border 0.3s;\n}\n.line-container {\n    margin-top: 10px;\n    display: flex;\n}\n.line {\n    width: 40px;\n    height: 2px;\n    background-color: green;\n}\n.term {\n    display: flex;\n    align-items: center;\n}\n.checkbox {\n    height: 20px;\n    width: 20px;\n    outline: none;\n    border: 1px solid #ebebe4;\n}\n.checkbox:hover {\n    cursor: pointer;\n}\n.form-container {\n    padding: 10px 0px;\n    transition: opacity 0.3s;\n}\n.overlay {\n    background-color: white;\n    padding-bottom: 15px;\n    border-radius: 10px;\n}\n.term p {\n    font-size: 13px;\n    color: gray;\n    letter-spacing: 1px;\n    margin-left: 5px;\n}\n.term a {\n    text-decoration: none;\n    padding: 0 5px;\n}\n.btn-container button {\n    width: 128px;\n    height: 46px;\n    border: none;\n    border-radius: 10px;\n    box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.27);\n    -webkit-box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.27);\n    -moz-box-shadow: 2px 3px 9px 0px rgba(0, 0, 0, 0.27);\n}\n.btn-container {\n    margin-top: 30px;\n}\n.blue-btn {\n    background-color: var(--primary-color);\n    color: white;\n}\n.white-btn {\n    background-color: var(--white);\n    color: black;\n    margin-left: 10px;\n}\n.err {\n    font-size: 10px;\n    padding: 0 10px;\n    color: #db3a34;\n    line-height: 2px;\n    padding-bottom: 5px;\n}\n.error {\n    border-color: #db3a34;\n}\n\n/* hover effects */\n\n.btn-container button:hover {\n    opacity: 0.9;\n    cursor: pointer;\n}\n.input-contianer input:focus {\n    outline: none;\n    border: 1px solid lightblue;\n}\n\n/* changing placeholder color  */\n\n::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n::-moz-placeholder {\n    /* Firefox 19+ */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n:-ms-input-placeholder {\n    /* IE 10+ */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n:-moz-placeholder {\n    /* Firefox 18- */\n    color: lightgray;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n\n/* responsive for mobiles */\n\n@media only screen and (max-width: 1100px) {\n    .left-side {\n        border-radius: 0px 0px 400px 0;\n    }\n    .register-img {\n        width: 200px;\n        height: 155px;\n    }\n    .left-box {\n        max-width: 300px;\n        text-transform: capitalize;\n    }\n    .left-box h1 {\n        font-weight: bold;\n        font-size: 22px;\n    }\n    .left-box p {\n        color: lightgray;\n    }\n}\n@media only screen and (max-width: 1000px) {\n    .left-side {\n        border-radius: 0px 0px 100px 0;\n    }\n}\n\n@media only screen and (max-width: 800px) {\n    .left-side {\n        border-radius: 0px;\n    }\n}\n@media only screen and (max-width: 700px) {\n    .left-side {\n        display: none;\n    }\n    body {\n        padding: 50px 20px;\n        background-color: var(--primary-color);\n    }\n    .main {\n        border-radius: 10px;\n        background-color: var(--primary-color);\n    }\n    .right-side {\n        border-radius: 20px;\n        overflow: none;\n        background-color: var(--primary-color);\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/register.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/register.svg ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/register.svg?d495cf918f09ffa58dada056f7dfda45");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_style_index_0_id_c8f9cd0c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_style_index_0_id_c8f9cd0c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_style_index_0_id_c8f9cd0c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/login.vue ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_c8f9cd0c_scoped_true_bindings_email_data_password_data_loginHandler_options_goToRegister_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={"email":"data","password":"data","loginHandler":"options","goToRegister":"options"} */ "./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={\"email\":\"data\",\"password\":\"data\",\"loginHandler\":\"options\",\"goToRegister\":\"options\"}");
/* harmony import */ var _login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js */ "./resources/js/views/login.vue?vue&type=script&lang=js");
/* harmony import */ var _login_vue_vue_type_style_index_0_id_c8f9cd0c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css */ "./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css");





_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _login_vue_vue_type_template_id_c8f9cd0c_scoped_true_bindings_email_data_password_data_loginHandler_options_goToRegister_options___WEBPACK_IMPORTED_MODULE_0__.render
_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-c8f9cd0c"
/* hot reload */
if (false) {}

_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/login.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/login.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/views/login.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=script&lang=js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css ***!
  \**********************************************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_style_index_0_id_c8f9cd0c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=style&index=0&id=c8f9cd0c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={\"email\":\"data\",\"password\":\"data\",\"loginHandler\":\"options\",\"goToRegister\":\"options\"}":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={"email":"data","password":"data","loginHandler":"options","goToRegister":"options"} ***!
  \******************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={"email":"data","password":"data","loginHandler":"options","goToRegister":"options"} .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_c8f9cd0c_scoped_true_bindings_email_data_password_data_loginHandler_options_goToRegister_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_c8f9cd0c_scoped_true_bindings_email_data_password_data_loginHandler_options_goToRegister_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={"email":"data","password":"data","loginHandler":"options","goToRegister":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={\"email\":\"data\",\"password\":\"data\",\"loginHandler\":\"options\",\"goToRegister\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={\"email\":\"data\",\"password\":\"data\",\"loginHandler\":\"options\",\"goToRegister\":\"options\"}":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/login.vue?vue&type=template&id=c8f9cd0c&scoped=true&bindings={"email":"data","password":"data","loginHandler":"options","goToRegister":"options"} ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_register_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/register.svg */ "./resources/js/assets/register.svg");



const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-c8f9cd0c")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c8f9cd0c")
const _hoisted_1 = { class: "main" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "left-side" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "left-box" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
      class: "register-img",
      src: _assets_register_svg__WEBPACK_IMPORTED_MODULE_1__.default,
      alt: "register"
    }),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "A few more clicks to sign in to your account."),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "Manage all your files in one place")
  ])
], -1 /* HOISTED */)
const _hoisted_3 = { class: "right-side" }
const _hoisted_4 = { class: "overlay" }
const _hoisted_5 = { class: "right-box" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", null, "Sign In", -1 /* HOISTED */)
const _hoisted_7 = { class: "input-contianer" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", { class: "err" }, "email field is required", -1 /* HOISTED */)
const _hoisted_9 = { class: "input-contianer" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", { class: "err" }, "email field is required", -1 /* HOISTED */)
const _hoisted_11 = { class: "btn-container" }
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  class: "white-btn",
  type: "submit"
}, "Sign in", -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
            class: "form-container",
            onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.loginHandler()), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "email",
                placeholder: "Email",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.email = $event)),
                required: ""
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]
              ]),
              _hoisted_8
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "password",
                placeholder: "Password",
                required: "",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.password = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password]
              ]),
              _hoisted_10
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                class: "blue-btn",
                onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.goToRegister()), ["prevent"]))
              }, " Register "),
              _hoisted_12
            ])
          ], 32 /* HYDRATE_EVENTS */)
        ])
      ])
    ])
  ]))
})

/***/ })

}]);