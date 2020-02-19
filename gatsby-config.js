const siteMetadata = {
    title: `hopefully.online by thundersquared`,
    name: `hopefully.online`,
    siteUrl: `https://hopefully.online`,
    description: `Just stay hopefully online relying on the best tools and technology around, learning the proper way together.`,
    hero: {
        heading: `Hopefully Online — Learn the proper way to <em style="font-family: minion-pro, Georgia, Serif;">stay online</em>.`,
        maxWidth: 480,
    },
    social: [
        {
            name: 'twitter',
            url: `https://twitter.com/HopefullyOnline`,
        },
        {
            name: 'github',
            url: `https://github.com/hopefullyonline`,
        },
    ],
};

const plugins = [
    {
        resolve: `@narative/gatsby-theme-novela`,
        options: {
            contentPosts: "content/posts",
            contentAuthors: "content/authors",
            rootPath: "/",
            basePath: "/",
            authorsPage: true,
            mailchimp: false,
            sources: {
                local: true,
            },
        },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `hopefully.online by thundersquared`,
            short_name: `hopefully.online`,
            start_url: `/`,
            background_color: `#fff`,
            theme_color: `#fff`,
            display: `standalone`,
            icon: `src/assets/favicon.png`,
        },
    },
    {
        resolve: `@thundersquared/gatsby-redirect-from`,
        options: {
            query: 'allMdx'
        }
    },
    {
        resolve: `gatsby-plugin-sitemap`,
    },
    {
        resolve: `gatsby-plugin-netlify`,
    },
    {
        resolve: `@thundersquared/gatsby-plugin-htaccess-redirect`,
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-118232427-3",
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-mailchimp",
    //   options: {
    //     endpoint:
    //       "https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282",
    //   },
    // },
];

module.exports = {
    siteMetadata,
    plugins,
};
