
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/about.js")),
  "component---src-pages-authors-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/authors.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-first-post-index-mdx": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/blog/firstPost/index.mdx")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-second-post-index-mdx": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/blog/secondPost/index.mdx")),
  "component---src-pages-categories-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/categories.js")),
  "component---src-pages-index-js": preferDefault(require("/home/w4z0s/Programacion/Atlansec/Blog/atlansec.github.io/src/pages/index.js"))
}

