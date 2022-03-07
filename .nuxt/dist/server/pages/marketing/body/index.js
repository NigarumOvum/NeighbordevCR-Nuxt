exports.ids = [17];
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

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marketing1.4f8a072.png";

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/markk1.65b365b.png";

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(466);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("033f3ce5", content, true, context)
};

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sem.daf160d.png";

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marke19.b910adc.png";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/emark.d85032a.png";

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ADS.e27211d.png";

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Problems.c7adee8.png";

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-left-image.3ab577f.png";

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1,h2,h3,h4,h5,p{text-align:center;font-family:cursive}p{font-size:12px}h1{padding-top:5px;color:#3c00ff}h2{color:#00a2ff}h3{color:#004cff}hr{color:#5100ff}li{font-family:cursive;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketing/body/index.vue?vue&type=template&id=41fb7ac3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Waves'),_vm._ssrNode(" <div id=\"Marketing\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\" class=\"main-banner fadeIn\"><h1 class=\"center blink-text\" style=\"font-family: cursive\">\n      Marketing Digital\n    </h1> <div class=\"container\"><div class=\"col-lg-12\"><div class=\"row\"><div class=\"col-lg-6 align-self-center\"><div data-wow-duration=\"1s\" data-wow-delay=\"1s\" class=\"left-content header-text fadeInLeft\"><img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt=\"team meeting\" style=\"margin-top: 50px\"></div></div> <div class=\"col-lg-6\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.5s\" class=\"right-image fadeInRight\"></div></div></div></div></div> <h1 class=\"center blink-text\" style=\"font-family: cursive\">\n      Manejo Redes Sociales\n    </h1> <hr class=\"center\" style=\"width: 50%\"> <h3 class=\"blink-text\" style=\"text-align: cente; font-family: cursive\">\n      Nuestros Servicios\n    </h3> <img"+(_vm._ssrAttr("src",__webpack_require__(422)))+" style=\"width: 100%; max-width: 100%; height: 100%; max-height: 100%\"> <div class=\"container\"><div style=\"text-align: center; background-color: white\"><img"+(_vm._ssrAttr("src",__webpack_require__(422)))+" width=\"90%\" height=\"50%\"></div></div></div> <div class=\"padded\"><div class=\"row\" style=\"justify-content: center\"><h2 class=\"blink-text\" style=\"text-align: center; font-family: cursive\">\n        1. Optimización Motores de Busqueda ó SEO (Search Engine Optimization)\n      </h2> <img src=\"assets/images/seo.png\" style=\"width: 50%; max-width: 50%; height: 100%; max-height: 100%\"> <p style=\"font-weight: bold; text-align: center; font-size: 12px\">\n        La Inversión en estrategias SEO hoy en día son la clave para que tu\n        página web crezca con las últimas tendencias, estrategias y activos\n        creativos relevantes para construir audiencia y obtener más ventas por\n        medio de conversión continua. Aumenta el tráfico, las ventas online y\n        convierte a más visitantes en futuros clientes de tu negocio con las más\n        precisas estrategias SEO de nuestra parte.\n      </p></div> <div class=\"row\" style=\"justify-content: center\"><h2 class=\"blink-text\" style=\"text-align: center; font-family: cursive\">\n        2. Optimización Motores de Mercadeo ó SEM (Search Engine Optimization)\n      </h2> <img"+(_vm._ssrAttr("src",__webpack_require__(459)))+" style=\"width: 50%; max-width: 50%; height: 100%; max-height: 100%\"> <p style=\"font-weight: bold; text-align: center; font-size: 12px\">\n        El SEM es el uso de herramientas y estrategias que nos ayudan a\n        optimizar la visibilidad y a aumentar la accesibilidad de los sitios y\n        páginas web gracias a los motores de los buscadores. Son además los\n        propios buscadores quien muchas veces nos ofrecen esas herramientas para\n        publicitarnos en sus medios de búsqueda. Gracias a anuncios patrocinados\n        en esos buscadores se genera tráfico de calidad a la web. Esto implica\n        actividades como la búsqueda de palabras clave, la creación de anuncios\n        y la gestión de pujas. También se conoce como PPC (Pay Per Click) y CPC\n        (Cost Per Click).\n      </p></div> <div class=\"row\" style=\"justify-content: center\"><h2 class=\"blink-text\" style=\"text-align: center; font-family: cursive\">\n        3. Manejo de Redes Sociales (Social Media Management)\n      </h2> <img"+(_vm._ssrAttr("src",__webpack_require__(460)))+" style=\"width: 60%; max-width: 60%; height: 100%; max-height: 100%\"> <div class=\"col-12 col-md-12 col-lg-12\"><p style=\"font-weight: bold; text-align: center; font-size: 12px\">\n          ¡Imagínate ni siquiera tener que pensar en las redes sociales a\n          diario! Ademas te ayudamos a crear una comunidad sana que estará\n          pendiente de tus comunicaciones y dispuestas a comprarte\n          recurrentemente con la generacion de contenifo. Creamos estrategias\n          eficientes y completas en distintas redes sociales, deja tu imagen\n          digital en manos de expertos, en NeighborDev estamos a tu servicio,\n          conversemos y convirtamos juntos tu marca en un caso de éxito.\n        </p></div></div> <div class=\"row\" style=\"justify-content: center\"><h2 class=\"blink-text\" style=\"text-align: center; font-family: cursive\">\n        4. Campañas E-mail\n      </h2> <img"+(_vm._ssrAttr("src",__webpack_require__(461)))+" style=\"width: 60%; max-width: 60%; height: 100%; max-height: 100%\"> <div class=\"col-12 col-md-12 col-lg-12\"><p style=\"font-weight: bold; text-align: center; font-size: 12px\">\n          Email Marketing (o marketing por correo electrónico) es toda\n          comunicación realizada por email entre una empresa y sus contactos (o\n          clientes). Una campaña de Email Marketing puede ser desarrollada en\n          texto o HTML y contener promociones, contenidos, etc. En general, se\n          envían con una herramienta de disparo de emails.\n        </p></div></div> <div class=\"row\" style=\"justify-content: center\"><h4 class=\"blink-text\" style=\"text-align: center; font-family: cursive\">\n        5.Publicidad\n      </h4> <img"+(_vm._ssrAttr("src",__webpack_require__(462)))+" style=\"\\n          width: 60%;\\n          max-width: 60%;\\n          height: 100%;\\n          max-height: 100%;\\n          justify-content: center;\\n        \"> <div class=\"row\"><div class=\"col-sm-6 col-6 col-md-6 col-lg-12\"><p style=\"font-weight: bold; text-align: center; font-size: 11px\">\n            Sácale el mejor rendimiento a tus campañas con el mejor retorno con\n            nuestra ayuda. Llega a más y mejores clientes con las campañas\n            pagadas de Google/ Bing/ Facebook/ Instagram/ Youtube Ads.\n          </p></div> <div class=\"col-sm-6 col-6 col-md-6 col-lg-12\"><p style=\"font-weight: bold; text-align: center; font-size: 11px\">\n            Atrae más clientes a tu tienda con anuncios que permitan ubicarla en\n            el mapa (ROI). Aumenta las llamadas de clientes mediante anuncios\n            que les permitan contactarte con un solo clic (PCP).\n          </p></div></div></div> <h2 class=\"gradient\" style=\"text-align: center\">Problemas a resolver</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(463)))+"> <div id=\"#portfolio\" class=\"our-portfolio section\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 offset-lg-3\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.2s\" class=\"section-heading\"><h2>\n                Echa un vistazo<em> a lo que </em> Podemos\n                <span>Ofrecerte</span></h2></div></div></div> <div class=\"row\"><div class=\"col-12 col-md-3 col-lg-3\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.3s\" class=\"item bounceInUp\"><div class=\"hidden-content\"><h4>Analisis SEO</h4> <p style=\"font-size: 10px\">\n                  The ayudamos a usar las mejores prácticas Search Engine\n                  Optimization para obtener más visitantes de acuerdo con lo que\n                  buscan y sus intereses.\n                </p></div> <div class=\"showed-content\"><img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt></div></div></div> <div class=\"col-12 col-md-3 col-lg-3\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.4s\" class=\"item bounceInUp\"><div class=\"hidden-content\"><h4>Reporte Sitio Web</h4> <p style=\"font-size: 10px\">\n                  Elaboramos reportes completos de velocidad de las visitas,\n                  clicks, conversiones que ha tenido su Sitio Web, y saber como\n                  los usuarios interactúan.\n                </p></div> <div class=\"showed-content\"><img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt></div></div></div> <div class=\"col-12 col-md-3 col-lg-3\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.5s\" class=\"item bounceInUp\"><div class=\"hidden-content\"><h4>Pruebas De Rendimiento</h4> <p style=\"font-size: 10px\">\n                  Elaboramos reportes completos sobre el rendimiento, velocidad\n                  de carga, practicas seguras, coherencia de contenido para\n                  mantener la mejor experiencia del usuario.\n                </p></div> <div class=\"showed-content\"><img"+(_vm._ssrAttr("src",__webpack_require__(367)))+" alt></div></div></div></div></div></div></div> <hr class=\"center\" style=\"width: 50%\"> <div class=\"container\"><h2 class=\"title-small\" style=\"text-align: center\"><span>Pasos</span></h2> <section class=\"dl-blurbs\"><dl><dt>Reunión Inicial</dt> <dd>\n          En sólo unos minutos identificaremos bien el estado de tu negocio y\n          trabajaremos duro para promoverlo en la red.\n        </dd> <dt>Planeación Estratégica</dt> <dd>Basaremos la gestión en objetivos medibles y todo planificado.</dd> <dt>ejecución Controlada</dt> <dd>\n          Al tener claros los objetivos se tienen claras las responsabilidades y\n          los tiempos de ejecución.\n        </dd></dl> <dl><dt>Pruebas</dt> <dd>\n          Ante todo las pruebas, realizaremos pruebas previas a las puestas en\n          producción\n        </dd> <dt>Entrega</dt> <dd>Será efectiva y oportuna, ya que se trabajará en equipo</dd> <dt>Planes Personalizados</dt> <dd>\n          Creación de planes personalizados de marketing en redes sociales que\n          conectan a los clientes con su negocio\n        </dd></dl></section></div> <hr class=\"center\" style=\"width: 50%\"> <div id=\"#about\" class=\"about-us section\"><div class=\"row\"><div class=\"section-heading\"><h2 style=\"text-align: center\">\n          Haz que tu sitio web <em>crezca</em> con <span>nuestras</span> ideas\n        </h2></div> <div class=\"col-lg-4\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.2s\" class=\"left-image fadeIn\"><img"+(_vm._ssrAttr("src",__webpack_require__(464)))+" alt=\"person graphic\"></div></div> <div class=\"col-lg-6\"><div id=\"services\" class=\"our-services section\"><div class=\"container\"><div class=\"row\"><div data-wow-duration=\"1s\" data-wow-delay=\"0.2s\" class=\"col-lg-6 align-self-center fadeInLeft\"><div class=\"left-image\"></div></div> <div data-wow-duration=\"1s\" data-wow-delay=\"0.2s\" class=\"col-lg-6 wow fadeInRight\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"third-bar progress-skill-bar\"><h4>Analisis &amp; Reportes SEO</h4> <span>90%</span> <div class=\"filled-bar\"></div> <div class=\"full-bar\"></div></div></div> <div class=\"col-lg-12\"><div class=\"third-bar progress-skill-bar\"><h4>Marketing Digital</h4> <span>90%</span> <div class=\"filled-bar\"></div> <div class=\"full-bar\"></div></div></div> <div class=\"col-lg-12\"><div class=\"third-bar progress-skill-bar\"><h4>ADS</h4> <span>90%</span> <div class=\"filled-bar\"></div> <div class=\"full-bar\"></div></div></div> <div class=\"col-lg-12\"><div class=\"third-bar progress-skill-bar\"><h4>Community Management</h4> <span>90%</span> <div class=\"filled-bar\"></div> <div class=\"full-bar\"></div></div></div></div></div></div></div></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/marketing/body/index.vue?vue&type=template&id=41fb7ac3&

// EXTERNAL MODULE: ./components/Waves/index.vue + 4 modules
var Waves = __webpack_require__(362);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketing/body/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MarketingHome",
  components: {
    Waves: Waves["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/marketing/body/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketing_bodyvue_type_script_lang_js_ = (bodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/marketing/body/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(465)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  marketing_bodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2c4d3e63"
  
)

/* harmony default export */ var body = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map