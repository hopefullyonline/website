import merge from 'lodash/merge';
import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';
import prism from "./prism";

export default merge(novelaTheme, {
    colors: merge(novelaTheme.colors, {
        prism,
        primary: '#111',
        secondary: '#73737D',
        accent: '#4bbcf4',
        background: "#fafafa",
        gradient: "linear-gradient(180deg, #fafafa 0%, hsla(220, 25%, 75%, 0.25) 100%)",
        modes: {
            dark: {
                accent: "#4bbcf4",
                background: "#111",
                card: "#222",
                grey: "#aaa",
                gradient: "linear-gradient(180deg, #111 0%, rgba(32, 53, 96, 0.25) 100%)",
            }
        }
    }),
    fonts: {
        ...novelaTheme.fonts,
        serif: "minion-pro, Georgia, Serif",
        sansSerif: "futura-pt, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
        heading: "futura-pt, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
        body: "minion-pro, Georgia, Serif",
    }
});
