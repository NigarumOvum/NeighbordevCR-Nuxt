exports.ids = [11];
exports.modules = {

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(317);
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

/***/ 348:
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
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// CONCATENATED MODULE: ./components/Paper/Paper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(403)
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pp_boy4.1e4bc1e.svg";

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(390);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c3376136", content, true, context)
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2af18274", content, true, context)
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("45fface1", content, true, context)
};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5bf3a87f", content, true, context)
};

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(408);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2508fca4", content, true, context)
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(410);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("675afaf5", content, true, context)
};

/***/ }),

/***/ 385:
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
var VBadge = __webpack_require__(391);

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
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/Cards/MediaCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(389)
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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCard_vue_vue_type_style_index_0_id_23f9f6cd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-23f9f6cd]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-23f9f6cd]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-23f9f6cd]{font-size:28px;line-height:44px}}.use-text-title2[data-v-23f9f6cd]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-23f9f6cd]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-23f9f6cd]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-23f9f6cd]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-23f9f6cd]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-23f9f6cd]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-23f9f6cd]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-23f9f6cd]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-23f9f6cd]{font-size:16px;line-height:24px}}.use-text-caption[data-v-23f9f6cd],.use-text-paragraph[data-v-23f9f6cd]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-23f9f6cd]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-23f9f6cd]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-23f9f6cd]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-23f9f6cd]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-23f9f6cd]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-23f9f6cd]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-23f9f6cd]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-23f9f6cd]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-23f9f6cd]{transform:scale(-1)}.media-card[data-v-23f9f6cd]{overflow:hidden;position:relative;margin:48px 0 16px;height:340px}.media-card figure[data-v-23f9f6cd]{margin:0}.media-card figure img[data-v-23f9f6cd]{min-height:100%;width:100%}.media-card .v-badge[data-v-23f9f6cd]{width:100%;position:absolute}.play-btn.v-btn[data-v-23f9f6cd]{position:absolute;width:80px;height:80px;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%)}.theme--light .play-btn.v-btn[data-v-23f9f6cd]{background-color:rgba(0,183,255,.512)}.theme--dark .play-btn.v-btn[data-v-23f9f6cd]{background-color:rgba(55,0,255,.4902)}.play-btn.v-btn span[data-v-23f9f6cd]:before{font-size:60px;margin-left:8px}.theme--light .play-btn.v-btn span[data-v-23f9f6cd]:before{color:var(--v-secondary-base)}.theme--dark .play-btn.v-btn span[data-v-23f9f6cd]:before{color:var(--v-secondarylight-base)}.property[data-v-23f9f6cd]{transition:all .3s ease-out;position:absolute;width:100%;height:100%;min-height:170px;padding:24px;top:0;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;background:linear-gradient(180deg,hsla(0,0%,93.3%,0) 20%,#000 90%)}[dir=ltr] .property[data-v-23f9f6cd]{text-align:left}[dir=rtl] .property[data-v-23f9f6cd]{text-align:right}[dir=ltr] .property[data-v-23f9f6cd]{left:0}[dir=rtl] .property[data-v-23f9f6cd]{right:0}.media-title[data-v-23f9f6cd]{color:#fff;line-height:22px}.landscape .media-title[data-v-23f9f6cd]{text-align:left}.portrait[data-v-23f9f6cd]{max-width:400px}.portrait .media-title[data-v-23f9f6cd]{text-align:center;justify-content:center}.cover-link[data-v-23f9f6cd]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.cover-link[data-v-23f9f6cd],.photo[data-v-23f9f6cd]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5276b867", content, true)

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_style_index_0_id_55867906_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-55867906]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-55867906]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-55867906]{font-size:28px;line-height:44px}}.use-text-title2[data-v-55867906]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-55867906]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-55867906]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-55867906]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-55867906]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-55867906]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-55867906]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-55867906]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-55867906]{font-size:16px;line-height:24px}}.use-text-caption[data-v-55867906],.use-text-paragraph[data-v-55867906]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-55867906]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-55867906]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-55867906]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-55867906]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-55867906]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-55867906]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-55867906]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-55867906]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-55867906]{transform:scale(-1)}.profile-card[data-v-55867906]{display:flex;border-radius:12px}.v-btn.main-btn[data-v-55867906]{min-width:150px}.properties[data-v-55867906]{padding:16px}.figure[data-v-55867906]{display:block;position:relative}.avatar[data-v-55867906]{margin:0 auto}.subtitle[data-v-55867906]{font-size:18px}.desc[data-v-55867906]{margin-top:16px}.action[data-v-55867906]{padding:0}.action[data-v-55867906]  .v-btn{flex:1;padding:8px;height:60px}.action[data-v-55867906]  .v-btn__content{flex-direction:column;text-transform:none;font-weight:400}.action .icon[data-v-55867906]{color:var(--v-secondary-base)}.portrait[data-v-55867906]{max-width:400px;flex-direction:column;text-align:center}.portrait .properties[data-v-55867906]{padding-left:16px;padding-right:16px}.portrait .avatar[data-v-55867906]{margin-top:-50px}.portrait .action[data-v-55867906]{border-top:1px solid;padding-top:16px;margin-top:40px}.theme--light .portrait .action[data-v-55867906]{border-color:#30f}.theme--dark .portrait .action[data-v-55867906]{border-color:#0cf}.landscape[data-v-55867906]{max-width:820px;flex-direction:row;align-items:center;height:160px}[dir=ltr] .landscape[data-v-55867906]{text-align:left}[dir=rtl] .landscape[data-v-55867906]{text-align:right}@media(min-width:960px){.landscape[data-v-55867906]{height:120px}}.landscape .figure[data-v-55867906]{width:100px;height:100%}[dir=ltr] .landscape .figure[data-v-55867906]{margin-right:-32px}[dir=rtl] .landscape .figure[data-v-55867906]{margin-left:-32px}.landscape .v-btn--text[data-v-55867906]{margin-left:-8px}.landscape .subtitle[data-v-55867906]{font-size:14px}.landscape .properties[data-v-55867906]{flex:1;display:flex;align-items:center}@media(max-width:599px){.landscape .properties[data-v-55867906]{flex-direction:column;align-items:flex-start}}.landscape .desc[data-v-55867906]{padding:0}@media(max-width:959px){.landscape .desc[data-v-55867906]{margin-top:8px;margin-bottom:8px}}.landscape .action[data-v-55867906]{margin:0 40px}@media(max-width:599px){.landscape .action[data-v-55867906]{display:none}}@media(max-width:959px){.landscape .action[data-v-55867906]>:first-child{display:none}}@media(max-width:959px){.landscape .v-btn.main-btn[data-v-55867906]{min-width:100px;height:28px;font-size:12px}}.full[data-v-55867906]{overflow:hidden;position:relative}.round .figure[data-v-55867906]{margin:8px;overflow:hidden;height:105px;border-radius:12px}@media(max-width:959px){.round.landscape .figure[data-v-55867906]{height:145px}}.oval[data-v-55867906]{overflow:hidden}.oval.portrait .figure[data-v-55867906]{height:150px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}.oval.portrait .figure>div[data-v-55867906]{overflow:visible;height:auto!important}.oval.landscape .figure[data-v-55867906]{overflow:hidden}.oval.landscape .figure>div[data-v-55867906]{border-radius:0 50% 50% 0!important;height:120%!important;margin-top:-10%}.over.portrait[data-v-55867906]{margin-top:16px}.over.portrait .figure[data-v-55867906]{overflow:hidden;margin:-16px 16px 0;border-radius:12px}.theme--dark .over.portrait .figure[data-v-55867906]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.portrait .figure[data-v-55867906]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape[data-v-55867906]{margin-left:16px}[dir=rtl] .over.landscape[data-v-55867906]{margin-right:16px}.over.landscape .figure[data-v-55867906]{overflow:hidden;height:105px;border-radius:12px}.theme--dark .over.landscape .figure[data-v-55867906]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.landscape .figure[data-v-55867906]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape .figure[data-v-55867906]{margin-left:-16px}[dir=rtl] .over.landscape .figure[data-v-55867906]{margin-right:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCard_vue_vue_type_style_index_0_id_2e156114_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-2e156114]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-2e156114]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-2e156114]{font-size:28px;line-height:44px}}.use-text-title2[data-v-2e156114]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-2e156114]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-2e156114]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-2e156114]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-2e156114]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-2e156114]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-2e156114]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-2e156114]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-2e156114]{font-size:16px;line-height:24px}}.use-text-caption[data-v-2e156114],.use-text-paragraph[data-v-2e156114]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-2e156114]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-2e156114]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-2e156114]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-2e156114]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-2e156114]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-2e156114]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-2e156114]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-2e156114]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-2e156114]{transform:scale(-1)}.post-card[data-v-2e156114]{display:flex;border-radius:12px}.v-btn.action-btn[data-v-2e156114]:not(.v-btn--text){min-width:200px}@media(min-width:960px){.title[data-v-2e156114]{font-size:24px!important}}.properties[data-v-2e156114]{padding:16px;max-width:100%}.properties>div[data-v-2e156114]{padding-left:0;padding-right:0}.figure[data-v-2e156114]{display:block;position:relative}.head-line[data-v-2e156114]{text-transform:uppercase;color:var(--v-primary-base);padding-bottom:0}.news-title[data-v-2e156114]{line-height:1.5}.post-title[data-v-2e156114]{padding:0 16px}.desc[data-v-2e156114]{white-space:normal;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:flex;display:-webkit-box;height:65px;overflow:hidden;margin-bottom:16px;padding:0;font-size:18px}.portrait[data-v-2e156114]{flex-direction:column}.portrait .properties[data-v-2e156114]{padding-left:16px;padding-right:16px}.landscape[data-v-2e156114]{flex-direction:row}.landscape .figure[data-v-2e156114]{min-width:100px;max-width:200px}@media(max-width:599px){.landscape .figure[data-v-2e156114]{max-width:100px;max-height:130px}}[dir=ltr] .landscape .figure[data-v-2e156114]{margin-right:16px}[dir=rtl] .landscape .figure[data-v-2e156114]{margin-left:16px}.landscape .figure>div[data-v-2e156114]{height:100%!important}@media(max-width:599px){.landscape .desc[data-v-2e156114]{display:none}}@media(max-width:599px){.landscape .properties[data-v-2e156114]{padding:8px;overflow:hidden;display:flex;flex-direction:column;justify-content:center}.landscape .properties[data-v-2e156114]  .v-card__subtitle{padding:0}}.landscape .v-btn--text[data-v-2e156114]{margin-left:-8px}@media(max-width:1279px){.landscape .v-btn.action-btn[data-v-2e156114]:not(.v-btn--text){min-width:0}}@media(max-width:599px){.landscape .news-title[data-v-2e156114]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;padding:0}}.full[data-v-2e156114]{overflow:hidden;position:relative}.round .figure[data-v-2e156114]{margin:16px;overflow:hidden;border-radius:12px}@media(max-width:599px){.round.landscape .figure[data-v-2e156114]{margin:8px}}.oval[data-v-2e156114]{overflow:hidden}.oval.portrait .figure[data-v-2e156114]{height:250px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}.oval.portrait .figure>div[data-v-2e156114]{overflow:visible;height:auto!important}.oval.landscape .figure[data-v-2e156114]{overflow:hidden}.oval.landscape .figure>div[data-v-2e156114]{border-radius:0 50% 50% 0!important;height:120%!important;margin-top:-10%}.over.portrait[data-v-2e156114]{margin-top:16px}.over.portrait .figure[data-v-2e156114]{overflow:hidden;margin:-16px 16px 0;border-radius:12px}.theme--dark .over.portrait .figure[data-v-2e156114]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.portrait .figure[data-v-2e156114]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape[data-v-2e156114]{margin-left:16px}[dir=rtl] .over.landscape[data-v-2e156114]{margin-right:16px}.over.landscape .figure[data-v-2e156114]{height:210px;overflow:hidden;margin:16px 0;border-radius:12px}.theme--dark .over.landscape .figure[data-v-2e156114]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.landscape .figure[data-v-2e156114]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape .figure[data-v-2e156114]{margin-left:-16px}[dir=rtl] .over.landscape .figure[data-v-2e156114]{margin-right:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(371);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_id_97728500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-97728500]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-97728500]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-97728500]{font-size:28px;line-height:44px}}.use-text-title2[data-v-97728500]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-97728500]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-97728500]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-97728500]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-97728500]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-97728500]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-97728500]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-97728500]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-97728500]{font-size:16px;line-height:24px}}.use-text-caption[data-v-97728500],.use-text-paragraph[data-v-97728500]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-97728500]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-97728500]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-97728500]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-97728500]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-97728500]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-97728500]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-97728500]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-97728500]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-97728500]{transform:scale(-1)}.paper header[data-v-97728500]{padding:0 16px;display:flex;align-items:flex-start;margin-bottom:8px}.paper.color[data-v-97728500]{color:#fff;background:var(--v-primary-base)}.paper.color[data-v-97728500]  .v-card__subtitle{color:#fff}.icon[data-v-97728500]{color:var(--v-primary-base);padding:16px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_0a3f2676_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_0a3f2676_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_0a3f2676_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_0a3f2676_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_0a3f2676_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-0a3f2676]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-0a3f2676]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-0a3f2676]{font-size:28px;line-height:44px}}.use-text-title2[data-v-0a3f2676]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-0a3f2676]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-0a3f2676]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-0a3f2676]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-0a3f2676]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-0a3f2676]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-0a3f2676]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-0a3f2676]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-0a3f2676]{font-size:16px;line-height:24px}}.use-text-caption[data-v-0a3f2676],.use-text-paragraph[data-v-0a3f2676]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-0a3f2676]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-0a3f2676]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-0a3f2676]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-0a3f2676]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-0a3f2676]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-0a3f2676]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-0a3f2676]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-0a3f2676]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-0a3f2676]{transform:scale(-1)}@media(max-width:959px){.filter[data-v-0a3f2676]{padding:32px;height:100%;overflow:auto;position:absolute;width:100%}}.filter-block[data-v-0a3f2676]{margin-bottom:50px}@media(max-width:599px){.sorter[data-v-0a3f2676]{flex-direction:column-reverse}}.btn-tag[data-v-0a3f2676],.btn-tag label[data-v-0a3f2676]{position:relative;cursor:pointer}.btn-tag label[data-v-0a3f2676]{display:inline-block;padding:1px 6px;margin:4px;border-radius:8px;border:1px solid var(--v-primary-base);transition:all .3s ease}.theme--light .btn-tag label[data-v-0a3f2676]{background-color:#fafafa}.theme--dark .btn-tag label[data-v-0a3f2676]{background-color:#303030}.btn-tag input[data-v-0a3f2676]{opacity:0;position:absolute}.btn-tag input:checked+label[data-v-0a3f2676]{color:#fff;background:var(--v-primary-base)}.title-filter[data-v-0a3f2676]{font-weight:500;font-size:18px;padding:0}.theme--light .title-filter[data-v-0a3f2676]{color:rgba(0,0,0,.87)}.theme--dark .title-filter[data-v-0a3f2676]{color:#fff}.input-price[data-v-0a3f2676]{width:75px;display:inline-block}.search-banner[data-v-0a3f2676]{height:520px;display:flex;align-items:center}.theme--light .search-banner[data-v-0a3f2676]{background-color:var(--v-primarylight-base)}.theme--dark .search-banner[data-v-0a3f2676]{background-color:var(--v-primarydark-base)}.search[data-v-0a3f2676]{position:relative;display:flex;margin:32px auto;align-items:center}@media(min-width:600px){.search[data-v-0a3f2676]{width:600px}}.search[data-v-0a3f2676]  fieldset{height:41px}.search[data-v-0a3f2676]  .v-text-field--outlined>.v-input__control>.v-input__slot{min-height:0;margin-bottom:0}[dir=ltr] .search[data-v-0a3f2676]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-left:40px}[dir=rtl] .search[data-v-0a3f2676]  .v-text-field--outlined>.v-input__control>.v-input__slot{padding-right:40px}.search[data-v-0a3f2676]  .v-text-field--outlined>.v-input__control>.v-input__slot input{max-height:none}.search[data-v-0a3f2676]  .v-text-field__details{display:none}.search .search-icon[data-v-0a3f2676]{position:absolute;top:7px}[dir=ltr] .search .search-icon[data-v-0a3f2676]{left:8px}[dir=rtl] .search .search-icon[data-v-0a3f2676]{right:8px}.v-application--is-rtl .apply-range[data-v-0a3f2676]{transform:scale(-1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_63e6c91b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_63e6c91b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_63e6c91b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_63e6c91b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_63e6c91b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-63e6c91b]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-63e6c91b]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-63e6c91b]{font-size:28px;line-height:44px}}.use-text-title2[data-v-63e6c91b]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-63e6c91b]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-63e6c91b]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-63e6c91b]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-63e6c91b]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-63e6c91b]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-63e6c91b]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-63e6c91b]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-63e6c91b]{font-size:16px;line-height:24px}}.use-text-caption[data-v-63e6c91b],.use-text-paragraph[data-v-63e6c91b]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-63e6c91b]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-63e6c91b]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-63e6c91b]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-63e6c91b]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-63e6c91b]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-63e6c91b]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-63e6c91b]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-63e6c91b]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-63e6c91b]{transform:scale(-1)}.product-card[data-v-63e6c91b]{position:relative;width:100%}.product-card figure[data-v-63e6c91b]{margin:0;overflow:hidden}.product-card figure img[data-v-63e6c91b]{width:100%;min-height:100%}.product-card .property[data-v-63e6c91b]{display:flex;justify-content:space-between}.product-card .property strong[data-v-63e6c91b]{font-weight:700;font-size:18px}.hidden-link[data-v-63e6c91b]{display:none;position:absolute;width:100%;height:100%;top:0;left:0}.desc[data-v-63e6c91b]{padding:16px 24px}.desc p[data-v-63e6c91b]{overflow:hidden}.desc h6[data-v-63e6c91b]{font-family:\"Lato\",sans-serif!important;font-weight:700}.desc .button[data-v-63e6c91b]{width:100%;border-width:2px;padding:4px 24px!important}[dir=ltr] .text[data-v-63e6c91b]{margin-right:16px}[dir=rtl] .text[data-v-63e6c91b]{margin-left:16px}.rating[data-v-63e6c91b]  .v-rating .v-icon{padding:0}.rating i[data-v-63e6c91b],.star-icon[data-v-63e6c91b]{color:#ffc107}.theme--light .star-icon-disable[data-v-63e6c91b]{color:#30f}.theme--dark .star-icon-disable[data-v-63e6c91b]{color:#0cf}.button.v-btn[data-v-63e6c91b]{margin-top:16px}.portrait[data-v-63e6c91b]{max-width:350px}.portrait figure[data-v-63e6c91b]{display:block;height:170px}.portrait .desc[data-v-63e6c91b]{padding:16px}.portrait .desc p[data-v-63e6c91b]{height:90px;-webkit-line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box}.landscape[data-v-63e6c91b]{display:flex}@media(min-width:600px){.landscape[data-v-63e6c91b]{height:150px}}.landscape figure[data-v-63e6c91b]{width:200px;height:150px}@media(min-width:600px){.landscape .desc[data-v-63e6c91b]{display:flex;flex:1;align-items:center;justify-content:space-between}}@media(max-width:599px){.landscape .desc[data-v-63e6c91b]{width:65%}.landscape .desc p[data-v-63e6c91b]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}.landscape .button.v-btn[data-v-63e6c91b]{width:200px}@media(max-width:599px){.landscape .button.v-btn[data-v-63e6c91b]{display:none}}@media(max-width:599px){.landscape .hidden-link[data-v-63e6c91b]{display:block}}.full[data-v-63e6c91b]{overflow:hidden}.full figure[data-v-63e6c91b]{border-radius:0!important}.round figure[data-v-63e6c91b]{overflow:hidden;border-radius:12px;height:134px}.round.portrait figure[data-v-63e6c91b]{position:relative;top:8px;margin-left:8px;margin-right:8px;margin-bottom:8px}.round.landscape figure[data-v-63e6c91b]{margin-top:8px;margin-bottom:8px}[dir=ltr] .round.landscape figure[data-v-63e6c91b]{margin-left:8px}[dir=rtl] .round.landscape figure[data-v-63e6c91b]{margin-right:8px}.oval[data-v-63e6c91b]{overflow:hidden}.oval.portrait figure[data-v-63e6c91b]{height:150px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}@media(max-width:599px){.oval.landscape[data-v-63e6c91b]{height:150px}}.oval.landscape figure[data-v-63e6c91b]{overflow:hidden;border-radius:0 50% 50% 0!important;height:250px;margin-top:-50px}.over figure[data-v-63e6c91b]{overflow:hidden;position:relative;border-radius:12px}.theme--dark .over figure[data-v-63e6c91b]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over figure[data-v-63e6c91b]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}.over.portrait[data-v-63e6c91b]{margin-top:16px}.over.portrait figure[data-v-63e6c91b]{top:-16px;margin:0 16px -16px}[dir=ltr] .over.landscape[data-v-63e6c91b]{margin-left:16px}[dir=rtl] .over.landscape[data-v-63e6c91b]{margin-right:16px}.over.landscape figure[data-v-63e6c91b]{margin:16px 0;height:118px;width:140px}[dir=ltr] .over.landscape figure[data-v-63e6c91b]{left:-16px}[dir=rtl] .over.landscape figure[data-v-63e6c91b]{right:-16px}[dir=ltr] .over.landscape figure[data-v-63e6c91b]{margin-right:-16px}[dir=rtl] .over.landscape figure[data-v-63e6c91b]{margin-left:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(412);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5939d713", content, true)

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(454);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("272b1bc5", content, true, context)
};

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ProductCard.vue?vue&type=template&id=63e6c91b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"product-card",class:[_vm.orientation, _vm.type]},[_c('a',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"hidden-link",attrs:{"href":_vm.href}},[_vm._v(" ")]),_vm._v(" "),_c('figure',[_c('img',{attrs:{"src":_vm.img,"alt":_vm.title}})]),_vm._v(" "),_c('div',{staticClass:"desc"},[_c('div',{staticClass:"text"},[_c('h6',{staticClass:"title pb-2 text-truncate"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"use-text-paragraph"},[_vm._v("\n        "+_vm._s(_vm.desc)+"\n      ")])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"property"},[(_vm.rating > 0)?_c('div',{staticClass:"rating"},[_c('v-rating',{attrs:{"value":_vm.rating,"color":"orange lighten-3","background-color":"grey","length":"5","readonly":"","size":"24"}})],1):_vm._e(),_vm._v(" "),(_vm.precio > 0)?_c('strong',[_vm._v("$"+_vm._s(_vm.price))]):_vm._e()]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"href":_vm.href,"block":"","outlined":"","color":"primary"}},[_vm._v("\n        "+_vm._s(_vm.$t('common.btn_detail'))+"\n      ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/ProductCard.vue?vue&type=template&id=63e6c91b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval

    },
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    href: {
      type: String,
      default: '#'
    }
  }
});
// CONCATENATED MODULE: ./components/Cards/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VRating/VRating.sass
var VRating = __webpack_require__(411);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/delayable/index.js
var delayable = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/rippleable/index.js
var rippleable = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VRating/VRating.js
// Styles
 // Components

 // Mixins





 // Utilities



