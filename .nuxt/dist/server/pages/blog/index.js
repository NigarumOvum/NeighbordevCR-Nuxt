exports.ids = [9];
exports.modules = {

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Paper; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Paper/Paper.vue?vue&type=template&id=97728500&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"paper",class:{ color: _vm.color }},[_c('header',[_c('v-icon',{staticClass:"icon",attrs:{"color":_vm.color ? 'white' : '',"large":""}},[_vm._v("\n      "+_vm._s(_vm.icon)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('v-card-title',{staticClass:"title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),(_vm.subtitle !== '')?_c('v-card-subtitle',[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")]):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Paper/Paper.vue?vue&type=template&id=97728500&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Paper/Paper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Papervue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    color: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Paper/Paper.vue?vue&type=script&lang=js&
 /* harmony default export */ var Paper_Papervue_type_script_lang_js_ = (Papervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// CONCATENATED MODULE: ./components/Paper/Paper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(402)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Paper_Papervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "97728500",
  "f4fdab4c"
  
)

/* harmony default export */ var Paper = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardTitle: components_VCard["d" /* VCardTitle */],VIcon: VIcon["a" /* default */]})

// CONCATENATED MODULE: ./components/Paper/index.js


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("45fface1", content, true, context)
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5bf3a87f", content, true, context)
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(445);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b7957c44", content, true, context)
};

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41ee824a", content, true, context)
};

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2e156114]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-2e156114]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2e156114]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2e156114]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-2e156114]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2e156114]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2e156114]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-2e156114]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2e156114]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2e156114]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2e156114]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2e156114]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2e156114],.use-text-paragraph[data-v-2e156114]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2e156114]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2e156114]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2e156114]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2e156114]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2e156114]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2e156114]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2e156114]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2e156114]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-2e156114]{transform:scale(-1)}.post-card[data-v-2e156114]{display:flex;border-radius:12px}.v-btn.action-btn[data-v-2e156114]:not(.v-btn--text){min-width:200px}@media(min-width:960px){.title[data-v-2e156114]{font-size:24px!important}}.properties[data-v-2e156114]{padding:16px;max-width:100%}.properties>div[data-v-2e156114]{padding-left:0;padding-right:0}.figure[data-v-2e156114]{display:block;position:relative}.head-line[data-v-2e156114]{text-transform:uppercase;color:var(--v-primary-base);padding-bottom:0}.news-title[data-v-2e156114]{line-height:1.5}.post-title[data-v-2e156114]{padding:0 16px}.desc[data-v-2e156114]{white-space:normal;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:flex;display:-webkit-box;height:65px;overflow:hidden;margin-bottom:16px;padding:0;font-size:18px}.portrait[data-v-2e156114]{flex-direction:column}.portrait .properties[data-v-2e156114]{padding-left:16px;padding-right:16px}.landscape[data-v-2e156114]{flex-direction:row}.landscape .figure[data-v-2e156114]{min-width:100px;max-width:200px}@media(max-width:599px){.landscape .figure[data-v-2e156114]{max-width:100px;max-height:130px}}[dir=ltr] .landscape .figure[data-v-2e156114]{margin-right:16px}[dir=rtl] .landscape .figure[data-v-2e156114]{margin-left:16px}.landscape .figure>div[data-v-2e156114]{height:100%!important}@media(max-width:599px){.landscape .desc[data-v-2e156114]{display:none}}@media(max-width:599px){.landscape .properties[data-v-2e156114]{padding:8px;overflow:hidden;display:flex;flex-direction:column;justify-content:center}.landscape .properties[data-v-2e156114]  .v-card__subtitle{padding:0}}.landscape .v-btn--text[data-v-2e156114]{margin-left:-8px}@media(max-width:1279px){.landscape .v-btn.action-btn[data-v-2e156114]:not(.v-btn--text){min-width:0}}@media(max-width:599px){.landscape .news-title[data-v-2e156114]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;padding:0}}.full[data-v-2e156114]{overflow:hidden;position:relative}.round .figure[data-v-2e156114]{margin:16px;overflow:hidden;border-radius:12px}@media(max-width:599px){.round.landscape .figure[data-v-2e156114]{margin:8px}}.oval[data-v-2e156114]{overflow:hidden}.oval.portrait .figure[data-v-2e156114]{height:250px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}.oval.portrait .figure>div[data-v-2e156114]{overflow:visible;height:auto!important}.oval.landscape .figure[data-v-2e156114]{overflow:hidden}.oval.landscape .figure>div[data-v-2e156114]{border-radius:0 50% 50% 0!important;height:120%!important;margin-top:-10%}.over.portrait[data-v-2e156114]{margin-top:16px}.over.portrait .figure[data-v-2e156114]{overflow:hidden;margin:-16px 16px 0;border-radius:12px}.theme--dark .over.portrait .figure[data-v-2e156114]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.portrait .figure[data-v-2e156114]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape[data-v-2e156114]{margin-left:16px}[dir=rtl] .over.landscape[data-v-2e156114]{margin-right:16px}.over.landscape .figure[data-v-2e156114]{height:210px;overflow:hidden;margin:16px 0;border-radius:12px}.theme--dark .over.landscape .figure[data-v-2e156114]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.landscape .figure[data-v-2e156114]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape .figure[data-v-2e156114]{margin-left:-16px}[dir=rtl] .over.landscape .figure[data-v-2e156114]{margin-right:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-97728500]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-97728500]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-97728500]{font-size:28px;line-height:44px}}.use-text-title2[data-v-97728500]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-97728500]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-97728500]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-97728500]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-97728500]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-97728500]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-97728500]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-97728500]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-97728500]{font-size:16px;line-height:24px}}.use-text-caption[data-v-97728500],.use-text-paragraph[data-v-97728500]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-97728500]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-97728500]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-97728500]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-97728500]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-97728500]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-97728500]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-97728500]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-97728500]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-97728500]{transform:scale(-1)}.paper header[data-v-97728500]{padding:0 16px;display:flex;align-items:flex-start;margin-bottom:8px}.paper.color[data-v-97728500]{color:#fff;background:var(--v-primary-base)}.paper.color[data-v-97728500]  .v-card__subtitle{color:#fff}.icon[data-v-97728500]{color:var(--v-primary-base);padding:16px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(449);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e58526a", content, true, context)
};

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(451);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7ba7faba", content, true, context)
};

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/PostCard.vue?vue&type=template&id=2e156114&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"post-card mx-auto",class:[_vm.orientation, _vm.type],attrs:{"max-width":"1000"}},[_c('div',{staticClass:"figure"},[_c('v-img',{staticClass:"white--text",attrs:{"src":_vm.img,"height":"200px"}})],1),_vm._v(" "),_c('div',{staticClass:"properties"},[_c('strong',{staticClass:"use-text-tile2 text-truncate"},[_c('span',[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n      "+_vm._s(_vm.date)+"\n    ")]),_vm._v(" "),_c('v-card-text',{staticClass:"desc"},[_c('span',{staticClass:"text--primary"},[_c('span',[_vm._v(_vm._s(_vm.desc))])])]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{staticClass:"action-btn",attrs:{"small":_vm.orientation === 'landscape',"href":_vm.href,"outlined":"","color":"primary"}},[_vm._v("\n        Read more\n      ")])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/PostCard.vue?vue&type=template&id=2e156114&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/PostCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PostCardvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval

    },
    href: {
      type: String,
      default: '#'
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/PostCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_PostCardvue_type_script_lang_js_ = (PostCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// CONCATENATED MODULE: ./components/Cards/PostCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(400)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_PostCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e156114",
  "fa2bbc0a"
  
)

/* harmony default export */ var PostCard = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VImg: VImg["a" /* default */]})


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogHeader_vue_vue_type_style_index_0_id_5ca8c400_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogHeader_vue_vue_type_style_index_0_id_5ca8c400_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogHeader_vue_vue_type_style_index_0_id_5ca8c400_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogHeader_vue_vue_type_style_index_0_id_5ca8c400_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogHeader_vue_vue_type_style_index_0_id_5ca8c400_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5ca8c400]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5ca8c400]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5ca8c400]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5ca8c400]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-5ca8c400]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5ca8c400]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5ca8c400]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5ca8c400]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5ca8c400]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5ca8c400]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5ca8c400]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5ca8c400]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5ca8c400],.use-text-paragraph[data-v-5ca8c400]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5ca8c400]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5ca8c400]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5ca8c400]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5ca8c400]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5ca8c400]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5ca8c400]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5ca8c400]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5ca8c400]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-5ca8c400]{transform:scale(-1)}.popover[data-v-5ca8c400]{width:200px}.theme--light .popover[data-v-5ca8c400]{background-color:rgba(0,183,255,.512)}.theme--dark .popover[data-v-5ca8c400]{background-color:rgba(55,0,255,.4902)}.popover .v-list[data-v-5ca8c400]{border-radius:0}.switch-toggle[data-v-5ca8c400]{margin-top:0}.switch-toggle[data-v-5ca8c400]  .v-input--switch__thumb{color:var(--v-secondary-base)}.header[data-v-5ca8c400]{transition:all .3s ease}.theme--light .header[data-v-5ca8c400]{color:rgba(0,0,0,.87)}.theme--dark .header[data-v-5ca8c400]{color:#fff}.header.v-app-bar.v-app-bar--fixed[data-v-5ca8c400]{z-index:120}#main-wrap .header .v-toolbar__content .container[data-v-5ca8c400]{padding:0}@media(min-width:960px){#main-wrap .header .v-toolbar__content .container[data-v-5ca8c400]{padding:0 24px}}.header.v-app-bar.v-toolbar.v-sheet[data-v-5ca8c400]{background:none;box-shadow:none}.header.fixed[data-v-5ca8c400]{position:fixed;top:0}.theme--dark .header.fixed.v-app-bar.v-toolbar.v-sheet[data-v-5ca8c400]{box-shadow:0 1px 8px 0 rgba(50,50,50,.2),0 3px 4px 0 rgba(50,50,50,.14),0 3px 3px -2px rgba(50,50,50,.12)}.theme--light .header.fixed.v-app-bar.v-toolbar.v-sheet[data-v-5ca8c400]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12);background-color:rgba(0,183,255,.512)}.theme--dark .header.fixed.v-app-bar.v-toolbar.v-sheet[data-v-5ca8c400]{background-color:rgba(55,0,255,.4902)}.header.fixed .vertical-divider[data-v-5ca8c400]{min-height:24px}.header.fixed[data-v-5ca8c400]  .logo img{height:32px;width:32px}.header.fixed nav[data-v-5ca8c400]{padding:0}.header.no-shadow[data-v-5ca8c400]{box-shadow:none!important}.v-toolbar__content[data-v-5ca8c400],.v-toolbar__extension[data-v-5ca8c400]{padding:0}.header-content[data-v-5ca8c400]{display:flex;align-items:center;justify-content:space-between}.header-content nav[data-v-5ca8c400]{transition:all .3s ease;align-items:center;margin:3px 0;display:flex}@media(min-width:600px){.header-content nav[data-v-5ca8c400]{padding:8px}}@media(min-width:600px){.header-content nav>*[data-v-5ca8c400]{margin:0 8px}}.header-content nav .menu-setting[data-v-5ca8c400]{margin:0}@media(min-width:600px)and (max-width:1279px){.logo[data-v-5ca8c400]{flex:1}}.logo a[data-v-5ca8c400]{text-decoration:none;display:block}.logo.start-mobile[data-v-5ca8c400]{flex:0}@media(max-width:599px){.logo.start-mobile[data-v-5ca8c400]{margin:8px 16px}}.nav-menu[data-v-5ca8c400]{width:100%}@media(max-width:599px){.nav-menu[data-v-5ca8c400]{justify-content:space-between}}.nav-menu .scrollactive-nav[data-v-5ca8c400]{list-style:none}[dir=ltr] .nav-menu .scrollactive-nav[data-v-5ca8c400]{padding-left:24px}[dir=rtl] .nav-menu .scrollactive-nav[data-v-5ca8c400]{padding-right:24px}.nav-menu .scrollactive-nav .v-btn[data-v-5ca8c400]{margin:0 8px;list-style:none;position:relative;display:inline-block;padding:10px 8px;height:auto}.theme--light .nav-menu .scrollactive-nav .v-btn[data-v-5ca8c400]{color:rgba(0,0,0,.87)}.theme--dark .nav-menu .scrollactive-nav .v-btn[data-v-5ca8c400]{color:#fff}.nav-menu .scrollactive-nav .v-btn.active[data-v-5ca8c400]:after{content:\"\";position:absolute;width:100%;height:4px;background:var(--v-primary-base);bottom:-4px;left:0}@media(max-width:599px){.nav-menu[data-v-5ca8c400]  .logo img{height:32px;width:32px}}.main-menu[data-v-5ca8c400],.multi-menu[data-v-5ca8c400]{flex:1}.main-menu .v-btn:not(.v-btn--round).v-size--default[data-v-5ca8c400],.multi-menu .v-btn:not(.v-btn--round).v-size--default[data-v-5ca8c400]{text-transform:capitalize}.main-menu .v-btn:not(.v-btn--round).v-size--default[data-v-5ca8c400]{margin:0 8px;padding:8px}.multi-menu .v-btn:not(.v-btn--round).v-size--default[data-v-5ca8c400]{margin:0 4px;padding:8px}.user-menu>button[data-v-5ca8c400]{margin:0 8px}.lang-menu .flag[data-v-5ca8c400]{margin:0}.lang-menu .flag i[data-v-5ca8c400]{width:16px;height:16px;border-radius:50%;display:inline-block;position:relative;top:1px;background:url(/images/flag-logo.png) no-repeat transparent;background-size:16px auto}[dir=ltr] .lang-menu .flag i[data-v-5ca8c400]{margin-right:5px}[dir=rtl] .lang-menu .flag i[data-v-5ca8c400]{margin-left:5px}.lang-menu .flag i.ar[data-v-5ca8c400]{background-position:0 3px}.lang-menu .flag i.zh[data-v-5ca8c400]{background-position:0 -12px}.lang-menu .flag i.en[data-v-5ca8c400]{background-position:0 -28px}.lang-menu .flag i.de[data-v-5ca8c400]{background-position:0 -44px}.lang-menu .flag i.id[data-v-5ca8c400]{background-position:0 -62px}.lang-menu .flag i.pt[data-v-5ca8c400]{background-position:0 -79px}.vertical-divider[data-v-5ca8c400]{margin:0 8px;border-left:1px solid;height:100%;min-height:48px;flex-grow:unset!important}.theme--light .vertical-divider[data-v-5ca8c400]{border-color:#30f}.theme--dark .vertical-divider[data-v-5ca8c400]{border-color:#0cf}.setting .icon[data-v-5ca8c400]{transition:all .3s ease}.theme--light .setting .icon[data-v-5ca8c400]{color:rgba(0,0,0,.54)}.theme--dark .setting .icon[data-v-5ca8c400]{color:hsla(0,0%,100%,.7)}.setting .active[data-v-5ca8c400]{transform:rotate(30deg)}.lang-menu[data-v-5ca8c400],.mode-menu[data-v-5ca8c400]{text-transform:capitalize}.mode-menu[data-v-5ca8c400]  .v-list-item__content{overflow:visible}.flex-menu[data-v-5ca8c400]{display:flex;justify-content:flex-start}.flex-menu label[data-v-5ca8c400]{text-transform:capitalize;padding:8px 16px}.v-list-item__content[data-v-5ca8c400]{padding:0}[dir=ltr] .mobile-menu[data-v-5ca8c400]{margin-right:8px}[dir=rtl] .mobile-menu[data-v-5ca8c400]{margin-left:8px}.theme--light .mobile-menu .bar[data-v-5ca8c400]{background-color:rgba(0,0,0,.54)}.theme--dark .mobile-menu .bar[data-v-5ca8c400]{background-color:hsla(0,0%,100%,.7)}.theme--light .mobile-menu .bar[data-v-5ca8c400]:after,.theme--light .mobile-menu .bar[data-v-5ca8c400]:before{background-color:rgba(0,0,0,.54)}.theme--dark .mobile-menu .bar[data-v-5ca8c400]:after,.theme--dark .mobile-menu .bar[data-v-5ca8c400]:before{background-color:hsla(0,0%,100%,.7)}.mobile-nav[data-v-5ca8c400]{width:240px;padding:80px 16px 0;z-index:90}.theme--light .mobile-nav[data-v-5ca8c400]{background-color:#fafafa}.theme--dark .mobile-nav[data-v-5ca8c400]{background-color:#303030}@media(max-width:599px){.mobile-nav[data-v-5ca8c400]{width:100%!important}}.menu-list[data-v-5ca8c400]{text-transform:capitalize;font-size:14px}.submenu-hover[data-v-5ca8c400]{position:absolute;left:100%;top:0;display:none;background:none}.parent-hover[data-v-5ca8c400]{position:relative}.parent-hover:hover>.submenu-hover[data-v-5ca8c400]{display:block}.rounded-menu[data-v-5ca8c400]{border-radius:10px}.mega-menu-root[data-v-5ca8c400]{background:transparent;box-shadow:none!important}.mega-menu[data-v-5ca8c400]{background:transparent;position:relative;margin-top:20px;box-shadow:none;border-radius:0;max-height:480px;overflow:auto}.mega-menu .v-list[data-v-5ca8c400]{background:none}.mega-menu .container.max-md[data-v-5ca8c400]{max-width:960px}.thumb-menu[data-v-5ca8c400]{width:200px;height:78px;border-radius:8px;margin:0 8px 16px}.button-item[data-v-5ca8c400]:after{content:\"\";width:100%;position:absolute;z-index:-1;left:0;top:0;height:0;opacity:0}.theme--light .button-item[data-v-5ca8c400]:after{background-color:rgba(0,183,255,.512)}.theme--dark .button-item[data-v-5ca8c400]:after{background-color:rgba(55,0,255,.4902)}.button-item[aria-expanded=true][data-v-5ca8c400]:after{opacity:1;height:560px}.v-application.theme--dark .button-item[data-v-5ca8c400]:after{box-shadow:0 1px 3px 0 #40f,0 1px 1px 0 #1c1555,0 2px 1px -1px #141414}.v-application.theme--light .button-item[data-v-5ca8c400]:after{box-shadow:0 6px 8px 1px rgba(0,0,0,.06)}.title-mega[data-v-5ca8c400]{text-transform:uppercase;font-weight:700;font-size:11px}.search[data-v-5ca8c400]{position:relative;display:flex;max-width:600px;align-items:center}[dir=ltr] .search[data-v-5ca8c400]{margin-left:16px}[dir=ltr] .search[data-v-5ca8c400],[dir=rtl] .search[data-v-5ca8c400]{margin-right:16px}[dir=rtl] .search[data-v-5ca8c400]{margin-left:16px}@media(max-width:599px){.search[data-v-5ca8c400]{margin-bottom:16px}}@media(min-width:600px){.search[data-v-5ca8c400]{flex:1}}.search.short[data-v-5ca8c400]{width:300px}.search[data-v-5ca8c400]  fieldset{height:41px}.search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot{min-height:0;margin-bottom:0}[dir=ltr] .search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-right:16px}[dir=rtl] .search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-left:16px}[dir=ltr] .search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-left:40px}[dir=rtl] .search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-right:40px}.search[data-v-5ca8c400]  .v-text-field--outlined>.v-input__control>.v-input__slot input{max-height:none}.search[data-v-5ca8c400]  .v-text-field__details{display:none}.search-icon.v-icon[data-v-5ca8c400]{position:absolute;top:7px}[dir=ltr] .search-icon.v-icon[data-v-5ca8c400]{left:8px}[dir=rtl] .search-icon.v-icon[data-v-5ca8c400]{right:8px}.paper-nav[data-v-5ca8c400]{width:100%;position:fixed;z-index:50;height:100%}.theme--light .paper-nav[data-v-5ca8c400]{background-color:rgba(0,183,255,.512)}.theme--dark .paper-nav[data-v-5ca8c400]{background-color:rgba(55,0,255,.4902)}.hamburger[data-v-5ca8c400]{padding:0;margin:0 8px}.hamburger-logo[data-v-5ca8c400]{display:flex;align-items:center;flex:1}.hamburger-nav[data-v-5ca8c400]{z-index:90;min-width:300px}@media(max-width:599px){.hamburger-nav[data-v-5ca8c400]{width:100%!important}}.hamburger-nav .menu[data-v-5ca8c400]{padding:96px 40px 16px;top:0;width:100%;height:100%;overflow:auto;position:absolute;list-style:none}.hamburger-nav .menu li[data-v-5ca8c400]{text-align:center}.hamburger-nav .menu li[data-v-5ca8c400]  .v-btn{font-size:24px;padding:20px 32px;height:auto}.theme--light .hamburger-nav .menu li[data-v-5ca8c400]  .v-btn{color:rgba(0,0,0,.87)}.theme--dark .hamburger-nav .menu li[data-v-5ca8c400]  .v-btn{color:#fff}.hamburger-nav .menu li[data-v-5ca8c400]  .v-btn:before{content:\"\";position:absolute;top:8px;opacity:.2;background:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base));height:75%;width:0;border-radius:0;transition:all .2s cubic-bezier(0,0,.14,.97)}[dir=ltr] .hamburger-nav .menu li[data-v-5ca8c400]  .v-btn:before{left:-16px}[dir=rtl] .hamburger-nav .menu li[data-v-5ca8c400]  .v-btn:before{right:-16px}.hamburger-nav .menu li[data-v-5ca8c400]  .v-btn:hover{color:var(--v-primary-base);background:none}.hamburger-nav .menu li[data-v-5ca8c400]  .v-btn:hover:before{width:125%}.hamburger-nav .menu.menu-open a[data-v-5ca8c400]{-webkit-animation-name:slide-right;animation-name:slide-right;-webkit-animation-timing-function:ease;animation-timing-function:ease}.hamburger-nav .divider-sidebar[data-v-5ca8c400]{background:rgba(0,153,255,.651);margin:24px 0}.fade-enter-active[data-v-5ca8c400],.fade-leave-active[data-v-5ca8c400]{transition:opacity .5s}.fade-enter[data-v-5ca8c400],.fade-leave-to[data-v-5ca8c400]{opacity:0}.nuxt-link-active[data-v-5ca8c400]{color:#00b7ff!important}.nuxt-link-exact-active[data-v-5ca8c400]{color:#3700ff!important}.theme--light .current[data-v-5ca8c400]{background:var(--v-primarylight-base)}.theme--dark .current[data-v-5ca8c400]{background:var(--v-primarydark-base)}.theme--light .current[data-v-5ca8c400]{color:var(--v-primarydark-base)}.theme--dark .current[data-v-5ca8c400]{color:var(--v-primarylight-base)}.v-application--is-rtl .arrow-icon[data-v-5ca8c400]{transform:scale(-1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_5549dd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_5549dd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_5549dd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_5549dd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Headline_vue_vue_type_style_index_0_id_5549dd36_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5549dd36]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5549dd36]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5549dd36]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5549dd36]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-5549dd36]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5549dd36]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5549dd36]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5549dd36]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5549dd36]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5549dd36]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5549dd36]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5549dd36]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5549dd36],.use-text-paragraph[data-v-5549dd36]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5549dd36]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5549dd36]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5549dd36]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5549dd36]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5549dd36]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5549dd36]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5549dd36]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5549dd36]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-5549dd36]{transform:scale(-1)}.blog-headline[data-v-5549dd36]{cursor:pointer}a.anchor-content[data-v-5549dd36]{display:block;color:#fff;text-decoration:none;padding:16px}@media(min-width:960px){a.anchor-content[data-v-5549dd36]{padding:64px}}.headline-title[data-v-5549dd36]{font-weight:500;margin-bottom:32px}.title-blog[data-v-5549dd36]{font-weight:500}.image-blog[data-v-5549dd36]{margin:40px 0}.image-blog img[data-v-5549dd36]{width:100%}@media(max-width:599px){.blog-content[data-v-5549dd36]{margin-top:16px}}.blog-content ol[data-v-5549dd36],.blog-content ul[data-v-5549dd36]{margin-bottom:16px}.list[data-v-5549dd36]{list-style:disc}.share-socmed[data-v-5549dd36]{border-top:1px solid;border-bottom:1px solid;padding:24px 0;margin:24px 0}.theme--light .share-socmed[data-v-5549dd36]{border-color:#30f}.theme--dark .share-socmed[data-v-5549dd36]{border-color:#0cf}.share-socmed[data-v-5549dd36]  .v-btn{border-width:2px}[dir=ltr] .share-socmed[data-v-5549dd36]  .v-btn{margin-right:16px}[dir=rtl] .share-socmed[data-v-5549dd36]  .v-btn{margin-left:16px}.facebook[data-v-5549dd36]{border-color:#0d47a1}.facebook[data-v-5549dd36]  .v-icon{color:#0d47a1}.twitter[data-v-5549dd36]{border-color:#00bcd4}.twitter[data-v-5549dd36]  .v-icon{color:#00bcd4}.linkedin[data-v-5549dd36]{border-color:#2196f3}.linkedin[data-v-5549dd36]  .v-icon{color:#2196f3}.subtitle[data-v-5549dd36]{font-weight:700;margin-bottom:24px}.theme--light .subtitle[data-v-5549dd36]{color:var(--v-primarydark-base)}.theme--dark .subtitle[data-v-5549dd36]{color:var(--v-primarylight-base)}.gallery-item[data-v-5549dd36]{padding:2px}.form[data-v-5549dd36]{display:flex;align-items:center;padding:0 16px}.input[data-v-5549dd36]{flex:1}[dir=ltr] .send[data-v-5549dd36]{margin-left:16px}[dir=rtl] .send[data-v-5549dd36]{margin-right:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeWidget_vue_vue_type_style_index_0_id_a638262c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeWidget_vue_vue_type_style_index_0_id_a638262c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeWidget_vue_vue_type_style_index_0_id_a638262c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeWidget_vue_vue_type_style_index_0_id_a638262c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscribeWidget_vue_vue_type_style_index_0_id_a638262c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-a638262c]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-a638262c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-a638262c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-a638262c]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-a638262c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-a638262c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-a638262c]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-a638262c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-a638262c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-a638262c]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-a638262c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-a638262c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-a638262c],.use-text-paragraph[data-v-a638262c]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-a638262c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a638262c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a638262c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a638262c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a638262c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a638262c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a638262c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a638262c]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-a638262c]{transform:scale(-1)}.blog-headline[data-v-a638262c]{cursor:pointer}a.anchor-content[data-v-a638262c]{display:block;color:#fff;text-decoration:none;padding:16px}@media(min-width:960px){a.anchor-content[data-v-a638262c]{padding:64px}}.headline-title[data-v-a638262c]{font-weight:500;margin-bottom:32px}.title-blog[data-v-a638262c]{font-weight:500}.image-blog[data-v-a638262c]{margin:40px 0}.image-blog img[data-v-a638262c]{width:100%}@media(max-width:599px){.blog-content[data-v-a638262c]{margin-top:16px}}.blog-content ol[data-v-a638262c],.blog-content ul[data-v-a638262c]{margin-bottom:16px}.list[data-v-a638262c]{list-style:disc}.share-socmed[data-v-a638262c]{border-top:1px solid;border-bottom:1px solid;padding:24px 0;margin:24px 0}.theme--light .share-socmed[data-v-a638262c]{border-color:#30f}.theme--dark .share-socmed[data-v-a638262c]{border-color:#0cf}.share-socmed[data-v-a638262c]  .v-btn{border-width:2px}[dir=ltr] .share-socmed[data-v-a638262c]  .v-btn{margin-right:16px}[dir=rtl] .share-socmed[data-v-a638262c]  .v-btn{margin-left:16px}.facebook[data-v-a638262c]{border-color:#0d47a1}.facebook[data-v-a638262c]  .v-icon{color:#0d47a1}.twitter[data-v-a638262c]{border-color:#00bcd4}.twitter[data-v-a638262c]  .v-icon{color:#00bcd4}.linkedin[data-v-a638262c]{border-color:#2196f3}.linkedin[data-v-a638262c]  .v-icon{color:#2196f3}.subtitle[data-v-a638262c]{font-weight:700;margin-bottom:24px}.theme--light .subtitle[data-v-a638262c]{color:var(--v-primarydark-base)}.theme--dark .subtitle[data-v-a638262c]{color:var(--v-primarylight-base)}.gallery-item[data-v-a638262c]{padding:2px}.form[data-v-a638262c]{display:flex;align-items:center;padding:0 16px}.input[data-v-a638262c]{flex:1}[dir=ltr] .send[data-v-a638262c]{margin-left:16px}[dir=rtl] .send[data-v-a638262c]{margin-right:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryWidget_vue_vue_type_style_index_0_id_cdb09b3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryWidget_vue_vue_type_style_index_0_id_cdb09b3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryWidget_vue_vue_type_style_index_0_id_cdb09b3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryWidget_vue_vue_type_style_index_0_id_cdb09b3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryWidget_vue_vue_type_style_index_0_id_cdb09b3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-cdb09b3a]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-cdb09b3a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-cdb09b3a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-cdb09b3a]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-cdb09b3a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-cdb09b3a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-cdb09b3a]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-cdb09b3a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-cdb09b3a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-cdb09b3a]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-cdb09b3a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-cdb09b3a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-cdb09b3a],.use-text-paragraph[data-v-cdb09b3a]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-cdb09b3a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-cdb09b3a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-cdb09b3a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-cdb09b3a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-cdb09b3a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-cdb09b3a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-cdb09b3a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-cdb09b3a]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-cdb09b3a]{transform:scale(-1)}.blog-headline[data-v-cdb09b3a]{cursor:pointer}a.anchor-content[data-v-cdb09b3a]{display:block;color:#fff;text-decoration:none;padding:16px}@media(min-width:960px){a.anchor-content[data-v-cdb09b3a]{padding:64px}}.headline-title[data-v-cdb09b3a]{font-weight:500;margin-bottom:32px}.title-blog[data-v-cdb09b3a]{font-weight:500}.image-blog[data-v-cdb09b3a]{margin:40px 0}.image-blog img[data-v-cdb09b3a]{width:100%}@media(max-width:599px){.blog-content[data-v-cdb09b3a]{margin-top:16px}}.blog-content ol[data-v-cdb09b3a],.blog-content ul[data-v-cdb09b3a]{margin-bottom:16px}.list[data-v-cdb09b3a]{list-style:disc}.share-socmed[data-v-cdb09b3a]{border-top:1px solid;border-bottom:1px solid;padding:24px 0;margin:24px 0}.theme--light .share-socmed[data-v-cdb09b3a]{border-color:#30f}.theme--dark .share-socmed[data-v-cdb09b3a]{border-color:#0cf}.share-socmed[data-v-cdb09b3a]  .v-btn{border-width:2px}[dir=ltr] .share-socmed[data-v-cdb09b3a]  .v-btn{margin-right:16px}[dir=rtl] .share-socmed[data-v-cdb09b3a]  .v-btn{margin-left:16px}.facebook[data-v-cdb09b3a]{border-color:#0d47a1}.facebook[data-v-cdb09b3a]  .v-icon{color:#0d47a1}.twitter[data-v-cdb09b3a]{border-color:#00bcd4}.twitter[data-v-cdb09b3a]  .v-icon{color:#00bcd4}.linkedin[data-v-cdb09b3a]{border-color:#2196f3}.linkedin[data-v-cdb09b3a]  .v-icon{color:#2196f3}.subtitle[data-v-cdb09b3a]{font-weight:700;margin-bottom:24px}.theme--light .subtitle[data-v-cdb09b3a]{color:var(--v-primarydark-base)}.theme--dark .subtitle[data-v-cdb09b3a]{color:var(--v-primarylight-base)}.gallery-item[data-v-cdb09b3a]{padding:2px}.form[data-v-cdb09b3a]{display:flex;align-items:center;padding:0 16px}.input[data-v-cdb09b3a]{flex:1}[dir=ltr] .send[data-v-cdb09b3a]{margin-left:16px}[dir=rtl] .send[data-v-cdb09b3a]{margin-right:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Sidebar; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/Sidebar.vue?vue&type=template&id=22b0c660&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('subscribe-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('profile-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('post-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('comment-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('list-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('gallery-widget')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/Sidebar.vue?vue&type=template&id=22b0c660&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/ProfileWidget.vue?vue&type=template&id=024b87b8&
var ProfileWidgetvue_type_template_id_024b87b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_about'),"subtitle":"commodo augue. In dictum leo nec odio euismod pretium.","icon":"mdi-account-circle"}},[_c('div',[_c('v-list',[_c('v-list-item',[_c('v-list-item-avatar',[_c('v-icon',{staticClass:"grey lighten-3",attrs:{"color":"primary"}},[_vm._v("\n            mdi-calendar\n          ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$t('common.blog_born')))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Jan 9, 1974")])],1)],1),_vm._v(" "),_c('v-list-item',[_c('v-list-item-avatar',[_c('v-icon',{staticClass:"grey lighten-3",attrs:{"color":"primary"}},[_vm._v("\n            mdi-phone\n          ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$t('common.blog_phone')))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("(+62)8765432190")])],1)],1),_vm._v(" "),_c('v-list-item',{attrs:{"three-line":""}},[_c('v-list-item-avatar',[_c('v-icon',{staticClass:"grey lighten-3",attrs:{"color":"primary"}},[_vm._v("\n            mdi-google-maps\n          ")])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.$t('common.blog_address')))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v("Chicendo Street no.105  Block A/5A - Barcelona, Spain")])],1)],1)],1)],1)])}
var ProfileWidgetvue_type_template_id_024b87b8_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/ProfileWidget.vue?vue&type=template&id=024b87b8&

// EXTERNAL MODULE: ./components/Paper/index.js + 5 modules
var Paper = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/ProfileWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProfileWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/Blog/Sidebar/ProfileWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_ProfileWidgetvue_type_script_lang_js_ = (ProfileWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Blog/Sidebar/ProfileWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Sidebar_ProfileWidgetvue_type_script_lang_js_,
  ProfileWidgetvue_type_template_id_024b87b8_render,
  ProfileWidgetvue_type_template_id_024b87b8_staticRenderFns,
  false,
  null,
  null,
  "7bbcc2cc"
  
)

/* harmony default export */ var ProfileWidget = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/SubscribeWidget.vue?vue&type=template&id=a638262c&scoped=true&
var SubscribeWidgetvue_type_template_id_a638262c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_subscribe'),"subtitle":_vm.$t('common.blog_subscribe_desc'),"icon":"mdi-wifi","color":""}},[_c('div',[_c('div',{staticClass:"form"},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.register_email'),"dark":""}}),_vm._v(" "),_c('v-btn',{staticClass:"send",attrs:{"small":"","outlined":"","color":"white"}},[_vm._v("\n        "+_vm._s(_vm.$t('common.btn_submit'))+"\n      ")])],1)])])}
var SubscribeWidgetvue_type_template_id_a638262c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/SubscribeWidget.vue?vue&type=template&id=a638262c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/SubscribeWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SubscribeWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/Blog/Sidebar/SubscribeWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_SubscribeWidgetvue_type_script_lang_js_ = (SubscribeWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(62);

// CONCATENATED MODULE: ./components/Blog/Sidebar/SubscribeWidget.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(448)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SubscribeWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_SubscribeWidgetvue_type_script_lang_js_,
  SubscribeWidgetvue_type_template_id_a638262c_scoped_true_render,
  SubscribeWidgetvue_type_template_id_a638262c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "a638262c",
  "f7cff926"
  
)

