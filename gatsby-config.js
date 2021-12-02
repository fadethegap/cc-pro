require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Content Creator Pro",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        // apiToken: process.env.DATO_API_TOKEN,
        // environment: process.env.DATO_ENVIRONMENT,
        apiToken: "9e048c9a1b4858ea30a629f34e969d",
        environment: "main",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/assets/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
