exports.ids = [26];
exports.modules = {

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("068deba0", content, true, context)
};

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(//fonts.googleapis.com/css?family=Lato:300:400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-9fc4ffda]{margin:0}h1[data-v-9fc4ffda]{font-weight:300;letter-spacing:2px;font-size:48px}h1[data-v-9fc4ffda],p[data-v-9fc4ffda]{font-family:\"Lato\",sans-serif}p[data-v-9fc4ffda]{letter-spacing:1px;font-size:14px;color:#333}.header[data-v-9fc4ffda]{position:relative;text-align:center;background:linear-gradient(60deg,#543ab7,#00acc1);color:#fff}.inner-header[data-v-9fc4ffda]{height:10vh;width:100%;margin:0;padding:0}.flex[data-v-9fc4ffda]{display:flex;justify-content:center;align-items:center;text-align:center}.waves[data-v-9fc4ffda]{width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px}.content[data-v-9fc4ffda],.waves[data-v-9fc4ffda]{position:relative}.content[data-v-9fc4ffda]{height:20vh;text-align:center;background-color:#fff}.parallax>use[data-v-9fc4ffda]{-webkit-animation:move-forever-data-v-9fc4ffda 25s cubic-bezier(.55,.5,.45,.5) infinite;animation:move-forever-data-v-9fc4ffda 25s cubic-bezier(.55,.5,.45,.5) infinite}.parallax>use[data-v-9fc4ffda]:first-child{-webkit-animation-delay:-2s;animation-delay:-2s;-webkit-animation-duration:7s;animation-duration:7s}.parallax>use[data-v-9fc4ffda]:nth-child(2){-webkit-animation-delay:-3s;animation-delay:-3s;-webkit-animation-duration:10s;animation-duration:10s}.parallax>use[data-v-9fc4ffda]:nth-child(3){-webkit-animation-delay:-4s;animation-delay:-4s;-webkit-animation-duration:13s;animation-duration:13s}.parallax>use[data-v-9fc4ffda]:nth-child(4){-webkit-animation-delay:-5s;animation-delay:-5s;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes move-forever-data-v-9fc4ffda{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}@keyframes move-forever-data-v-9fc4ffda{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}@media (max-width:768px){.waves[data-v-9fc4ffda]{height:40px;min-height:40px}.content[data-v-9fc4ffda]{height:30vh}h1[data-v-9fc4ffda]{font-size:24px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Waves/index.vue?vue&type=template&id=9fc4ffda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_vm._ssrNode("<div class=\"inner-header flex\" data-v-9fc4ffda></div> <div data-v-9fc4ffda><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 24 150 28\" preserveAspectRatio=\"none\" shape-rendering=\"auto\" class=\"waves\" data-v-9fc4ffda><defs data-v-9fc4ffda><path id=\"gentle-wave\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\" data-v-9fc4ffda></path></defs> <g class=\"parallax\" data-v-9fc4ffda><use xlink:href=\"#gentle-wave\" x=\"48\" y=\"0\" fill=\"rgba(255,255,255,0.7\" data-v-9fc4ffda></use> <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"3\" fill=\"rgba(255,255,255,0.5)\" data-v-9fc4ffda></use> <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"5\" fill=\"rgba(255,255,255,0.3)\" data-v-9fc4ffda></use> <use xlink:href=\"#gentle-wave\" x=\"48\" y=\"7\" fill=\"#fff\" data-v-9fc4ffda></use></g></svg></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Waves/index.vue?vue&type=template&id=9fc4ffda&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Waves/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Wavesvue_type_script_lang_js_ = ({
  name: "Waves"
});
// CONCATENATED MODULE: ./components/Waves/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Wavesvue_type_script_lang_js_ = (Wavesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Waves/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(360)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Wavesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9fc4ffda",
  "6d1fd04e"
  
)