/* harmony default export */ var SubscribeWidget = (SubscribeWidget_component.exports);

/* vuetify-loader */



installComponents_default()(SubscribeWidget_component, {VBtn: VBtn["a" /* default */],VTextField: VTextField["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/PostWidget.vue?vue&type=template&id=44beb3d6&
var PostWidgetvue_type_template_id_44beb3d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_post'),"icon":"mdi-bookmark-outline"}},[_c('div',[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.news),function(item,index){return _c('v-list-item',{key:index,attrs:{"href":"#"}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(_vm._s(item.date))])],1)],1)}),1)],1)])}
var PostWidgetvue_type_template_id_44beb3d6_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/PostWidget.vue?vue&type=template&id=44beb3d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/PostWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PostWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      news: [{
        title: 'Vestibulum bibendum nisi eget magna',
        date: 'Jan 9, 2014'
      }, {
        title: 'Quisque a consequat ante',
        date: 'Jan 9, 2014'
      }, {
        title: 'Donec dignissim, odio ac imperdiet luctus',
        date: 'Jan 9, 2014'
      }, {
        title: 'Suspendisse eleifend nunc non',
        date: 'Jan 9, 2014'
      }, {
        title: 'Vestibulum a massa vestibulum',
        date: 'Jan 9, 2014'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Blog/Sidebar/PostWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_PostWidgetvue_type_script_lang_js_ = (PostWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Blog/Sidebar/PostWidget.vue





/* normalize component */

var PostWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_PostWidgetvue_type_script_lang_js_,
  PostWidgetvue_type_template_id_44beb3d6_render,
  PostWidgetvue_type_template_id_44beb3d6_staticRenderFns,
  false,
  null,
  null,
  "0dec10d6"
  
)

/* harmony default export */ var PostWidget = (PostWidget_component.exports);

/* vuetify-loader */






installComponents_default()(PostWidget_component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/CommentWidget.vue?vue&type=template&id=3b619ea2&
var CommentWidgetvue_type_template_id_3b619ea2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_comment'),"icon":"mdi-comment-outline"}},[_c('div',[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.comments),function(item,index){return _c('v-list-item',{key:index,attrs:{"href":"#"}},[_c('v-list-item-avatar',{attrs:{"color":item.color}},[_c('span',{staticClass:"white--text headline"},[_vm._v(_vm._s(_vm.firstChar(item.name)))])]),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(_vm._s(item.comment))])],1)],1)}),1)],1)])}
var CommentWidgetvue_type_template_id_3b619ea2_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/CommentWidget.vue?vue&type=template&id=3b619ea2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/CommentWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CommentWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      comments: [{
        color: 'teal',
        name: 'John Doe',
        comment: 'Duis viverra neque eget '
      }, {
        color: 'pink',
        name: 'Jean Doe',
        comment: 'Duis viverra neque eget '
      }, {
        color: 'purple',
        name: 'Jim Doe',
        comment: 'Duis viverra neque eget '
      }, {
        color: 'amber',
        name: 'Jihan Doe',
        comment: 'Duis viverra neque eget '
      }, {
        color: 'cyan',
        name: 'Jena Doe',
        comment: 'Duis viverra neque eget '
      }, {
        color: 'deepBlue',
        name: 'Johan Doe',
        comment: 'Duis viverra neque eget '
      }]
    };
  },

  methods: {
    firstChar: function (str) {
      return str.charAt(0);
    }
  }
});
// CONCATENATED MODULE: ./components/Blog/Sidebar/CommentWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_CommentWidgetvue_type_script_lang_js_ = (CommentWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Blog/Sidebar/CommentWidget.vue





/* normalize component */

var CommentWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_CommentWidgetvue_type_script_lang_js_,
  CommentWidgetvue_type_template_id_3b619ea2_render,
  CommentWidgetvue_type_template_id_3b619ea2_staticRenderFns,
  false,
  null,
  null,
  "467e3c02"
  
)

/* harmony default export */ var CommentWidget = (CommentWidget_component.exports);

/* vuetify-loader */







installComponents_default()(CommentWidget_component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/ListWidget.vue?vue&type=template&id=67fcfff6&
var ListWidgetvue_type_template_id_67fcfff6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_archived'),"icon":"mdi-folder-outline"}},[_c('div',[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.periode),function(item,index){return _c('v-list-item',{key:index,attrs:{"href":"#"}},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item))])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-icon',{attrs:{"color":"grey lighten-1"}},[_vm._v("mdi-chevron-right")])],1)],1)}),1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("\n      "+_vm._s(_vm.$t('common.btn_seeall'))+"\n    ")])],1)])}
var ListWidgetvue_type_template_id_67fcfff6_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/ListWidget.vue?vue&type=template&id=67fcfff6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/ListWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ListWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      periode: ['October 2018', 'September 2018', 'August 2018', 'July 2018', 'June 2018', 'April 2018', 'March 2018', 'Febuary 2018']
    };
  }

});
// CONCATENATED MODULE: ./components/Blog/Sidebar/ListWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_ListWidgetvue_type_script_lang_js_ = (ListWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(99);

