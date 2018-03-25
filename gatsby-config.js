module.exports = {
  siteMetadata: {
    title: 'Pixels by Picasso',
  },
  plugins: [
            {resolve: 'gatsby-plugin-react-helmet'},
            {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: "UA-115530005-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // Do NOT track users! +1 for privacy!
                respectDNT: true
              }
            }
           ]
};
