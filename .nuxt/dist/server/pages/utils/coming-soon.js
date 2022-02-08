exports.ids = [14];
exports.modules = {

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(590);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("45a2b4e1", content, true, context)
};

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_4610acd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(487);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_4610acd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_4610acd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_4610acd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_coming_soon_vue_vue_type_style_index_0_id_4610acd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4610acd0]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4610acd0]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4610acd0]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4610acd0]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-4610acd0]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4610acd0]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4610acd0]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4610acd0]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4610acd0]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4610acd0]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4610acd0]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4610acd0]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4610acd0],.use-text-paragraph[data-v-4610acd0]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4610acd0]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4610acd0]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4610acd0]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4610acd0]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4610acd0]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4610acd0]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4610acd0]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4610acd0]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-4610acd0]{transform:scale(-1)}.main-wrap[data-v-4610acd0]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-4610acd0]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-4610acd0]{margin-bottom:90px}}.space-top[data-v-4610acd0]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-4610acd0]{margin-top:90px}}.space-bottom-short[data-v-4610acd0]{margin-bottom:60px}.space-top-short[data-v-4610acd0]{margin-top:60px}.container-wrap>section[data-v-4610acd0]{position:relative}.container-general[data-v-4610acd0]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-4610acd0]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-4610acd0]{height:100vh;display:flex}.maintenance-icon[data-v-4610acd0]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-4610acd0]{font-size:48px}.theme--light .maintenance-icon[data-v-4610acd0]{background:#30f}.theme--dark .maintenance-icon[data-v-4610acd0]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-4610acd0]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/utils/coming-soon.vue?vue&type=template&id=4610acd0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"max-md"},[_c('div',{staticClass:"full-screen-container"},[_c('v-row',{attrs:{"align":"center"}},[_c('v-col',{staticClass:"text-center",attrs:{"md":"12"}},[_c('div',{staticClass:"logo d-flex justify-center align-center mb-10"},[_c('img',{attrs:{"src":_vm.logo,"alt":"logo","width":"64"}}),_vm._v(" "),_c('h2',{staticClass:"ps-3 use-text-subtitle"},[_vm._v("\n            "+_vm._s(_vm.brand.starter.name)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('h3',{staticClass:"use-text-title"},[_vm._v("\n            "+_vm._s(_vm.$t('common.util_soon'))+"\n          ")]),_vm._v(" "),_c('h5',{staticClass:"use-text-subtitle2",class:{ 'mb-10': _vm.isDesktop}},[_vm._v("\n            "+_vm._s(_vm.$t('common.util_soon_desc'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"form",class:{ 'mb-15': _vm.isDesktop}},[_c('v-row',{attrs:{"justify":"center"}},[_c('v-col',{attrs:{"sm":"8","cols":"12"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.form_email')},scopedSlots:_vm._u([(_vm.isDesktop)?{key:"append",fn:function(){return [_c('v-btn',{staticClass:"mb-2",attrs:{"outlined":""}},[_vm._v("\n                      "+_vm._s(_vm.$t('common.util_notif'))+"\n                    ")])]},proxy:true}:null],null,true)}),_vm._v(" "),(!_vm.isDesktop)?_c('v-btn',{staticClass:"mb-2",attrs:{"outlined":""}},[_vm._v("\n                  "+_vm._s(_vm.$t('common.util_notif'))+"\n                ")]):_vm._e()],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"socmed-btn mt-10"},[_c('v-btn',{attrs:{"icon":"","large":"","href":"#"}},[_c('v-icon',[_vm._v("mdi-facebook")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","large":"","href":"#"}},[_c('v-icon',[_vm._v("mdi-twitter")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","large":"","href":"#"}},[_c('v-icon',[_vm._v("mdi-instagram")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","large":"","href":"#"}},[_c('v-icon',[_vm._v("mdi-linkedin")])],1)],1)])])],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/utils/coming-soon.vue?vue&type=template&id=4610acd0&scoped=true&

// EXTERNAL MODULE: ./static/images/starter-logo.svg
var starter_logo = __webpack_require__(117);
var starter_logo_default = /*#__PURE__*/__webpack_require__.n(starter_logo);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/utils/coming-soon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var coming_soonvue_type_script_lang_js_ = ({
  data() {
    return {
      logo: starter_logo_default.a,
      brand: brand["a" /* default */]
    };
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Coming Soon'
    };
  },

  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./pages/utils/coming-soon.vue?vue&type=script&lang=js&
 /* harmony default export */ var utils_coming_soonvue_type_script_lang_js_ = (coming_soonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(61);

// CONCATENATED MODULE: ./pages/utils/coming-soon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(589)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utils_coming_soonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4610acd0",
  "357bd284"
  
)

/* harmony default export */ var coming_soon = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=coming-soon.js.map