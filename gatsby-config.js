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
    `gatsby-plugin-typescript`,
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-theme-ui`,
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 10000,
                        linkImagesToOriginal: false,
                        quality: 80,
                        withWebp: true,
                    },
                },
                {
                    resolve: `@raae/gatsby-remark-oembed`,
                    options: {
                        providers: {
                            include: ["Instagram"]
                        }
                    }
                },
                {
                    resolve: "gatsby-remark-embed-video",
                    options: {
                        width: 680,
                        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                        height: 400, // Optional: Overrides optional.ratio
                        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                        urlOverrides: [
                            {
                                id: 'youtube',
                                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                            }
                        ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                    }
                },
                {
                    resolve: `gatsby-remark-copy-linked-files`
                },
                {
                    resolve: `gatsby-remark-numbered-footnotes`},
                {
                    resolve: `gatsby-remark-smartypants`},
                {
                    resolve: 'gatsby-remark-external-links',
                    options: {
                        target: '_blank',
                        rel: 'noreferrer', // eslint-disable-line unicorn/prevent-abbreviations
                    },
                },
            ],
            remarkPlugins: [
                require(`remark-slug`),
            ], // eslint-disable-line global-require
        },
    },
    {
        resolve: `gatsby-plugin-emotion`,
        options: {
            displayName: process.env.NODE_ENV === `development`,
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
