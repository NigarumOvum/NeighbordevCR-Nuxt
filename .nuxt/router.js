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
const _07fd683e = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _28a06d5d = () => interopDefault(import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */))
const _de866622 = () => interopDefault(import('../pages/blog/detail-blog.vue' /* webpackChunkName: "pages/blog/detail-blog" */))
const _03f1cf94 = () => interopDefault(import('../pages/collection/detail-product.vue' /* webpackChunkName: "pages/collection/detail-product" */))
const _134a7de7 = () => interopDefault(import('../pages/collection/products.vue' /* webpackChunkName: "pages/collection/products" */))
const _201730bc = () => interopDefault(import('../pages/contact/with-map.vue' /* webpackChunkName: "pages/contact/with-map" */))
const _3b9ba51b = () => interopDefault(import('../pages/utils/coming-soon.vue' /* webpackChunkName: "pages/utils/coming-soon" */))
const _34fc402c = () => interopDefault(import('../pages/utils/faq.vue' /* webpackChunkName: "pages/utils/faq" */))
const _72ee0567 = () => interopDefault(import('../pages/utils/maintenance.vue' /* webpackChunkName: "pages/utils/maintenance" */))
const _8393c2cc = () => interopDefault(import('../pages/utils/pricing.vue' /* webpackChunkName: "pages/utils/pricing" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _a7f8dff8,
    name: "index___en"
  }, {
    path: "/pt",
    component: _a7f8dff8,
    name: "index___pt"
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
    path: "/en/register",
    component: _07fd683e,
    name: "register___en"
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
    path: "/pt/register",
    component: _07fd683e,
    name: "register___pt"
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