// CONCATENATED MODULE: ./components/Blog/Sidebar/ListWidget.vue





/* normalize component */

var ListWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_ListWidgetvue_type_script_lang_js_,
  ListWidgetvue_type_template_id_67fcfff6_render,
  ListWidgetvue_type_template_id_67fcfff6_staticRenderFns,
  false,
  null,
  null,
  "4afeabda"
  
)

/* harmony default export */ var ListWidget = (ListWidget_component.exports);

/* vuetify-loader */








installComponents_default()(ListWidget_component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/GalleryWidget.vue?vue&type=template&id=cdb09b3a&scoped=true&
var GalleryWidgetvue_type_template_id_cdb09b3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":_vm.$t('common.blog_album'),"icon":"mdi-image-multiple","subtitle":""}},[_c('div',[_c('v-item-group',{attrs:{"multiple":""},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('v-row',{staticClass:"ma-0"},_vm._l((_vm.images),function(item,i){return _c('v-col',{key:i,staticClass:"gallery-item",attrs:{"cols":"12","md":"6"}},[_c('v-item',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-img',{staticClass:"text-right pa-2",attrs:{"src":item.src,"height":"150"},on:{"click":toggle}},[_c('v-btn',{attrs:{"icon":"","dark":""}},[_c('v-icon',[_vm._v("\n                  "+_vm._s(active ? 'mdi-heart' : 'mdi-heart-outline')+"\n                ")])],1)],1)]}}],null,true)})],1)}),1)],1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("\n      "+_vm._s(_vm.$t('common.btn_seeall'))+"\n    ")])],1)])}
var GalleryWidgetvue_type_template_id_cdb09b3a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Sidebar/GalleryWidget.vue?vue&type=template&id=cdb09b3a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/GalleryWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var GalleryWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      images: [{
        src: 'https://source.unsplash.com/random'
      }, {
        src: 'https://source.unsplash.com/random'
      }, {
        src: 'https://source.unsplash.com/random'
      }, {
        src: 'https://source.unsplash.com/random'
      }],
      selected: []
    };
  }

});
// CONCATENATED MODULE: ./components/Blog/Sidebar/GalleryWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_GalleryWidgetvue_type_script_lang_js_ = (GalleryWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
var VItem = __webpack_require__(522);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./components/Blog/Sidebar/GalleryWidget.vue



