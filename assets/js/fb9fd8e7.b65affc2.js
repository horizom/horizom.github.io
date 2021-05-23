(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{103:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:r},i),{},{components:t})):o.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),a=(t(0),t(103)),s={title:"Request",description:"HTTP Requests"},c={unversionedId:"framework/Bases/request",id:"framework/Bases/request",isDocsHomePage:!1,title:"Request",description:"HTTP Requests",source:"@site/docs/framework/Bases/request.md",sourceDirName:"framework/Bases",slug:"/framework/Bases/request",permalink:"/docs/framework/Bases/request",editUrl:"https://github.com/horizom/docs/edit/master/docs/framework/Bases/request.md",version:"current",frontMatter:{title:"Request",description:"HTTP Requests"},sidebar:"framework",previous:{title:"Controller",permalink:"/docs/framework/Bases/controller"},next:{title:"Response",permalink:"/docs/framework/Bases/response"}},u=[{value:"Acc\xe9der \xe0 la Request",id:"acc\xe9der-\xe0-la-request",children:[]}],i={toc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"acc\xe9der-\xe0-la-request"},"Acc\xe9der \xe0 la Request"),Object(a.b)("p",null,"Pour obtenir une instance de la requ\xeate HTTP actuelle via l'injection de d\xe9pendances, vous devez ajouter un param\xe8tre ayant le nom de la requ\xeate \xe0 laquelle vous souhaitez acc\xe9der"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Controllers;\n\nuse Horizom\\Http\\Response;\nuse Psr\\Http\\Message\\ResponseInterface;\n\nclass MainController\n{\n    public function hello(Response $response, $name): ResponseInterface\n    {\n        return $response->view('hello', [\"name\" => $name]);\n    }\n}\n")))}l.isMDXComponent=!0}}]);