/* @vue/component */

/* harmony default export */ var VRating_VRating = (Object(mixins["a" /* default */])(colorable["a" /* default */], delayable["a" /* default */], rippleable["a" /* default */], sizeable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-rating',
  props: {
    backgroundColor: {
      type: String,
      default: 'accent'
    },
    color: {
      type: String,
      default: 'primary'
    },
    clearable: Boolean,
    dense: Boolean,
    emptyIcon: {
      type: String,
      default: '$ratingEmpty'
    },
    fullIcon: {
      type: String,
      default: '$ratingFull'
    },
    halfIcon: {
      type: String,
      default: '$ratingHalf'
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    size: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    iconLabel: {
      type: String,
      default: '$vuetify.rating.ariaLabel.icon'
    }
  },

  data() {
    return {
      hoverIndex: -1,
      internalValue: this.value
    };
  },

  computed: {
    directives() {
      if (this.readonly || !this.ripple) return [];
      return [{
        name: 'ripple',
        value: {
          circle: true
        }
      }];
    },

    iconProps() {
      const {
        dark,
        large,
        light,
        medium,
        small,
        size,
        xLarge,
        xSmall
      } = this.$props;
      return {
        dark,
        large,
        light,
        medium,
        size,
        small,
        xLarge,
        xSmall
      };
    },

    isHovering() {
      return this.hover && this.hoverIndex >= 0;
    }

  },
  watch: {
    internalValue(val) {
      val !== this.value && this.$emit('input', val);
    },

    value(val) {
      this.internalValue = val;
    }

  },
  methods: {
    createClickFn(i) {
      return e => {
        if (this.readonly) return;
        const newValue = this.genHoverIndex(e, i);

        if (this.clearable && this.internalValue === newValue) {
          this.internalValue = 0;
        } else {
          this.internalValue = newValue;
        }
      };
    },

    createProps(i) {
      const props = {
        index: i,
        value: this.internalValue,
        click: this.createClickFn(i),
        isFilled: Math.floor(this.internalValue) > i,
        isHovered: Math.floor(this.hoverIndex) > i
      };

      if (this.halfIncrements) {
        props.isHalfHovered = !props.isHovered && (this.hoverIndex - i) % 1 > 0;
        props.isHalfFilled = !props.isFilled && (this.internalValue - i) % 1 > 0;
      }

      return props;
    },

    genHoverIndex(e, i) {
      let isHalf = this.isHalfEvent(e);

      if (this.halfIncrements && this.$vuetify.rtl) {
        isHalf = !isHalf;
      }

      return i + (isHalf ? 0.5 : 1);
    },

    getIconName(props) {
      const isFull = this.isHovering ? props.isHovered : props.isFilled;
      const isHalf = this.isHovering ? props.isHalfHovered : props.isHalfFilled;
      return isFull ? this.fullIcon : isHalf ? this.halfIcon : this.emptyIcon;
    },

    getColor(props) {
      if (this.isHovering) {
        if (props.isHovered || props.isHalfHovered) return this.color;
      } else {
        if (props.isFilled || props.isHalfFilled) return this.color;
      }

      return this.backgroundColor;
    },

    isHalfEvent(e) {
      if (this.halfIncrements) {
        const rect = e.target && e.target.getBoundingClientRect();
        if (rect && e.pageX - rect.left < rect.width / 2) return true;
      }

      return false;
    },

    onMouseEnter(e, i) {
      this.runDelay('open', () => {
        this.hoverIndex = this.genHoverIndex(e, i);
      });
    },

    onMouseLeave() {
      this.runDelay('close', () => this.hoverIndex = -1);
    },

    genItem(i) {
      const props = this.createProps(i);
      if (this.$scopedSlots.item) return this.$scopedSlots.item(props);
      const listeners = {
        click: props.click
      };

      if (this.hover) {
        listeners.mouseenter = e => this.onMouseEnter(e, i);

        listeners.mouseleave = this.onMouseLeave;

        if (this.halfIncrements) {
          listeners.mousemove = e => this.onMouseEnter(e, i);
        }
      }

      return this.$createElement(VIcon["a" /* default */], this.setTextColor(this.getColor(props), {
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.iconLabel, i + 1, Number(this.length))
        },
        directives: this.directives,
        props: this.iconProps,
        on: listeners
      }), [this.getIconName(props)]);
    }

  },

  render(h) {
    const children = Object(helpers["h" /* createRange */])(Number(this.length)).map(i => this.genItem(i));
    return h('div', {
      staticClass: 'v-rating',
      class: {
        'v-rating--readonly': this.readonly,
        'v-rating--dense': this.dense
      }
    }, children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/Cards/ProductCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(409)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "63e6c91b",
  "607ecb44"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VRating: VRating_VRating})


/* vuetify-loader */


installDirectives_default()(component, {Ripple: ripple["a" /* default */]})


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/ProfileCard.vue?vue&type=template&id=55867906&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"profile-card",class:[_vm.orientation, _vm.type]},[_c('div',{staticClass:"figure"},[_c('v-img',{attrs:{"src":_vm.cover,"height":"200px"}})],1),_vm._v(" "),_c('v-avatar',{staticClass:"avatar",attrs:{"size":_vm.orientation === 'portrait' ? 92 : '60'}},[_c('img',{attrs:{"src":_vm.avatar,"alt":"avatar"}})]),_vm._v(" "),_c('div',{staticClass:"properties text-truncate"},[_c('div',[_c('strong',{staticClass:"title"},[_c('span',[_vm._v("\n          "+_vm._s(_vm.name)+"\n        ")])]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"subtitle pa-0"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]),_vm._v(" "),_c('v-card-text',{staticClass:"desc"},[_c('span',{staticClass:"text--primary"},[_c('span',[_vm._v(_vm._s(_vm.connection)+" Connection")])])]),_vm._v(" "),(_vm.orientation === 'portrait')?_c('v-btn',{staticClass:"main-btn",attrs:{"href":_vm.href,"outlined":"","color":"primary"}},[_vm._v("\n        See Profile\n      ")]):_vm._e()],1),_vm._v(" "),_c('v-card-actions',{staticClass:"action"},[_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-account-multiple")]),_vm._v("\n        "+_vm._s(_vm.connection)+"\n        Connection\n      ")],1),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-heart")]),_vm._v("\n        "+_vm._s(_vm.favorites)+"\n        Favorites\n      ")],1),_vm._v(" "),_c('v-btn',{attrs:{"text":""}},[_c('v-icon',{staticClass:"icon"},[_vm._v("mdi-folder-multiple-image")]),_vm._v("\n        "+_vm._s(_vm.albums)+"\n        Albums\n      ")],1)],1),_vm._v(" "),(_vm.orientation === 'landscape')?_c('v-btn',{staticClass:"main-btn",attrs:{"href":_vm.href,"outlined":"","color":"primary"}},[_vm._v("\n      See Profile\n    ")]):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/ProfileCard.vue?vue&type=template&id=55867906&scoped=true&

