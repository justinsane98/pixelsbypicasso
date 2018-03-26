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
            },
            {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
              endpoint: 'https://pixelsbypicasso.us12.list-manage.com/subscribe/post?u=30d7d6bda30d19d1b7ec33699&amp;id=27ad4438d6',
              }
            }
           ]
};
