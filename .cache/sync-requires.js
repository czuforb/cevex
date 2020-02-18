const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-ref-page-js": hot(preferDefault(require("/home/bence/Documents/code/cevex-development/src/templates/RefPage.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/bence/Documents/code/cevex-development/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bence/Documents/code/cevex-development/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bence/Documents/code/cevex-development/src/pages/index.js"))),
  "component---src-pages-references-js": hot(preferDefault(require("/home/bence/Documents/code/cevex-development/src/pages/references.js")))
}

