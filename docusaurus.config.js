/** 
 * @type {import('@docusaurus/types').DocusaurusConfig} 
 * */

module.exports = {
    title: 'Horizom',
    tagline: 'A lightness PHP framework & CMS',
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
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Communauté',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/horizom',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/horizom',
                        },
                        {
                            label: 'WhatsApp (Tchat)',
                            href: 'https://chat.whatsapp.com/K3PR6I5QNhr1eW9gyMIn0M',
                        },
                    ],
                },
                {
                    title: 'Extras',
                    items: [{
                        label: 'Codec Solutions',
                        href: 'https://www.codecci.com/',
                    }, {
                        label: 'CodIvoire News',
                        href: 'https://www.codivoire.com/',
                    }, ],
                },
                {
                    title: 'Sources',
                    items: [{
                            label: 'Framework',
                            href: 'https://github.com/horizom/framework',
                        },
                        {
                            label: 'Core',
                            href: 'https://github.com/horizom/core',
                        },
                        {
                            label: 'Documentation',
                            href: 'https://github.com/horizom/horizom.github.io',
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
                translations: {
                    "search_placeholder": "Rechercher",
                    "see_all_results": "Voir tous les résultats",
                    "no_results": "Aucun résultat.",
                    "search_results_for": "Résultats de recherche pour \"{{ keyword }}\"",
                    "search_the_documentation": "Rechercher la documentation",
                    "count_documents_found": "{{ count }} document trouvé",
                    "count_documents_found_plural": "{{ count }} documents trouvés",
                    "no_documents_were_found": "Aucun document n'a été trouvé"
                },
            },
        ]
    ],
};