/* harmony default export */ var Waves = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("43e4a5e2", content, true, context)
};

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/werbdev11.07b81bf.png";

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/responsive.5588b68.png";

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/uxui.3fd8093.png";

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/server.9c3b8d7.png";

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/email.02887ab.png";

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/firew.7542ffc.png";

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/intuitu.9f87fcd.jpeg";

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/html.adcb872.png";

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/css.b1dc9ee.png";

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/js.75220e2.png";

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sass.508d800.png";

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/JQ.62f4fe4.png";

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/boots.d28b0d8.png";

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wordpress.3587d69.png";

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/shopify.cbcf8a0.png";

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/django.b7bcb19.png";

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/react.724c271.png";

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vue.b12a9d7.png";

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/webdev1.3721f4d.png";

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/webdev4.8d71ddc.png";

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/webdev2.53141c2.png";

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/webdebtest.d1fd919.png";

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3b9374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3b9374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3b9374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3b9374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3b9374_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-7c3b9374],h2[data-v-7c3b9374],h3[data-v-7c3b9374],h4[data-v-7c3b9374],h5[data-v-7c3b9374],p[data-v-7c3b9374]{text-align:center;font-family:cursive}p[data-v-7c3b9374]{font-size:12px}h1[data-v-7c3b9374]{padding-top:5px;color:#3c00ff}h2[data-v-7c3b9374]{color:#00a2ff}h3[data-v-7c3b9374]{color:#004cff}hr[data-v-7c3b9374]{color:#5100ff}li[data-v-7c3b9374]{font-family:cursive;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/webdev/body/index.vue?vue&type=template&id=7c3b9374&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Waves'),_vm._ssrNode(" <div id=\"Webdesign\" class=\"py-4\" data-v-7c3b9374><h1 id=\"web\" class=\"blink-text smt-1\" style=\"text-align: center; font-weight: bold; font-family: cursive\" data-v-7c3b9374>\n      Diseño | Desarrollo\n    </h1> <h1 id=\"web\" class=\"blink-text smt-1\" style=\"text-align: center; font-weight: bold; font-family: cursive\" data-v-7c3b9374>\n      Aplicaciones &amp; Páginas Web\n    </h1></div> <div style=\"text-align: center\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(473)))+" alt=\"werbdev11\" style=\"width: 100%; max-width: 70%\" data-v-7c3b9374> <div style=\"\\n        text-align: center;\\n        font-size: 16px;\\n        font-weight: bold;\\n        font-family: cursive;\\n      \" data-v-7c3b9374>\n      Hacer negocios en línea brinda muchas oportunidades fantásticas; realmente\n      puede ayudar a su empresa de maneras nuevas y emocionantes.\n    </div></div> <hr class=\"center\" style=\"width: 50%\" data-v-7c3b9374> <div class=\"row\" style=\"text-align: center; padding: 0px 50px\" data-v-7c3b9374><div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(474)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>DISEÑO RESPONSIVO</h3> <p data-v-7c3b9374>\n        Adaptado para cualquier dispositivo. El uso será una experiencia\n        placentera.\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(475)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>USO INTUITIVO</h3> <p data-v-7c3b9374>\n        Diseño Adaptado a las últimas tendencias. Los los usuarios van a saber\n        intuitivamente como usarlo\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(476)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>ALOJAMIENTO DEDICADO</h3> <p data-v-7c3b9374>\n        Un servidor dedicado le brinda el máximo control, potencia y seguridad\n        con acceso completo a todos los recursos..\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(477)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>MEJOR EMAIL</h3> <p data-v-7c3b9374>\n        Correo Electrónico Empresarial Unificado.Con acceso seguro con\n        Autheticacion de 2 Factores (2FA). Proteccion Anti-spam. Certificado SSL\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(478)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>SEGURIDAD INTEGRADA</h3> <p data-v-7c3b9374>\n        NeighborDev CR ayuda a prevenir ataques DDoS y otras amenazas\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-4\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(479)))+" style=\"width: 100%; max-width: 100%; height: 30%\" data-v-7c3b9374> <h3 data-v-7c3b9374>NO DEBE PREOCUPARSE</h3> <p data-v-7c3b9374>\n        Hacemos test/pruebas de integración, configuramos los servicios y\n        servidores por usted\n      </p></div></div> <div class=\"container py-4\" data-v-7c3b9374><div class=\"row\" data-v-7c3b9374><div class=\"col-12 col-md-6 col-lg-6 icon-box\" style=\"text-align: center\" data-v-7c3b9374><h2 class=\"blink-text\" style=\"text-align: center; font-family: cursive\" data-v-7c3b9374>\n          ¿Porque tener un sitio web?\n        </h2> <p style=\"text-align: center; padding-top: 10px; padding-bottom: 10px\" data-v-7c3b9374>\n          La presencia en internet aumenta las ventas en un 67%.\n        </p> <hr data-v-7c3b9374> <p style=\"text-align: center; padding-top: 10px; padding-bottom: 10px\" data-v-7c3b9374>\n          Hacer negocios en línea brinda muchas oportunidades fantásticas;\n          realmente puede ayudar a su empresa de maneras nuevas y emocionantes.\n        </p> <hr data-v-7c3b9374> <p style=\"text-align: center; padding-top: 10px; padding-bottom: 10px\" data-v-7c3b9374>\n          Hacemos que tu marca hable por sí sola y al mismo tiempo mientras se\n          destaca en el mercado actual.\n        </p> <hr data-v-7c3b9374> <p style=\"text-align: center; padding-top: 10px; padding-bottom: 10px\" data-v-7c3b9374>\n          Incrementamos sus ventas y visitas mediante estrategias digitales,\n          estas son las formas mas sencillas y efectivas de atraer más clientes\n          a su sitio web.\n        </p></div> <div class=\"col-12 col-md-6 col-lg-6 icon-box\" style=\"text-align: center\" data-v-7c3b9374><h2 class=\"blink-text\" style=\"text-align: center; padding-bottom: 40px; font-family: cursive\" data-v-7c3b9374>\n          Diseños basados en:\n        </h2> <img"+(_vm._ssrAttr("src",__webpack_require__(480)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(481)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(482)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(483)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(484)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(485)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <p style=\"\\n            font-weight: bold;\\n            text-align: center;\\n            color: black;\\n            padding-top: 10px;\\n            padding-bottom: 10px;\\n          \" data-v-7c3b9374>\n          HTML5, CSS3, JavaScript, SASS, jQuery &amp; Bootstrap.\n        </p> <hr data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(486)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(487)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <p style=\"\\n           font-weight: bold;\\n            text-align: center;\\n            color: black;\\n            padding-top: 10px;\\n            padding-bottom: 10px;\\n          \" data-v-7c3b9374>\n          Wix, Wordpress, Shopify e Integraciones de CRM con Hubspot.\n        </p> <hr data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(488)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(489)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <img"+(_vm._ssrAttr("src",__webpack_require__(490)))+" style=\"width: 15%; max-width: 25%; height: 10%; max-height: 20%\" data-v-7c3b9374> <p style=\"\\n            font-weight: bold;\\n            text-align: center;\\n            color: black;\\n            padding-top: 10px;\\n            padding-bottom: 10px;\\n          \" data-v-7c3b9374>\n          También utilizamos tecnologías como Django, React, Vue.\n        </p> <hr data-v-7c3b9374></div></div></div> <h3 class=\"blink-text\" style=\"text-align: center; font-weight: bold; font-family: cursive\" data-v-7c3b9374>\n    ¿Como lo hacemos?\n  </h3> <div class=\"row\" style=\"text-align: center; padding: 0px 20px\" data-v-7c3b9374><div class=\"col-6 col-sm-6 col-md-6 col-lg-6 icon-box\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(491)))+" class=\"center\" style=\"\\n          width: 70%;\\n          max-width: 70%;\\n          height: 50%;\\n          max-height: 50%;\\n          padding-bottom: 20px;\\n        \" data-v-7c3b9374> <p style=\"\\n          text-align: center;\\n          font-weight: bold;\\n          color: black;\\n          padding-bottom: 60px;\\n        \" data-v-7c3b9374>\n        1. Concretamos ideas a implementar por nuestros clientes con una\n        comunicación clara y concisa en todo momento.\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 icon-box\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(492)))+" class=\"center\" style=\"width: 70%; max-width: 70%; height: 50%; max-height: 50%\" data-v-7c3b9374> <p style=\"\\n          text-align: center;\\n          font-weight: bold;\\n          color: black;\\n  ;\\n          padding-bottom: 60px;\\n        \" data-v-7c3b9374>\n        2. Plasmamos el diseño personalizado. Escogemos el nombre de dominio\n        para su negocio/empresa/servicio\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 icon-box\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(493)))+" class=\"center\" style=\"\\n          width: 70%;\\n          max-width: 70%;\\n          height: 50%;\\n          max-height: 50%;\\n          padding-bottom: 20px;\\n        \" data-v-7c3b9374> <p style=\"\\n          text-align: center;\\n          font-weight: bold;\\n          color: black;\\n  ;\\n          padding-bottom: 60px;\\n        \" data-v-7c3b9374>\n        3. Recibimos sus videos, imágenes, información y redes sociales para\n        vincularlas a la pagina web.\n      </p></div> <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 icon-box\" data-v-7c3b9374><img"+(_vm._ssrAttr("src",__webpack_require__(494)))+" class=\"center\" style=\"\\n          width: 70%;\\n          max-width: 70%;\\n          height: 50%;\\n          max-height: 50%;\\n          padding-bottom: 20px;\\n        \" data-v-7c3b9374> <p style=\"\\n          text-align: center;\\n          font-weight: bold;\\n          color: black;\\n          padding-bottom: 60px;\\n        \" data-v-7c3b9374>\n        4. Hacemos test/pruebas de integración y con el cliente para su\n        aprobación y cambios.\n      </p></div></div> <hr class=\"center\" style=\"width: 50%\" data-v-7c3b9374>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/webdev/body/index.vue?vue&type=template&id=7c3b9374&scoped=true&

// EXTERNAL MODULE: ./components/Waves/index.vue + 4 modules
var Waves = __webpack_require__(362);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/webdev/body/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bodyvue_type_script_lang_js_ = ({
  name: "WebBody",
  components: {
    Waves: Waves["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/webdev/body/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var webdev_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/webdev/body/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(495)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  webdev_bodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c3b9374",
  "73dcd1ce"
  
)

/* harmony default export */ var body = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map