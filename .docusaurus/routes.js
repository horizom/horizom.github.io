
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/cms/',
  component: ComponentCreator('/cms/','9c8'),
  exact: true,
},
{
  path: '/framework/',
  component: ComponentCreator('/framework/','013'),
  exact: true,
},
{
  path: '/legal/cookie-policy',
  component: ComponentCreator('/legal/cookie-policy','359'),
  exact: true,
},
{
  path: '/legal/privacy',
  component: ComponentCreator('/legal/privacy','aab'),
  exact: true,
},
{
  path: '/legal/terms',
  component: ComponentCreator('/legal/terms','a9d'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','79a'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','ce9'),
  
  routes: [
{
  path: '/docs/cms',
  component: ComponentCreator('/docs/cms','f89'),
  exact: true,
},
{
  path: '/docs/cms/configuration',
  component: ComponentCreator('/docs/cms/configuration','842'),
  exact: true,
},
{
  path: '/docs/cms/installation',
  component: ComponentCreator('/docs/cms/installation','e64'),
  exact: true,
},
{
  path: '/docs/framework',
  component: ComponentCreator('/docs/framework','e11'),
  exact: true,
},
{
  path: '/docs/framework/Bases/controller',
  component: ComponentCreator('/docs/framework/Bases/controller','68b'),
  exact: true,
},
{
  path: '/docs/framework/Bases/request',
  component: ComponentCreator('/docs/framework/Bases/request','d94'),
  exact: true,
},
{
  path: '/docs/framework/Bases/response',
  component: ComponentCreator('/docs/framework/Bases/response','ca9'),
  exact: true,
},
{
  path: '/docs/framework/Routes/attaching-route-groups',
  component: ComponentCreator('/docs/framework/Routes/attaching-route-groups','bff'),
  exact: true,
},
{
  path: '/docs/framework/Routes/defining-routes',
  component: ComponentCreator('/docs/framework/Routes/defining-routes','11b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