// EXTERNAL MODULE: ./static/images/avatars/pp_boy4.svg
var pp_boy4 = __webpack_require__(350);
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
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// CONCATENATED MODULE: ./components/Cards/ProfileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(393)
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

/***/ 431:
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
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// CONCATENATED MODULE: ./components/Cards/PostCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(401)
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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Filter/Search.vue?vue&type=template&id=0a3f2676&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"search-banner"},[_c('v-container',{staticClass:"max-md"},[_c('v-row',{staticClass:"search-block",attrs:{"align":"center"}},[_c('v-col',{attrs:{"sm":"12"}},[_c('h2',{staticClass:"use-text-title2 text-center"},[_vm._v("\n          "+_vm._s(_vm.$t('common.list_title'))+"\n        ")]),_vm._v(" "),_c('h3',{staticClass:"use-text-subtitle2 text-center"},[_vm._v("\n          "+_vm._s(_vm.$t('common.list_subtitle'))+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"search"},[_c('v-text-field',{attrs:{"placeholder":_vm.$t('common.list_search'),"outlined":"","color":"primary","single-line":"","value":_vm.value},on:{"input":function (e) { return _vm.updateValue(e); }}}),_vm._v(" "),_c('v-icon',{staticClass:"search-icon"},[_vm._v("mdi-magnify")])],1)])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Filter/Search.vue?vue&type=template&id=0a3f2676&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filter/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  methods: {
    updateValue: function (value) {
      this.$emit('input', value);
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Filter/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var Filter_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(62);

// CONCATENATED MODULE: ./components/Filter/Search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(407)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Filter_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a3f2676",
  "ce6983a0"
  
)

/* harmony default export */ var Search = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpWidget_vue_vue_type_style_index_0_id_411102ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpWidget_vue_vue_type_style_index_0_id_411102ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpWidget_vue_vue_type_style_index_0_id_411102ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpWidget_vue_vue_type_style_index_0_id_411102ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpWidget_vue_vue_type_style_index_0_id_411102ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-411102ad]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-411102ad]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-411102ad]{font-size:28px;line-height:44px}}.use-text-title2[data-v-411102ad]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-411102ad]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-411102ad]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-411102ad]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-411102ad]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-411102ad]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-411102ad]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-411102ad]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-411102ad]{font-size:16px;line-height:24px}}.use-text-caption[data-v-411102ad],.use-text-paragraph[data-v-411102ad]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-411102ad]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-411102ad]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-411102ad]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-411102ad]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-411102ad]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-411102ad]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-411102ad]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-411102ad]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-411102ad]{transform:scale(-1)}.desc[data-v-411102ad]{max-height:130px;padding:8px 0;margin-bottom:40px}.desc h6[data-v-411102ad]{font-weight:500}[dir=ltr] .text[data-v-411102ad]{text-align:left}[dir=rtl] .text[data-v-411102ad]{text-align:right}.text h4[data-v-411102ad]{font-weight:700;margin-bottom:16px;width:100%}.text h4 span[data-v-411102ad]{display:block;font-weight:500}.property[data-v-411102ad]{width:100%;display:flex;margin-bottom:16px}.property .star[data-v-411102ad]{color:#ff9500}[dir=ltr] .property .star[data-v-411102ad]{margin-right:16px}[dir=rtl] .property .star[data-v-411102ad]{margin-left:16px}.property .star i[data-v-411102ad]{color:#ff9500}.property .divider[data-v-411102ad]{background:none;border-left:1px solid;height:12px;margin:6px 16px;display:inline-block}.theme--light .property .divider[data-v-411102ad]{border-color:rgba(0,0,0,.87)}.theme--dark .property .divider[data-v-411102ad]{border-color:#fff}.btn-area[data-v-411102ad]{z-index:10;position:relative;display:flex;width:100%;align-items:center}@media(max-width:599px){.btn-area[data-v-411102ad]{display:block}.btn-area>*[data-v-411102ad]{margin:0 0 16px}}.btn-area .text-btn[data-v-411102ad]{padding-left:8px;padding-right:8px}.theme--light .btn-area .text-btn[data-v-411102ad]{color:var(--v-secondary-base)}.theme--dark .btn-area .text-btn[data-v-411102ad]{color:var(--v-secondarylight-base)}.btn-area .text-btn i[data-v-411102ad]{font-size:1.3rem}[dir=ltr] .btn-area .text-btn i[data-v-411102ad]{margin-right:4px}[dir=rtl] .btn-area .text-btn i[data-v-411102ad]{margin-left:4px}[dir=ltr] .btn-area>*[data-v-411102ad]{margin-right:16px}[dir=rtl] .btn-area>*[data-v-411102ad]{margin-left:16px}.zoom-icon[data-v-411102ad]{top:calc(50% - 28px);left:calc(50% - 28px);opacity:0;color:#fff;text-shadow:1px 1px 10px #000}.zoom-icon.v-icon[data-v-411102ad]{position:absolute;font-size:56px}.image[data-v-411102ad]{text-align:center;line-height:360px;vertical-align:middle;position:relative!important;margin:0 auto;width:360px}.image .figure[data-v-411102ad]{overflow:hidden;border-radius:20px;margin:0 16px 16px;cursor:pointer}.theme--dark .image .figure[data-v-411102ad]{box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .image .figure[data-v-411102ad]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.image:hover .zoom-icon[data-v-411102ad]{opacity:1}.image-detail[data-v-411102ad]{min-height:300px}.about[data-v-411102ad]{margin-top:-96px;padding:56px 80px}@media(max-width:599px){.about[data-v-411102ad]{padding:16px}}.about h4[data-v-411102ad]{margin:0}.about .btn-area[data-v-411102ad]{margin-top:48px}@media(max-width:959px){.about .person[data-v-411102ad]{margin-top:40px}}.about .person h6[data-v-411102ad]{font-size:14px;text-transform:uppercase;font-weight:700}.about .person p[data-v-411102ad]{margin-bottom:32px}.help-paper[data-v-411102ad]{background-color:var(--v-primarylight-base);padding:16px 8px}.headline[data-v-411102ad]{color:var(--v-primarydark-base)}.gallery-item[data-v-411102ad]{padding:2px}.product-item[data-v-411102ad]{padding:8px;margin-bottom:8px}.product-item a[data-v-411102ad]{display:block;text-decoration:none}.image[data-v-411102ad]{border-radius:8px}.price[data-v-411102ad]{font-weight:700;font-size:14px;color:var(--v-primary-base)}@media(max-width:959px){.scroll-tablet[data-v-411102ad]{overflow:auto;flex-wrap:nowrap}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/HelpWidget.vue?vue&type=template&id=411102ad&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"help-paper text-center"},[_c('h3',{staticClass:"text-h6 text-center"},[_vm._v("\n    "+_vm._s(_vm.$t('common.faq_luck'))+"\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    "+_vm._s(_vm.$t('common.faq_luck_desc'))+"\n  ")]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"block":"","outlined":""}},[_vm._v("\n      "+_vm._s(_vm.$t('common.faq_luck_btn'))+"\n    ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/HelpWidget.vue?vue&type=template&id=411102ad&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// CONCATENATED MODULE: ./components/List/Sidebar/HelpWidget.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(453)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "411102ad",
  "24033c7a"
  
)

