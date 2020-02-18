// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-ref-page-js": () => import("./../src/templates/RefPage.js" /* webpackChunkName: "component---src-templates-ref-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-references-js": () => import("./../src/pages/references.js" /* webpackChunkName: "component---src-pages-references-js" */)
}

