exports.ids = [20];
exports.modules = {

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("068deba0", content, true, context)
};

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fc4ffda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 360:
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

/***/ 361:
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
  
  var style0 = __webpack_require__(359)
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

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(472);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7cc198cf", content, true, context)
};

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/computerrepair.5939240.png";

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/techs2.a31d52b.png";

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cpuu.d4c6c29.png";

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/techlap.57b047c.png";

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc001a1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc001a1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc001a1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc001a1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc001a1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1[data-v-bc001a1c],h2[data-v-bc001a1c],h3[data-v-bc001a1c],h4[data-v-bc001a1c],h5[data-v-bc001a1c],p[data-v-bc001a1c]{text-align:center;font-family:cursive}p[data-v-bc001a1c]{font-size:12px}h1[data-v-bc001a1c]{padding-top:5px;color:#3c00ff}h2[data-v-bc001a1c]{color:#00a2ff}h3[data-v-bc001a1c]{color:#004cff}hr[data-v-bc001a1c]{color:#5100ff}li[data-v-bc001a1c]{font-family:cursive;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/soporte/body/index.vue?vue&type=template&id=bc001a1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Waves'),_vm._ssrNode(" <div id=\"Techsup\" class=\"techsup\" data-v-bc001a1c><div class=\"container\" data-v-bc001a1c><div class=\"row\" data-v-bc001a1c><div id=\"main\" style=\"text-align: center\" data-v-bc001a1c><h1 class=\"blink-text\" style=\"font-family: cursive\" data-v-bc001a1c><i aria-hidden=\"true\" class=\"fa fa-wrench\" data-v-bc001a1c></i> Soporte Técnico TI\n            <i aria-hidden=\"true\" class=\"fa fa-wrench\" data-v-bc001a1c></i></h1> <h4 style=\"text-allign: center; font-family: cursive\" data-v-bc001a1c>\n            Remoto o a domicilio en la zona GAM.\n          </h4> <p style=\"font-family: cursive\" data-v-bc001a1c>\n            Con más de 8 años de experiencia en el campo.\n          </p></div></div></div></div> <div class=\"container\" data-v-bc001a1c><p style=\"font-size: 16px; color: skyblue; font-weight: bold\" data-v-bc001a1c>\n      Diagnostico preventivo &amp; correctivo\n    </p> <img"+(_vm._ssrAttr("src",__webpack_require__(467)))+" align=\"middle\" style=\"width: 100%\" data-v-bc001a1c> <p data-v-bc001a1c>\n      Reviva su computador viejo, de bajos recursos o que creia completamente\n      inservible con nuestro plan de restauración, ademas poseemos diferentes\n      distribuiciones de Ubuntu(Linux) construídos para trabajar con bajos\n      recursos, funciona completamente increible!\n    </p></div> <div class=\"why\" data-v-bc001a1c><div class=\"container\" data-v-bc001a1c><div class=\"row\" data-v-bc001a1c><h2 class=\"blink-text\" style=\"font-family: cursive\" data-v-bc001a1c>\n          ¿Por que mi equipo necesita soporte técnico?\n        </h2> <div class=\"col-sm-12 col-md-4 col-lg-4\" data-v-bc001a1c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25%\" height=\"25%\" viewBox=\"0 0 16 16\" class=\"bi bi-laptop\" data-v-bc001a1c><path d=\"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z\" data-v-bc001a1c></path></svg> <p data-v-bc001a1c>\n            Tanto el mantenimiento preventivo como el mantenimiento correctivo\n            cuentan con distintas ventajas e inconvenientes que te resumimos a\n            continuación. Desde NeighborDev recomendamos el mantenimiento\n            preventivo como mejor opción para garantizar un funcionamiento\n            óptimo de tu sistema, sin sorpresas ni fallos que puedan costarte\n            tiempo y dinero.\n          </p></div> <div class=\"col-sm-12 col-md-4 col-lg-4\" data-v-bc001a1c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25%\" height=\"25%\" viewBox=\"0 0 16 16\" data-v-bc001a1c><path d=\"M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z\" data-v-bc001a1c></path></svg> <p data-v-bc001a1c>\n            La revisión del estado físico de los equipos y servidores, así como\n            el de la instalación del sistema operativo, de copia de seguridad,\n            comprobación de antivirus, soporte telefónico o remoto e informes\n            mensuales. Ello permite mejorar la productividad hasta en 25%,\n            reducir en un 30% los costos de mantenimiento y alargar la vida útil\n            de la maquinaria y equipo hasta en un 50%.\n          </p></div> <div class=\"col-sm-12 col-md-4 col-lg-4\" data-v-bc001a1c><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25%\" height=\"25%\" viewBox=\"0 0 16 16\" data-v-bc001a1c><path d=\"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z\" data-v-bc001a1c></path></svg> <p data-v-bc001a1c>\n            Nuestro personal técnico está en un continuo plan de formación,\n            reciclaje y certificación, ya sea en plataforma Microsoft como en\n            plataforma Apple. Estamos a la vanguardia de las nuevas aplicaciones\n            para ofrecer siempre la mejor respuesta\n          </p></div></div></div></div> <hr style=\"width: 50%\" data-v-bc001a1c> <h2 class=\"blink-text\" data-v-bc001a1c><span data-v-bc001a1c> Servicios:</span></h2> <div class=\"container flexed\" data-v-bc001a1c><div class=\"row\" data-v-bc001a1c><div class=\"col-12 col-md-6 col-lg-6\" style=\"text-align: center\" data-v-bc001a1c><h3 data-v-bc001a1c>Software:</h3> <img"+(_vm._ssrAttr("src",__webpack_require__(468)))+" align=\"middle\" style=\"width: 50%\" data-v-bc001a1c> <li data-v-bc001a1c><ol data-v-bc001a1c>\n            Mantenimiento preventivo y/o correctivo\n          </ol> <ol data-v-bc001a1c>\n            Instalación y actualización de sistemas operativos (Windows, Linux,\n            etc.)\n          </ol> <ol data-v-bc001a1c>\n            Instalación de drivers y aplicaciones relacionadas al hardware\n          </ol> <ol data-v-bc001a1c>\n            Instalación (Office, Photoshop, Corel, Autocad, etc.)\n          </ol> <ol data-v-bc001a1c>\n            Instalación de software antivirus/antimalware\n          </ol></li></div> <div class=\"col-12 col-md-6 col-lg-6\" style=\"text-align: center\" data-v-bc001a1c><h3 data-v-bc001a1c>Hardware:</h3> <img"+(_vm._ssrAttr("src",__webpack_require__(469)))+" align=\"middle\" style=\"width: 50%\" data-v-bc001a1c> <li data-v-bc001a1c><ol data-v-bc001a1c><ol data-v-bc001a1c>\n              Mantenimiento preventivo y/o correctivo\n            </ol>\n\n            Limpieza y mantenimiento físico de componentes internos (Alcohol\n            isopropilico).\n          </ol> <ol data-v-bc001a1c>\n            Soluciones a problemas de recalentamiento y temperatura alta (Cambio\n            pasta térmica.)\n          </ol> <ol data-v-bc001a1c>\n            Armado &amp; Actualización de componentes. (HDD/GPU/RAM/PS/etc.)\n          </ol></li></div></div></div> <hr class=\"center\" style=\"width: 50%\" data-v-bc001a1c> <div class=\"card-content\" style=\"font-family: cursive; text-align: center\" data-v-bc001a1c>\n     Recuperación y migración de datos del disco duro (HDD)\n  </div> <div class=\"card-content\" style=\"font-family: cursive; text-align: center\" data-v-bc001a1c>\n     Administración servidores Linux/Windows Serverless &amp; Cloud\n  </div> <hr class=\"center\" style=\"width: 50%\" data-v-bc001a1c> <img"+(_vm._ssrAttr("src",__webpack_require__(470)))+" align=\"middle\" style=\"width: 80%; padding-left: 20%\" data-v-bc001a1c> <p data-v-bc001a1c>\n      Utilizo Anydesk, Chrome o Microsoft Remote Desktop para realizar soporte,\n      instalaciones &amp; reparación de software remotamente. (Pago necesario)\n    </p> <hr class=\"center\" style=\"width: 50%\" data-v-bc001a1c>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/soporte/body/index.vue?vue&type=template&id=bc001a1c&scoped=true&

// EXTERNAL MODULE: ./components/Waves/index.vue + 4 modules
var Waves = __webpack_require__(361);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/soporte/body/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Bodytech",
  components: {
    Waves: Waves["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/soporte/body/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var soporte_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/soporte/body/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(471)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  soporte_bodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc001a1c",
  "b76f773e"
  
)

/* harmony default export */ var body = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map