/* harmony default export */ var HelpWidget = __webpack_exports__["a"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */]})


/***/ }),

/***/ 523:
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

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(583);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c2ae4ac", content, true, context)
};

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bd9aa356", content, true, context)
};

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("318f9046", content, true, context)
};

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(589);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3498668c", content, true, context)
};

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_e6089594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_e6089594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_e6089594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_e6089594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsCard_vue_vue_type_style_index_0_id_e6089594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-e6089594]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-e6089594]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-e6089594]{font-size:28px;line-height:44px}}.use-text-title2[data-v-e6089594]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-e6089594]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-e6089594]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-e6089594]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-e6089594]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-e6089594]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-e6089594]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-e6089594]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-e6089594]{font-size:16px;line-height:24px}}.use-text-caption[data-v-e6089594],.use-text-paragraph[data-v-e6089594]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-e6089594]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-e6089594]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e6089594]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e6089594]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e6089594]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e6089594]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e6089594]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e6089594]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-e6089594]{transform:scale(-1)}.post-card[data-v-e6089594]{display:flex;border-radius:12px}.v-btn.action-btn[data-v-e6089594]:not(.v-btn--text){min-width:200px}@media(min-width:960px){.title[data-v-e6089594]{font-size:24px!important}}.properties[data-v-e6089594]{padding:16px;max-width:100%}.properties>div[data-v-e6089594]{padding-left:0;padding-right:0}.figure[data-v-e6089594]{display:block;position:relative}.head-line[data-v-e6089594]{text-transform:uppercase;color:var(--v-primary-base);padding-bottom:0}.news-title[data-v-e6089594]{line-height:1.5}.post-title[data-v-e6089594]{padding:0 16px}.desc[data-v-e6089594]{white-space:normal;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:flex;display:-webkit-box;height:65px;overflow:hidden;margin-bottom:16px;padding:0;font-size:18px}.portrait[data-v-e6089594]{flex-direction:column}.portrait .properties[data-v-e6089594]{padding-left:16px;padding-right:16px}.landscape[data-v-e6089594]{flex-direction:row}.landscape .figure[data-v-e6089594]{min-width:100px;max-width:200px}@media(max-width:599px){.landscape .figure[data-v-e6089594]{max-width:100px;max-height:130px}}[dir=ltr] .landscape .figure[data-v-e6089594]{margin-right:16px}[dir=rtl] .landscape .figure[data-v-e6089594]{margin-left:16px}.landscape .figure>div[data-v-e6089594]{height:100%!important}@media(max-width:599px){.landscape .desc[data-v-e6089594]{display:none}}@media(max-width:599px){.landscape .properties[data-v-e6089594]{padding:8px;overflow:hidden;display:flex;flex-direction:column;justify-content:center}.landscape .properties[data-v-e6089594]  .v-card__subtitle{padding:0}}.landscape .v-btn--text[data-v-e6089594]{margin-left:-8px}@media(max-width:1279px){.landscape .v-btn.action-btn[data-v-e6089594]:not(.v-btn--text){min-width:0}}@media(max-width:599px){.landscape .news-title[data-v-e6089594]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:block;padding:0}}.full[data-v-e6089594]{overflow:hidden;position:relative}.round .figure[data-v-e6089594]{margin:16px;overflow:hidden;border-radius:12px}@media(max-width:599px){.round.landscape .figure[data-v-e6089594]{margin:8px}}.oval[data-v-e6089594]{overflow:hidden}.oval.portrait .figure[data-v-e6089594]{height:250px;width:120%;margin-left:-10%;overflow:hidden;border-radius:0 0 50% 50%}.oval.portrait .figure>div[data-v-e6089594]{overflow:visible;height:auto!important}.oval.landscape .figure[data-v-e6089594]{overflow:hidden}.oval.landscape .figure>div[data-v-e6089594]{border-radius:0 50% 50% 0!important;height:120%!important;margin-top:-10%}.over.portrait[data-v-e6089594]{margin-top:16px}.over.portrait .figure[data-v-e6089594]{overflow:hidden;margin:-16px 16px 0;border-radius:12px}.theme--dark .over.portrait .figure[data-v-e6089594]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.portrait .figure[data-v-e6089594]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape[data-v-e6089594]{margin-left:16px}[dir=rtl] .over.landscape[data-v-e6089594]{margin-right:16px}.over.landscape .figure[data-v-e6089594]{height:210px;overflow:hidden;margin:16px 0;border-radius:12px}.theme--dark .over.landscape .figure[data-v-e6089594]{box-shadow:0 1px 3px 0 #404040,0 1px 1px 0 #2a2a2a,0 2px 1px -1px #141414}.theme--light .over.landscape .figure[data-v-e6089594]{box-shadow:0 1.5px 12px 2px rgba(0,0,0,.06)}[dir=ltr] .over.landscape .figure[data-v-e6089594]{margin-left:-16px}[dir=rtl] .over.landscape .figure[data-v-e6089594]{margin-right:-16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageWidget_vue_vue_type_style_index_0_id_4776d30a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageWidget_vue_vue_type_style_index_0_id_4776d30a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageWidget_vue_vue_type_style_index_0_id_4776d30a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageWidget_vue_vue_type_style_index_0_id_4776d30a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageWidget_vue_vue_type_style_index_0_id_4776d30a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4776d30a]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4776d30a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4776d30a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4776d30a]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-4776d30a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4776d30a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4776d30a]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4776d30a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4776d30a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4776d30a]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4776d30a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4776d30a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4776d30a],.use-text-paragraph[data-v-4776d30a]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4776d30a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4776d30a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4776d30a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4776d30a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4776d30a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4776d30a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4776d30a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4776d30a]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-4776d30a]{transform:scale(-1)}.desc[data-v-4776d30a]{max-height:130px;padding:8px 0;margin-bottom:40px}.desc h6[data-v-4776d30a]{font-weight:500}[dir=ltr] .text[data-v-4776d30a]{text-align:left}[dir=rtl] .text[data-v-4776d30a]{text-align:right}.text h4[data-v-4776d30a]{font-weight:700;margin-bottom:16px;width:100%}.text h4 span[data-v-4776d30a]{display:block;font-weight:500}.property[data-v-4776d30a]{width:100%;display:flex;margin-bottom:16px}.property .star[data-v-4776d30a]{color:#ff9500}[dir=ltr] .property .star[data-v-4776d30a]{margin-right:16px}[dir=rtl] .property .star[data-v-4776d30a]{margin-left:16px}.property .star i[data-v-4776d30a]{color:#ff9500}.property .divider[data-v-4776d30a]{background:none;border-left:1px solid;height:12px;margin:6px 16px;display:inline-block}.theme--light .property .divider[data-v-4776d30a]{border-color:rgba(0,0,0,.87)}.theme--dark .property .divider[data-v-4776d30a]{border-color:#fff}.btn-area[data-v-4776d30a]{z-index:10;position:relative;display:flex;width:100%;align-items:center}@media(max-width:599px){.btn-area[data-v-4776d30a]{display:block}.btn-area>*[data-v-4776d30a]{margin:0 0 16px}}.btn-area .text-btn[data-v-4776d30a]{padding-left:8px;padding-right:8px}.theme--light .btn-area .text-btn[data-v-4776d30a]{color:var(--v-secondary-base)}.theme--dark .btn-area .text-btn[data-v-4776d30a]{color:var(--v-secondarylight-base)}.btn-area .text-btn i[data-v-4776d30a]{font-size:1.3rem}[dir=ltr] .btn-area .text-btn i[data-v-4776d30a]{margin-right:4px}[dir=rtl] .btn-area .text-btn i[data-v-4776d30a]{margin-left:4px}[dir=ltr] .btn-area>*[data-v-4776d30a]{margin-right:16px}[dir=rtl] .btn-area>*[data-v-4776d30a]{margin-left:16px}.zoom-icon[data-v-4776d30a]{top:calc(50% - 28px);left:calc(50% - 28px);opacity:0;color:#fff;text-shadow:1px 1px 10px #000}.zoom-icon.v-icon[data-v-4776d30a]{position:absolute;font-size:56px}.image[data-v-4776d30a]{text-align:center;line-height:360px;vertical-align:middle;position:relative!important;margin:0 auto;width:360px}.image .figure[data-v-4776d30a]{overflow:hidden;border-radius:20px;margin:0 16px 16px;cursor:pointer}.theme--dark .image .figure[data-v-4776d30a]{box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .image .figure[data-v-4776d30a]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.image:hover .zoom-icon[data-v-4776d30a]{opacity:1}.image-detail[data-v-4776d30a]{min-height:300px}.about[data-v-4776d30a]{margin-top:-96px;padding:56px 80px}@media(max-width:599px){.about[data-v-4776d30a]{padding:16px}}.about h4[data-v-4776d30a]{margin:0}.about .btn-area[data-v-4776d30a]{margin-top:48px}@media(max-width:959px){.about .person[data-v-4776d30a]{margin-top:40px}}.about .person h6[data-v-4776d30a]{font-size:14px;text-transform:uppercase;font-weight:700}.about .person p[data-v-4776d30a]{margin-bottom:32px}.help-paper[data-v-4776d30a]{background-color:var(--v-primarylight-base);padding:16px 8px}.headline[data-v-4776d30a]{color:var(--v-primarydark-base)}.gallery-item[data-v-4776d30a]{padding:2px}.product-item[data-v-4776d30a]{padding:8px;margin-bottom:8px}.product-item a[data-v-4776d30a]{display:block;text-decoration:none}.image[data-v-4776d30a]{border-radius:8px}.price[data-v-4776d30a]{font-weight:700;font-size:14px;color:var(--v-primary-base)}@media(max-width:959px){.scroll-tablet[data-v-4776d30a]{overflow:auto;flex-wrap:nowrap}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductWidget_vue_vue_type_style_index_0_id_240e88bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductWidget_vue_vue_type_style_index_0_id_240e88bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductWidget_vue_vue_type_style_index_0_id_240e88bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductWidget_vue_vue_type_style_index_0_id_240e88bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductWidget_vue_vue_type_style_index_0_id_240e88bd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-240e88bd]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-240e88bd]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-240e88bd]{font-size:28px;line-height:44px}}.use-text-title2[data-v-240e88bd]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-240e88bd]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-240e88bd]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-240e88bd]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-240e88bd]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-240e88bd]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-240e88bd]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-240e88bd]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-240e88bd]{font-size:16px;line-height:24px}}.use-text-caption[data-v-240e88bd],.use-text-paragraph[data-v-240e88bd]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-240e88bd]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-240e88bd]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-240e88bd]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-240e88bd]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-240e88bd]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-240e88bd]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-240e88bd]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-240e88bd]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-240e88bd]{transform:scale(-1)}.desc[data-v-240e88bd]{max-height:130px;padding:8px 0;margin-bottom:40px}.desc h6[data-v-240e88bd]{font-weight:500}[dir=ltr] .text[data-v-240e88bd]{text-align:left}[dir=rtl] .text[data-v-240e88bd]{text-align:right}.text h4[data-v-240e88bd]{font-weight:700;margin-bottom:16px;width:100%}.text h4 span[data-v-240e88bd]{display:block;font-weight:500}.property[data-v-240e88bd]{width:100%;display:flex;margin-bottom:16px}.property .star[data-v-240e88bd]{color:#ff9500}[dir=ltr] .property .star[data-v-240e88bd]{margin-right:16px}[dir=rtl] .property .star[data-v-240e88bd]{margin-left:16px}.property .star i[data-v-240e88bd]{color:#ff9500}.property .divider[data-v-240e88bd]{background:none;border-left:1px solid;height:12px;margin:6px 16px;display:inline-block}.theme--light .property .divider[data-v-240e88bd]{border-color:rgba(0,0,0,.87)}.theme--dark .property .divider[data-v-240e88bd]{border-color:#fff}.btn-area[data-v-240e88bd]{z-index:10;position:relative;display:flex;width:100%;align-items:center}@media(max-width:599px){.btn-area[data-v-240e88bd]{display:block}.btn-area>*[data-v-240e88bd]{margin:0 0 16px}}.btn-area .text-btn[data-v-240e88bd]{padding-left:8px;padding-right:8px}.theme--light .btn-area .text-btn[data-v-240e88bd]{color:var(--v-secondary-base)}.theme--dark .btn-area .text-btn[data-v-240e88bd]{color:var(--v-secondarylight-base)}.btn-area .text-btn i[data-v-240e88bd]{font-size:1.3rem}[dir=ltr] .btn-area .text-btn i[data-v-240e88bd]{margin-right:4px}[dir=rtl] .btn-area .text-btn i[data-v-240e88bd]{margin-left:4px}[dir=ltr] .btn-area>*[data-v-240e88bd]{margin-right:16px}[dir=rtl] .btn-area>*[data-v-240e88bd]{margin-left:16px}.zoom-icon[data-v-240e88bd]{top:calc(50% - 28px);left:calc(50% - 28px);opacity:0;color:#fff;text-shadow:1px 1px 10px #000}.zoom-icon.v-icon[data-v-240e88bd]{position:absolute;font-size:56px}.image[data-v-240e88bd]{text-align:center;line-height:360px;vertical-align:middle;position:relative!important;margin:0 auto;width:360px}.image .figure[data-v-240e88bd]{overflow:hidden;border-radius:20px;margin:0 16px 16px;cursor:pointer}.theme--dark .image .figure[data-v-240e88bd]{box-shadow:0 1px 5px 0 rgba(50,50,50,.2),0 2px 2px 0 rgba(50,50,50,.14),0 3px 1px -2px rgba(50,50,50,.12)}.theme--light .image .figure[data-v-240e88bd]{box-shadow:0 1px 5px 0 hsla(0,0%,50.2%,.2),0 2px 2px 0 hsla(0,0%,50.2%,.14),0 3px 1px -2px hsla(0,0%,50.2%,.12)}.image:hover .zoom-icon[data-v-240e88bd]{opacity:1}.image-detail[data-v-240e88bd]{min-height:300px}.about[data-v-240e88bd]{margin-top:-96px;padding:56px 80px}@media(max-width:599px){.about[data-v-240e88bd]{padding:16px}}.about h4[data-v-240e88bd]{margin:0}.about .btn-area[data-v-240e88bd]{margin-top:48px}@media(max-width:959px){.about .person[data-v-240e88bd]{margin-top:40px}}.about .person h6[data-v-240e88bd]{font-size:14px;text-transform:uppercase;font-weight:700}.about .person p[data-v-240e88bd]{margin-bottom:32px}.help-paper[data-v-240e88bd]{background-color:var(--v-primarylight-base);padding:16px 8px}.headline[data-v-240e88bd]{color:var(--v-primarydark-base)}.gallery-item[data-v-240e88bd]{padding:2px}.product-item[data-v-240e88bd]{padding:8px;margin-bottom:8px}.product-item a[data-v-240e88bd]{display:block;text-decoration:none}.image[data-v-240e88bd]{border-radius:8px}.price[data-v-240e88bd]{font-weight:700;font-size:14px;color:var(--v-primary-base)}@media(max-width:959px){.scroll-tablet[data-v-240e88bd]{overflow:auto;flex-wrap:nowrap}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_279b5ade_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_279b5ade_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_279b5ade_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_279b5ade_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_279b5ade_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-279b5ade]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-279b5ade]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-279b5ade]{font-size:28px;line-height:44px}}.use-text-title2[data-v-279b5ade]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-279b5ade]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-279b5ade]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-279b5ade]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-279b5ade]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-279b5ade]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-279b5ade]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-279b5ade]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-279b5ade]{font-size:16px;line-height:24px}}.use-text-caption[data-v-279b5ade],.use-text-paragraph[data-v-279b5ade]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-279b5ade]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-279b5ade]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-279b5ade]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-279b5ade]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-279b5ade]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-279b5ade]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-279b5ade]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-279b5ade]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-279b5ade]{transform:scale(-1)}.main-wrap[data-v-279b5ade]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-279b5ade]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-279b5ade]{margin-bottom:90px}}.space-top[data-v-279b5ade]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-279b5ade]{margin-top:90px}}.space-bottom-short[data-v-279b5ade]{margin-bottom:60px}.space-top-short[data-v-279b5ade]{margin-top:60px}.container-wrap>section[data-v-279b5ade]{position:relative}.container-general[data-v-279b5ade]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-279b5ade]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-279b5ade]{height:100vh;display:flex}.maintenance-icon[data-v-279b5ade]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-279b5ade]{font-size:48px}.theme--light .maintenance-icon[data-v-279b5ade]{background:#30f}.theme--dark .maintenance-icon[data-v-279b5ade]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-279b5ade]{padding:24px;margin:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/collection/index.vue?vue&type=template&id=279b5ade&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap"},[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-279b5ade>","</div>",[_c('search',{model:{value:(_vm.keyword),callback:function ($$v) {_vm.keyword=$$v},expression:"keyword"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"search-content\" data-v-279b5ade>","</div>",[_c('v-container',[_c('v-row',{attrs:{"align":"start","justify":"center"}},[_c('v-col',{attrs:{"md":"8","cols":"12"}},[_c('div',{staticClass:"space-top-short",attrs:{"id":"profile_portrait"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Profile Cards Portrait\n              ")]),_vm._v(" "),_c('v-row',_vm._l((2),function(index){return _c('v-col',{key:index,attrs:{"sm":"6","cols":"12"}},[_c('profile-card',{attrs:{"connection":100,"favorites":10,"albums":12,"cover":"https://source.unsplash.com/random","name":"John Dalton","title":"Web Designer","type":"oval","orientation":"portrait"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"profile_l"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Profile Cards Landscape\n              ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"12"}},_vm._l((3),function(index){return _c('fragment',{key:index},[_c('profile-card',{attrs:{"connection":100,"favorites":10,"albums":12,"cover":"https://source.unsplash.com/random","name":"John Dalton","title":"Web Designer","type":"round","orientation":"landscape"}}),_vm._v(" "),_c('br'),_c('br')],1)}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"product_p"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Product Cards Portrait\n              ")]),_vm._v(" "),_c('v-row',_vm._l((3),function(index){return _c('v-col',{key:index,attrs:{"sm":"4","cols":"12"}},[_c('product-card',{attrs:{"rating":3,"price":20,"img":"https://source.unsplash.com/random","title":"Sed lacinia velit","desc":"Proin pretium arcu eget metus porta consecteturc","orientation":"portrait","type":"round"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"product_l"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Product Cards Landscape\n              ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"12"}},_vm._l((3),function(index){return _c('fragment',{key:index},[_c('product-card',{attrs:{"rating":3,"price":20,"img":"https://source.unsplash.com/random","title":"Sed lacinia velit","desc":"Proin pretium arcu eget metus porta consecteturc","orientation":"landscape","type":"oval"}}),_vm._v(" "),_c('br'),_c('br')],1)}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"media_video"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Video Cards\n              ")]),_vm._v(" "),_c('v-row',_vm._l((2),function(index){return _c('v-col',{key:index,attrs:{"sm":"6","cols":"12"}},[_c('media-card',{attrs:{"title":"Sed lacinia velit, ut malesuada eros interdum a","orientation":"portrait","type":"video","thumb":"https://source.unsplash.com/random","href":"#"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"media_photo"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Image Cards\n              ")]),_vm._v(" "),_c('v-row',_vm._l((2),function(index){return _c('v-col',{key:index,attrs:{"sm":"6","cols":"12"}},[_c('media-card',{attrs:{"title":"Sed lacinia velit, ut malesuada eros interdum a","orientation":"portrait","type":"photo","thumb":"https://source.unsplash.com/random","href":"#"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"news_p"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                News Cards Portrait\n              ")]),_vm._v(" "),_c('v-row',_vm._l((3),function(index){return _c('v-col',{key:index,attrs:{"sm":"4","cols":"12"}},[_c('news-card',{attrs:{"title":"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.","headline":"news","orientation":"portrait","type":"full","img":"https://source.unsplash.com/random","href":"#"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"news_l"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                News Cards Landscape\n              ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"12"}},_vm._l((3),function(index){return _c('fragment',{key:index},[_c('news-card',{attrs:{"title":"Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.","headline":"news","orientation":"landscape","type":"oval","img":"https://source.unsplash.com/random","href":"#"}}),_vm._v(" "),_c('br'),_c('br')],1)}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"post_p"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Post Cards Portrait\n              ")]),_vm._v(" "),_c('v-row',_vm._l((3),function(index){return _c('v-col',{key:index,attrs:{"sm":"4","cols":"12"}},[_c('post-card',{attrs:{"title":"Maecenas rutrum dolor sed nisi","desc":"Proin pretium arcu eget metus porta consectetur Pellentesque habitant","date":"12 Nov 2020","orientation":"portrait","type":"over","img":"https://source.unsplash.com/random","href":"#"}})],1)}),1)],1),_vm._v(" "),_c('div',{staticClass:"space-top-short",attrs:{"id":"post_l"}},[_c('h4',{staticClass:"use-text-subtitle mb-3"},[_vm._v("\n                Post Cards Landscape\n              ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"md":"12"}},_vm._l((3),function(index){return _c('fragment',{key:index},[_c('post-card',{attrs:{"title":"Maecenas rutrum dolor sed nisi","desc":"Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant","date":"12 Nov 2020","orientation":"landscape","type":"oval","img":"https://source.unsplash.com/random","href":"#"}}),_vm._v(" "),_c('br'),_c('br')],1)}),1)],1)],1)]),_vm._v(" "),_c('v-col',{attrs:{"md":"3","cols":"12"}},[_c('sidebar')],1)],1)],1)],1)],2),_vm._ssrNode(" "),_c('main-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/collection/index.vue?vue&type=template&id=279b5ade&scoped=true&

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Header/index.js + 72 modules
var Header = __webpack_require__(112);

// EXTERNAL MODULE: ./components/Footer/index.js + 20 modules
var Footer = __webpack_require__(110);

// EXTERNAL MODULE: ./components/Filter/Search.vue + 4 modules
var Search = __webpack_require__(432);

// EXTERNAL MODULE: ./components/Cards/PostCard.vue + 4 modules
var PostCard = __webpack_require__(431);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/NewsCard.vue?vue&type=template&id=e6089594&scoped=true&
var NewsCardvue_type_template_id_e6089594_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"post-card mx-auto",class:[_vm.orientation, _vm.type],attrs:{"max-width":"1000"}},[_c('div',{staticClass:"figure"},[_c('v-img',{staticClass:"white--text",attrs:{"src":_vm.img,"height":"200px"}})],1),_vm._v(" "),_c('div',{staticClass:"properties",class:_vm.startPadding},[_c('v-card-subtitle',{staticClass:"head-line"},[_vm._v("\n      "+_vm._s(_vm.headline)+"\n    ")]),_vm._v(" "),_c('v-card-title',{staticClass:"news-title"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('v-card-actions',[(_vm.orientation === 'portrait')?_c('v-spacer'):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"action-btn",attrs:{"small":_vm.orientation === 'landscape',"href":_vm.href,"text":"","color":"primary"}},[_vm._v("\n        Read more\n      ")])],1)],1)])}
var NewsCardvue_type_template_id_e6089594_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/NewsCard.vue?vue&type=template&id=e6089594&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/NewsCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NewsCardvue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      default: 'news'
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
  },
  computed: {
    startPadding() {
      return {
        'ps-0': this.orientation === 'landscape' && this.type !== 'over'
      };
    }

  }
});
// CONCATENATED MODULE: ./components/Cards/NewsCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_NewsCardvue_type_script_lang_js_ = (NewsCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(9);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(344);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(332);

