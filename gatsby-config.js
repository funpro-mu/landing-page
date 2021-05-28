module.exports = {
  siteMetadata: {
    title: "Mauritius Functional Programmers Community",
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "273805619",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mauritius Functional Programmers Community",
        short_name: "funprog.mu",
        start_url: "/",
        background_color: "#212a39",
        theme_color: "#ffc000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "browser",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
