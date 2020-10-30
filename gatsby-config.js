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
    // `gatsby-plugin-sass`,

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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Space Mono`,
    //         variants: [`400`, `700`]
    //       },
    //       {
    //         family: `Ubuntu`,
    //         variants: [`300`, `400`, `700`]
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-179169162-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //   },
    // },
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: './src/assets/images/andt_logo.png'
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `ANDT`,
    //     short_name: `ANDT`,
    //     start_url: `/`,
    //     background_color: `#009EE2`,
    //     theme_color: `#009EE2`,
    //     display: `standalone`,
    //     icon: `src/assets/images/andt_logo.png`
    //   },
    // },

    // `gatsby-plugin-sitemap`,
    // 'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}