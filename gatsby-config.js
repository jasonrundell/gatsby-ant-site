require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// gatsby-config.js
const myQuery = `{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          category
          author
          description
          tags
        }
        html
      }
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node), // optional
    // indexName: 'index name to target', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Gatsby+Ant`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/styles/globals";`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //   },
    // },
  ],
}
