exports.ids = [5];
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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pp_boy4.1e4bc1e.svg";

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("12a190a6", content, true)

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c3376136", content, true, context)
};

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2af18274", content, true, context)
};

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/MediaCard.vue?vue&type=template&id=23f9f6cd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"media-card",class:[_vm.orientation, _vm.type]},[(_vm.type === 'video')?_c('v-badge',{attrs:{"content":_vm.duration,"color":"grey darken-4","offset-x":"60","offset-y":"40"}}):_vm._e(),_vm._v(" "),(_vm.type === 'photo')?_c('a',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"cover-link",attrs:{"href":_vm.href !== '' ? _vm.href : 'javascript:void(0)'}},[_vm._v("\n     \n  ")]):_vm._e(),_vm._v(" "),_c('figure',[_c('img',{attrs:{"src":_vm.thumb,"alt":"cover"}})]),_vm._v(" "),_c('div',{staticClass:"property"},[(_vm.type === 'video')?_c('v-btn',{staticClass:"play-btn",attrs:{"href":_vm.href,"elevation":"1"}},[_c('span',{staticClass:"ion-ios-play"})]):_vm._e(),_vm._v(" "),_c('v-card-title',{staticClass:"media-title"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/MediaCard.vue?vue&type=template&id=23f9f6cd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/MediaCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MediaCardvue_type_script_lang_js_ = ({
  props: {
    thumb: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    duration: {
      type: String,
      default: '00:01'
    },
    type: {
      type: String,
      default: 'video' // available props: photo, video

    }
  }
});
// CONCATENATED MODULE: ./components/Cards/MediaCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_MediaCardvue_type_script_lang_js_ = (MediaCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VBadge/VBadge.sass
var VBadge = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(23);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/transitionable/index.js

/* harmony default export */ var transitionable = (external_vue_default.a.extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
// Styles
 // Components

 // Mixins





 // Utilities



/* harmony default export */ var VBadge_VBadge = (Object(mixins["a" /* default */])(colorable["a" /* default */], Object(positionable["b" /* factory */])(['left', 'bottom']), themeable["a" /* default */], toggleable["a" /* default */], transitionable).extend({
  name: 'v-badge',
  props: {
    avatar: Boolean,
    bordered: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    content: {
      required: false
    },
    dot: Boolean,
    label: {
      type: String,
      default: '$vuetify.badge'
    },
    icon: String,
    inline: Boolean,
    offsetX: [Number, String],
    offsetY: [Number, String],
    overlap: Boolean,
    tile: Boolean,
    transition: {
      type: String,
      default: 'scale-rotate-transition'
    },
    value: {
      default: true
    }
  },
  computed: {
    classes() {
      return {
        'v-badge--avatar': this.avatar,
        'v-badge--bordered': this.bordered,
        'v-badge--bottom': this.bottom,
        'v-badge--dot': this.dot,
        'v-badge--icon': this.icon != null,
        'v-badge--inline': this.inline,
        'v-badge--left': this.left,
        'v-badge--overlap': this.overlap,
        'v-badge--tile': this.tile,
        ...this.themeClasses
      };
    },

    computedBottom() {
      return this.bottom ? 'auto' : this.computedYOffset;
    },

    computedLeft() {
      if (this.isRtl) {
        return this.left ? this.computedXOffset : 'auto';
      }

      return this.left ? 'auto' : this.computedXOffset;
    },

    computedRight() {
      if (this.isRtl) {
        return this.left ? 'auto' : this.computedXOffset;
      }

      return !this.left ? 'auto' : this.computedXOffset;
    },

    computedTop() {
      return this.bottom ? this.computedYOffset : 'auto';
    },

    computedXOffset() {
      return this.calcPosition(this.offsetX);
    },

    computedYOffset() {
      return this.calcPosition(this.offsetY);
    },

    isRtl() {
      return this.$vuetify.rtl;
    },

    // Default fallback if offsetX
    // or offsetY are undefined.
    offset() {
      if (this.overlap) return this.dot ? 8 : 12;
      return this.dot ? 2 : 4;
    },

    styles() {
      if (this.inline) return {};
      return {
        bottom: this.computedBottom,
        left: this.computedLeft,
        right: this.computedRight,
        top: this.computedTop
      };
    }

  },
  methods: {
    calcPosition(offset) {
      return `calc(100% - ${Object(helpers["g" /* convertToUnit */])(offset || this.offset)})`;
    },

    genBadge() {
      const lang = this.$vuetify.lang;
      const label = this.$attrs['aria-label'] || lang.t(this.label);
      const data = this.setBackgroundColor(this.color, {
        staticClass: 'v-badge__badge',
        style: this.styles,
        attrs: {
          'aria-atomic': this.$attrs['aria-atomic'] || 'true',
          'aria-label': label,
          'aria-live': this.$attrs['aria-live'] || 'polite',
          title: this.$attrs.title,
          role: this.$attrs.role || 'status'
        },
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      });
      const badge = this.$createElement('span', data, [this.genBadgeContent()]);
      if (!this.transition) return badge;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          mode: this.mode
        }
      }, [badge]);
    },

    genBadgeContent() {
      // Dot prop shows no content
      if (this.dot) return undefined;
      const slot = Object(helpers["p" /* getSlot */])(this, 'badge');
      if (slot) return slot;
      if (this.content) return String(this.content);
      if (this.icon) return this.$createElement(VIcon["a" /* default */], this.icon);
      return undefined;
    },

    genBadgeWrapper() {
      return this.$createElement('span', {
        staticClass: 'v-badge__wrapper'
      }, [this.genBadge()]);
    }

  },

  render(h) {
    const badge = [this.genBadgeWrapper()];
    const children = [Object(helpers["p" /* getSlot */])(this)];
    const {
      'aria-atomic': _x,
      'aria-label': _y,
      'aria-live': _z,
      role,
      title,
      ...attrs
    } = this.$attrs;
    if (this.inline && this.left) children.unshift(badge);else children.push(badge);
    return h('span', {
      staticClass: 'v-badge',
      attrs,
      class: this.classes
    }, children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/Cards/MediaCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(388)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_MediaCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23f9f6cd",
  "54662879"
  
)

/* harmony default export */ var MediaCard = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBadge: VBadge_VBadge,VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */]})


/* vuetify-loader */


installDirectives_default()(component, {Ripple: ripple["a" /* default */]})


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(433);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7d7ff3fd", content, true, context)
};

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("88f5ebf2", content, true, context)
};

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-23f9f6cd]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-23f9f6cd]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-23f9f6cd]{font-size:28px;line-height:44px}}.use-text-title2[data-v-23f9f6cd]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-23f9f6cd]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-23f9f6cd]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-23f9f6cd]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-23f9f6cd]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-23f9f6cd]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-23f9f6cd]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-23f9f6cd]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-23f9f6cd]{font-size:16px;line-height:24px}}.use-text-caption[data-v-23f9f6cd],.use-text-paragraph[data-v-23f9f6cd]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-23f9f6cd]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-23f9f6cd]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-23f9f6cd]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-23f9f6cd]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-23f9f6cd]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-23f9f6cd]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-23f9f6cd]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-23f9f6cd]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-23f9f6cd]{transform:scale(-1)}.media-card[data-v-23f9f6cd]{overflow:hidden;position:relative;margin:48px 0 16px;height:340px}.media-card figure[data-v-23f9f6cd]{margin:0}.media-card figure img[data-v-23f9f6cd]{min-height:100%;width:100%}.media-card .v-badge[data-v-23f9f6cd]{width:100%;position:absolute}.play-btn.v-btn[data-v-23f9f6cd]{position:absolute;width:80px;height:80px;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%)}.theme--light .play-btn.v-btn[data-v-23f9f6cd]{background-color:rgba(0,183,255,.512)}.theme--dark .play-btn.v-btn[data-v-23f9f6cd]{background-color:rgba(55,0,255,.4902)}.play-btn.v-btn span[data-v-23f9f6cd]:before{font-size:60px;margin-left:8px}.theme--light .play-btn.v-btn span[data-v-23f9f6cd]:before{color:var(--v-secondary-base)}.theme--dark .play-btn.v-btn span[data-v-23f9f6cd]:before{color:var(--v-secondarylight-base)}.property[data-v-23f9f6cd]{transition:all .3s ease-out;position:absolute;width:100%;height:100%;min-height:170px;padding:24px;top:0;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;background:linear-gradient(180deg,hsla(0,0%,93.3%,0) 20%,#000 90%)}[dir=ltr] .property[data-v-23f9f6cd]{text-align:left}[dir=rtl] .property[data-v-23f9f6cd]{text-align:right}[dir=ltr] .property[data-v-23f9f6cd]{left:0}[dir=rtl] .property[data-v-23f9f6cd]{right:0}.media-title[data-v-23f9f6cd]{color:#fff;line-height:22px}.landscape .media-title[data-v-23f9f6cd]{text-align:left}.portrait[data-v-23f9f6cd]{max-width:400px}.portrait .media-title[data-v-23f9f6cd]{text-align:center;justify-content:center}.cover-link[data-v-23f9f6cd]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.cover-link[data-v-23f9f6cd],.photo[data-v-23f9f6cd]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5276b867", content, true)

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-55867906]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-55867906]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-55867906]{font-size:28px;line-height:44px}}.use-text-title2[data-v-55867906]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-55867906]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-55867906]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-55867906]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-55867906]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-55867906]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-55867906]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-55867906]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-55867906]{font-size:16px;line-height:24px}}.use-text-caption[data-v-55867906],.use-text-paragraph[data-v-55867906]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-55867906]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-55867906]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-55867906]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-55867906]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-55867906]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-55867906]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-55867906]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-55867906]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-55867906]{transform:scale(-1)}.profile-card[data-v-55867906]{display:flex;border-radius:12px}.v-btn.main-btn[data-v-55867906]{min-width:150px}.properties[data-v-55867906]{padding:16px}.figure[data-v-55867906]{display:block;position:relative}.avatar[data-v-55867906]{margin:0 auto}.subtitle[data-v-55867906]{font-size:18px}.desc[data-v-55867906]{margin-top:16px}.action[data-v-55867906]{padding:0}.action[data-v-55867906]  .v-btn{flex:1;padding:8px;height:60px}.action[data-v-55867906]  .v-btn__content{flex-direction:column;text-transform:none;font-weight:400}.action .icon[data-v-55867906]{color:var(--v-secondary-base)}.portrait[data-v-55867906]{max-width:400px;flex-direction:column;text-align:center}.portrait .properties[data-v-55867906]{padding-left:16px;padding-right:16px}.portrait .avatar[data-v-55867906]{margin-top:-50px}.portrait .action[data-v-55867906]{border-top:1px solid;padding-top:16px;margin-top:40px}.theme--light .portrait .action[data-v-55867906]{border-color:#30f}.theme--dark .portrait .action[data-v-55867906]{border-color:#0cf}.landscape[data-v-55867906]{max-width:820px;flex-direction:row;align-items:center;height:160px}[dir=ltr] .landscape[data-v-55867906]{text-align:left}[dir=rtl] .landscape[data-v-55867906]{text-align:right}@media(min-width:960px){.landscape[data-v-55867906]{height:120px}}.landscape .figure[data-v-55867906]{width:100px;height:100%}[dir=ltr] .landscape .figure[data-v-55867906]{margin-right:-32px}[dir=rtl] .landscape .figure[data-v-55867906]{margin-left:-32px}.landscape .v-btn--text[data-v-55867906]{margin-left:-8px}.landscape .subtitle[data-v-55867906]{font-size:14px}.landscape .properties[data-v-55867906]{flex:1;display:flex;align-items:center}@media(max-width:599px){.landscape .properties[data-v-55867906]{flex-direction:column;align-items:flex-start}}.landscape .desc[data-v-55867906]{padding:0}@media(max-width:959px){.landscape .desc[data-v-55867906]{margin-top:8px;margin-bottom:8px}}.landscape .action[data-v-55867906]{margin:0 40px}@media(max-width:599px){.landscape .action[data-v-55867906]{display:none}}@media(max-width:959px){.landscape .action[data-v-55867906]>:first-child{display:none}}@media(max-width:959px){.landscape .v-btn.main-btn[data-v-55867906]{min-width:100px;height:28px;font-size:12px}}.full[data-v-55867906]{overflow:hidden;position:relative}.round .figure[data-v-55867906]{margin:8px;overflow:hidden;height:105px;border-radius:12px}@media(max-width:959px){.round.landscape .figure[data-v-55867906]{height:145px}}.oval[data-v-55867906]{overflow:hidden}.oval.portrait .figure[data-v-55867906]{height:150px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}.oval.portrait .figure>div[data-v-55867906]{overflow:visible;height:auto!important}.oval.landscape .figure[data-v-55867906]{overflow:hidden}.oval.landscape .figure>div[data-v-55867906]{border-radius:0 50% 50% 0!important;height:120%!important;margin-top:-10%}.over.portrait[data-v-55867906]{margin-top:16px}.over.portrait .figure[data-v-55867906]{overflow:hidden;margin:-16px 16px 0;border-radius:12px}.theme--dark .over.portrait .figure[data-v-55867906]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.portrait .figure[data-v-55867906]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape[data-v-55867906]{margin-left:16px}[dir=rtl] .over.landscape[data-v-55867906]{margin-right:16px}.over.landscape .figure[data-v-55867906]{overflow:hidden;height:105px;border-radius:12px}.theme--dark .over.landscape .figure[data-v-55867906]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.landscape .figure[data-v-55867906]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape .figure[data-v-55867906]{margin-left:-16px}[dir=rtl] .over.landscape .figure[data-v-55867906]{margin-right:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(439);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3ee026fa", content, true, context)
};

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e57b050", content, true, context)
};

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(443);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("17d503c6", content, true, context)
};

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ProfileCard.vue?vue&type=template&id=55867906&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"profile-card",class:[_vm.orientation, _vm.type]},[_c('div',{staticClass:"figure"},[_c('v-img',{attrs:{"src":_vm.cover,"height":"200px"}})],1),_vm._v(" "),_c('v-avatar',{staticClass:"avatar",attrs:{"size":_vm.orientation === 'portrait' ? 92 : '60'}},[_c('img',{attrs:{"src":_vm.avatar,"alt":"avatar"}})]),_vm._v(" "),_c('div',{staticClass:"properties text-truncate"},[_c('div',[_c('strong',{staticClass:"title"},[_c('span',[_vm._v("\n          "+_vm._s(_vm.name)+"\n        ")])]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"subtitle pa-0"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('v-card-text',{staticClass:"desc"},[_c('span',{staticClass:"text--primary"},[_c('span',[_vm._v(_vm._s(_vm.connection)+" Connection")])])]),_vm._v(" "),(_vm.orientation === 'portrait')?_c('v-btn',{staticClass:"main-btn",attrs:{"href":_vm.href,"outlined":"","color":"primary"}},[_vm._v("\n        See Profile\n      ")]):_vm._e()],1),_vm._v(" "),_c('v-card-actions',{staticClass:"action"},[_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-account-multiple")]),_vm._v("\n        "+_vm._s(_vm.connection)+"\n        Connection\n      ")],1),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-heart")]),_vm._v("\n        "+_vm._s(_vm.favorites)+"\n        Favorites\n      ")],1),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-folder-multiple-image")]),_vm._v("\n        "+_vm._s(_vm.albums)+"\n        Albums\n      ")],1)],1),_vm._v(" "),(_vm.orientation === 'landscape')?_c('v-btn',{staticClass:"main-btn",attrs:{"href":_vm.href,"outlined":"","color":"primary"}},[_vm._v("\n      See Profile\n    ")]):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/ProfileCard.vue?vue&type=template&id=55867906&scoped=true&

// EXTERNAL MODULE: ./static/images/avatars/pp_boy4.svg
var pp_boy4 = __webpack_require__(349);
var pp_boy4_default = /*#__PURE__*/__webpack_require__.n(pp_boy4);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ProfileCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ProfileCardvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },
  props: {
    cover: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: pp_boy4_default.a
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    connection: {
      type: Number,
      default: 0
    },
    favorites: {
      type: Number,
      default: 0
    },
    albums: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval

    },
    orientation: {
      type: String,
      default: 'portrait' // available props: full, rounded, over, oval

    },
    href: {
      type: String,
      default: '#'
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/ProfileCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_ProfileCardvue_type_script_lang_js_ = (ProfileCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// CONCATENATED MODULE: ./components/Cards/ProfileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(392)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_ProfileCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55867906",
  "5bbc2dfe"
  
)

/* harmony default export */ var ProfileCard = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardText: components_VCard["c" /* VCardText */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_60e40b7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_60e40b7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_60e40b7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_60e40b7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_60e40b7c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-60e40b7c]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-60e40b7c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-60e40b7c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-60e40b7c]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-60e40b7c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-60e40b7c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-60e40b7c]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-60e40b7c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-60e40b7c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-60e40b7c]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-60e40b7c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-60e40b7c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-60e40b7c],.use-text-paragraph[data-v-60e40b7c]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-60e40b7c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-60e40b7c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-60e40b7c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-60e40b7c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-60e40b7c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-60e40b7c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-60e40b7c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-60e40b7c]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-60e40b7c]{transform:scale(-1)}.banner-wrap[data-v-60e40b7c]{position:relative;display:block}.theme--light .banner-wrap[data-v-60e40b7c]{background:var(--v-primarylight-base)}.theme--dark .banner-wrap[data-v-60e40b7c]{background:var(--v-primarydark-base)}@media(min-width:600px){.banner-wrap[data-v-60e40b7c]{height:600px}}@media(max-width:599px){.banner-wrap[data-v-60e40b7c]{padding:96px 0 40px}}.slide[data-v-60e40b7c]{position:relative}.img[data-v-60e40b7c]{text-align:center}@media(max-width:599px){.img[data-v-60e40b7c]{margin-top:24px}}.img img[data-v-60e40b7c]{width:310px}.inner[data-v-60e40b7c]{height:100%;display:flex;align-items:center}.text h4[data-v-60e40b7c]{font-weight:700;margin-bottom:16px}.theme--light .text h5[data-v-60e40b7c]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-60e40b7c]{color:hsla(0,0%,100%,.7)}.video-popup[data-v-60e40b7c]{max-width:none}.video-popup h4[data-v-60e40b7c]{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}@media(min-width:600px){.video-popup[data-v-60e40b7c]{width:690px}}.video-popup[data-v-60e40b7c]  iframe{width:100%}.close-btn[data-v-60e40b7c]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-60e40b7c]{right:4px}[dir=rtl] .close-btn[data-v-60e40b7c]{left:4px}.progress-wrap[data-v-60e40b7c]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-60e40b7c]{padding:40px 0 80px}}.progress-wrap ul[data-v-60e40b7c]{margin:0;padding:0}.progress-wrap ul li[data-v-60e40b7c]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-60e40b7c]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-60e40b7c]{font-weight:700}.text-icon[data-v-60e40b7c]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-60e40b7c]{font-size:28px}.theme--light .text-icon i[data-v-60e40b7c]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-60e40b7c]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-60e40b7c]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-60e40b7c]{margin-right:8px}.progress[data-v-60e40b7c]{border-radius:10px}.theme--light .progress[data-v-60e40b7c]{background:#30f}.theme--dark .progress[data-v-60e40b7c]{background:#0cf}.progress[data-v-60e40b7c]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.bg-wrapper[data-v-60e40b7c]{padding:32px 0 80px}.theme--light .bg-wrapper[data-v-60e40b7c]{background-color:var(--v-primarylight-base)}.theme--dark .bg-wrapper[data-v-60e40b7c]{background-color:var(--v-primarydark-base)}@media(max-width:599px){.gallery-root[data-v-60e40b7c],.team-root[data-v-60e40b7c]{text-align:center}}.gallery-root[data-v-60e40b7c]  .slick-dots,.team-root[data-v-60e40b7c]  .slick-dots{bottom:-55px}@media(max-width:599px){.team-root .item>*[data-v-60e40b7c]{width:280px}}.carousel[data-v-60e40b7c]{position:relative}.nav[data-v-60e40b7c]{position:absolute;top:50%;font-size:38px}.prev[data-v-60e40b7c]{left:-30px}.next[data-v-60e40b7c]{right:-30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_5ecd67ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_5ecd67ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_5ecd67ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_5ecd67ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Counter_vue_vue_type_style_index_0_id_5ecd67ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5ecd67ea]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5ecd67ea]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5ecd67ea]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5ecd67ea]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-5ecd67ea]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5ecd67ea]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5ecd67ea]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5ecd67ea]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5ecd67ea]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5ecd67ea]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5ecd67ea]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5ecd67ea]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5ecd67ea],.use-text-paragraph[data-v-5ecd67ea]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5ecd67ea]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5ecd67ea]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5ecd67ea]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5ecd67ea]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5ecd67ea]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5ecd67ea]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5ecd67ea]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5ecd67ea]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-5ecd67ea]{transform:scale(-1)}.counter-wrap[data-v-5ecd67ea]{padding:52px 0;position:relative}.counter-wrap.dark[data-v-5ecd67ea]{background:var(--v-primary-base)}.counter-wrap.dark .counter-item[data-v-5ecd67ea],.counter-wrap.dark .counter-item .icon[data-v-5ecd67ea]{color:#fff}#watched_counter[data-v-5ecd67ea]{position:absolute;top:-500px;width:10px;height:10px}.counter-item[data-v-5ecd67ea]{align-items:center;justify-content:center}@media(min-width:960px){.counter-item[data-v-5ecd67ea]{display:flex}}@media(max-width:959px){.counter-item[data-v-5ecd67ea]{text-align:center}}@media(max-width:599px){.counter-item[data-v-5ecd67ea]{display:flex;text-align:left}}.counter-item .icon[data-v-5ecd67ea]{width:40px;height:40px;font-size:80px;line-height:80px}@media(min-width:960px){.counter-item .icon[data-v-5ecd67ea]{width:80px;height:80px}[dir=ltr] .counter-item .icon[data-v-5ecd67ea]{margin-right:16px}[dir=rtl] .counter-item .icon[data-v-5ecd67ea]{margin-left:16px}}@media(max-width:599px){.counter-item .icon[data-v-5ecd67ea]{width:80px;height:80px}[dir=ltr] .counter-item .icon[data-v-5ecd67ea]{margin-right:16px}[dir=rtl] .counter-item .icon[data-v-5ecd67ea]{margin-left:16px}}.counter-item .text h4[data-v-5ecd67ea]{font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(437);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2065bca8", content, true)

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoSlider_vue_vue_type_style_index_0_id_3698d0bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoSlider_vue_vue_type_style_index_0_id_3698d0bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoSlider_vue_vue_type_style_index_0_id_3698d0bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoSlider_vue_vue_type_style_index_0_id_3698d0bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoSlider_vue_vue_type_style_index_0_id_3698d0bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-3698d0bd]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-3698d0bd]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-3698d0bd]{font-size:28px;line-height:44px}}.use-text-title2[data-v-3698d0bd]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-3698d0bd]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-3698d0bd]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-3698d0bd]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-3698d0bd]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-3698d0bd]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-3698d0bd]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-3698d0bd]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-3698d0bd]{font-size:16px;line-height:24px}}.use-text-caption[data-v-3698d0bd],.use-text-paragraph[data-v-3698d0bd]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-3698d0bd]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-3698d0bd]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-3698d0bd]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-3698d0bd]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-3698d0bd]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-3698d0bd]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-3698d0bd]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-3698d0bd]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-3698d0bd]{transform:scale(-1)}.banner-wrap[data-v-3698d0bd]{position:relative;display:block}.theme--light .banner-wrap[data-v-3698d0bd]{background:var(--v-primarylight-base)}.theme--dark .banner-wrap[data-v-3698d0bd]{background:var(--v-primarydark-base)}@media(min-width:600px){.banner-wrap[data-v-3698d0bd]{height:600px}}@media(max-width:599px){.banner-wrap[data-v-3698d0bd]{padding:96px 0 40px}}.slide[data-v-3698d0bd]{position:relative}.img[data-v-3698d0bd]{text-align:center}@media(max-width:599px){.img[data-v-3698d0bd]{margin-top:24px}}.img img[data-v-3698d0bd]{width:310px}.inner[data-v-3698d0bd]{height:100%;display:flex;align-items:center}.text h4[data-v-3698d0bd]{font-weight:700;margin-bottom:16px}.theme--light .text h5[data-v-3698d0bd]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-3698d0bd]{color:hsla(0,0%,100%,.7)}.video-popup[data-v-3698d0bd]{max-width:none}.video-popup h4[data-v-3698d0bd]{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}@media(min-width:600px){.video-popup[data-v-3698d0bd]{width:690px}}.video-popup[data-v-3698d0bd]  iframe{width:100%}.close-btn[data-v-3698d0bd]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-3698d0bd]{right:4px}[dir=rtl] .close-btn[data-v-3698d0bd]{left:4px}.progress-wrap[data-v-3698d0bd]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-3698d0bd]{padding:40px 0 80px}}.progress-wrap ul[data-v-3698d0bd]{margin:0;padding:0}.progress-wrap ul li[data-v-3698d0bd]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-3698d0bd]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-3698d0bd]{font-weight:700}.text-icon[data-v-3698d0bd]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-3698d0bd]{font-size:28px}.theme--light .text-icon i[data-v-3698d0bd]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-3698d0bd]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-3698d0bd]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-3698d0bd]{margin-right:8px}.progress[data-v-3698d0bd]{border-radius:10px}.theme--light .progress[data-v-3698d0bd]{background:#30f}.theme--dark .progress[data-v-3698d0bd]{background:#0cf}.progress[data-v-3698d0bd]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.bg-wrapper[data-v-3698d0bd]{padding:32px 0 80px}.theme--light .bg-wrapper[data-v-3698d0bd]{background-color:var(--v-primarylight-base)}.theme--dark .bg-wrapper[data-v-3698d0bd]{background-color:var(--v-primarydark-base)}@media(max-width:599px){.gallery-root[data-v-3698d0bd],.team-root[data-v-3698d0bd]{text-align:center}}.gallery-root[data-v-3698d0bd]  .slick-dots,.team-root[data-v-3698d0bd]  .slick-dots{bottom:-55px}@media(max-width:599px){.team-root .item>*[data-v-3698d0bd]{width:280px}}.carousel[data-v-3698d0bd]{position:relative}.nav[data-v-3698d0bd]{position:absolute;top:50%;font-size:38px}.prev[data-v-3698d0bd]{left:-30px}.next[data-v-3698d0bd]{right:-30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_00ed7a8f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_00ed7a8f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_00ed7a8f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_00ed7a8f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CallAction_vue_vue_type_style_index_0_id_00ed7a8f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-00ed7a8f]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-00ed7a8f]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-00ed7a8f]{font-size:28px;line-height:44px}}.use-text-title2[data-v-00ed7a8f]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-00ed7a8f]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-00ed7a8f]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-00ed7a8f]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-00ed7a8f]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-00ed7a8f]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-00ed7a8f]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-00ed7a8f]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-00ed7a8f]{font-size:16px;line-height:24px}}.use-text-caption[data-v-00ed7a8f],.use-text-paragraph[data-v-00ed7a8f]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-00ed7a8f]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-00ed7a8f]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-00ed7a8f]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-00ed7a8f]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-00ed7a8f]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-00ed7a8f]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-00ed7a8f]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-00ed7a8f]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-00ed7a8f]{transform:scale(-1)}.root[data-v-00ed7a8f]{position:relative}.root p[data-v-00ed7a8f]{margin:0}.background[data-v-00ed7a8f]{width:560px;height:560px;top:-400px;position:absolute;transform:scale(3)}[dir=ltr] .background[data-v-00ed7a8f]{left:20%}[dir=rtl] .background[data-v-00ed7a8f]{right:20%}.background.front[data-v-00ed7a8f]{opacity:.2}.theme--dark .background.front[data-v-00ed7a8f],.theme--light .background.front[data-v-00ed7a8f]{fill:var(--v-primarylight-base)}.theme--dark .background.base[data-v-00ed7a8f]{fill:#000}.theme--light .background.base[data-v-00ed7a8f]{fill:#fff}@media(min-width:960px){.button.v-btn[data-v-00ed7a8f]{width:240px;height:64px;font-size:18px}}@media(max-width:959px){.button.v-btn[data-v-00ed7a8f]{margin:0 auto}}.paper[data-v-00ed7a8f]{padding:32px;border:2px solid var(--v-secondary-base)}@media(max-width:959px){.paper[data-v-00ed7a8f]{text-align:center}}@media(min-width:1280px){.paper[data-v-00ed7a8f]{padding:32px 80px;margin:0 32px}}@media(max-width:959px){.paper[data-v-00ed7a8f]{margin-bottom:40px}}@media(max-width:599px){.paper[data-v-00ed7a8f]{padding:32px 8px;text-align:center}}.paper h4[data-v-00ed7a8f]{font-weight:700;font-family:\"Roboto Condensed\"}.theme--dark .paper h4[data-v-00ed7a8f]{color:var(--v-secondarylight-base)}.theme--light .paper h4[data-v-00ed7a8f]{color:var(--v-secondarydark-base)}@media(max-width:599px){.paper h4[data-v-00ed7a8f]{font-size:28px!important;margin-bottom:16px}}.paper p[data-v-00ed7a8f]{font-size:24px}@media(max-width:959px){.paper p[data-v-00ed7a8f]{margin-bottom:40px}}@media(max-width:599px){.paper p[data-v-00ed7a8f]{font-size:18px;margin-bottom:24px}}[dir=ltr] .right-icon[data-v-00ed7a8f]{margin-left:8px}[dir=rtl] .right-icon[data-v-00ed7a8f]{margin-right:8px}.v-application--is-rtl .right-icon[data-v-00ed7a8f]{transform:rotate(180deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactMap_vue_vue_type_style_index_0_id_55ef7957_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactMap_vue_vue_type_style_index_0_id_55ef7957_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactMap_vue_vue_type_style_index_0_id_55ef7957_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactMap_vue_vue_type_style_index_0_id_55ef7957_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactMap_vue_vue_type_style_index_0_id_55ef7957_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-55ef7957]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-55ef7957]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-55ef7957]{font-size:28px;line-height:44px}}.use-text-title2[data-v-55ef7957]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-55ef7957]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-55ef7957]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-55ef7957]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-55ef7957]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-55ef7957]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-55ef7957]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-55ef7957]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-55ef7957]{font-size:16px;line-height:24px}}.use-text-caption[data-v-55ef7957],.use-text-paragraph[data-v-55ef7957]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-55ef7957]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-55ef7957]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-55ef7957]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-55ef7957]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-55ef7957]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-55ef7957]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-55ef7957]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-55ef7957]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-55ef7957]{transform:scale(-1)}.page-wrap[data-v-55ef7957]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-55ef7957]{display:flex}}.page-wrap a[data-v-55ef7957]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-55ef7957]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-55ef7957]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-55ef7957]{font-size:14px}}.full-form-wrap[data-v-55ef7957]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-55ef7957]{padding-top:32px}}.v-card.form-box[data-v-55ef7957]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-55ef7957]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-55ef7957]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-55ef7957]{padding:0 16px}}.form[data-v-55ef7957]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-55ef7957]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-55ef7957]{padding:0 16px 64px}}.form-helper[data-v-55ef7957]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-55ef7957]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-55ef7957]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-55ef7957]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-55ef7957]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-55ef7957]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-55ef7957]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-55ef7957]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-55ef7957]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-55ef7957]{display:block}}[dir=ltr] .right-icon[data-v-55ef7957]{margin-left:8px}[dir=rtl] .right-icon[data-v-55ef7957]{margin-right:8px}.check svg[data-v-55ef7957]{fill:var(--v-secondary-base)}.auth-frame[data-v-55ef7957]{display:block;position:relative}.auth-frame .row>div[data-v-55ef7957]{padding:0}.greeting[data-v-55ef7957]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-55ef7957]{color:var(--v-primary-base);font-weight:400}.img[data-v-55ef7957]{margin:40px 0}.head[data-v-55ef7957]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-55ef7957]{margin-top:16px;justify-content:center}.head a[data-v-55ef7957]{display:none}}.form-wrap[data-v-55ef7957]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-55ef7957]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-55ef7957]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-55ef7957]{padding:40px}}.socmed-side-login[data-v-55ef7957]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-55ef7957]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-55ef7957]{display:block}}.socmed-side-login>*[data-v-55ef7957]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-55ef7957]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-55ef7957]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-55ef7957]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-55ef7957]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-55ef7957]{margin-left:8px}.blue-btn[data-v-55ef7957]{background:#28aae1!important}.blue-btn[data-v-55ef7957]:hover{background:#146a8f!important}.navi-btn[data-v-55ef7957]{background:#3b579d!important}.navi-btn[data-v-55ef7957]:hover{background:#1f2e53!important}.red-btn[data-v-55ef7957]{background:#dd493c!important}.red-btn[data-v-55ef7957]:hover{background:#98251b!important}.separator[data-v-55ef7957]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-55ef7957]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-55ef7957]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-55ef7957]{font-size:12px}}.separator[data-v-55ef7957]:after,.separator[data-v-55ef7957]:before{content:\"\";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-55ef7957]:after,.theme--light .separator[data-v-55ef7957]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-55ef7957]:after,.theme--dark .separator[data-v-55ef7957]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-55ef7957]:before{left:0}.separator[data-v-55ef7957]:after{right:0}.form-control-label a[data-v-55ef7957]{position:relative;top:-20px}.form-control-label>div[data-v-55ef7957]{margin-top:0}.map[data-v-55ef7957]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-55ef7957]{height:300px!important}}@media(min-width:960px){.map[data-v-55ef7957]{border-radius:0 12px 12px 0!important}}.map[data-v-55ef7957]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-55ef7957]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-55ef7957],.map.full[data-v-55ef7957]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-55ef7957]{height:300px;position:relative}.icon[data-v-55ef7957]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-55ef7957]{margin-right:8px}[dir=rtl] .icon[data-v-55ef7957]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Counter; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=template&id=5ecd67ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"counter-wrap",class:{ dark: _vm.dark }},[_vm._ssrNode("<div id=\"watched_counter\" data-v-5ecd67ea></div> "),_c('v-container',{staticClass:"max-md"},[_c('v-row',{staticClass:"root",attrs:{"align":"center","justify":"center"}},[_c('v-col',{attrs:{"sm":"4"}},[_c('div',{staticClass:"counter-item"},[_c('span',{staticClass:"icon ion-ios-leaf-outline"}),_vm._v(" "),_c('div',{staticClass:"text"},[(_vm.loaded)?_c('h4',{staticClass:"display-1"},[_vm._v("\n              +\n              "),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 123,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 123,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("Lorem Ipsum dolor")])])])]),_vm._v(" "),_c('v-col',{attrs:{"sm":"4"}},[_c('div',{staticClass:"counter-item"},[_c('span',{staticClass:"icon ion-ios-bulb-outline"}),_vm._v(" "),_c('div',{staticClass:"text"},[(_vm.loaded)?_c('h4',{staticClass:"display-1"},[_vm._v("\n              +\n              "),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 456,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 456,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("Pellentesque ac bibendum")])])])]),_vm._v(" "),_c('v-col',{attrs:{"sm":"4"}},[_c('div',{staticClass:"counter-item"},[_c('span',{staticClass:"icon ion-ios-globe"}),_vm._v(" "),_c('div',{staticClass:"text"},[(_vm.loaded)?_c('h4',{staticClass:"display-1"},[_vm._v("\n              $\n              "),_c('span',{directives:[{name:"countUp",rawName:"v-countUp:onWindowScroll.once",value:({
                  watchedElId: 'watched_counter',
                  startValue: 0,
                  endValue: 789,
                  options: { duration: 1 }
                }),expression:"{\n                  watchedElId: 'watched_counter',\n                  startValue: 0,\n                  endValue: 789,\n                  options: { duration: 1 }\n                }",arg:"onWindowScroll",modifiers:{"once":true}}]})]):_vm._e(),_vm._v(" "),_c('h6',{staticClass:"use-text-subtitle2"},[_vm._v("consectetur adipiscing ")])])])])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=template&id=5ecd67ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counter/Counter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Countervue_type_script_lang_js_ = ({
  data: () => ({
    loaded: false
  }),

  mounted() {
    this.loaded = true;
  },

  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Counter/Counter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Counter_Countervue_type_script_lang_js_ = (Countervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./components/Counter/Counter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(434)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Counter_Countervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ecd67ea",
  "16414b7a"
  
)

/* harmony default export */ var Counter = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Counter/index.js


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ CallAction; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CallAction/CallAction.vue?vue&type=template&id=00ed7a8f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('div',{staticClass:"root"},[_c('v-card',{staticClass:"paper"},[_c('v-row',{attrs:{"align":"center","no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","md":"9"}},[_c('h4',{staticClass:"display-1 pb-2"},[_vm._v("\n                "+_vm._s(_vm.$t('common.about_ready'))+"\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.\n              ")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-row',{attrs:{"align":"center"}},[_c('v-btn',{staticClass:"button",attrs:{"large":"","outlined":"","color":"secondary","href":"/contact"}},[_vm._v("\n                  "+_vm._s(_vm.$t('common.btn_contact'))+"\n                ")])],1)],1)],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CallAction/CallAction.vue?vue&type=template&id=00ed7a8f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CallAction/CallAction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CallActionvue_type_script_lang_js_ = ({
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    }

  }
});
// CONCATENATED MODULE: ./components/CallAction/CallAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var CallAction_CallActionvue_type_script_lang_js_ = (CallActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./components/CallAction/CallAction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(440)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CallAction_CallActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00ed7a8f",
  "7a26e200"
  
)

/* harmony default export */ var CallAction = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/CallAction/index.js


/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/PhotoSlider.vue?vue&type=template&id=3698d0bd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[(_vm.loaded)?_c('vue-easy-lightbox',{attrs:{"visible":_vm.visible,"imgs":_vm.imgs,"index":_vm.index},on:{"hide":_vm.handleHide}}):_vm._e(),_vm._v(" "),_c('v-container',[_c('h4',{staticClass:"use-text-title2 mb-3"},[_vm._v("\n      "+_vm._s(_vm.$t('common.about_gallery'))+"\n    ")]),_vm._v(" "),_c('p',[_vm._v("Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")]),_vm._v(" "),(_vm.loaded)?_c('div',{staticClass:"carousel"},[_c('v-btn',{staticClass:"nav prev",attrs:{"icon":""},on:{"click":function($event){return _vm.slickPrev()}}},[_c('v-icon',{attrs:{"large":""}},[_vm._v("mdi-arrow-left")])],1),_vm._v(" "),_c('slick',{ref:"slider",attrs:{"options":_vm.slickOptions}},_vm._l((6),function(index){return _c('div',{key:index,staticClass:"item px-3",on:{"click":function () { return _vm.showImg(index); }}},[_c('media-card',{attrs:{"title":"Sed lacinia velit, ut malesuada eros interdum a","orientation":"portrait","type":"photo","thumb":"https://source.unsplash.com/random"}})],1)}),0),_vm._v(" "),_c('v-btn',{staticClass:"nav next",attrs:{"icon":""},on:{"click":function($event){return _vm.slickNext()}}},[_c('v-icon',{attrs:{"large":""}},[_vm._v("mdi-arrow-right")])],1)],1):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About/PhotoSlider.vue?vue&type=template&id=3698d0bd&scoped=true&

// EXTERNAL MODULE: ./components/Cards/MediaCard.vue + 6 modules
var MediaCard = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/PhotoSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PhotoSlidervue_type_script_lang_js_ = ({
  components: {
    MediaCard: MediaCard["a" /* default */],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 342, 7))
  },

  data() {
    return {
      visible: false,
      index: 0,
      item: 0,
      loaded: false,
      imgs: ['https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random'],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        responsive: [{
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    slickNext() {
      this.$refs.slider.next();
    },

    slickPrev() {
      this.$refs.slider.prev();
    },

    showImg(index) {
      this.index = index;
      this.visible = true;
    },

    handleHide() {
      this.visible = false;
    }

  }
});
// CONCATENATED MODULE: ./components/About/PhotoSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_PhotoSlidervue_type_script_lang_js_ = (PhotoSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// CONCATENATED MODULE: ./components/About/PhotoSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(438)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  About_PhotoSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3698d0bd",
  "5d58d282"
  
)

/* harmony default export */ var PhotoSlider = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/ContactMap.vue?vue&type=template&id=55ef7957&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrap"},[_c('v-snackbar',{staticClass:"notification",attrs:{"timeout":4000,"top":"","right":""},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n      Message Sent\n    ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","icon":""},on:{"click":function($event){_vm.snackbar = false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_vm._ssrNode(" "),_c('v-container',{staticClass:"inner-wrap"},[_c('v-row',{attrs:{"align":"center"}},[_c('v-col',{staticClass:"pe-md-0 wrap-deco",attrs:{"md":"6","cols":"12"}},[_c('v-card',{staticClass:"form-box",class:{ 'map-form': _vm.full }},[_c('div',{staticClass:"form"},[_c('div',{staticClass:"text-center"},[_c('h4',{staticClass:"use-text-title2 mb-3"},[_vm._v("\n                "+_vm._s(_vm.$t('common.contact_title2'))+"\n              ")]),_vm._v(" "),_c('p',[_vm._v("Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.")])]),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{attrs:{"rules":_vm.nameRules,"label":_vm.$t('common.form_name'),"required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{attrs:{"rules":_vm.emailRules,"label":_vm.$t('common.form_email'),"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12","sm":"12"}},[_c('v-text-field',{attrs:{"label":_vm.$t('common.form_phone')},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1),_vm._v(" "),_c('v-col',{staticClass:"px-6",attrs:{"cols":"12"}},[_c('v-textarea',{attrs:{"rows":"6","label":_vm.$t('common.form_message')},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"color":"secondary","rules":[function (v) { return !!v || 'You must agree to continue!'; }],"label":_vm.$t('common.form_terms'),"required":""},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}}),_vm._v(" "),_c('span',[_c('a',{staticClass:"link",attrs:{"href":"#"}},[_vm._v("\n                    "+_vm._s(_vm.$t('common.form_privacy'))+"\n                  ")])])],1),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('v-btn',{attrs:{"large":"","block":"","color":"primary"},on:{"click":_vm.validate}},[_vm._v("\n                  "+_vm._s(_vm.$t('common.form_send'))+"\n                ")])],1)],1)],1)])],1),_vm._v(" "),_c('v-col',{staticClass:"ps-md-0",attrs:{"md":"6","cols":"12"}},[_c('v-card',{staticClass:"map",class:{ full: _vm.full },attrs:{"raised":""}},[_c('GMap',{ref:"gMap",attrs:{"center":{lat: _vm.locations[0].lat, lng: _vm.locations[0].lng},"options":{fullscreenControl: false},"zoom":6}},_vm._l((_vm.locations),function(location){return _c('GMapMarker',{key:location.id,ref:"gMarker",refInFor:true,attrs:{"position":{lat: location.lat, lng: location.lng}}},[_c('GMapInfoWindow',[_c('div',{staticClass:"bubel"},[_c('h6',{staticClass:"title pb-2 px-3"},[_vm._v("\n                    Head Quarter\n                  ")]),_vm._v(" "),_c('v-row',{staticClass:"ma-3"},[_c('v-col',{staticClass:"pa-0",attrs:{"item":"","sm":"6","cols":"12"}},[_c('p',[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-phone")]),_vm._v("\n                        +98 765 432 10\n                      ")],1)]),_vm._v(" "),_c('v-col',{staticClass:"pa-0",attrs:{"item":"","sm":"6","cols":"12"}},[_c('p',[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-email")]),_vm._v("\n                        hello@luxi.com\n                      ")],1)]),_vm._v(" "),_c('v-col',{staticClass:"pa-0",attrs:{"item":"","sm":"12","cols":"12"}},[_c('p',[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-map-marker")]),_vm._v("\n                        Lorem ipsum street Block C - Vestibullum Building\n                      ")],1)])],1)],1)])],1)}),1)],1)],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/ContactMap.vue?vue&type=template&id=55ef7957&scoped=true&

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/ContactMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ContactMapvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },
  data: () => ({
    currentLocation: {},
    locations: [{
      lat: 44.933076,
      lng: 15.629058
    }],
    valid: true,
    snackbar: false,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    phone: '',
    company: '',
    message: '',
    checkbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }

  },
  props: {
    full: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Forms/ContactMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_ContactMapvue_type_script_lang_js_ = (ContactMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(397);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(336);

// CONCATENATED MODULE: ./components/Forms/ContactMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(442)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_ContactMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55ef7957",
  "65b0eb8a"
  
)

/* harmony default export */ var ContactMap = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCheckbox: VCheckbox["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/Banner.vue?vue&type=template&id=60e40b7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner-wrap"},[_vm._ssrNode("<div class=\"inner\" data-v-60e40b7c>","</div>",[_c('v-container',[_c('v-row',{attrs:{"align":"center","justify":"center"}},[_c('v-col',{staticClass:"px-5",attrs:{"lg":"7","sm":"6"}},[_c('div',{staticClass:"text"},[_c('h4',{staticClass:"text-h4"},[_vm._v("Pellentesque habitant morbi tristique senectus ")]),_vm._v(" "),_c('h5',{staticClass:"text-h5"},[_vm._v("Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents")])])]),_vm._v(" "),_c('v-col',{staticClass:"px-5",attrs:{"lg":"3","sm":"6"}},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/images/starter/Illustration.png","alt":"illustration"}})])])],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About/Banner.vue?vue&type=template&id=60e40b7c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./components/About/Banner.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(432)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "60e40b7c",
  "006989ad"
  
)

/* harmony default export */ var Banner = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(567);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0c4f112e", content, true, context)
};

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(569);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6df11828", content, true, context)
};

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(572);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c3dd367a", content, true, context)
};

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(574);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4e4304c0", content, true, context)
};

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(576);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ccdac700", content, true, context)
};

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_5eee2e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_5eee2e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_5eee2e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_5eee2e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyLogo_vue_vue_type_style_index_0_id_5eee2e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5eee2e28]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5eee2e28]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5eee2e28]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5eee2e28]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-5eee2e28]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5eee2e28]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5eee2e28]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5eee2e28]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5eee2e28]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5eee2e28]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5eee2e28]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5eee2e28]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5eee2e28],.use-text-paragraph[data-v-5eee2e28]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5eee2e28]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5eee2e28]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5eee2e28]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5eee2e28]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5eee2e28]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5eee2e28]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5eee2e28]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5eee2e28]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-5eee2e28]{transform:scale(-1)}.root[data-v-5eee2e28]{display:flex}@media(min-width:600px){.root[data-v-5eee2e28]{justify-content:center}}@media(max-width:599px){.root[data-v-5eee2e28]{overflow-x:auto}}.root img[data-v-5eee2e28]{height:64px;margin:32px;filter:grayscale(1) contrast(.5) brightness(1.5);transition:all .3s ease-out}.root img[data-v-5eee2e28]:hover{filter:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_06e3b82f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_06e3b82f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_06e3b82f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_06e3b82f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_06e3b82f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-06e3b82f]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-06e3b82f]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-06e3b82f]{font-size:28px;line-height:44px}}.use-text-title2[data-v-06e3b82f]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-06e3b82f]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-06e3b82f]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-06e3b82f]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-06e3b82f]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-06e3b82f]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-06e3b82f]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-06e3b82f]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-06e3b82f]{font-size:16px;line-height:24px}}.use-text-caption[data-v-06e3b82f],.use-text-paragraph[data-v-06e3b82f]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-06e3b82f]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-06e3b82f]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-06e3b82f]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-06e3b82f]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-06e3b82f]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-06e3b82f]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-06e3b82f]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-06e3b82f]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-06e3b82f]{transform:scale(-1)}.banner-wrap[data-v-06e3b82f]{position:relative;display:block}.theme--light .banner-wrap[data-v-06e3b82f]{background:var(--v-primarylight-base)}.theme--dark .banner-wrap[data-v-06e3b82f]{background:var(--v-primarydark-base)}@media(min-width:600px){.banner-wrap[data-v-06e3b82f]{height:600px}}@media(max-width:599px){.banner-wrap[data-v-06e3b82f]{padding:96px 0 40px}}.slide[data-v-06e3b82f]{position:relative}.img[data-v-06e3b82f]{text-align:center}@media(max-width:599px){.img[data-v-06e3b82f]{margin-top:24px}}.img img[data-v-06e3b82f]{width:310px}.inner[data-v-06e3b82f]{height:100%;display:flex;align-items:center}.text h4[data-v-06e3b82f]{font-weight:700;margin-bottom:16px}.theme--light .text h5[data-v-06e3b82f]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-06e3b82f]{color:hsla(0,0%,100%,.7)}.video-popup[data-v-06e3b82f]{max-width:none}.video-popup h4[data-v-06e3b82f]{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}@media(min-width:600px){.video-popup[data-v-06e3b82f]{width:690px}}.video-popup[data-v-06e3b82f]  iframe{width:100%}.close-btn[data-v-06e3b82f]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-06e3b82f]{right:4px}[dir=rtl] .close-btn[data-v-06e3b82f]{left:4px}.progress-wrap[data-v-06e3b82f]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-06e3b82f]{padding:40px 0 80px}}.progress-wrap ul[data-v-06e3b82f]{margin:0;padding:0}.progress-wrap ul li[data-v-06e3b82f]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-06e3b82f]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-06e3b82f]{font-weight:700}.text-icon[data-v-06e3b82f]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-06e3b82f]{font-size:28px}.theme--light .text-icon i[data-v-06e3b82f]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-06e3b82f]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-06e3b82f]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-06e3b82f]{margin-right:8px}.progress[data-v-06e3b82f]{border-radius:10px}.theme--light .progress[data-v-06e3b82f]{background:#30f}.theme--dark .progress[data-v-06e3b82f]{background:#0cf}.progress[data-v-06e3b82f]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.bg-wrapper[data-v-06e3b82f]{padding:32px 0 80px}.theme--light .bg-wrapper[data-v-06e3b82f]{background-color:var(--v-primarylight-base)}.theme--dark .bg-wrapper[data-v-06e3b82f]{background-color:var(--v-primarydark-base)}@media(max-width:599px){.gallery-root[data-v-06e3b82f],.team-root[data-v-06e3b82f]{text-align:center}}.gallery-root[data-v-06e3b82f]  .slick-dots,.team-root[data-v-06e3b82f]  .slick-dots{bottom:-55px}@media(max-width:599px){.team-root .item>*[data-v-06e3b82f]{width:280px}}.carousel[data-v-06e3b82f]{position:relative}.nav[data-v-06e3b82f]{position:absolute;top:50%;font-size:38px}.prev[data-v-06e3b82f]{left:-30px}.next[data-v-06e3b82f]{right:-30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDialog_VDialog_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _mixins_detachable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(117);
/* harmony import */ var _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(123);
/* harmony import */ var _mixins_returnable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var _mixins_stackable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(116);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
// Styles
 // Components

 // Mixins






 // Directives

 // Helpers




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_mixins_dependent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _mixins_detachable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _mixins_returnable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _mixins_stackable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _mixins_activatable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'v-dialog',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
  },
  props: {
    dark: Boolean,
    disabled: Boolean,
    fullscreen: Boolean,
    light: Boolean,
    maxWidth: [String, Number],
    noClickAnimation: Boolean,
    origin: {
      type: String,
      default: 'center center'
    },
    persistent: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    transition: {
      type: [String, Boolean],
      default: 'dialog-transition'
    },
    width: [String, Number]
  },

  data() {
    return {
      activatedBy: null,
      animate: false,
      animateTimeout: -1,
      stackMinZIndex: 200,
      previousActiveElement: null
    };
  },

  computed: {
    classes() {
      return {
        [`v-dialog ${this.contentClass}`.trim()]: true,
        'v-dialog--active': this.isActive,
        'v-dialog--persistent': this.persistent,
        'v-dialog--fullscreen': this.fullscreen,
        'v-dialog--scrollable': this.scrollable,
        'v-dialog--animated': this.animate
      };
    },

    contentClasses() {
      return {
        'v-dialog__content': true,
        'v-dialog__content--active': this.isActive
      };
    },

    hasActivator() {
      return Boolean(!!this.$slots.activator || !!this.$scopedSlots.activator);
    }

  },
  watch: {
    isActive(val) {
      if (val) {
        this.show();
        this.hideScroll();
      } else {
        var _this$previousActiveE;

        this.removeOverlay();
        this.unbind();
        (_this$previousActiveE = this.previousActiveElement) == null ? void 0 : _this$previousActiveE.focus();
      }
    },

    fullscreen(val) {
      if (!this.isActive) return;

      if (val) {
        this.hideScroll();
        this.removeOverlay(false);
      } else {
        this.showScroll();
        this.genOverlay();
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('full-width')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* removed */ "e"])('full-width', this);
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.isBooted = this.isActive;
      this.isActive && this.show();
    });
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') this.unbind();
  },

  methods: {
    animateClick() {
      this.animate = false; // Needed for when clicking very fast
      // outside of the dialog

      this.$nextTick(() => {
        this.animate = true;
        window.clearTimeout(this.animateTimeout);
        this.animateTimeout = window.setTimeout(() => this.animate = false, 150);
      });
    },

    closeConditional(e) {
      const target = e.target; // Ignore the click if the dialog is closed or destroyed,
      // if it was on an element inside the content,
      // if it was dragged onto the overlay (#6969),
      // or if this isn't the topmost dialog (#9907)

      return !(this._isDestroyed || !this.isActive || this.$refs.content.contains(target) || this.overlay && target && !this.overlay.$el.contains(target)) && this.activeZIndex >= this.getMaxZIndex();
    },

    hideScroll() {
      if (this.fullscreen) {
        document.documentElement.classList.add('overflow-y-hidden');
      } else {
        _mixins_overlayable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].options.methods.hideScroll.call(this);
      }
    },

    show() {
      !this.fullscreen && !this.hideOverlay && this.genOverlay(); // Double nextTick to wait for lazy content to be generated

      this.$nextTick(() => {
        this.$nextTick(() => {
          if (!this.$refs.content.contains(document.activeElement)) {
            this.previousActiveElement = document.activeElement;
            this.$refs.content.focus();
          }

          this.bind();
        });
      });
    },

    bind() {
      window.addEventListener('focusin', this.onFocusin);
    },

    unbind() {
      window.removeEventListener('focusin', this.onFocusin);
    },

    onClickOutside(e) {
      this.$emit('click:outside', e);

      if (this.persistent) {
        this.noClickAnimation || this.animateClick();
      } else {
        this.isActive = false;
      }
    },

    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_11__[/* keyCodes */ "t"].esc && !this.getOpenDependents().length) {
        if (!this.persistent) {
          this.isActive = false;
          const activator = this.getActivator();
          this.$nextTick(() => activator && activator.focus());
        } else if (!this.noClickAnimation) {
          this.animateClick();
        }
      }

      this.$emit('keydown', e);
    },

    // On focus change, wrap focus to stay inside the dialog
    // https://github.com/vuetifyjs/vuetify/issues/6892
    onFocusin(e) {
      if (!e || !this.retainFocus) return;
      const target = e.target;

      if (!!target && // It isn't the document or the dialog body
      ![document, this.$refs.content].includes(target) && // It isn't inside the dialog body
      !this.$refs.content.contains(target) && // We're the topmost dialog
      this.activeZIndex >= this.getMaxZIndex() && // It isn't inside a dependent element (like a menu)
      !this.getOpenDependentElements().some(el => el.contains(target)) // So we must have focused something outside the dialog and its children
      ) {
        // Find and focus the first available element inside the dialog
        const focusable = this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const el = [...focusable].find(el => !el.hasAttribute('disabled'));
        el && el.focus();
      }
    },

    genContent() {
      return this.showLazyContent(() => [this.$createElement(_VThemeProvider__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        props: {
          root: true,
          light: this.light,
          dark: this.dark
        }
      }, [this.$createElement('div', {
        class: this.contentClasses,
        attrs: {
          role: 'dialog',
          tabindex: this.isActive ? 0 : undefined,
          'aria-modal': this.hideOverlay ? undefined : 'true',
          ...this.getScopeIdAttrs()
        },
        on: {
          keydown: this.onKeydown
        },
        style: {
          zIndex: this.activeZIndex
        },
        ref: 'content'
      }, [this.genTransition()])])]);
    },

    genTransition() {
      const content = this.genInnerContent();
      if (!this.transition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          origin: this.origin,
          appear: true
        }
      }, [content]);
    },

    genInnerContent() {
      const data = {
        class: this.classes,
        ref: 'dialog',
        directives: [{
          name: 'click-outside',
          value: {
            handler: this.onClickOutside,
            closeConditional: this.closeConditional,
            include: this.getOpenDependentElements
          }
        }, {
          name: 'show',
          value: this.isActive
        }],
        style: {
          transformOrigin: this.origin
        }
      };

      if (!this.fullscreen) {
        data.style = { ...data.style,
          maxWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__[/* convertToUnit */ "g"])(this.maxWidth),
          width: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_11__[/* convertToUnit */ "g"])(this.width)
        };
      }

      return this.$createElement('div', data, this.getContentSlot());
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-dialog__container',
      class: {
        'v-dialog__container--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      }
    }, [this.genActivator(), this.genContent()]);
  }

}));

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_4c1e1e7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_4c1e1e7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_4c1e1e7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_4c1e1e7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_4c1e1e7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4c1e1e7c]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4c1e1e7c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4c1e1e7c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4c1e1e7c]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-4c1e1e7c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4c1e1e7c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4c1e1e7c]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4c1e1e7c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4c1e1e7c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4c1e1e7c]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4c1e1e7c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4c1e1e7c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4c1e1e7c],.use-text-paragraph[data-v-4c1e1e7c]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4c1e1e7c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4c1e1e7c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4c1e1e7c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4c1e1e7c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4c1e1e7c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4c1e1e7c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4c1e1e7c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4c1e1e7c]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-4c1e1e7c]{transform:scale(-1)}.banner-wrap[data-v-4c1e1e7c]{position:relative;display:block}.theme--light .banner-wrap[data-v-4c1e1e7c]{background:var(--v-primarylight-base)}.theme--dark .banner-wrap[data-v-4c1e1e7c]{background:var(--v-primarydark-base)}@media(min-width:600px){.banner-wrap[data-v-4c1e1e7c]{height:600px}}@media(max-width:599px){.banner-wrap[data-v-4c1e1e7c]{padding:96px 0 40px}}.slide[data-v-4c1e1e7c]{position:relative}.img[data-v-4c1e1e7c]{text-align:center}@media(max-width:599px){.img[data-v-4c1e1e7c]{margin-top:24px}}.img img[data-v-4c1e1e7c]{width:310px}.inner[data-v-4c1e1e7c]{height:100%;display:flex;align-items:center}.text h4[data-v-4c1e1e7c]{font-weight:700;margin-bottom:16px}.theme--light .text h5[data-v-4c1e1e7c]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-4c1e1e7c]{color:hsla(0,0%,100%,.7)}.video-popup[data-v-4c1e1e7c]{max-width:none}.video-popup h4[data-v-4c1e1e7c]{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}@media(min-width:600px){.video-popup[data-v-4c1e1e7c]{width:690px}}.video-popup[data-v-4c1e1e7c]  iframe{width:100%}.close-btn[data-v-4c1e1e7c]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-4c1e1e7c]{right:4px}[dir=rtl] .close-btn[data-v-4c1e1e7c]{left:4px}.progress-wrap[data-v-4c1e1e7c]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-4c1e1e7c]{padding:40px 0 80px}}.progress-wrap ul[data-v-4c1e1e7c]{margin:0;padding:0}.progress-wrap ul li[data-v-4c1e1e7c]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-4c1e1e7c]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-4c1e1e7c]{font-weight:700}.text-icon[data-v-4c1e1e7c]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-4c1e1e7c]{font-size:28px}.theme--light .text-icon i[data-v-4c1e1e7c]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-4c1e1e7c]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-4c1e1e7c]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-4c1e1e7c]{margin-right:8px}.progress[data-v-4c1e1e7c]{border-radius:10px}.theme--light .progress[data-v-4c1e1e7c]{background:#30f}.theme--dark .progress[data-v-4c1e1e7c]{background:#0cf}.progress[data-v-4c1e1e7c]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.bg-wrapper[data-v-4c1e1e7c]{padding:32px 0 80px}.theme--light .bg-wrapper[data-v-4c1e1e7c]{background-color:var(--v-primarylight-base)}.theme--dark .bg-wrapper[data-v-4c1e1e7c]{background-color:var(--v-primarydark-base)}@media(max-width:599px){.gallery-root[data-v-4c1e1e7c],.team-root[data-v-4c1e1e7c]{text-align:center}}.gallery-root[data-v-4c1e1e7c]  .slick-dots,.team-root[data-v-4c1e1e7c]  .slick-dots{bottom:-55px}@media(max-width:599px){.team-root .item>*[data-v-4c1e1e7c]{width:280px}}.carousel[data-v-4c1e1e7c]{position:relative}.nav[data-v-4c1e1e7c]{position:absolute;top:50%;font-size:38px}.prev[data-v-4c1e1e7c]{left:-30px}.next[data-v-4c1e1e7c]{right:-30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamSlider_vue_vue_type_style_index_0_id_f6f7a5c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamSlider_vue_vue_type_style_index_0_id_f6f7a5c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamSlider_vue_vue_type_style_index_0_id_f6f7a5c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamSlider_vue_vue_type_style_index_0_id_f6f7a5c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamSlider_vue_vue_type_style_index_0_id_f6f7a5c6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-f6f7a5c6]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-f6f7a5c6]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-f6f7a5c6]{font-size:28px;line-height:44px}}.use-text-title2[data-v-f6f7a5c6]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-f6f7a5c6]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-f6f7a5c6]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-f6f7a5c6]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-f6f7a5c6]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-f6f7a5c6]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-f6f7a5c6]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-f6f7a5c6]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-f6f7a5c6]{font-size:16px;line-height:24px}}.use-text-caption[data-v-f6f7a5c6],.use-text-paragraph[data-v-f6f7a5c6]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-f6f7a5c6]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-f6f7a5c6]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-f6f7a5c6]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-f6f7a5c6]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-f6f7a5c6]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-f6f7a5c6]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-f6f7a5c6]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-f6f7a5c6]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-f6f7a5c6]{transform:scale(-1)}.banner-wrap[data-v-f6f7a5c6]{position:relative;display:block}.theme--light .banner-wrap[data-v-f6f7a5c6]{background:var(--v-primarylight-base)}.theme--dark .banner-wrap[data-v-f6f7a5c6]{background:var(--v-primarydark-base)}@media(min-width:600px){.banner-wrap[data-v-f6f7a5c6]{height:600px}}@media(max-width:599px){.banner-wrap[data-v-f6f7a5c6]{padding:96px 0 40px}}.slide[data-v-f6f7a5c6]{position:relative}.img[data-v-f6f7a5c6]{text-align:center}@media(max-width:599px){.img[data-v-f6f7a5c6]{margin-top:24px}}.img img[data-v-f6f7a5c6]{width:310px}.inner[data-v-f6f7a5c6]{height:100%;display:flex;align-items:center}.text h4[data-v-f6f7a5c6]{font-weight:700;margin-bottom:16px}.theme--light .text h5[data-v-f6f7a5c6]{color:rgba(0,0,0,.54)}.theme--dark .text h5[data-v-f6f7a5c6]{color:hsla(0,0%,100%,.7)}.video-popup[data-v-f6f7a5c6]{max-width:none}.video-popup h4[data-v-f6f7a5c6]{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}@media(min-width:600px){.video-popup[data-v-f6f7a5c6]{width:690px}}.video-popup[data-v-f6f7a5c6]  iframe{width:100%}.close-btn[data-v-f6f7a5c6]{position:absolute;top:4px}[dir=ltr] .close-btn[data-v-f6f7a5c6]{right:4px}[dir=rtl] .close-btn[data-v-f6f7a5c6]{left:4px}.progress-wrap[data-v-f6f7a5c6]{padding-bottom:64px}@media(min-width:600px){.progress-wrap[data-v-f6f7a5c6]{padding:40px 0 80px}}.progress-wrap ul[data-v-f6f7a5c6]{margin:0;padding:0}.progress-wrap ul li[data-v-f6f7a5c6]{list-style:none;margin-bottom:40px}.progress-wrap ul li[data-v-f6f7a5c6]:last-child{margin-bottom:0}.progress-wrap ul li h5[data-v-f6f7a5c6]{font-weight:700}.text-icon[data-v-f6f7a5c6]{margin-bottom:8px;display:flex;align-items:center}.text-icon i[data-v-f6f7a5c6]{font-size:28px}.theme--light .text-icon i[data-v-f6f7a5c6]{color:rgba(0,0,0,.54)}.theme--dark .text-icon i[data-v-f6f7a5c6]{color:hsla(0,0%,100%,.7)}[dir=ltr] .text-icon h5[data-v-f6f7a5c6]{margin-left:8px}[dir=rtl] .text-icon h5[data-v-f6f7a5c6]{margin-right:8px}.progress[data-v-f6f7a5c6]{border-radius:10px}.theme--light .progress[data-v-f6f7a5c6]{background:#30f}.theme--dark .progress[data-v-f6f7a5c6]{background:#0cf}.progress[data-v-f6f7a5c6]  .v-progress-linear__determinate{transition:all .5s cubic-bezier(0,0,0,.96);border-radius:10px;background-image:linear-gradient(120deg,var(--v-secondary-base),var(--v-primary-base))}.bg-wrapper[data-v-f6f7a5c6]{padding:32px 0 80px}.theme--light .bg-wrapper[data-v-f6f7a5c6]{background-color:var(--v-primarylight-base)}.theme--dark .bg-wrapper[data-v-f6f7a5c6]{background-color:var(--v-primarydark-base)}@media(max-width:599px){.gallery-root[data-v-f6f7a5c6],.team-root[data-v-f6f7a5c6]{text-align:center}}.gallery-root[data-v-f6f7a5c6]  .slick-dots,.team-root[data-v-f6f7a5c6]  .slick-dots{bottom:-55px}@media(max-width:599px){.team-root .item>*[data-v-f6f7a5c6]{width:280px}}.carousel[data-v-f6f7a5c6]{position:relative}.nav[data-v-f6f7a5c6]{position:absolute;top:50%;font-size:38px}.prev[data-v-f6f7a5c6]{left:-30px}.next[data-v-f6f7a5c6]{right:-30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adb7274_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adb7274_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adb7274_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adb7274_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5adb7274_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5adb7274]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5adb7274]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5adb7274]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5adb7274]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-5adb7274]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5adb7274]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5adb7274]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5adb7274]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5adb7274]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5adb7274]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5adb7274]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5adb7274]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5adb7274],.use-text-paragraph[data-v-5adb7274]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5adb7274]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5adb7274]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5adb7274]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5adb7274]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5adb7274]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5adb7274]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5adb7274]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5adb7274]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-5adb7274]{transform:scale(-1)}.main-wrap[data-v-5adb7274]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-5adb7274]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-5adb7274]{margin-bottom:90px}}.space-top[data-v-5adb7274]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-5adb7274]{margin-top:90px}}.space-bottom-short[data-v-5adb7274]{margin-bottom:60px}.space-top-short[data-v-5adb7274]{margin-top:60px}.container-wrap>section[data-v-5adb7274]{position:relative}.container-general[data-v-5adb7274]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-5adb7274]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-5adb7274]{height:100vh;display:flex}.maintenance-icon[data-v-5adb7274]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-5adb7274]{font-size:48px}.theme--light .maintenance-icon[data-v-5adb7274]{background:#30f}.theme--dark .maintenance-icon[data-v-5adb7274]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-5adb7274]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=5adb7274&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap"},[_c('main-header'),_vm._ssrNode(" "),_c('banner'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-top-short\" data-v-5adb7274>","</div>",[_c('company-logo')],1),_vm._ssrNode(" "),_c('counter'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-top-short\" data-v-5adb7274>","</div>",[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:"px-md-12",attrs:{"md":"6","cols":"12"}},[_c('about-video')],1),_vm._v(" "),_c('v-col',{staticClass:"px-md-12",attrs:{"md":"6","cols":"12"}},[_c('about-progress')],1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-bottom-short\" data-v-5adb7274>","</div>",[_c('team-slider')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-bottom-short\" data-v-5adb7274>","</div>",[_c('photo-slider')],1),_vm._ssrNode(" "),_c('call-action'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-top-short\" data-v-5adb7274>","</div>",[_c('contact-map',{attrs:{"full":""}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"footer\" data-v-5adb7274>","</div>",[_c('main-footer')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=5adb7274&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/index.js + 72 modules
var Header = __webpack_require__(112);

// EXTERNAL MODULE: ./components/About/Banner.vue + 2 modules
var Banner = __webpack_require__(509);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=5eee2e28&scoped=true&
var CompanyLogovue_type_template_id_5eee2e28_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"fixed-width"},[_c('div',{staticClass:"root"},_vm._l((_vm.logos),function(logo,index){return _c('img',{key:index,attrs:{"src":logo,"alt":'logo' + index}})}),0)])}
var CompanyLogovue_type_template_id_5eee2e28_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=template&id=5eee2e28&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CompanyLogovue_type_script_lang_js_ = ({
  data() {
    return {
      logos: ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png']
    };
  }

});
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CompanyLogo_CompanyLogovue_type_script_lang_js_ = (CompanyLogovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(344);

// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(566)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  CompanyLogo_CompanyLogovue_type_script_lang_js_,
  CompanyLogovue_type_template_id_5eee2e28_scoped_true_render,
  CompanyLogovue_type_template_id_5eee2e28_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5eee2e28",
  "e535ecdc"
  
)

