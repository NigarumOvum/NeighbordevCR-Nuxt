exports.ids = [12];
exports.modules = {

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("12a190a6", content, true)

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(112);
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

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(424);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("61859e70", content, true, context)
};

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(426);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2323fc34", content, true, context)
};

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_c5f73a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_c5f73a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_c5f73a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_c5f73a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialAuth_vue_vue_type_style_index_0_id_c5f73a72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-c5f73a72]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-c5f73a72]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-c5f73a72]{font-size:28px;line-height:44px}}.use-text-title2[data-v-c5f73a72]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-c5f73a72]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-c5f73a72]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-c5f73a72]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-c5f73a72]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-c5f73a72]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-c5f73a72]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-c5f73a72]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-c5f73a72]{font-size:16px;line-height:24px}}.use-text-caption[data-v-c5f73a72],.use-text-paragraph[data-v-c5f73a72]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-c5f73a72]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-c5f73a72]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-c5f73a72]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-c5f73a72]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-c5f73a72]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-c5f73a72]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-c5f73a72]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-c5f73a72]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-c5f73a72]{transform:scale(-1)}.page-wrap[data-v-c5f73a72]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-c5f73a72]{display:flex}}.page-wrap a[data-v-c5f73a72]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-c5f73a72]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-c5f73a72]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-c5f73a72]{font-size:14px}}.full-form-wrap[data-v-c5f73a72]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-c5f73a72]{padding-top:32px}}.v-card.form-box[data-v-c5f73a72]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-c5f73a72]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-c5f73a72]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-c5f73a72]{padding:0 16px}}.form[data-v-c5f73a72]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-c5f73a72]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-c5f73a72]{padding:0 16px 64px}}.form-helper[data-v-c5f73a72]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-c5f73a72]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-c5f73a72]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-c5f73a72]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-c5f73a72]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-c5f73a72]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-c5f73a72]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-c5f73a72]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-c5f73a72]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-c5f73a72]{display:block}}[dir=ltr] .right-icon[data-v-c5f73a72]{margin-left:8px}[dir=rtl] .right-icon[data-v-c5f73a72]{margin-right:8px}.check svg[data-v-c5f73a72]{fill:var(--v-secondary-base)}.auth-frame[data-v-c5f73a72]{display:block;position:relative}.auth-frame .row>div[data-v-c5f73a72]{padding:0}.greeting[data-v-c5f73a72]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-c5f73a72]{color:var(--v-primary-base);font-weight:400}.img[data-v-c5f73a72]{margin:40px 0}.head[data-v-c5f73a72]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-c5f73a72]{margin-top:16px;justify-content:center}.head a[data-v-c5f73a72]{display:none}}.form-wrap[data-v-c5f73a72]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-c5f73a72]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-c5f73a72]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-c5f73a72]{padding:40px}}.socmed-side-login[data-v-c5f73a72]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-c5f73a72]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-c5f73a72]{display:block}}.socmed-side-login>*[data-v-c5f73a72]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-c5f73a72]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-c5f73a72]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-c5f73a72]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-c5f73a72]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-c5f73a72]{margin-left:8px}.blue-btn[data-v-c5f73a72]{background:#28aae1!important}.blue-btn[data-v-c5f73a72]:hover{background:#146a8f!important}.navi-btn[data-v-c5f73a72]{background:#3b579d!important}.navi-btn[data-v-c5f73a72]:hover{background:#1f2e53!important}.red-btn[data-v-c5f73a72]{background:#dd493c!important}.red-btn[data-v-c5f73a72]:hover{background:#98251b!important}.separator[data-v-c5f73a72]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-c5f73a72]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-c5f73a72]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-c5f73a72]{font-size:12px}}.separator[data-v-c5f73a72]:after,.separator[data-v-c5f73a72]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-c5f73a72]:after,.theme--light .separator[data-v-c5f73a72]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-c5f73a72]:after,.theme--dark .separator[data-v-c5f73a72]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-c5f73a72]:before{left:0}.separator[data-v-c5f73a72]:after{right:0}.form-control-label a[data-v-c5f73a72]{position:relative;top:-20px}.form-control-label>div[data-v-c5f73a72]{margin-top:0}.map[data-v-c5f73a72]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-c5f73a72]{height:300px!important}}@media(min-width:960px){.map[data-v-c5f73a72]{border-radius:0 12px 12px 0!important}}.map[data-v-c5f73a72]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-c5f73a72]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-c5f73a72],.map.full[data-v-c5f73a72]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-c5f73a72]{height:300px;position:relative}.icon[data-v-c5f73a72]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-c5f73a72]{margin-right:8px}[dir=rtl] .icon[data-v-c5f73a72]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_4a7e8777_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_4a7e8777_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_4a7e8777_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_4a7e8777_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthFrame_vue_vue_type_style_index_0_id_4a7e8777_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4a7e8777]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4a7e8777]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4a7e8777]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4a7e8777]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-4a7e8777]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4a7e8777]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4a7e8777]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4a7e8777]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4a7e8777]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4a7e8777]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4a7e8777]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4a7e8777]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4a7e8777],.use-text-paragraph[data-v-4a7e8777]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4a7e8777]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4a7e8777]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4a7e8777]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4a7e8777]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4a7e8777]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4a7e8777]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4a7e8777]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4a7e8777]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-4a7e8777]{transform:scale(-1)}.page-wrap[data-v-4a7e8777]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-4a7e8777]{display:flex}}.page-wrap a[data-v-4a7e8777]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-4a7e8777]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-4a7e8777]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-4a7e8777]{font-size:14px}}.full-form-wrap[data-v-4a7e8777]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-4a7e8777]{padding-top:32px}}.v-card.form-box[data-v-4a7e8777]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-4a7e8777]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-4a7e8777]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-4a7e8777]{padding:0 16px}}.form[data-v-4a7e8777]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-4a7e8777]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-4a7e8777]{padding:0 16px 64px}}.form-helper[data-v-4a7e8777]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-4a7e8777]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-4a7e8777]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-4a7e8777]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-4a7e8777]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-4a7e8777]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-4a7e8777]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-4a7e8777]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-4a7e8777]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-4a7e8777]{display:block}}[dir=ltr] .right-icon[data-v-4a7e8777]{margin-left:8px}[dir=rtl] .right-icon[data-v-4a7e8777]{margin-right:8px}.check svg[data-v-4a7e8777]{fill:var(--v-secondary-base)}.auth-frame[data-v-4a7e8777]{display:block;position:relative}.auth-frame .row>div[data-v-4a7e8777]{padding:0}.greeting[data-v-4a7e8777]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-4a7e8777]{color:var(--v-primary-base);font-weight:400}.img[data-v-4a7e8777]{margin:40px 0}.head[data-v-4a7e8777]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-4a7e8777]{margin-top:16px;justify-content:center}.head a[data-v-4a7e8777]{display:none}}.form-wrap[data-v-4a7e8777]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-4a7e8777]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-4a7e8777]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-4a7e8777]{padding:40px}}.socmed-side-login[data-v-4a7e8777]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-4a7e8777]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-4a7e8777]{display:block}}.socmed-side-login>*[data-v-4a7e8777]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-4a7e8777]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-4a7e8777]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-4a7e8777]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-4a7e8777]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-4a7e8777]{margin-left:8px}.blue-btn[data-v-4a7e8777]{background:#28aae1!important}.blue-btn[data-v-4a7e8777]:hover{background:#146a8f!important}.navi-btn[data-v-4a7e8777]{background:#3b579d!important}.navi-btn[data-v-4a7e8777]:hover{background:#1f2e53!important}.red-btn[data-v-4a7e8777]{background:#dd493c!important}.red-btn[data-v-4a7e8777]:hover{background:#98251b!important}.separator[data-v-4a7e8777]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-4a7e8777]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-4a7e8777]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-4a7e8777]{font-size:12px}}.separator[data-v-4a7e8777]:after,.separator[data-v-4a7e8777]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-4a7e8777]:after,.theme--light .separator[data-v-4a7e8777]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-4a7e8777]:after,.theme--dark .separator[data-v-4a7e8777]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-4a7e8777]:before{left:0}.separator[data-v-4a7e8777]:after{right:0}.form-control-label a[data-v-4a7e8777]{position:relative;top:-20px}.form-control-label>div[data-v-4a7e8777]{margin-top:0}.map[data-v-4a7e8777]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-4a7e8777]{height:300px!important}}@media(min-width:960px){.map[data-v-4a7e8777]{border-radius:0 12px 12px 0!important}}.map[data-v-4a7e8777]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-4a7e8777]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-4a7e8777],.map.full[data-v-4a7e8777]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-4a7e8777]{height:300px;position:relative}.icon[data-v-4a7e8777]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-4a7e8777]{margin-right:8px}[dir=rtl] .icon[data-v-4a7e8777]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=template&id=4a7e8777&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrap"},[_c('v-container',{staticClass:"inner-wrap"},[_c('div',{staticClass:"auth-frame"},[_c('v-row',[_c('v-col',{staticClass:"px-sm-6 px-2",attrs:{"md":"6","cols":"12"}},[_c('v-card',{staticClass:"form-box fragment-fadeUp"},[_c('div',{staticClass:"form-wrap"},[_vm._t("default")],2)])],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"md":"6","cols":"12"}},[_c('hidden',{attrs:{"point":"smDown"}},[_c('div',{staticClass:"greeting"},[_c('h4',{staticClass:"use-text-title2 pb-2"},[_vm._v("\n                "+_vm._s(_vm.title)+"\n              ")]),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("\n                "+_vm._s(_vm.subtitle)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"img"},[(_vm.type === 'login')?_c('img',{attrs:{"src":"/images/starter/Illustration.png","alt":"illustration"}}):_c('img',{attrs:{"src":"/images/starter/Illustration.png","alt":"illustration"}})])])])],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=template&id=4a7e8777&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(22);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(110);

// EXTERNAL MODULE: ./components/Logo/index.js + 5 modules
var Logo = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AuthFramevue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */],
    Logo: Logo["a" /* default */]
  },

  data() {
    return {
      brand: brand["a" /* default */],
      routerLink: text_link["a" /* default */]
    };
  },

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_AuthFramevue_type_script_lang_js_ = (AuthFramevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(332);

// CONCATENATED MODULE: ./components/Forms/AuthFrame.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(425)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_AuthFramevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a7e8777",
  "791d9f56"
  
)

