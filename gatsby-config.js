module.exports = {
  siteMetadata: {
    title: `parker smathers`,
    siteUrl: `https://parkersmathers.github.io`,
    srcUrl: `https://github.com/parkersmathers/portfolio`,
    description: `Portfolio for Parker Smathers, book editor turned frontend developer.`,
    email: `parker@fluorastudio.com`
  },
  plugins: [
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
              maxWidth: 1000
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`
  ]
}
