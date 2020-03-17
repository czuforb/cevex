module.exports = {
  siteMetadata: {
    title: `Cevex Kft  - Építőmérnöki szolgáltatások`,
    author: `@czuforb`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "wp.bence.cz",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://wp.bence.cz",
          replacementUrl: "https://localhost:8000",
        },
        concurrentRequests: 10,
        includedRoutes: ["**/categories", "**/posts", "**/pages", "**/media"],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