// CONCATENATED MODULE: ./components/Cards/NewsCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(582)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Cards_NewsCardvue_type_script_lang_js_,
  NewsCardvue_type_template_id_e6089594_scoped_true_render,
  NewsCardvue_type_template_id_e6089594_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "e6089594",
  "410d9da4"
  
)

/* harmony default export */ var NewsCard = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardTitle: components_VCard["d" /* VCardTitle */],VImg: VImg["a" /* default */],VSpacer: VSpacer["a" /* default */]})

// EXTERNAL MODULE: ./components/Cards/MediaCard.vue + 6 modules
var MediaCard = __webpack_require__(385);

// EXTERNAL MODULE: ./components/Cards/ProductCard.vue + 5 modules
var ProductCard = __webpack_require__(429);

// EXTERNAL MODULE: ./components/Cards/ProfileCard.vue + 4 modules
var ProfileCard = __webpack_require__(430);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/Sidebar.vue?vue&type=template&id=1ebe59a6&
var Sidebarvue_type_template_id_1ebe59a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-15"},[_c('product-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('people-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('news-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('trending-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('image-widget'),_vm._ssrNode(" <div class=\"py-6\"></div> "),_c('help-widget')],2)}
var Sidebarvue_type_template_id_1ebe59a6_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/Sidebar.vue?vue&type=template&id=1ebe59a6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/PeopleWidget.vue?vue&type=template&id=7342e41a&
var PeopleWidgetvue_type_template_id_7342e41a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":"You may know","icon":"mdi-account-group","subtitle":"Donec commodo convallis ligula eget suscipit orci."}},[_c('div',[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.people),function(item,index){return _c('v-list-item',{key:index},[_c('v-list-item-avatar',[_c('v-img',{attrs:{"src":item.img}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(_vm._s(item.title))])],1),_vm._v(" "),_c('v-list-item-action',[_c('v-btn',{attrs:{"small":"","outlined":""}},[_vm._v("\n            follow\n          ")])],1)],1)}),1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("See all")])],1)])}
var PeopleWidgetvue_type_template_id_7342e41a_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/PeopleWidget.vue?vue&type=template&id=7342e41a&

