import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7f8dff8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6f35defc = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _95952eb4 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _5a1176e3 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6434565f = () => interopDefault(import('../pages/collection/index.vue' /* webpackChunkName: "pages/collection/index" */))
const _099d96d5 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _75ab331b = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _42446edb = () => interopDefault(import('../pages/marketing/index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _07fd683e = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _02936846 = () => interopDefault(import('../pages/soporte/index.vue' /* webpackChunkName: "pages/soporte/index" */))
const _864f797c = () => interopDefault(import('../pages/webdev/index.vue' /* webpackChunkName: "pages/webdev/index" */))
const _28a06d5d = () => interopDefault(import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */))
const _de866622 = () => interopDefault(import('../pages/blog/detail-blog.vue' /* webpackChunkName: "pages/blog/detail-blog" */))
const _03f1cf94 = () => interopDefault(import('../pages/collection/detail-product.vue' /* webpackChunkName: "pages/collection/detail-product" */))
const _134a7de7 = () => interopDefault(import('../pages/collection/products.vue' /* webpackChunkName: "pages/collection/products" */))
const _201730bc = () => interopDefault(import('../pages/contact/with-map.vue' /* webpackChunkName: "pages/contact/with-map" */))
const _44ee5f28 = () => interopDefault(import('../pages/marketing/body/index.vue' /* webpackChunkName: "pages/marketing/body/index" */))
const _6222c4aa = () => interopDefault(import('../pages/soporte/body/index.vue' /* webpackChunkName: "pages/soporte/body/index" */))
const _3b9ba51b = () => interopDefault(import('../pages/utils/coming-soon.vue' /* webpackChunkName: "pages/utils/coming-soon" */))
const _34fc402c = () => interopDefault(import('../pages/utils/faq.vue' /* webpackChunkName: "pages/utils/faq" */))
const _72ee0567 = () => interopDefault(import('../pages/utils/maintenance.vue' /* webpackChunkName: "pages/utils/maintenance" */))
const _8393c2cc = () => interopDefault(import('../pages/utils/pricing.vue' /* webpackChunkName: "pages/utils/pricing" */))
const _79fca465 = () => interopDefault(import('../pages/webdev/body/index.vue' /* webpackChunkName: "pages/webdev/body/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/de",
    component: _a7f8dff8,
    name: "index___de"
  }, {
    path: "/en",
    component: _a7f8dff8,
    name: "index___en"
  }, {
    path: "/es",
    component: _a7f8dff8,
    name: "index___es"
  }, {
    path: "/pt",
    component: _a7f8dff8,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _a7f8dff8,
    name: "index___zh"
  }, {
    path: "/de/about",
    component: _6f35defc,
    name: "about___de"
  }, {
    path: "/de/blank-page",
    component: _95952eb4,
    name: "blank-page___de"
  }, {
    path: "/de/blog",
    component: _5a1176e3,
    name: "blog___de"
  }, {
    path: "/de/collection",
    component: _6434565f,
    name: "collection___de"
  }, {
    path: "/de/contact",
    component: _099d96d5,
    name: "contact___de"
  }, {
    path: "/de/login",
    component: _75ab331b,
    name: "login___de"
  }, {
    path: "/de/marketing",
    component: _42446edb,
    name: "marketing___de"
  }, {
    path: "/de/register",
    component: _07fd683e,
    name: "register___de"
  }, {
    path: "/de/soporte",
    component: _02936846,
    name: "soporte___de"
  }, {
    path: "/de/webdev",
    component: _864f797c,
    name: "webdev___de"
  }, {
    path: "/en/about",
    component: _6f35defc,
    name: "about___en"
  }, {
    path: "/en/blank-page",
    component: _95952eb4,
    name: "blank-page___en"
  }, {
    path: "/en/blog",
    component: _5a1176e3,
    name: "blog___en"
  }, {
    path: "/en/collection",
    component: _6434565f,
    name: "collection___en"
  }, {
    path: "/en/contact",
    component: _099d96d5,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _75ab331b,
    name: "login___en"
  }, {
    path: "/en/marketing",
    component: _42446edb,
    name: "marketing___en"
  }, {
    path: "/en/register",
    component: _07fd683e,
    name: "register___en"
  }, {
    path: "/en/soporte",
    component: _02936846,
    name: "soporte___en"
  }, {
    path: "/en/webdev",
    component: _864f797c,
    name: "webdev___en"
  }, {
    path: "/es/about",
    component: _6f35defc,
    name: "about___es"
  }, {
    path: "/es/blank-page",
    component: _95952eb4,
    name: "blank-page___es"
  }, {
    path: "/es/blog",
    component: _5a1176e3,
    name: "blog___es"
  }, {
    path: "/es/collection",
    component: _6434565f,
    name: "collection___es"
  }, {
    path: "/es/contact",
    component: _099d96d5,
    name: "contact___es"
  }, {
    path: "/es/login",
    component: _75ab331b,
    name: "login___es"
  }, {
    path: "/es/marketing",
    component: _42446edb,
    name: "marketing___es"
  }, {
    path: "/es/register",
    component: _07fd683e,
    name: "register___es"
  }, {
    path: "/es/soporte",
    component: _02936846,
    name: "soporte___es"
  }, {
    path: "/es/webdev",
    component: _864f797c,
    name: "webdev___es"
  }, {
    path: "/pt/about",
    component: _6f35defc,
    name: "about___pt"
  }, {
    path: "/pt/blank-page",
    component: _95952eb4,
    name: "blank-page___pt"
  }, {
    path: "/pt/blog",
    component: _5a1176e3,
    name: "blog___pt"
  }, {
    path: "/pt/collection",
    component: _6434565f,
    name: "collection___pt"
  }, {
    path: "/pt/contact",
    component: _099d96d5,
    name: "contact___pt"
  }, {
    path: "/pt/login",
    component: _75ab331b,
    name: "login___pt"
  }, {
    path: "/pt/marketing",
    component: _42446edb,
    name: "marketing___pt"
  }, {
    path: "/pt/register",
    component: _07fd683e,
    name: "register___pt"
  }, {
    path: "/pt/soporte",
    component: _02936846,
    name: "soporte___pt"
  }, {
    path: "/pt/webdev",
    component: _864f797c,
    name: "webdev___pt"
  }, {
    path: "/zh/about",
    component: _6f35defc,
    name: "about___zh"
  }, {
    path: "/zh/blank-page",
    component: _95952eb4,
    name: "blank-page___zh"
  }, {
    path: "/zh/blog",
    component: _5a1176e3,
    name: "blog___zh"
  }, {
    path: "/zh/collection",
    component: _6434565f,
    name: "collection___zh"
  }, {
    path: "/zh/contact",
    component: _099d96d5,
    name: "contact___zh"
  }, {
    path: "/zh/login",
    component: _75ab331b,
    name: "login___zh"
  }, {
    path: "/zh/marketing",
    component: _42446edb,
    name: "marketing___zh"
  }, {
    path: "/zh/register",
    component: _07fd683e,
    name: "register___zh"
  }, {
    path: "/zh/soporte",
    component: _02936846,
    name: "soporte___zh"
  }, {
    path: "/zh/webdev",
    component: _864f797c,
    name: "webdev___zh"
  }, {
    path: "/de/about/team",
    component: _28a06d5d,
    name: "about-team___de"
  }, {
    path: "/de/blog/detail-blog",
    component: _de866622,
    name: "blog-detail-blog___de"
  }, {
    path: "/de/collection/detail-product",
    component: _03f1cf94,
    name: "collection-detail-product___de"
  }, {
    path: "/de/collection/products",
    component: _134a7de7,
    name: "collection-products___de"
  }, {
    path: "/de/contact/with-map",
    component: _201730bc,
    name: "contact-with-map___de"
  }, {
    path: "/de/marketing/body",
    component: _44ee5f28,
    name: "marketing-body___de"
  }, {
    path: "/de/soporte/body",
    component: _6222c4aa,
    name: "soporte-body___de"
  }, {
    path: "/de/utils/coming-soon",
    component: _3b9ba51b,
    name: "utils-coming-soon___de"
  }, {
    path: "/de/utils/faq",
    component: _34fc402c,
    name: "utils-faq___de"
  }, {
    path: "/de/utils/maintenance",
    component: _72ee0567,
    name: "utils-maintenance___de"
  }, {
    path: "/de/utils/pricing",
    component: _8393c2cc,
    name: "utils-pricing___de"
  }, {
    path: "/de/webdev/body",
    component: _79fca465,
    name: "webdev-body___de"
  }, {
    path: "/en/about/team",
    component: _28a06d5d,
    name: "about-team___en"
  }, {
    path: "/en/blog/detail-blog",
    component: _de866622,
    name: "blog-detail-blog___en"
  }, {
    path: "/en/collection/detail-product",
    component: _03f1cf94,
    name: "collection-detail-product___en"
  }, {
    path: "/en/collection/products",
    component: _134a7de7,
    name: "collection-products___en"
  }, {
    path: "/en/contact/with-map",
    component: _201730bc,
    name: "contact-with-map___en"
  }, {
    path: "/en/marketing/body",
    component: _44ee5f28,
    name: "marketing-body___en"
  }, {
    path: "/en/soporte/body",
    component: _6222c4aa,
    name: "soporte-body___en"
  }, {
    path: "/en/utils/coming-soon",
    component: _3b9ba51b,
    name: "utils-coming-soon___en"
  }, {
    path: "/en/utils/faq",
    component: _34fc402c,
    name: "utils-faq___en"
  }, {
    path: "/en/utils/maintenance",
    component: _72ee0567,
    name: "utils-maintenance___en"
  }, {
    path: "/en/utils/pricing",
    component: _8393c2cc,
    name: "utils-pricing___en"
  }, {
    path: "/en/webdev/body",
    component: _79fca465,
    name: "webdev-body___en"
  }, {
    path: "/es/about/team",
    component: _28a06d5d,
    name: "about-team___es"
  }, {
    path: "/es/blog/detail-blog",
    component: _de866622,
    name: "blog-detail-blog___es"
  }, {
    path: "/es/collection/detail-product",
    component: _03f1cf94,
    name: "collection-detail-product___es"
  }, {
    path: "/es/collection/products",
    component: _134a7de7,
    name: "collection-products___es"
  }, {
    path: "/es/contact/with-map",
    component: _201730bc,
    name: "contact-with-map___es"
  }, {
    path: "/es/marketing/body",
    component: _44ee5f28,
    name: "marketing-body___es"
  }, {
    path: "/es/soporte/body",
    component: _6222c4aa,
    name: "soporte-body___es"
  }, {
    path: "/es/utils/coming-soon",
    component: _3b9ba51b,
    name: "utils-coming-soon___es"
  }, {
    path: "/es/utils/faq",
    component: _34fc402c,
    name: "utils-faq___es"
  }, {
    path: "/es/utils/maintenance",
    component: _72ee0567,
    name: "utils-maintenance___es"
  }, {
    path: "/es/utils/pricing",
    component: _8393c2cc,
    name: "utils-pricing___es"
  }, {
    path: "/es/webdev/body",
    component: _79fca465,
    name: "webdev-body___es"
  }, {
    path: "/pt/about/team",
    component: _28a06d5d,
    name: "about-team___pt"
  }, {
    path: "/pt/blog/detail-blog",
    component: _de866622,
    name: "blog-detail-blog___pt"
  }, {
    path: "/pt/collection/detail-product",
    component: _03f1cf94,
    name: "collection-detail-product___pt"
  }, {
    path: "/pt/collection/products",
    component: _134a7de7,
    name: "collection-products___pt"
  }, {
    path: "/pt/contact/with-map",
    component: _201730bc,
    name: "contact-with-map___pt"
  }, {
    path: "/pt/marketing/body",
    component: _44ee5f28,
    name: "marketing-body___pt"
  }, {
    path: "/pt/soporte/body",
    component: _6222c4aa,
    name: "soporte-body___pt"
  }, {
    path: "/pt/utils/coming-soon",
    component: _3b9ba51b,
    name: "utils-coming-soon___pt"
  }, {
    path: "/pt/utils/faq",
    component: _34fc402c,
    name: "utils-faq___pt"
  }, {
    path: "/pt/utils/maintenance",
    component: _72ee0567,
    name: "utils-maintenance___pt"
  }, {
    path: "/pt/utils/pricing",
    component: _8393c2cc,
    name: "utils-pricing___pt"
  }, {
    path: "/pt/webdev/body",
    component: _79fca465,
    name: "webdev-body___pt"
  }, {
    path: "/zh/about/team",
    component: _28a06d5d,
    name: "about-team___zh"
  }, {
    path: "/zh/blog/detail-blog",
    component: _de866622,
    name: "blog-detail-blog___zh"
  }, {
    path: "/zh/collection/detail-product",
    component: _03f1cf94,
    name: "collection-detail-product___zh"
  }, {
    path: "/zh/collection/products",
    component: _134a7de7,
    name: "collection-products___zh"
  }, {
    path: "/zh/contact/with-map",
    component: _201730bc,
    name: "contact-with-map___zh"
  }, {
    path: "/zh/marketing/body",
    component: _44ee5f28,
    name: "marketing-body___zh"
  }, {
    path: "/zh/soporte/body",
    component: _6222c4aa,
    name: "soporte-body___zh"
  }, {
    path: "/zh/utils/coming-soon",
    component: _3b9ba51b,
    name: "utils-coming-soon___zh"
  }, {
    path: "/zh/utils/faq",
    component: _34fc402c,
    name: "utils-faq___zh"
  }, {
    path: "/zh/utils/maintenance",
    component: _72ee0567,
    name: "utils-maintenance___zh"
  }, {
    path: "/zh/utils/pricing",
    component: _8393c2cc,
    name: "utils-pricing___zh"
  }, {
    path: "/zh/webdev/body",
    component: _79fca465,
    name: "webdev-body___zh"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