function GalleryWidget_injectStyles (context) {
  
  var style0 = __webpack_require__(450)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var GalleryWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_GalleryWidgetvue_type_script_lang_js_,
  GalleryWidgetvue_type_template_id_cdb09b3a_scoped_true_render,
  GalleryWidgetvue_type_template_id_cdb09b3a_scoped_true_staticRenderFns,
  false,
  GalleryWidget_injectStyles,
  "cdb09b3a",
  "029f1d96"
  
)

/* harmony default export */ var GalleryWidget = (GalleryWidget_component.exports);

/* vuetify-loader */








installComponents_default()(GalleryWidget_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VItem: VItem["a" /* default */],VItemGroup: VItemGroup["b" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Sidebar/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  components: {
    SubscribeWidget: SubscribeWidget,
    ProfileWidget: ProfileWidget,
    PostWidget: PostWidget,
    CommentWidget: CommentWidget,
    ListWidget: ListWidget,
    GalleryWidget: GalleryWidget
  }
});
// CONCATENATED MODULE: ./components/Blog/Sidebar/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Blog/Sidebar/Sidebar.vue





/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66364aca"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./components/Blog/Sidebar/index.js


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/BlogHeader.vue?vue&type=template&id=5ca8c400&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[(_vm.isTablet)?_c('v-navigation-drawer',{staticClass:"mobile-nav",attrs:{"fixed":"","temporary":""},model:{value:(_vm.openNavMobile),callback:function ($$v) {_vm.openNavMobile=$$v},expression:"openNavMobile"}},[_c('mobile-menu',{attrs:{"data-menu":_vm.dataMenu}})],1):_vm._e(),_vm._v(" "),_c('v-app-bar',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"header",class:{ fixed: _vm.fixed },attrs:{"fixed":"","dense":"","app":"","height":"auto"}},[_c('v-container',[_c('div',{staticClass:"header-content"},[_c('nav',{staticClass:"nav-menu"},[(_vm.isTablet)?_c('v-btn',{attrs:{"text":"","icon":""},on:{"click":function($event){$event.stopPropagation();return _vm.handleToggleOpen.apply(null, arguments)}}},[_c('v-icon',[_vm._v("mdi-menu")])],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"logo"},[_c('a',{attrs:{"href":_vm.link.starter.home}},[_c('logo',{attrs:{"type":"landscape"}})],1)]),_vm._v(" "),(_vm.loaded)?_c('div',[(_vm.isDesktop)?_c('header-menu',{attrs:{"data-menu":_vm.dataMenu}}):_vm._e()],1):_vm._e()],1),_vm._v(" "),_c('nav',[_c('hidden',{attrs:{"point":"xsDown"}},[_c('search-field',{attrs:{"short":""}})],1),_vm._v(" "),(_vm.isDesktop)?_c('v-spacer',{staticClass:"vertical-divider"}):_vm._e(),_vm._v(" "),_c('setting-menu')],1)]),_vm._v(" "),_c('hidden',{attrs:{"point":"smUp"}},[_c('search-field')],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/BlogHeader.vue?vue&type=template&id=5ca8c400&scoped=true&

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(21);

// EXTERNAL MODULE: ./components/Logo/index.js + 5 modules
var Logo = __webpack_require__(15);

// EXTERNAL MODULE: ./components/Header/TopNav/Settings.vue + 5 modules
var Settings = __webpack_require__(18);

// EXTERNAL MODULE: ./components/Header/TopNav/SearchField.vue + 4 modules
var SearchField = __webpack_require__(122);

// EXTERNAL MODULE: ./components/Header/TopNav/MultiLevel.vue + 4 modules
var MultiLevel = __webpack_require__(121);

// EXTERNAL MODULE: ./components/Header/SideNav/MultiMobile.vue + 9 modules
var MultiMobile = __webpack_require__(119);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(111);

// EXTERNAL MODULE: ./components/Header/data/sample-pages.js
var sample_pages = __webpack_require__(44);

// CONCATENATED MODULE: ./components/Header/data/blog.js

const multiple = [{
  name: 'Category 1',
  child: [{
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }]
}, {
  name: 'Category 2',
  child: [{
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }]
}, {
  name: 'Category 3',
  child: [{
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }, {
    name: 'Eu Rhoncus Odio',
    link: '/'
  }]
}, {
  name: 'Sample Pages',
  child: sample_pages["a" /* default */]
}];
/* harmony default export */ var blog = (multiple);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/BlogHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var BlogHeadervue_type_script_lang_js_ = ({
  components: {
    Logo: Logo["a" /* default */],
    Hidden: Hidden["a" /* default */],
    'mobile-menu': MultiMobile["a" /* default */],
    'header-menu': MultiLevel["a" /* default */],
    'setting-menu': Settings["a" /* default */],
    SearchField: SearchField["a" /* default */],
    Settings: Settings["a" /* default */]
  },

  data() {
    return {
      link: text_link["a" /* default */],
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: blog
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleScroll: function () {
      if (window.scrollY > 100) {
        return this.fixed = true;
      }

      return this.fixed = false;
    },
    handleToggleOpen: function () {
      this.openNavMobile = !this.openNavMobile;
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown;
      return mdDown.indexOf(this.$mq) > -1;
    },

    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Header/BlogHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_BlogHeadervue_type_script_lang_js_ = (BlogHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 1 modules
var VAppBar = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js + 1 modules
var VNavigationDrawer = __webpack_require__(346);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(17);

// CONCATENATED MODULE: ./components/Header/BlogHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(444)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_BlogHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ca8c400",
  "258e23bc"
  
)

/* harmony default export */ var BlogHeader = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(component, {Scroll: directives_scroll["b" /* default */]})


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/Headline.vue?vue&type=template&id=5549dd36&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"blog-headline",attrs:{"dark":""}},[_c('v-img',{staticClass:"white--text align-end",attrs:{"src":"https://source.unsplash.com/random","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)","height":"460px"}},[_c('a',{staticClass:"anchor-content",attrs:{"href":"#"}},[_c('v-card-title',{staticClass:"headline-title use-text-title"},[_vm._v("Pellentesque habitant morbi tristique senectus ")]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"text-h6 use-text-subtitle"},[_vm._v("Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. ")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/Headline.vue?vue&type=template&id=5549dd36&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/Blog/Headline.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(446)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5549dd36",
  "4ae5929c"
  
)

/* harmony default export */ var Headline = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardTitle: components_VCard["d" /* VCardTitle */],VImg: VImg["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(component, {Ripple: ripple["a" /* default */]})


/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseItem */
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
// Mixins
 // Utilities


 // Types


/* @vue/component */

const BaseItem = vue__WEBPACK_IMPORTED_MODULE_3___default.a.extend({
  props: {
    activeClass: String,
    value: {
      required: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render() {
    if (!this.$scopedSlots.default) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* consoleWarn */ "c"])('v-item is missing a default scopedSlot', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        active: this.isActive,
        toggle: this.toggle
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__[/* consoleWarn */ "c"])('v-item should only contain a single element', this);
      return element;
    }

    element.data = this._b(element.data || {}, element.tag, {
      class: {
        [this.activeClass]: this.isActive
      }
    });
    return element;
  }

});
/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(BaseItem, Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('itemGroup', 'v-item', 'v-item-group')).extend({
  name: 'v-item'
}));

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6b80f667", content, true, context)
};

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ce614fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ce614fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ce614fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ce614fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ce614fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-0ce614fc]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0ce614fc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0ce614fc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0ce614fc]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-0ce614fc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0ce614fc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0ce614fc]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0ce614fc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0ce614fc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0ce614fc]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0ce614fc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0ce614fc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0ce614fc],.use-text-paragraph[data-v-0ce614fc]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0ce614fc]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-0ce614fc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-0ce614fc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-0ce614fc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-0ce614fc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0ce614fc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-0ce614fc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-0ce614fc]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-0ce614fc]{transform:scale(-1)}.main-wrap[data-v-0ce614fc]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-0ce614fc]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-0ce614fc]{margin-bottom:90px}}.space-top[data-v-0ce614fc]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-0ce614fc]{margin-top:90px}}.space-bottom-short[data-v-0ce614fc]{margin-bottom:60px}.space-top-short[data-v-0ce614fc]{margin-top:60px}.container-wrap>section[data-v-0ce614fc]{position:relative}.container-general[data-v-0ce614fc]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-0ce614fc]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-0ce614fc]{height:100vh;display:flex}.maintenance-icon[data-v-0ce614fc]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-0ce614fc]{font-size:48px}.theme--light .maintenance-icon[data-v-0ce614fc]{background:#30f}.theme--dark .maintenance-icon[data-v-0ce614fc]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-0ce614fc]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=0ce614fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap"},[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-general pt-15\" data-v-0ce614fc>","</div>",[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('headline')],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-8"},[_c('v-col',{staticClass:"px-3",attrs:{"md":"6","cols":"12"}},[_c('post-card',{attrs:{"title":"Maecenas rutrum dolor sed nisi","desc":"Proin pretium arcu eget metus porta consectetur Pellentesque habitant","date":"12 Nov 2020","orientation":"landscape","type":"round","img":"https://source.unsplash.com/random","href":"/blog/detail-blog"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-4",attrs:{"md":"6","cols":"12"}},[_c('post-card',{attrs:{"title":"Maecenas rutrum dolor sed nisi","desc":"Proin pretium arcu eget metus porta consectetur Pellentesque habitant","date":"12 Nov 2020","orientation":"landscape","type":"round","img":"https://source.unsplash.com/random","href":"/blog/detail-blog"}})],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-6"},[_c('v-col',{attrs:{"md":"8"}},[_vm._l((5),function(index){return _c('div',{key:index,class:{ 'mt-15': index > 1 }},[_c('post-card',{attrs:{"title":"Maecenas rutrum dolor sed nisi","desc":"Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget","date":"12 Nov 2020","orientation":"portrait","type":"oval","img":"https://source.unsplash.com/random","href":"/blog/detail-blog"}})],1)}),_vm._v(" "),_c('v-row',{staticClass:"mt-5 mb-10",attrs:{"justify":"space-between"}},[_c('v-btn',{attrs:{"text":""}},[_c('v-icon',[_vm._v("mdi-arrow-left")]),_vm._v("\n              "+_vm._s(_vm.$t('common.btn_prev'))+"\n            ")],1),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_vm._v("\n              "+_vm._s(_vm.$t('common.btn_next'))+"\n              "),_c('v-icon',[_vm._v("mdi-arrow-right")])],1)],1)],2),_vm._v(" "),_c('v-col',{attrs:{"md":"4","cols":"12"}},[_c('sidebar')],1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"footer\" data-v-0ce614fc>","</div>",[_c('main-footer')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=0ce614fc&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/BlogHeader.vue + 5 modules
var BlogHeader = __webpack_require__(503);

// EXTERNAL MODULE: ./components/Blog/Headline.vue + 2 modules
var Headline = __webpack_require__(510);

// EXTERNAL MODULE: ./components/Cards/PostCard.vue + 4 modules
var PostCard = __webpack_require__(430);

// EXTERNAL MODULE: ./components/Blog/Sidebar/index.js + 35 modules
var Sidebar = __webpack_require__(500);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  components: {
    'main-header': BlogHeader["a" /* default */],
    'main-footer': Footer["a" /* default */],
    Headline: Headline["a" /* default */],
    Sidebar: Sidebar["a" /* default */],
    PostCard: PostCard["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Blog Home'
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(579)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ce614fc",
  "36d19d9a"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map