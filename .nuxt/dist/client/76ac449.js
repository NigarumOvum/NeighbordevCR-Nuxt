(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{592:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("12a190a6",content,!0,{sourceMap:!1})},593:function(t,e,n){var o=n(5)(!1);o.push([t.i,".use-text-title{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-application--is-rtl .use-rtl-flip{transform:scale(-1)}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},604:function(t,e,n){var content=n(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("17d503c6",content,!0,{sourceMap:!1})},624:function(t,e,n){"use strict";n(12),n(9),n(10),n(15),n(11),n(16);var o=n(84),d=n(0),r=(n(26),n(83),n(592),n(348),n(78)),l=n(66),c=n(252),m=["title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return h(h({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",h(h({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},637:function(t,e,n){"use strict";n(604)},638:function(t,e,n){var o=n(5)(!1);o.push([t.i,'.use-text-title[data-v-55ef7957]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-55ef7957]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-55ef7957]{font-size:28px;line-height:44px}}.use-text-title2[data-v-55ef7957]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-55ef7957]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-55ef7957]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-55ef7957]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-55ef7957]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-55ef7957]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-55ef7957]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-55ef7957]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-55ef7957]{font-size:16px;line-height:24px}}.use-text-caption[data-v-55ef7957],.use-text-paragraph[data-v-55ef7957]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-55ef7957]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-55ef7957]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-55ef7957]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-55ef7957]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-55ef7957]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-55ef7957]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-55ef7957]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-55ef7957]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-55ef7957]{transform:scale(-1)}.page-wrap[data-v-55ef7957]{min-height:100%;position:relative;width:100%;align-items:center}@media(min-width:960px){.page-wrap[data-v-55ef7957]{display:flex}}.page-wrap a[data-v-55ef7957]{text-transform:none;font-size:16px;text-decoration:none;font-weight:400}.theme--light .page-wrap a[data-v-55ef7957]{color:var(--v-primary-base)}.theme--dark .page-wrap a[data-v-55ef7957]{color:var(--v-primarylight-base)}@media(max-width:599px){.page-wrap a[data-v-55ef7957]{font-size:14px}}.full-form-wrap[data-v-55ef7957]{padding-top:64px}@media(max-width:599px){.full-form-wrap[data-v-55ef7957]{padding-top:32px}}.v-card.form-box[data-v-55ef7957]{overflow:hidden;background:transparent;border:1px solid var(--v-primary-base)}@media(min-width:960px){.v-card.form-box.map-form[data-v-55ef7957]{border-top-right-radius:0;border-bottom-right-radius:0;border-right:none}}.desc[data-v-55ef7957]{text-align:center;padding:0 80px}@media(max-width:599px){.desc[data-v-55ef7957]{padding:0 16px}}.form[data-v-55ef7957]{position:relative;margin-top:64px;padding:0 64px 80px}@media(max-width:1279px){.form[data-v-55ef7957]{padding:0 32px 64px}}@media(max-width:599px){.form[data-v-55ef7957]{padding:0 16px 64px}}.form-helper[data-v-55ef7957]{display:flex;justify-content:space-between;align-items:flex-start;font-size:14px}@media(max-width:599px){.form-helper[data-v-55ef7957]{flex-direction:column;align-items:center;justify-content:center}}.btn-area[data-v-55ef7957]{justify-content:space-between}@media(min-width:960px){.btn-area[data-v-55ef7957]{margin-top:24px;display:flex}}@media(max-width:959px){.btn-area button[data-v-55ef7957]{margin-top:32px;width:100%}}@media(max-width:599px){.btn-area[data-v-55ef7957]{margin-top:16px;margin-bottom:24px}}.btn-area button.v-btn.v-size--large[data-v-55ef7957]{margin-top:16px;min-height:48px;min-width:180px}.btn-area span a.link[data-v-55ef7957]{text-decoration:none!important;color:var(--v-secondary-base)}.btn-area.flex[data-v-55ef7957]{display:flex;justify-content:space-between}@media(max-width:959px){.btn-area.flex[data-v-55ef7957]{display:block}}[dir=ltr] .right-icon[data-v-55ef7957]{margin-left:8px}[dir=rtl] .right-icon[data-v-55ef7957]{margin-right:8px}.check svg[data-v-55ef7957]{fill:var(--v-secondary-base)}.auth-frame[data-v-55ef7957]{display:block;position:relative}.auth-frame .row>div[data-v-55ef7957]{padding:0}.greeting[data-v-55ef7957]{display:flex;padding-top:40px;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;text-align:center}.greeting h6[data-v-55ef7957]{color:var(--v-primary-base);font-weight:400}.img[data-v-55ef7957]{margin:40px 0}.head[data-v-55ef7957]{text-align:center;margin-bottom:40px;text-transform:capitalize}@media(max-width:959px){.head[data-v-55ef7957]{margin-top:16px;justify-content:center}.head a[data-v-55ef7957]{display:none}}.form-wrap[data-v-55ef7957]{position:relative;padding:0 8px}.theme--light .form-wrap[data-v-55ef7957]{background-color:rgba(0,183,255,.512)}.theme--dark .form-wrap[data-v-55ef7957]{background-color:rgba(55,0,255,.4902)}@media(min-width:600px){.form-wrap[data-v-55ef7957]{padding:40px}}.socmed-side-login[data-v-55ef7957]{display:flex;justify-content:space-around}@media(max-width:1279px){.socmed-side-login[data-v-55ef7957]{justify-content:center}}@media(max-width:599px){.socmed-side-login[data-v-55ef7957]{display:block}}.socmed-side-login>*[data-v-55ef7957]{color:#fff;width:150px;padding:8px}@media(max-width:1279px){.socmed-side-login>*[data-v-55ef7957]{margin:0 4px;width:120px}}@media(max-width:599px){.socmed-side-login>*[data-v-55ef7957]{margin:0 0 16px;width:100%}}.socmed-side-login i[data-v-55ef7957]{color:#fff}[dir=ltr] .socmed-side-login i[data-v-55ef7957]{margin-right:8px}[dir=rtl] .socmed-side-login i[data-v-55ef7957]{margin-left:8px}.blue-btn[data-v-55ef7957]{background:#28aae1!important}.blue-btn[data-v-55ef7957]:hover{background:#146a8f!important}.navi-btn[data-v-55ef7957]{background:#3b579d!important}.navi-btn[data-v-55ef7957]:hover{background:#1f2e53!important}.red-btn[data-v-55ef7957]{background:#dd493c!important}.red-btn[data-v-55ef7957]:hover{background:#98251b!important}.separator[data-v-55ef7957]{margin:40px auto;max-width:300px;min-width:200px;text-align:center;position:relative}.theme--light .separator[data-v-55ef7957]{color:rgba(0,0,0,.54)}.theme--dark .separator[data-v-55ef7957]{color:hsla(0,0%,100%,.7)}@media(max-width:599px){.separator p[data-v-55ef7957]{font-size:12px}}.separator[data-v-55ef7957]:after,.separator[data-v-55ef7957]:before{content:"";border-top:1px solid;top:50%;position:absolute;width:20%}.theme--light .separator[data-v-55ef7957]:after,.theme--light .separator[data-v-55ef7957]:before{border-top-color:rgba(0,0,0,.38)}.theme--dark .separator[data-v-55ef7957]:after,.theme--dark .separator[data-v-55ef7957]:before{border-top-color:hsla(0,0%,100%,.5)}.separator[data-v-55ef7957]:before{left:0}.separator[data-v-55ef7957]:after{right:0}.form-control-label a[data-v-55ef7957]{position:relative;top:-20px}.form-control-label>div[data-v-55ef7957]{margin-top:0}.map[data-v-55ef7957]{position:relative;z-index:20;overflow:hidden;color:rgba(0,0,0,.87);box-shadow:0 0 20px 1px rgba(0,0,0,.4);height:745px}@media(max-width:959px){.map[data-v-55ef7957]{height:300px!important}}@media(min-width:960px){.map[data-v-55ef7957]{border-radius:0 12px 12px 0!important}}.map[data-v-55ef7957]  .GMap__Wrapper{height:745px}@media(max-width:959px){.map[data-v-55ef7957]  .GMap__Wrapper{height:300px!important}}.map.full[data-v-55ef7957],.map.full[data-v-55ef7957]  .GMap__Wrapper{height:952px}.bubel-wrap[data-v-55ef7957]{height:300px;position:relative}.icon[data-v-55ef7957]{color:#607d8b;font-size:16px}[dir=ltr] .icon[data-v-55ef7957]{margin-right:8px}[dir=rtl] .icon[data-v-55ef7957]{margin-left:8px}',""]),t.exports=o},692:function(t,e,n){"use strict";var o={components:{Hidden:n(250).a},data:function(){return{currentLocation:{},locations:[{lat:44.933076,lng:15.629058}],valid:!0,snackbar:!1,name:"",nameRules:[function(t){return!!t||"Name is required"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],phone:"",company:"",message:"",checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)}},props:{full:{type:Boolean,default:!1}}},d=(n(637),n(7)),r=n(17),l=n.n(r),c=n(581),m=n(553),x=n(624),h=n(570),f=n(582),v=n(572),w=n(189),k=n(571),y=n(573),_=n(153),z=n(574),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrap"},[n("v-snackbar",{staticClass:"notification",attrs:{timeout:4e3,top:"",right:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("div",{staticClass:"action"},[t._v("\n      Message Sent\n    ")]),t._v(" "),n("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){t.snackbar=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-container",{staticClass:"inner-wrap"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pe-md-0 wrap-deco",attrs:{md:"6",cols:"12"}},[n("v-card",{staticClass:"form-box",class:{"map-form":t.full}},[n("div",{staticClass:"form"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"use-text-title2 mb-3"},[t._v("\n                "+t._s(t.$t("common.contact_title2"))+"\n              ")]),t._v(" "),n("p",[t._v("Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.")])]),t._v(" "),n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"spacing6"},[n("v-col",{staticClass:"px-6",attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{rules:t.nameRules,label:t.$t("common.form_name"),required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("v-col",{staticClass:"px-6",attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:t.$t("common.form_email"),required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("v-col",{staticClass:"px-6",attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:t.$t("common.form_phone")},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),n("v-col",{staticClass:"px-6",attrs:{cols:"12"}},[n("v-textarea",{attrs:{rows:"6",label:t.$t("common.form_message")},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),t._v(" "),n("div",{staticClass:"form-control-label"},[n("v-checkbox",{attrs:{color:"secondary",rules:[function(t){return!!t||"You must agree to continue!"}],label:t.$t("common.form_terms"),required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),n("span",[n("a",{staticClass:"link",attrs:{href:"#"}},[t._v("\n                    "+t._s(t.$t("common.form_privacy"))+"\n                  ")])])],1),t._v(" "),n("div",{staticClass:"btn-area"},[n("v-btn",{attrs:{large:"",block:"",color:"primary"},on:{click:t.validate}},[t._v("\n                  "+t._s(t.$t("common.form_send"))+"\n                ")])],1)],1)],1)])],1),t._v(" "),n("v-col",{staticClass:"ps-md-0",attrs:{md:"6",cols:"12"}},[n("v-card",{staticClass:"map",class:{full:t.full},attrs:{raised:""}},[n("GMap",{ref:"gMap",attrs:{center:{lat:t.locations[0].lat,lng:t.locations[0].lng},options:{fullscreenControl:!1},zoom:6}},t._l(t.locations,(function(e){return n("GMapMarker",{key:e.id,ref:"gMarker",refInFor:!0,attrs:{position:{lat:e.lat,lng:e.lng}}},[n("GMapInfoWindow",[n("div",{staticClass:"bubel"},[n("h6",{staticClass:"title pb-2 px-3"},[t._v("\n                    Head Quarter\n                  ")]),t._v(" "),n("v-row",{staticClass:"ma-3"},[n("v-col",{staticClass:"pa-0",attrs:{item:"",sm:"6",cols:"12"}},[n("p",[n("v-icon",{staticClass:"icon"},[t._v("mdi-phone")]),t._v("\n                        +98 765 432 10\n                      ")],1)]),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{item:"",sm:"6",cols:"12"}},[n("p",[n("v-icon",{staticClass:"icon"},[t._v("mdi-email")]),t._v("\n                        hello@luxi.com\n                      ")],1)]),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{item:"",sm:"12",cols:"12"}},[n("p",[n("v-icon",{staticClass:"icon"},[t._v("mdi-map-marker")]),t._v("\n                        Lorem ipsum street Block C - Vestibullum Building\n                      ")],1)])],1)],1)])],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,"55ef7957",null);e.a=component.exports;l()(component,{VBtn:c.a,VCard:m.a,VCheckbox:x.a,VCol:h.a,VContainer:f.a,VForm:v.a,VIcon:w.a,VRow:k.a,VSnackbar:y.a,VTextField:_.a,VTextarea:z.a})},749:function(t,e,n){var content=n(893);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("894d6f12",content,!0,{sourceMap:!1})},892:function(t,e,n){"use strict";n(749)},893:function(t,e,n){var o=n(5)(!1);o.push([t.i,".use-text-title[data-v-162e739c]{font-weight:700;font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-162e739c]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-162e739c]{font-size:28px;line-height:44px}}.use-text-title2[data-v-162e739c]{font-size:36px;line-height:56px;font-weight:700}@media(max-width:1279px){.use-text-title2[data-v-162e739c]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-162e739c]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-162e739c]{font-weight:500;font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-162e739c]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-162e739c]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-162e739c]{font-weight:400;font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-162e739c]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-162e739c]{font-size:16px;line-height:24px}}.use-text-caption[data-v-162e739c],.use-text-paragraph[data-v-162e739c]{font-weight:400;font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-162e739c]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-162e739c]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-162e739c]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-162e739c]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-162e739c]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-162e739c]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-162e739c]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-162e739c]{display:none}}.v-application--is-rtl .use-rtl-flip[data-v-162e739c]{transform:scale(-1)}.main-wrap[data-v-162e739c]{position:relative;width:100%;overflow:hidden}.space-bottom[data-v-162e739c]{margin-bottom:120px}@media(max-width:1279px){.space-bottom[data-v-162e739c]{margin-bottom:90px}}.space-top[data-v-162e739c]{margin-top:120px}@media(max-width:1279px){.space-top[data-v-162e739c]{margin-top:90px}}.space-bottom-short[data-v-162e739c]{margin-bottom:60px}.space-top-short[data-v-162e739c]{margin-top:60px}.container-wrap>section[data-v-162e739c]{position:relative}.container-general[data-v-162e739c]{position:relative;padding-top:32px;margin-top:56px;margin-bottom:40px}@media(min-width:600px){.container-general[data-v-162e739c]{padding-left:32px;padding-right:32px}}.full-screen-container[data-v-162e739c]{height:100vh;display:flex}.maintenance-icon[data-v-162e739c]{border-radius:50%;margin:8px;padding:16px}.maintenance-icon.v-icon[data-v-162e739c]{font-size:48px}.theme--light .maintenance-icon[data-v-162e739c]{background:#30f}.theme--dark .maintenance-icon[data-v-162e739c]{background:#0cf}@media(min-width:600px){.maintenance-icon[data-v-162e739c]{padding:24px;margin:24px}}",""]),t.exports=o},936:function(t,e,n){"use strict";n.r(e);n(33);var o=n(82),d=n(251),r=n(249),l=n(692),c={components:{"main-header":d.a,"main-footer":r.a,ContactMap:l.a},head:function(){return{title:o.a.starter.name+" - Ubicanos en el mapa"}},computed:{isMobile:function(){return this.$store.state.breakpoints.xsDown.indexOf(this.$mq)>-1}}},m=(n(892),n(7)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-header"),t._v(" "),n("div",{staticClass:"space-top"},[n("contact-map")],1),t._v(" "),n("main-footer")],1)}),[],!1,null,"162e739c",null);e.default=component.exports}}]);