/* harmony default export */ var CompanyLogo = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VContainer: VContainer["a" /* default */]})

// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// EXTERNAL MODULE: ./components/Counter/index.js + 5 modules
var Counter = __webpack_require__(501);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/Video.vue?vue&type=template&id=06e3b82f&scoped=true&
var Videovue_type_template_id_06e3b82f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-dialog',{attrs:{"max-width":"690"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',{staticClass:"video-popup"},[_c('v-card-title',{staticClass:"headline"},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n          Vestibulum consequat hendrerit lacus\n          "),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){return _vm.handleVideoClose()}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1)]),_vm._v(" "),(_vm.yt.use)?_c('div',{staticClass:"text-center"},[_c('youtube',{ref:"youtube",attrs:{"video-id":_vm.videoId,"player-vars":_vm.playerVars,"width":640,"height":360}})],1):_vm._e()],1)],1),_vm._ssrNode(" <h4 class=\"use-text-subtitle mb-3\" data-v-06e3b82f>\n    Lorem ipsum dolor sit amet.\n  </h4> <p class=\"pb-2 use-text-subtitle2\" data-v-06e3b82f>\n    Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero\n  </p> "),_c('div',{directives:[{name:"ripple",rawName:"v-ripple"}],on:{"click":_vm.handleVideoOpen}},[_c('media-card',{attrs:{"title":"Sed lacinia velit, ut malesuada eros interdum a","orientation":"landscape","type":"video","thumb":"https://source.unsplash.com/random"}})],1)],2)}
var Videovue_type_template_id_06e3b82f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/Video.vue?vue&type=template&id=06e3b82f&scoped=true&

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// EXTERNAL MODULE: ./static/images/imgAPI.js
var imgAPI = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Cards/MediaCard.vue + 6 modules
var MediaCard = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/Video.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Videovue_type_script_lang_js_ = ({
  components: {
    MediaCard: MediaCard["a" /* default */]
  },

  data() {
    return {
      videoId: 'sf15CtXuw9M',
      player: null,
      yt: youtube,
      imgAPI: imgAPI["a" /* default */],
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8000'
      }
    };
  },

  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false;
      }

      this.dialog = true;
      setTimeout(() => {
        this.player = this.$refs.youtube.player;
        this.player.playVideo();
      }, 100);
    },

    handleVideoClose() {
      this.dialog = false;
      this.player.pauseVideo();
    }

  }
});
// CONCATENATED MODULE: ./components/About/Video.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Videovue_type_script_lang_js_ = (Videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(343);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(570);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/About/Video.vue