// EXTERNAL MODULE: ./components/Paper/index.js + 5 modules
var Paper = __webpack_require__(348);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/PeopleWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PeopleWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      people: [{
        img: '/images/avatars/pp_boy5.svg',
        name: 'John Doe',
        title: 'Web Designer'
      }, {
        img: '/images/avatars/pp_girl.svg',
        name: 'Jean Doe',
        title: 'Executive Merketing'
      }, {
        img: '/images/avatars/pp_boy2.svg',
        name: 'Jim Doe',
        title: 'Dev Ops'
      }, {
        img: '/images/avatars/pp_girl2.svg',
        name: 'Jihan Doe',
        title: 'Director'
      }, {
        img: '/images/avatars/pp_girl3.svg',
        name: 'Jena Doe',
        title: 'CEO'
      }, {
        img: '/images/avatars/pp_boy3.svg',
        name: 'Johan Doe',
        title: 'iOS Developer'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/List/Sidebar/PeopleWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_PeopleWidgetvue_type_script_lang_js_ = (PeopleWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var components_VList = __webpack_require__(7);

// CONCATENATED MODULE: ./components/List/Sidebar/PeopleWidget.vue





/* normalize component */

var PeopleWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_PeopleWidgetvue_type_script_lang_js_,
  PeopleWidgetvue_type_template_id_7342e41a_render,
  PeopleWidgetvue_type_template_id_7342e41a_staticRenderFns,
  false,
  null,
  null,
  "37286b08"
  
)

/* harmony default export */ var PeopleWidget = (PeopleWidget_component.exports);

/* vuetify-loader */










installComponents_default()(PeopleWidget_component, {VBtn: VBtn["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/TrendingWidget.vue?vue&type=template&id=930b4196&
var TrendingWidgetvue_type_template_id_930b4196_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":"Trending now","icon":"mdi-trending-up","subtitle":"Donec commodo convallis ligula eget suscipit orci"}},[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.trending),function(item,index){return _c('v-list-item',{key:index,attrs:{"href":"#"}},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"font-weight-bold"},[_vm._v("\n          "+_vm._s(index + 1)+".\n          #"+_vm._s(item.title)+"\n        ")]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(_vm._s(item.share)+"k Views")])],1)],1)}),1)],1)}
var TrendingWidgetvue_type_template_id_930b4196_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/TrendingWidget.vue?vue&type=template&id=930b4196&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/TrendingWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TrendingWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      trending: [{
        title: 'Vestibulum faucibus',
        share: 130
      }, {
        title: 'Nulla eget lobortis lacus',
        share: 120
      }, {
        title: 'Cras convallis',
        share: 100
      }, {
        title: 'Quisque a consequat',
        share: 88
      }, {
        title: 'Suspendisse',
        share: 90
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/List/Sidebar/TrendingWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_TrendingWidgetvue_type_script_lang_js_ = (TrendingWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/List/Sidebar/TrendingWidget.vue





/* normalize component */

var TrendingWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_TrendingWidgetvue_type_script_lang_js_,
  TrendingWidgetvue_type_template_id_930b4196_render,
  TrendingWidgetvue_type_template_id_930b4196_staticRenderFns,
  false,
  null,
  null,
  "2146a244"
  
)

/* harmony default export */ var TrendingWidget = (TrendingWidget_component.exports);

/* vuetify-loader */






installComponents_default()(TrendingWidget_component, {VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/NewsWidget.vue?vue&type=template&id=33a73a80&
var NewsWidgetvue_type_template_id_33a73a80_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":"Headline News","icon":"mdi-newspaper","subtitle":"Donec commodo convallis ligula eget suscipit orci."}},[_c('div',[_c('v-list',{attrs:{"subheader":"","two-line":""}},_vm._l((_vm.news),function(item,index){return _c('v-list-item',{key:index,attrs:{"href":"#"}},[_c('v-list-item-avatar',{attrs:{"rounded":"lg","width":"60"}},[_c('v-img',{attrs:{"src":item.img}})],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('v-list-item-subtitle',[_vm._v(_vm._s(item.source))])],1)],1)}),1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("See all")])],1)])}
var NewsWidgetvue_type_template_id_33a73a80_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/NewsWidget.vue?vue&type=template&id=33a73a80&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/NewsWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NewsWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      news: [{
        img: 'https://source.unsplash.com/random',
        title: 'Vestibulum bibendum nisi eget magna',
        source: 'the-news.com'
      }, {
        img: 'https://source.unsplash.com/random',
        title: 'Quisque a consequat ante',
        source: 'the-news.com'
      }, {
        img: 'https://source.unsplash.com/random',
        title: 'Donec dignissim, odio ac imperdiet luctus',
        source: 'the-news.com'
      }, {
        img: 'https://source.unsplash.com/random',
        title: 'Suspendisse eleifend nunc non',
        source: 'the-news.com'
      }, {
        img: 'https://source.unsplash.com/random',
        title: 'Vestibulum a massa vestibulum',
        source: 'the-news.com'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/List/Sidebar/NewsWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_NewsWidgetvue_type_script_lang_js_ = (NewsWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/List/Sidebar/NewsWidget.vue





/* normalize component */

var NewsWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_NewsWidgetvue_type_script_lang_js_,
  NewsWidgetvue_type_template_id_33a73a80_render,
  NewsWidgetvue_type_template_id_33a73a80_staticRenderFns,
  false,
  null,
  null,
  "faf3ace8"
  
)

/* harmony default export */ var NewsWidget = (NewsWidget_component.exports);

/* vuetify-loader */









installComponents_default()(NewsWidget_component, {VBtn: VBtn["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemSubtitle: components_VList["b" /* VListItemSubtitle */],VListItemTitle: components_VList["c" /* VListItemTitle */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/ImageWidget.vue?vue&type=template&id=4776d30a&scoped=true&
var ImageWidgetvue_type_template_id_4776d30a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":"Gallery","icon":"mdi-image-multiple","subtitle":""}},[_c('div',[_c('v-item-group',{attrs:{"multiple":""},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('v-row',{staticClass:"ma-0"},_vm._l((_vm.images),function(item,i){return _c('v-col',{key:i,staticClass:"gallery-item",attrs:{"cols":"6","md":"6","sm":"3"}},[_c('v-item',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var active = ref.active;
var toggle = ref.toggle;
return [_c('v-img',{staticClass:"text-right pa-2",attrs:{"src":item.src,"height":"150"},on:{"click":toggle}},[_c('v-btn',{attrs:{"icon":"","dark":""}},[_c('v-icon',[_vm._v("\n                  "+_vm._s(active ? 'mdi-heart' : 'mdi-heart-outline')+"\n                ")])],1)],1)]}}],null,true)})],1)}),1)],1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("See all")])],1)])}
var ImageWidgetvue_type_template_id_4776d30a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/ImageWidget.vue?vue&type=template&id=4776d30a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/ImageWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ImageWidgetvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/List/Sidebar/ImageWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_ImageWidgetvue_type_script_lang_js_ = (ImageWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
var VItem = __webpack_require__(523);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(334);

// CONCATENATED MODULE: ./components/List/Sidebar/ImageWidget.vue



function ImageWidget_injectStyles (context) {
  
  var style0 = __webpack_require__(584)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ImageWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_ImageWidgetvue_type_script_lang_js_,
  ImageWidgetvue_type_template_id_4776d30a_scoped_true_render,
  ImageWidgetvue_type_template_id_4776d30a_scoped_true_staticRenderFns,
  false,
  ImageWidget_injectStyles,
  "4776d30a",
  "3945e6ba"
  
)

/* harmony default export */ var ImageWidget = (ImageWidget_component.exports);

/* vuetify-loader */








installComponents_default()(ImageWidget_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VItem: VItem["a" /* default */],VItemGroup: VItemGroup["b" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/ProductWidget.vue?vue&type=template&id=240e88bd&scoped=true&
var ProductWidgetvue_type_template_id_240e88bd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('paper',{attrs:{"title":"Related Products","icon":"mdi-tag","subtitle":"Donec commodo convallis ligula eget suscipit orci."}},[_c('div',[_c('v-item-group',{attrs:{"multiple":""},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('v-row',{staticClass:"ma-0"},_vm._l((_vm.products),function(item,i){return _c('v-col',{key:i,staticClass:"product-item",attrs:{"cols":"6","md":"6","sm":"3"}},[_c('v-item',[_c('a',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"href":"#"}},[_c('v-img',{staticClass:"image",attrs:{"src":item.image,"height":"100"}}),_vm._v(" "),_c('p',{staticClass:"text-truncate text-body-1 mt-2 mb-0"},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('h6',{staticClass:"text-h6 price"},[_vm._v("$ "+_vm._s(item.price))])],1)])],1)}),1)],1),_vm._v(" "),_c('v-btn',{attrs:{"text":"","block":"","color":"primary"}},[_vm._v("See all")])],1)])}
var ProductWidgetvue_type_template_id_240e88bd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/List/Sidebar/ProductWidget.vue?vue&type=template&id=240e88bd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/ProductWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductWidgetvue_type_script_lang_js_ = ({
  components: {
    Paper: Paper["a" /* default */]
  },

  data() {
    return {
      products: [{
        image: 'https://source.unsplash.com/random',
        text: 'Sed lacinia velit',
        price: '32'
      }, {
        image: 'https://source.unsplash.com/random',
        text: 'Sed lacinia velit',
        price: '20'
      }, {
        image: 'https://source.unsplash.com/random',
        text: 'Sed lacinia velit',
        price: '15'
      }, {
        image: 'https://source.unsplash.com/random',
        text: 'Sed lacinia velit',
        price: '21'
      }],
      selected: []
    };
  }

});
// CONCATENATED MODULE: ./components/List/Sidebar/ProductWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_ProductWidgetvue_type_script_lang_js_ = (ProductWidgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(20);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(30);

// CONCATENATED MODULE: ./components/List/Sidebar/ProductWidget.vue



function ProductWidget_injectStyles (context) {
  
  var style0 = __webpack_require__(586)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ProductWidget_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_ProductWidgetvue_type_script_lang_js_,
  ProductWidgetvue_type_template_id_240e88bd_scoped_true_render,
  ProductWidgetvue_type_template_id_240e88bd_scoped_true_staticRenderFns,
  false,
  ProductWidget_injectStyles,
  "240e88bd",
  "dd03b6e4"
  
)

/* harmony default export */ var ProductWidget = (ProductWidget_component.exports);

/* vuetify-loader */







installComponents_default()(ProductWidget_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VImg: VImg["a" /* default */],VItem: VItem["a" /* default */],VItemGroup: VItemGroup["b" /* default */],VRow: VRow["a" /* default */]})


