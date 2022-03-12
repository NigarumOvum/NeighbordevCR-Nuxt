exports.ids = [13];
exports.modules = {

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("12a190a6", content, true)

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(113);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("644b63f2", content, true, context)
};

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(593);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("617de4ae", content, true, context)
};

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_28ca56b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_28ca56b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_28ca56b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_28ca56b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_28ca56b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-28ca56b8]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-28ca56b8]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-28ca56b8]{font-size:28px;line-height:44px}}.use-text-title2[data-v-28ca56b8]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-28ca56b8]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-28ca56b8]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-28ca56b8]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-28ca56b8]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-28ca56b8]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-28ca56b8]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-28ca56b8]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-28ca56b8]{font-size:16px;line-height:24px}}.use-text-caption[data-v-28ca56b8],.use-text-paragraph[data-v-28ca56b8]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-28ca56b8]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-28ca56b8]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-28ca56b8]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-28ca56b8]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-28ca56b8]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-28ca56b8]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-28ca56b8]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-28ca56b8]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-28ca56b8]{transform:scale(-1)}.page-wrap[data-v-28ca56b8]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-28ca56b8]{display:flex}}.page-wrap a[data-v-28ca56b8]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-28ca56b8]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-28ca56b8]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-28ca56b8]{font-size:14px}}.full-form-wrap[data-v-28ca56b8]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-28ca56b8]{padding-top:32px}}.v-card.form-box[data-v-28ca56b8]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-28ca56b8]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-28ca56b8]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-28ca56b8]{padding:0 16px}}.form[data-v-28ca56b8]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-28ca56b8]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-28ca56b8]{padding:0 16px 64px}}.form-helper[data-v-28ca56b8]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-28ca56b8]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-28ca56b8]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-28ca56b8]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-28ca56b8]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-28ca56b8]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-28ca56b8]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-28ca56b8]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-28ca56b8]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-28ca56b8]{display:block}}[dir=ltr] .right-icon[data-v-28ca56b8]{margin-left:8px}[dir=rtl] .right-icon[data-v-28ca56b8]{margin-right:8px}.check svg[data-v-28ca56b8]{fill:var(--v-secondary-base)}.auth-frame[data-v-28ca56b8]{display:block;position:relative}.auth-frame .row>div[data-v-28ca56b8]{padding:0}.greeting[data-v-28ca56b8]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-28ca56b8]{color:var(--v-primary-base);font-weight:400}.img[data-v-28ca56b8]{margin:40px 0}.head[data-v-28ca56b8]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-28ca56b8]{margin-top:16px;justify-content:center}.head a[data-v-28ca56b8]{display:none}}.form-wrap[data-v-28ca56b8]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-28ca56b8]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-28ca56b8]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-28ca56b8]{padding:40px}}.socmed-side-login[data-v-28ca56b8]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-28ca56b8]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-28ca56b8]{display:block}}.socmed-side-login>*[data-v-28ca56b8]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-28ca56b8]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-28ca56b8]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-28ca56b8]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-28ca56b8]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-28ca56b8]{margin-left:8px}.blue-btn[data-v-28ca56b8]{background:#28aae1!important}.blue-btn[data-v-28ca56b8]:hover{background:#146a8f!important}.navi-btn[data-v-28ca56b8]{background:#3b579d!important}.navi-btn[data-v-28ca56b8]:hover{background:#1f2e53!important}.red-btn[data-v-28ca56b8]{background:#dd493c!important}.red-btn[data-v-28ca56b8]:hover{background:#98251b!important}.separator[data-v-28ca56b8]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-28ca56b8]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-28ca56b8]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-28ca56b8]{font-size:12px}}.separator[data-v-28ca56b8]:after,.separator[data-v-28ca56b8]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-28ca56b8]:after,.theme--light .separator[data-v-28ca56b8]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-28ca56b8]:after,.theme--dark .separator[data-v-28ca56b8]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-28ca56b8]:before{left:0}.separator[data-v-28ca56b8]:after{right:0}.form-control-label a[data-v-28ca56b8]{position:relative;top:-20px}.form-control-label>div[data-v-28ca56b8]{margin-top:0}.map[data-v-28ca56b8]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-28ca56b8]{height:300px!important}}@media(min-width:960px){.map[data-v-28ca56b8]{border-radius:0 12px 12px 0!important}}.map[data-v-28ca56b8]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-28ca56b8]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-28ca56b8],.map.full[data-v-28ca56b8]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-28ca56b8]{height:300px;position:relative}.icon[data-v-28ca56b8]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-28ca56b8]{margin-right:8px}[dir=rtl] .icon[data-v-28ca56b8]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3407cd58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3407cd58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3407cd58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3407cd58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3407cd58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-3407cd58]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3407cd58]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3407cd58]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3407cd58]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-3407cd58]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3407cd58]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3407cd58]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3407cd58]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3407cd58]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3407cd58]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3407cd58]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3407cd58]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3407cd58],.use-text-paragraph[data-v-3407cd58]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3407cd58]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3407cd58]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3407cd58]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3407cd58]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3407cd58]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3407cd58]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3407cd58]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3407cd58]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-3407cd58]{transform:scale(-1)}.main-wrap[data-v-3407cd58]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-3407cd58]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-3407cd58]{margin-bottom:90px}}.space-top[data-v-3407cd58]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-3407cd58]{margin-top:90px}}.space-bottom-short[data-v-3407cd58]{margin-bottom:60px}.space-top-short[data-v-3407cd58]{margin-top:60px}.container-wrap>section[data-v-3407cd58]{position:relative}.container-general[data-v-3407cd58]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-3407cd58]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-3407cd58]{height:100vh;display:flex}.maintenance-icon[data-v-3407cd58]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-3407cd58]{font-size:48px}.theme--light .maintenance-icon[data-v-3407cd58]{background:#30f}.theme--dark .maintenance-icon[data-v-3407cd58]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-3407cd58]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=template&id=3407cd58&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-top-short\" data-v-3407cd58>","</div>",[_c('contact')],1),_vm._ssrNode(" "),_c('main-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=template&id=3407cd58&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/index.js + 72 modules
var Header = __webpack_require__(112);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Contact.vue?vue&type=template&id=28ca56b8&scoped=true&
var Contactvue_type_template_id_28ca56b8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrap"},[_c('v-snackbar',{staticClass:"notification",attrs:{"timeout":4000,"top":"","right":""},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n      Message Sent\n    ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","icon":""},on:{"click":function($event){_vm.snackbar = false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_vm._ssrNode(" "),_c('v-container',{staticClass:"inner-wrap max-md"},[_c('div',{staticClass:"full-form-wrap"},[_c('div',{staticClass:"text-center"},[_c('h3',{staticClass:"use-text-title title-contact pb-3 text-center"},[_vm._v("\n          "+_vm._s(_vm.$t('common.contact_title2'))+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"desc use-text-subtitle2 text-center"},[_vm._v("\n          "+_vm._s(_vm.$t('common.contact_subtitle'))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"form"},[_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{attrs:{"rules":_vm.nameRules,"label":_vm.$t('common.form_name'),"color":"white","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{attrs:{"rules":_vm.emailRules,"label":_vm.$t('common.form_email'),"color":"white","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.form_phone'),"color":"white"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.form_company'),"color":"white"},model:{value:(_vm.company),callback:function ($$v) {_vm.company=$$v},expression:"company"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12"}},[_c('v-textarea',{attrs:{"rows":"6","color":"white","label":_vm.$t('common.form_message')},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"btn-area flex"},[_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"color":"secondary","rules":[function (v) { return !!v || 'You must agree to continue!'; }],"label":_vm.$t('common.form_terms'),"required":""},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}}),_vm._v(" "),_c('span',[_c('a',{staticClass:"link",attrs:{"href":"#"}},[_vm._v("\n                  "+_vm._s(_vm.$t('common.form_privacy'))+"\n                ")])])],1),_vm._v(" "),_c('v-btn',{attrs:{"block":_vm.isMobile,"color":"secondary","large":""},on:{"click":_vm.validate}},[_vm._v("\n              "+_vm._s(_vm.$t('common.form_send'))+"\n            ")])],1)],1)],1)])])],2)}
var Contactvue_type_template_id_28ca56b8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Contact.vue?vue&type=template&id=28ca56b8&scoped=true&

// EXTERNAL MODULE: ./static/images/starter-logo.svg
var starter_logo = __webpack_require__(118);
var starter_logo_default = /*#__PURE__*/__webpack_require__.n(starter_logo);

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(21);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Contactvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: starter_logo_default.a,
      brand: brand["a" /* default */],
      routeLink: text_link["a" /* default */]
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }

  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown;
      return smDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Forms/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(337);

// CONCATENATED MODULE: ./components/Forms/Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(590)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_Contactvue_type_script_lang_js_,
  Contactvue_type_template_id_28ca56b8_scoped_true_render,
  Contactvue_type_template_id_28ca56b8_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "28ca56b8",
  "c94b88de"
  
)

/* harmony default export */ var Contact = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCheckbox: VCheckbox["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */],
    Contact: Contact
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Contacto'
    };
  }

});
// CONCATENATED MODULE: ./pages/contact/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/contact/index.vue



function contact_injectStyles (context) {
  
  var style0 = __webpack_require__(592)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var contact_component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  contact_injectStyles,
  "3407cd58",
  "0676e0be"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map