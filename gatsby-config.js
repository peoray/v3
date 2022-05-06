/* eslint-disable global-require */
const urljoin = require('url-join');
const config = require('./data/SiteConfig');

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    description: config.siteDescription,
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/avatar.jpeg`,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {},
            },
          },
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                // This is the frontmatter field the title should come from
                field: 'title',
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'black', // black|white
                size: 48, // 16|24|32|48|64
                style: 'bold', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to yMargin
              },
              meta: {
                // The parts array is what generates the bottom text
                // Pass an array with strings and objects
                // The following array will generate:
                // "- Author Name » September 13"
                // The objects are used to pull data from your markdown's
                // frontmatter. { field: "author" } pulls the author set
                // in the frontmatter. { field: "category" } would pull
                // the category set. Any field can be used as parts
                // Note: Only pass the "format" property on date fields
                parts: [
                  '- Emmmanuel Raymond',
                  // { field: "author" },
                  ' » ',
                  { field: 'date', format: 'mmmm dS, yyyy' },
                ],
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'white', // black|white
                size: 24, // 16|24|32|48|64
                style: 'normal', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to cardHeight - yMargin - size
              },
              background: '#0d2438', // Background color for the card
              xMargin: 24, // Edge margin used when x value is not set
              yMargin: 24, // Edge margin used when y value is not set
            },
          },
          // ...
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          // `gatsby-remark-social-cards`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    // `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false,
        tailwind: true,
        ignore: ['prismjs/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/avatar.jpeg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          // {
          //   src: '/logos/logo-512.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          // },
        ],
      },
    },

    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = 'Emmanuel Raymond';
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map((edge) => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.frontmatter.path,
                guid: rssMetadata.site_url + edge.node.frontmatter.path,
                custom_elements: [
                  { 'content:encoded': edge.node.html },
                  { author: config.userEmail },
                ],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      tags
                      template
                    }
                  }
                }
              }
            }
            `,
            // category
            output: config.siteRss,
            title: config.siteRssTitle,
          },
        ],
      },
    },
  ],
};
