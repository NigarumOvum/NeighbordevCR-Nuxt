exports.ids = [7];
exports.modules = {

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(586);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b5b6ca4c", content, true, context)
};

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7b540717_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7b540717_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7b540717_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7b540717_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_7b540717_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-7b540717]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-7b540717]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-7b540717]{font-size:28px;line-height:44px}}.use-text-title2[data-v-7b540717]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-7b540717]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-7b540717]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-7b540717]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-7b540717]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-7b540717]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-7b540717]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-7b540717]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-7b540717]{font-size:16px;line-height:24px}}.use-text-caption[data-v-7b540717],.use-text-paragraph[data-v-7b540717]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-7b540717]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-7b540717]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-7b540717]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-7b540717]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-7b540717]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-7b540717]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-7b540717]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-7b540717]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-7b540717]{transform:scale(-1)}.main-wrap[data-v-7b540717]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-7b540717]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-7b540717]{margin-bottom:90px}}.space-top[data-v-7b540717]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-7b540717]{margin-top:90px}}.space-bottom-short[data-v-7b540717]{margin-bottom:60px}.space-top-short[data-v-7b540717]{margin-top:60px}.container-wrap>section[data-v-7b540717]{position:relative}.container-general[data-v-7b540717]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-7b540717]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-7b540717]{height:100vh;display:flex}.maintenance-icon[data-v-7b540717]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-7b540717]{font-size:48px}.theme--light .maintenance-icon[data-v-7b540717]{background:#30f}.theme--dark .maintenance-icon[data-v-7b540717]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-7b540717]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=template&id=7b540717&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap"},[_c('main-header'),_vm._ssrNode(" <div class=\"container-general\" data-v-7b540717><div class=\"space-top space-bottom\" data-v-7b540717><h2 class=\"display-3 text-center mb-4\" data-v-7b540717>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('common.title'))+"\n      ")+"</h2> <h4 class=\"display-1 text-center\" data-v-7b540717>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('common.subtitle'))+"\n      ")+"</h4></div></div> "),_c('main-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=template&id=7b540717&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/index.js + 72 modules
var Header = __webpack_require__(112);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var blank_pagevue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Blank page'
    };
  }

});
// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blank_pagevue_type_script_lang_js_ = (blank_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/blank-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(585)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blank_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b540717",
  "dc14e146"
  
)

/* harmony default export */ var blank_page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blank-page.js.map