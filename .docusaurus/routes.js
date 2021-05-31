
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
  component: ComponentCreator('/blog','373'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','40c'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','ddd'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','d5d'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','618'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','426'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','723'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','526'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','bf7'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','79a'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','c71'),
  
  routes: [
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
  component: ComponentCreator('/docs/framework/Routes/attaching-route-groups','6b1'),
  exact: true,
},
{
  path: '/docs/framework/Routes/defining-routes',
  component: ComponentCreator('/docs/framework/Routes/defining-routes','e79'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
