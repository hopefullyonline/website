/**
 * This react helmt code is adapted from
 * https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet.
 *
 * A great tutorial explaining how to setup a robust version of an
 * SEO friendly react-helmet instance.
 *
 *
 * Use the Helmt on pages to generate SEO and meta content!
 *
 * Usage:
 * <SEO
 *   title={title}
 *   description={description}
 *   image={image}
 * />
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

interface HelmetProps {
    title: string;
    description?: string;
    pathname: string;
    image?: string;
    url?: string;
    canonicalUrl?: string;
    published?: string;
    timeToRead?: string;
}

const seoQuery = graphql`
    {
        allSite {
            edges {
                node {
                    siteMetadata {
                        description
                        social {
                            url
                        }
                        siteUrl
                        title
                    }
                }
            }
        }
    }
`;

const themeUIDarkModeWorkaroundScript = [
    {
        type: 'text/javascript',
        innerHTML: `
    (function() {
      try {
        var mode = localStorage.getItem('theme-ui-color-mode');
        if (!mode) {
          localStorage.setItem('theme-ui-color-mode', 'light');
        }
      } catch (e) {}
    })();
    (function(d) {
        var config = {
            kitId: 'igs3orr',
            scriptTimeout: 3000,
            async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  `,
    },
];

const SEO: React.FC<HelmetProps> = ({
                                        title,
                                        description,
                                        children,
                                        url,
                                        image,
                                        published,
                                        timeToRead,
                                        canonicalUrl,
                                    }) => {
    const results = useStaticQuery(seoQuery);
    const site = results.allSite.edges[0].node.siteMetadata;
    const twitter = site.social.find(option => option.name === 'twitter') || {};

    const fullURL = (path: string) =>
        path ? `${site.siteUrl}${path}` : site.siteUrl;

    // If no image is provided lets looks for a default novela static image
    image = image ? image : '/preview.jpg';

    const metaTags = [
        {charset: 'utf-8'},
        {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'theme-color',
            content: '#fff',
        },
        {itemprop: 'name', content: title || site.title},
        {itemprop: 'description', content: description || site.description},
        {itemprop: 'image', content: fullURL(image)},
        {name: 'description', content: description || site.description},

        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: site.name},
        {name: 'twitter:title', content: title || site.title},
        {name: 'twitter:description', content: description || site.description},
        {name: 'twitter:creator', content: twitter.url},
        {
            name: 'twitter:image',
            content: fullURL(image),
        },

        {property: 'og:title', content: title || site.title},
        {property: 'og:url', content: url},
        {property: 'og:image', content: fullURL(image)},
        {property: 'og:description', content: description || site.description},
        {property: 'og:site_name', content: site.name},
    ];

    if (published) {
        metaTags.push({name: 'article:published_time', content: published});
    }

    if (timeToRead) {
        metaTags.push({name: 'twitter:label1', value: 'Reading time'});
        metaTags.push({name: 'twitter:data1', value: `${timeToRead} min read`});
    }

    return (
        <Helmet
            title={title || site.title}
            htmlAttributes={{lang: 'en'}}
            script={themeUIDarkModeWorkaroundScript}
            meta={metaTags}
        >
            <link rel="canonical" href={canonicalUrl}/>
            {children}
        </Helmet>
    );
};

export default SEO;
