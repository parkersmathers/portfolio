module.exports = {
  siteMetadata: {
    title: `Parker Smathers`,
    siteUrl: `https://parkersmathers.github.io`,
    srcUrl: `https://github.com/parkersmathers/portfolio`,
    description: `Portfolio for Parker Smathers, book editor turned frontend developer. Iambic JavaScript, responsively designed foobar.`,
    email: `parker@fluorastudio.com`,
    twitterUserName: `@parkerSmathers`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Parker Smathers`,
        short_name: `Parker`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#bcfd7d`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        include_favicon: true
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/work`,
        name: `work`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`
  ]
}