/* vuetify-loader */


installDirectives_default()(ProductWidget_component, {Ripple: ripple["a" /* default */]})

// EXTERNAL MODULE: ./components/List/Sidebar/HelpWidget.vue + 2 modules
var HelpWidget = __webpack_require__(512);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/List/Sidebar/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
    PeopleWidget: PeopleWidget,
    TrendingWidget: TrendingWidget,
    NewsWidget: NewsWidget,
    ImageWidget: ImageWidget,
    ProductWidget: ProductWidget,
    HelpWidget: HelpWidget["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/List/Sidebar/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/List/Sidebar/Sidebar.vue





/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_1ebe59a6_render,
  Sidebarvue_type_template_id_1ebe59a6_staticRenderFns,
  false,
  null,
  null,
  "f789f4d2"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./components/List/Sidebar/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/collection/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var collectionvue_type_script_lang_js_ = ({
  data() {
    return {
      keyword: ''
    };
  },

  components: {
    'main-header': Header["a" /* default */],
    'main-footer': Footer["a" /* default */],
    Search: Search["a" /* default */],
    PostCard: PostCard["a" /* default */],
    NewsCard: NewsCard,
    MediaCard: MediaCard["a" /* default */],
    ProductCard: ProductCard["a" /* default */],
    ProfileCard: ProfileCard["a" /* default */],
    Sidebar: Sidebar
  },

  head() {
    return {
      title: brand["a" /* default */].starter.name + ' - Card Collection'
    };
  }

});
// CONCATENATED MODULE: ./pages/collection/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_collectionvue_type_script_lang_js_ = (collectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(345);

// CONCATENATED MODULE: ./pages/collection/index.vue



function collection_injectStyles (context) {
  
  var style0 = __webpack_require__(588)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var collection_component = Object(componentNormalizer["a" /* default */])(
  pages_collectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  collection_injectStyles,
  "279b5ade",
  "a3575054"
  
)

/* harmony default export */ var collection = __webpack_exports__["default"] = (collection_component.exports);

/* vuetify-loader */




installComponents_default()(collection_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map