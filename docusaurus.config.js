/** 
 * @type {import('@docusaurus/types').DocusaurusConfig} 
 * */

module.exports = {
    title: 'Horizom',
    tagline: 'A PHP lightness framework & CMS',
    url: 'https://horizom.github.io',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'horizom', // Usually your GitHub org/user name.
    projectName: 'horizom', // Usually your repo name.
    themeConfig: {
        liveCodeBlock: {
            playgroundPosition: 'bottom',
        },
        hideableSidebar: true,
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Horizom',
            logo: {
                alt: 'Horizom Logo',
                src: 'img/logo.svg',
                srcDark: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'framework/index',
                    position: 'right',
                    label: 'Framework',
                },
                {
                    type: 'doc',
                    docId: 'cms/index',
                    position: 'right',
                    label: 'CMS',
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/horizom',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/horizom',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/horizom',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/horizom',
                    }, ],
                },
                {
                    title: 'Legal',
                    items: [{
                            label: 'Privacy',
                            href: '/legal/privacy/',
                        },
                        {
                            label: 'Terms',
                            href: '/legal/terms/',
                        },
                        {
                            label: 'Cookie Policy',
                            href: '/legal/cookie-policy/',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Codivoire Logo',
                src: 'img/cdi-logo-white.png',
                href: 'https://www.codivoire.com',
            },

            copyright: `Copyright © ${new Date().getFullYear()} Horizom, Inc.`,
        },
        prism: {
            theme: require('prism-react-renderer/themes/shadesOfPurple'),
        },
        googleAnalytics: {
            trackingID: 'UA-141789564-1',
            anonymizeIP: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/horizom/docs/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    postsPerPage: 3,
                    blogTitle: 'Clutch Open-source Developer Blog',
                    blogDescription: 'Where Clutch open-source maintainers and contributors share their work and thoughts on development.',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/horizom/docs/edit/master/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
            },
        ]
    ],
};