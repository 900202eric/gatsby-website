module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "HWC First Blog",
    description: "This is my blog made from scratch!"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-M3E3S12XDR', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "upload",
        path: "./static/assets/",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            }
          },
          "gatsby-remark-reading-time-v2",
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "one-dark",
              lineNumbers: true,
            },
          },
          "gatsby-remark-emoji",
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
  ],
};
