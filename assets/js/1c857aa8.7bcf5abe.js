(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{125:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.a.createElement(b,a(a({ref:t},c),{},{components:r})):o.a.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),i=(r(0),r(125)),s={id:"index",slug:"/framework",title:"Introduction",sidebar_position:1},a={unversionedId:"framework/index",id:"framework/index",isDocsHomePage:!1,title:"Introduction",description:"Total Downloads Latest Stable Version License",source:"@site/docs/framework/index.md",sourceDirName:"framework",slug:"/framework",permalink:"/docs/framework",editUrl:"https://github.com/horizom/docs/edit/master/docs/framework/index.md",version:"current",sidebarPosition:1,frontMatter:{id:"index",slug:"/framework",title:"Introduction",sidebar_position:1},sidebar:"framework",next:{title:"Installation",permalink:"/docs/framework/installation"}},u=[{value:"Qu&#39;est-ce que Horizom ?",id:"quest-ce-que-horizom-",children:[]},{value:"Exigences du serveur",id:"exigences-du-serveur",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Configuration rapide:",id:"configuration-rapide",children:[]},{value:"Mise en route de Horizom",id:"mise-en-route-de-horizom",children:[]},{value:"Journal des modifications et Nouvelles fonctionnalit\xe9s",id:"journal-des-modifications-et-nouvelles-fonctionnalit\xe9s",children:[]},{value:"Vuln\xe9rabilit\xe9s de s\xe9curit\xe9",id:"vuln\xe9rabilit\xe9s-de-s\xe9curit\xe9",children:[]},{value:"License",id:"license",children:[]},{value:"Reconnaissance",id:"reconnaissance",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://packagist.org/packages/horizom/horizom"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/horizom/d/total.svg",alt:"Total Downloads"}))," ",Object(i.b)("a",{parentName:"p",href:"https://packagist.org/packages/horizom/horizom"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/horizom/v/stable.svg",alt:"Latest Stable Version"}))," ",Object(i.b)("a",{parentName:"p",href:"https://packagist.org/packages/horizom/horizom"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/horizom/license.svg",alt:"License"}))),Object(i.b)("h2",{id:"quest-ce-que-horizom-"},"Qu'est-ce que Horizom ?"),Object(i.b)("p",null,"Horizom est un Framework de d\xe9veloppement d'applications - un toolkit ","(","trousse \xe0 outils",")"," - pour les personnes qui cr\xe9ent des sites Web en PHP. Accessible, mais puissant, fournissant des outils n\xe9cessaires aux applications grosses et robustes. Son objectif est de vous permettre de d\xe9velopper des projets beaucoup plus rapidement que lorsque vous \xe9crivez un code \xe0 partir de z\xe9ro, en fournissant un ensemble de biblioth\xe8ques enrichis pour les t\xe2ches requises, ainsi qu'une interface simple et une structure logique pour acc\xe9der \xe0 ces biblioth\xe8ques. Horizom permet de vous concentrer de mani\xe8re cr\xe9ative sur votre projet en minimisant la quantit\xe9 de code n\xe9cessaire pour une t\xe2che donn\xe9e."),Object(i.b)("h2",{id:"exigences-du-serveur"},"Exigences du serveur"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP Server. Par exemple: Apache. mod","_","rewrite est pr\xe9f\xe9rable, mais en aucun cas n\xe9cessaire"),Object(i.b)("li",{parentName:"ul"},"PHP 7.3.1 ou plus ","(","y compris 7.4.x",")")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Imaginons que vous souhaitiez cr\xe9er une nouvelle application BabiePHP dans le dossier ",Object(i.b)("inlineCode",{parentName:"p"},"my_app"),". Pour ceci vous pouvez lancer la commande suivante:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"composer create-project --prefer-dist horizom/horizom my_app\n")),Object(i.b)("p",null,"Une fois que Composer finit le t\xe9l\xe9chargement du squelette de l\u2019application et des librairies de Horizom, vous devriez avoir maintenant une application Horizom qui fonctionne, install\xe9e via Composer. Assurez-vous de garder les fichiers composer.json et composer.lock avec le reste de votre code source."),Object(i.b)("h2",{id:"configuration-rapide"},"Configuration rapide:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ouvrez le fichier config/Config.php avec un \xe9diteur de texte et d\xe9finissez votre configuration en suivant les instructions dans les lignes de commentaire qui pr\xe9c\xe8dent."),Object(i.b)("li",{parentName:"ol"},"Dans le cas o\xf9 vous souhaitez utiliser une base de donn\xe9es, ouvrez le fichier config/Database.php avec un \xe9diteur de texte et d\xe9finissez les param\xe8tres de votre base de donn\xe9es.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Vous devriez \xeatre maintenant capable de vous rendre sur le lien votre application Horizom et voir la page d\u2019accueil par d\xe9faut.")),Object(i.b)("p",null,"Pour une meilleure s\xe9curit\xe9, le syst\xe8me et tous les dossiers de l'application doivent \xeatre plac\xe9s au-dessus de la racine Web afin qu'ils ne soient pas directement accessibles via un navigateur. Par d\xe9faut, les fichiers ",Object(i.b)("strong",{parentName:"p"},".htaccess")," sont inclus dans chaque dossier pour emp\xeacher l'acc\xe8s direct, mais il est pr\xe9f\xe9rable de les supprimer de l'acc\xe8s public enti\xe8rement au cas o\xf9 la configuration du serveur Web changerait ou ne respecterait pas le ",Object(i.b)("strong",{parentName:"p"},".htaccess"),"."),Object(i.b)("p",null,"Une mesure suppl\xe9mentaire \xe0 prendre dans les environnements de production est de d\xe9sactiver les rapports d'erreur PHP et toute autre fonctionnalit\xe9 de d\xe9veloppement. Dans Horizom, cela peut se faire en suivant les configurations d\xe9crites sur la page de s\xe9curit\xe9 ."),Object(i.b)("p",null,"C'est tout!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Si vous \xeates nouveau sur Horizom, lisez la section Mise en route du ",Object(i.b)("a",{parentName:"p",href:"https://horizom.gitbook.io"},"Guide d'utilisation")," pour commencer \xe0 apprendre comment cr\xe9er des applications PHP dynamiques.")),Object(i.b)("h2",{id:"mise-en-route-de-horizom"},"Mise en route de Horizom"),Object(i.b)("p",null,"Toute application logicielle n\xe9cessite des efforts d'apprentissage. Nous avons fait de notre mieux pour minimiser le processus en le rendant aussi agr\xe9able que possible."),Object(i.b)("p",null,"Horizom est framework ready-to-use ","(","pr\xeat \xe0 l'emploi",")",", l'\xe9tape majeure consiste donc \xe0 l'installer, alors lisez le sujet sur l'installation dans la section ci-dessus."),Object(i.b)("p",null,"Ensuite, lisez chaque page des sujets g\xe9n\xe9raux dans l'ordre. Chaque sujet s'appuie sur le pr\xe9c\xe9dent, et comprend des exemples de code que vous \xeates encourag\xe9s \xe0 essayer."),Object(i.b)("p",null,"Une fois que vous comprenez les bases, vous serez en mesure d'explorer les pages de r\xe9f\xe9rence de classe et de r\xe9f\xe9rence d'aide pour apprendre \xe0 utiliser les diff\xe9rentes biblioth\xe8ques."),Object(i.b)("h2",{id:"journal-des-modifications-et-nouvelles-fonctionnalit\xe9s"},"Journal des modifications et Nouvelles fonctionnalit\xe9s"),Object(i.b)("p",null,"Vous pouvez trouver une liste de toutes les modifications pour chaque version dans le ",Object(i.b)("a",{parentName:"p",href:"https://github.com/horizom/docs/blob/master/CHANGELOG.md"},"journal des modifications")," du guide de l'utilisateur."),Object(i.b)("h2",{id:"vuln\xe9rabilit\xe9s-de-s\xe9curit\xe9"},"Vuln\xe9rabilit\xe9s de s\xe9curit\xe9"),Object(i.b)("p",null,"Si vous d\xe9couvrez une vuln\xe9rabilit\xe9 de s\xe9curit\xe9 au sein de Horizom, veuillez envoyer un courrier \xe9lectronique \xe0 Roland Edi \xe0 ",Object(i.b)("a",{parentName:"p",href:"mailto:info.Horizom@gmail.com."},"info.Horizom@gmail.com.")," Toutes les vuln\xe9rabilit\xe9s de s\xe9curit\xe9 seront trait\xe9es rapidement."),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"Consultez le ",Object(i.b)("a",{parentName:"p",href:"https://github.com/horizom/docs/blob/master/LICENSE.md"},"Contrat de Licence"),"."),Object(i.b)("h2",{id:"reconnaissance"},"Reconnaissance"),Object(i.b)("p",null,"L'\xe9quipe Horizom tient \xe0 remercier tous les contributeurs au projet et vous, l'utilisateur de Horizom."))}l.isMDXComponent=!0}}]);