
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','025'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','99d'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','8b1'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','94b'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','79a'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','0a8'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','49a'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','b1d'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c9a'),
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
  component: ComponentCreator('/docs','565'),
  
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
  path: '/docs/framework/auth/index',
  component: ComponentCreator('/docs/framework/auth/index','3e5'),
  exact: true,
},
{
  path: '/docs/framework/basics/controller',
  component: ComponentCreator('/docs/framework/basics/controller','bc9'),
  exact: true,
},
{
  path: '/docs/framework/basics/request',
  component: ComponentCreator('/docs/framework/basics/request','e58'),
  exact: true,
},
{
  path: '/docs/framework/basics/response',
  component: ComponentCreator('/docs/framework/basics/response','5cc'),
  exact: true,
},
{
  path: '/docs/framework/configuration',
  component: ComponentCreator('/docs/framework/configuration','44d'),
  exact: true,
},
{
  path: '/docs/framework/database/getting-started',
  component: ComponentCreator('/docs/framework/database/getting-started','bf0'),
  exact: true,
},
{
  path: '/docs/framework/database/migrations',
  component: ComponentCreator('/docs/framework/database/migrations','416'),
  exact: true,
},
{
  path: '/docs/framework/database/orm',
  component: ComponentCreator('/docs/framework/database/orm','fb8'),
  exact: true,
},
{
  path: '/docs/framework/installation',
  component: ComponentCreator('/docs/framework/installation','731'),
  exact: true,
},
{
  path: '/docs/framework/routing/attaching-route-groups',
  component: ComponentCreator('/docs/framework/routing/attaching-route-groups','34c'),
  exact: true,
},
{
  path: '/docs/framework/routing/defining-routes',
  component: ComponentCreator('/docs/framework/routing/defining-routes','0b3'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
