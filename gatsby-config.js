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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "hwc_personal_website",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
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
        name: "blog",
        path: "./src/blog/",
      }
    },
    "gatsby-transformer-remark",
  ],
};
