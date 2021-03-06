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
    },
    {
      resolve : "gatsby-plugin-google-tagmanager",
      options : {
        id: "GTM-KZPMV9M",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