function Video_injectStyles (context) {
  
  var style0 = __webpack_require__(568)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Video_component = Object(componentNormalizer["a" /* default */])(
  About_Videovue_type_script_lang_js_,
  Videovue_type_template_id_06e3b82f_scoped_true_render,
  Videovue_type_template_id_06e3b82f_scoped_true_staticRenderFns,
  false,
  Video_injectStyles,
  "06e3b82f",
  "1793628a"
  
)

/* harmony default export */ var Video = (Video_component.exports);

/* vuetify-loader */






installComponents_default()(Video_component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VDialog: VDialog["a" /* default */],VIcon: VIcon["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(Video_component, {Ripple: ripple["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/Progress.vue?vue&type=template&id=4c1e1e7c&scoped=true&
var Progressvue_type_template_id_4c1e1e7c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loaded)?_c('div',[_c('div',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.handleScroll),expression:"handleScroll"}],staticClass:"progress-wrap",attrs:{"id":"progress"}},[_vm._ssrNode("<ul data-v-4c1e1e7c>","</ul>",[_vm._ssrNode("<li data-v-4c1e1e7c>","</li>",[_vm._ssrNode("<div class=\"text-icon\" data-v-4c1e1e7c><i class=\"ion-ios-color-wand\" data-v-4c1e1e7c></i> <h5 class=\"use-text-subtitle2\" data-v-4c1e1e7c>UI Interface Design</h5></div> "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 80 : 0,"color":"none"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4c1e1e7c>","</li>",[_vm._ssrNode("<div class=\"text-icon\" data-v-4c1e1e7c><i class=\"ion-logo-dribbble\" data-v-4c1e1e7c></i> <h5 class=\"use-text-subtitle2\" data-v-4c1e1e7c>Icon Design</h5></div> "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 70 : 0,"color":"none"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4c1e1e7c>","</li>",[_vm._ssrNode("<div class=\"text-icon\" data-v-4c1e1e7c><i class=\"ion-ios-globe\" data-v-4c1e1e7c></i> <h5 class=\"use-text-subtitle2\" data-v-4c1e1e7c>HTML Prototyping</h5></div> "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 60 : 0,"color":"none"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4c1e1e7c>","</li>",[_vm._ssrNode("<div class=\"text-icon\" data-v-4c1e1e7c><i class=\"ion-ios-camera\" data-v-4c1e1e7c></i> <h5 class=\"use-text-subtitle2\" data-v-4c1e1e7c>Photo Editing</h5></div> "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 90 : 0,"color":"none"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4c1e1e7c>","</li>",[_vm._ssrNode("<div class=\"text-icon\" data-v-4c1e1e7c><i class=\"ion-ios-snow\" data-v-4c1e1e7c></i> <h5 class=\"use-text-subtitle2\" data-v-4c1e1e7c>Graphic Illustrations</h5></div> "),_c('v-progress-linear',{staticClass:"progress",attrs:{"height":10,"value":_vm.play ? 80 : 0,"color":"none"}})],2)],2)])]):_vm._e()}
var Progressvue_type_template_id_4c1e1e7c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/Progress.vue?vue&type=template&id=4c1e1e7c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/Progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Progressvue_type_script_lang_js_ = ({
  data() {
    return {
      play: false,
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  },

  methods: {
    handleScroll: function () {
      const top = this.offsetTop - window.innerHeight + 400;

      if (window.scrollY > top) {
        return this.play = true;
      }

      return false;
    }
  },
  computed: {
    offsetTop: function () {
      const elm = document.getElementById('progress');
      return elm.getBoundingClientRect().y;
    }
  }
});
// CONCATENATED MODULE: ./components/About/Progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Progressvue_type_script_lang_js_ = (Progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(17);

// CONCATENATED MODULE: ./components/About/Progress.vue



function Progress_injectStyles (context) {
  
  var style0 = __webpack_require__(571)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Progress_component = Object(componentNormalizer["a" /* default */])(
  About_Progressvue_type_script_lang_js_,
  Progressvue_type_template_id_4c1e1e7c_scoped_true_render,
  Progressvue_type_template_id_4c1e1e7c_scoped_true_staticRenderFns,
  false,
  Progress_injectStyles,
  "4c1e1e7c",
  "649ce424"
  
)

/* harmony default export */ var Progress = (Progress_component.exports);

/* vuetify-loader */


installComponents_default()(Progress_component, {VProgressLinear: VProgressLinear["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(Progress_component, {Scroll: directives_scroll["b" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/TeamSlider.vue?vue&type=template&id=f6f7a5c6&scoped=true&
var TeamSlidervue_type_template_id_f6f7a5c6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-wrapper"},[_c('v-container',[_c('h4',{staticClass:"use-text-title2 mb-3"},[_vm._v("\n      "+_vm._s(_vm.$t('common.about_team'))+"\n    ")]),_vm._v(" "),_c('p',[_vm._v("Meet our team!")])]),_vm._ssrNode(" "),(_vm.loaded)?_vm._ssrNode("<div class=\"carousel mt-15\" data-v-f6f7a5c6>","</div>",[_c('slick',{ref:"slick",attrs:{"options":_vm.slickOptions}},_vm._l((6),function(index){return _c('div',{key:index,staticClass:"item px-3"},[_c('profile-card',{attrs:{"connection":100,"favorites":10,"albums":12,"cover":"https://source.unsplash.com/random","name":"Brealy Padron Rodriguez","title":"Web Designer","type":"full","orientation":"landscape","avatar":"/images/avatars/pp_girl3.svg"}})],1)}),0)],1):_vm._e()],2)}
var TeamSlidervue_type_template_id_f6f7a5c6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/TeamSlider.vue?vue&type=template&id=f6f7a5c6&scoped=true&

// EXTERNAL MODULE: ./components/Cards/ProfileCard.vue + 4 modules
var ProfileCard = __webpack_require__(429);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/TeamSlider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TeamSlidervue_type_script_lang_js_ = ({
  components: {
    ProfileCard: ProfileCard["a" /* default */],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 342, 7))
  },

  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false,
        responsive: [{
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/About/TeamSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_TeamSlidervue_type_script_lang_js_ = (TeamSlidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/About/TeamSlider.vue



function TeamSlider_injectStyles (context) {
  
  var style0 = __webpack_require__(573)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TeamSlider_component = Object(componentNormalizer["a" /* default */])(
  About_TeamSlidervue_type_script_lang_js_,
  TeamSlidervue_type_template_id_f6f7a5c6_scoped_true_render,
  TeamSlidervue_type_template_id_f6f7a5c6_scoped_true_staticRenderFns,
  false,
  TeamSlider_injectStyles,
  "f6f7a5c6",
  "522e129f"
  
)

/* harmony default export */ var TeamSlider = (TeamSlider_component.exports);

/* vuetify-loader */


installComponents_default()(TeamSlider_component, {VContainer: VContainer["a" /* default */]})

// EXTERNAL MODULE: ./components/About/PhotoSlider.vue + 4 modules
var PhotoSlider = __webpack_require__(504);

// EXTERNAL MODULE: ./components/CallAction/index.js + 5 modules
var CallAction = __webpack_require__(502);

// EXTERNAL MODULE: ./components/Forms/ContactMap.vue + 4 modules
var ContactMap = __webpack_require__(505);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */],
    Banner: Banner["a" /* default */],
    CompanyLogo: CompanyLogo,
    Counter: Counter["a" /* default */],
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider: TeamSlider,
    PhotoSlider: PhotoSlider["a" /* default */],
    CallAction: CallAction["a" /* default */],
    ContactMap: ContactMap["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - About'
    };
  }

});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(332);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(333);

// CONCATENATED MODULE: ./pages/about/index.vue



function about_injectStyles (context) {
  
  var style0 = __webpack_require__(575)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var about_component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  about_injectStyles,
  "5adb7274",
  "f8ac7eaa"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (about_component.exports);

/* vuetify-loader */




installComponents_default()(about_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map