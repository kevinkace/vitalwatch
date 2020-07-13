module.exports = {
  siteMetadata: {
    title       : `Vital Watch`,
    description : `Unofficial info and resources about Vital, a new wavetable VST synth by Matt Tytel, coming soon (2020)`,
    author      : `just a fan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `images`,
        path : `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve : `gatsby-plugin-manifest`,
      options : {
        name             : `gatsby-starter-default`,
        short_name       : `starter`,
        start_url        : `/`,
        background_color : `#663399`,
        theme_color      : `#663399`,
        display          : `minimal-ui`,
        icon             : `src/images/vitalWatch-logo.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
