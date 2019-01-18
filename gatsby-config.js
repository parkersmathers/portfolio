module.exports = {
  pathPrefix: `/porfolio`,
  siteMetadata: {
    title: `parker smathers`,
    siteUrl: `https://parkersmathers.github.io`,
    srcUrl: `https://github.com/parkersmathers`,
    description: `Portfolio for Parker Smathers, book editor turned frontend developer. JavaScript + Poetry.`,
    email: `parker@fluorastudio.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/pages/work/`
      }
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
