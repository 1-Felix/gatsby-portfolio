require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Felix Keller - Portfolio`,
    siteTitleAlt: `Felix - @felixkeller98/gatsby-portfolio`,
    siteHeadline: `Portfolio - Felix Keller`,
    siteUrl: `https://portfolio.felix-keller.com`,
    siteDescription: `Portfolio from Felix Keller, a hobyy web dev from germany`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@felixkeller98`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155110710-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Keller - Portfolio`,
        short_name: `Felix Keller`,
        description: `Portfolio from Felix Keller, a hobyy web dev from germany`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
