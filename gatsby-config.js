module.exports = {
  siteMetadata: {
    title: `Agence Nationale de Développement du Tourisme`,
    description: `Agence Nationale de Développement du Tourisme`,
    keywords: `algérie, andt, dz, touristique, hotel,  Staoueli, agence, Nationale, Développement, Tourisme, gouvernement, entreprise`,
    author: `@okuninoshi`,
    siteUrl: `https://andt-dz.com`,
    phone: '(+213) 21 37 60 43',
    fax: '(+213) 21 37 67 16',
    address: 'Village Artisanal de Sidi Fredj, Complexe Touristique de Sidi Fredj, Staoueli, Alger,Algérie',
    email: 'contact@andt-dz.org'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    //added plugin
    {
      resolve: `gatsby-plugin-styled-components`,
      // options: {
      //   Add any options here
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
