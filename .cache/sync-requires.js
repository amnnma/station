const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/saknarong/Home/blog/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/saknarong/Home/blog/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/saknarong/Home/blog/src/pages/index.js"))),
  "component---src-pages-shelf-js": hot(preferDefault(require("/Users/saknarong/Home/blog/src/pages/shelf.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/saknarong/Home/blog/src/templates/post.js")))
}

