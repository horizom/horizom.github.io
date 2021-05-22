import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [{
        path: '/',
        component: ComponentCreator('/', 'deb'),
        exact: true,
    },
    {
        path: '/blog',
        component: ComponentCreator('/blog', '373'),
        exact: true,
    },
    {
        path: '/blog/hello-world',
        component: ComponentCreator('/blog/hello-world', '40c'),
        exact: true,
    },
    {
        path: '/blog/hola',
        component: ComponentCreator('/blog/hola', 'ddd'),
        exact: true,
    },
    {
        path: '/blog/tags',
        component: ComponentCreator('/blog/tags', 'd5d'),
        exact: true,
    },
    {
        path: '/blog/tags/docusaurus',
        component: ComponentCreator('/blog/tags/docusaurus', '618'),
        exact: true,
    },
    {
        path: '/blog/tags/facebook',
        component: ComponentCreator('/blog/tags/facebook', '426'),
        exact: true,
    },
    {
        path: '/blog/tags/hello',
        component: ComponentCreator('/blog/tags/hello', '723'),
        exact: true,
    },
    {
        path: '/blog/tags/hola',
        component: ComponentCreator('/blog/tags/hola', '526'),
        exact: true,
    },
    {
        path: '/blog/welcome',
        component: ComponentCreator('/blog/welcome', 'bf7'),
        exact: true,
    },
    {
        path: '/framework/',
        component: ComponentCreator('/framework/', '013'),
        exact: true,
    },
    {
        path: '/legal/cookie-policy',
        component: ComponentCreator('/legal/cookie-policy', '359'),
        exact: true,
    },
    {
        path: '/legal/privacy',
        component: ComponentCreator('/legal/privacy', 'aab'),
        exact: true,
    },
    {
        path: '/legal/terms',
        component: ComponentCreator('/legal/terms', 'a9d'),
        exact: true,
    },
    {
        path: '/search',
        component: ComponentCreator('/search', '79a'),
        exact: true,
    },
    {
        path: '/docs',
        component: ComponentCreator('/docs', 'd7d'),

        routes: [{
                path: '/docs/framework',
                component: ComponentCreator('/docs/framework', 'e11'),
                exact: true,
            },
            {
                path: '/docs/framework/auth/index',
                component: ComponentCreator('/docs/framework/auth/index', '3e5'),
                exact: true,
            },
            {
                path: '/docs/framework/basics/controller',
                component: ComponentCreator('/docs/framework/basics/controller', 'bc9'),
                exact: true,
            },
            {
                path: '/docs/framework/basics/request',
                component: ComponentCreator('/docs/framework/basics/request', 'e58'),
                exact: true,
            },
            {
                path: '/docs/framework/basics/response',
                component: ComponentCreator('/docs/framework/basics/response', '5cc'),
                exact: true,
            },
            {
                path: '/docs/framework/configuration',
                component: ComponentCreator('/docs/framework/configuration', '44d'),
                exact: true,
            },
            {
                path: '/docs/framework/database/getting-started',
                component: ComponentCreator('/docs/framework/database/getting-started', 'bf0'),
                exact: true,
            },
            {
                path: '/docs/framework/database/migrations',
                component: ComponentCreator('/docs/framework/database/migrations', '416'),
                exact: true,
            },
            {
                path: '/docs/framework/database/orm',
                component: ComponentCreator('/docs/framework/database/orm', 'fb8'),
                exact: true,
            },
            {
                path: '/docs/framework/installation',
                component: ComponentCreator('/docs/framework/installation', '731'),
                exact: true,
            },
            {
                path: '/docs/framework/routing/attaching-route-groups',
                component: ComponentCreator('/docs/framework/routing/attaching-route-groups', '34c'),
                exact: true,
            },
            {
                path: '/docs/framework/routing/defining-routes',
                component: ComponentCreator('/docs/framework/routing/defining-routes', '0b3'),
                exact: true,
            },
        ]
    },
    {
        path: '*',
        component: ComponentCreator('*')
    }
];