/* harmony default export */ var AuthFrame = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/SocialAuth.vue?vue&type=template&id=c5f73a72&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"socmed-side-login"},[_c('v-btn',{staticClass:"navi-btn"},[_c('i',{staticClass:"ion-logo-facebook"}),_vm._v("\n    Facebook\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"blue-btn"},[_c('i',{staticClass:"ion-logo-twitter"}),_vm._v("\n    Twitter\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"red-btn"},[_c('i',{staticClass:"ion-logo-google"}),_vm._v("\n    Google\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue?vue&type=template&id=c5f73a72&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(342);

// CONCATENATED MODULE: ./components/Forms/SocialAuth.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(423)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c5f73a72",
  "190eeb54"
  
)

/* harmony default export */ var SocialAuth = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(544);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("798af50a", content, true, context)
};

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(546);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("05ea9108", content, true, context)
};

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f64312fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f64312fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f64312fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f64312fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_f64312fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-f64312fe]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-f64312fe]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-f64312fe]{font-size:28px;line-height:44px}}.use-text-title2[data-v-f64312fe]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-f64312fe]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-f64312fe]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-f64312fe]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-f64312fe]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-f64312fe]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-f64312fe]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-f64312fe]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-f64312fe]{font-size:16px;line-height:24px}}.use-text-caption[data-v-f64312fe],.use-text-paragraph[data-v-f64312fe]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-f64312fe]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-f64312fe]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-f64312fe]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-f64312fe]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-f64312fe]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-f64312fe]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-f64312fe]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-f64312fe]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-f64312fe]{transform:scale(-1)}.page-wrap[data-v-f64312fe]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-f64312fe]{display:flex}}.page-wrap a[data-v-f64312fe]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-f64312fe]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-f64312fe]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-f64312fe]{font-size:14px}}.full-form-wrap[data-v-f64312fe]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-f64312fe]{padding-top:32px}}.v-card.form-box[data-v-f64312fe]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-f64312fe]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-f64312fe]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-f64312fe]{padding:0 16px}}.form[data-v-f64312fe]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-f64312fe]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-f64312fe]{padding:0 16px 64px}}.form-helper[data-v-f64312fe]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-f64312fe]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-f64312fe]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-f64312fe]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-f64312fe]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-f64312fe]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-f64312fe]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-f64312fe]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-f64312fe]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-f64312fe]{display:block}}[dir=ltr] .right-icon[data-v-f64312fe]{margin-left:8px}[dir=rtl] .right-icon[data-v-f64312fe]{margin-right:8px}.check svg[data-v-f64312fe]{fill:var(--v-secondary-base)}.auth-frame[data-v-f64312fe]{display:block;position:relative}.auth-frame .row>div[data-v-f64312fe]{padding:0}.greeting[data-v-f64312fe]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-f64312fe]{color:var(--v-primary-base);font-weight:400}.img[data-v-f64312fe]{margin:40px 0}.head[data-v-f64312fe]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-f64312fe]{margin-top:16px;justify-content:center}.head a[data-v-f64312fe]{display:none}}.form-wrap[data-v-f64312fe]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-f64312fe]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-f64312fe]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-f64312fe]{padding:40px}}.socmed-side-login[data-v-f64312fe]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-f64312fe]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-f64312fe]{display:block}}.socmed-side-login>*[data-v-f64312fe]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-f64312fe]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-f64312fe]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-f64312fe]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-f64312fe]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-f64312fe]{margin-left:8px}.blue-btn[data-v-f64312fe]{background:#28aae1!important}.blue-btn[data-v-f64312fe]:hover{background:#146a8f!important}.navi-btn[data-v-f64312fe]{background:#3b579d!important}.navi-btn[data-v-f64312fe]:hover{background:#1f2e53!important}.red-btn[data-v-f64312fe]{background:#dd493c!important}.red-btn[data-v-f64312fe]:hover{background:#98251b!important}.separator[data-v-f64312fe]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-f64312fe]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-f64312fe]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-f64312fe]{font-size:12px}}.separator[data-v-f64312fe]:after,.separator[data-v-f64312fe]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-f64312fe]:after,.theme--light .separator[data-v-f64312fe]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-f64312fe]:after,.theme--dark .separator[data-v-f64312fe]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-f64312fe]:before{left:0}.separator[data-v-f64312fe]:after{right:0}.form-control-label a[data-v-f64312fe]{position:relative;top:-20px}.form-control-label>div[data-v-f64312fe]{margin-top:0}.map[data-v-f64312fe]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-f64312fe]{height:300px!important}}@media(min-width:960px){.map[data-v-f64312fe]{border-radius:0 12px 12px 0!important}}.map[data-v-f64312fe]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-f64312fe]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-f64312fe],.map.full[data-v-f64312fe]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-f64312fe]{height:300px;position:relative}.icon[data-v-f64312fe]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-f64312fe]{margin-right:8px}[dir=rtl] .icon[data-v-f64312fe]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ce11b2a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(471);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ce11b2a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ce11b2a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ce11b2a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_ce11b2a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-ce11b2a2]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-ce11b2a2]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-ce11b2a2]{font-size:28px;line-height:44px}}.use-text-title2[data-v-ce11b2a2]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-ce11b2a2]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-ce11b2a2]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-ce11b2a2]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-ce11b2a2]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-ce11b2a2]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-ce11b2a2]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-ce11b2a2]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-ce11b2a2]{font-size:16px;line-height:24px}}.use-text-caption[data-v-ce11b2a2],.use-text-paragraph[data-v-ce11b2a2]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-ce11b2a2]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-ce11b2a2]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-ce11b2a2]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-ce11b2a2]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-ce11b2a2]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-ce11b2a2]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-ce11b2a2]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-ce11b2a2]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-ce11b2a2]{transform:scale(-1)}.main-wrap[data-v-ce11b2a2]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-ce11b2a2]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-ce11b2a2]{margin-bottom:90px}}.space-top[data-v-ce11b2a2]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-ce11b2a2]{margin-top:90px}}.space-bottom-short[data-v-ce11b2a2]{margin-bottom:60px}.space-top-short[data-v-ce11b2a2]{margin-top:60px}.container-wrap>section[data-v-ce11b2a2]{position:relative}.container-general[data-v-ce11b2a2]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-ce11b2a2]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-ce11b2a2]{height:100vh;display:flex}.maintenance-icon[data-v-ce11b2a2]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-ce11b2a2]{font-size:48px}.theme--light .maintenance-icon[data-v-ce11b2a2]{background:#30f}.theme--dark .maintenance-icon[data-v-ce11b2a2]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-ce11b2a2]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=ce11b2a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('main-header',{attrs:{"text":"register","href":"/register"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-top\" data-v-ce11b2a2>","</div>",[_c('login-form')],1),_vm._ssrNode(" "),_c('main-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=ce11b2a2&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/Basic.vue + 4 modules
var Basic = __webpack_require__(119);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=template&id=f64312fe&scoped=true&
var Loginvue_type_template_id_f64312fe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('AuthFrame',{attrs:{"title":_vm.$t('common.login_subtitle'),"subtitle":_vm.$t('common.auth_desc')}},[_c('div',[_c('div',{staticClass:"head"},[_c('h3',{staticClass:"use-text-subtitle"},[_vm._v("\n        "+_vm._s(_vm.$t('common.login_title'))+"\n      ")])]),_vm._v(" "),_c('social-auth'),_vm._v(" "),_c('div',{staticClass:"separator"},[_c('p',[_vm._v("\n        "+_vm._s(_vm.$t('common.login_or'))+"\n      ")])]),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing3"},[_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.login_email'),"rules":_vm.emailRules,"color":"secondary","name":"email","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-3",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.login_password'),"rules":_vm.requiredRules,"color":"secondary","type":"password","name":"email","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"form-helper"},[_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"label":_vm.$t('common.login_remember'),"color":"secondary"},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}})],1),_vm._v(" "),_c('v-btn',{staticClass:"button-link",attrs:{"small":"","text":"","href":"#"}},[_vm._v("\n          "+_vm._s(_vm.$t('common.login_forgot'))+"\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('v-btn',{attrs:{"large":"","block":"","color":"secondary"},on:{"click":_vm.handleSubmit}},[_vm._v("\n          "+_vm._s(_vm.$t('common.continue'))+"\n        ")])],1)],1)],1)])}
var Loginvue_type_template_id_f64312fe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=template&id=f64312fe&scoped=true&

// EXTERNAL MODULE: ./components/Forms/SocialAuth.vue + 2 modules
var SocialAuth = __webpack_require__(444);

// EXTERNAL MODULE: ./components/Forms/AuthFrame.vue + 4 modules
var AuthFrame = __webpack_require__(438);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  components: {
    SocialAuth: SocialAuth["a" /* default */],
    AuthFrame: AuthFrame["a" /* default */]
  },

  data() {
    return {
      valid: true,
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      password: '',
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    };
  },

  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
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
// CONCATENATED MODULE: ./components/Forms/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(342);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(61);

// CONCATENATED MODULE: ./components/Forms/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(543)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_f64312fe_scoped_true_render,
  Loginvue_type_template_id_f64312fe_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "f64312fe",
  "d76cc6cc"
  
)

/* harmony default export */ var Login = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCheckbox: VCheckbox["a" /* default */],VCol: VCol["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    'main-header': Basic["a" /* default */],
    'main-footer': Footer["a" /* default */],
    LoginForm: Login
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Login'
    };
  },

  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/login.vue



function login_injectStyles (context) {
  
  var style0 = __webpack_require__(545)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  login_injectStyles,
  "ce11b2a2",
  "24c513f8"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (login_component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map