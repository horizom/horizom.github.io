(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?o.a.createElement(b,s(s({ref:r},c),{},{components:t})):o.a.createElement(b,s({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),i=(t(0),t(103)),a={id:"index",slug:"/framework",title:"Introduction",sidebar_position:1},s={unversionedId:"framework/index",id:"framework/index",isDocsHomePage:!1,title:"Introduction",description:"Total Downloads Latest Stable Version License",source:"@site/docs/framework/index.md",sourceDirName:"framework",slug:"/framework",permalink:"/docs/framework",editUrl:"https://github.com/horizom/docs/edit/master/docs/framework/index.md",version:"current",sidebarPosition:1,frontMatter:{id:"index",slug:"/framework",title:"Introduction",sidebar_position:1},sidebar:"framework",next:{title:"Controller",permalink:"/docs/framework/Bases/controller"}},u=[{value:"Qu&#39;est-ce que Horizom ?",id:"quest-ce-que-horizom-",children:[]},{value:"Exigences du serveur",id:"exigences-du-serveur",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Configuration rapide:",id:"configuration-rapide",children:[]},{value:"Mise en route de Horizom",id:"mise-en-route-de-horizom",children:[]},{value:"Journal des modifications et Nouvelles fonctionnalit\xe9s",id:"journal-des-modifications-et-nouvelles-fonctionnalit\xe9s",children:[]},{value:"Vuln\xe9rabilit\xe9s de s\xe9curit\xe9",id:"vuln\xe9rabilit\xe9s-de-s\xe9curit\xe9",children:[]},{value:"License",id:"license",children:[]},{value:"Reconnaissance",id:"reconnaissance",children:[]}],c={toc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"//packagist.org/packages/horizom/framework"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/framework/downloads",alt:"Total Downloads"}))," ",Object(i.b)("a",{parentName:"p",href:"//packagist.org/packages/horizom/framework"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/framework/v",alt:"Latest Stable Version"}))," ",Object(i.b)("a",{parentName:"p",href:"//packagist.org/packages/horizom/framework"},Object(i.b)("img",{parentName:"a",src:"https://poser.pugx.org/horizom/framework/license",alt:"License"}))),Object(i.b)("h2",{id:"quest-ce-que-horizom-"},"Qu'est-ce que Horizom ?"),Object(i.b)("p",null,"Horizom est un Framework de d\xe9veloppement d'applications - un toolkit ","(","trousse \xe0 outils",")"," - pour les personnes qui cr\xe9ent des sites Web en PHP. Flexible , et puissant. Son objectif est de vous permettre de d\xe9velopper des projets beaucoup plus rapidement que lorsque vous \xe9crivez un code \xe0 partir de z\xe9ro, en fournissant un ensemble de biblioth\xe8ques enrichis pour les t\xe2ches requises, ainsi qu'une interface simple et une structure logique. Horizom permet de vous concentrer de mani\xe8re cr\xe9ative sur votre projet en minimisant la quantit\xe9 de code n\xe9cessaire pour une t\xe2che donn\xe9e."),Object(i.b)("h2",{id:"exigences-du-serveur"},"Exigences du serveur"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP Server. Par exemple: Apache. mod","_","rewrite est pr\xe9f\xe9rable, mais en aucun cas n\xe9cessaire"),Object(i.b)("li",{parentName:"ul"},"PHP 7.4 ou plus")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Imaginons que vous souhaitiez cr\xe9er une nouvelle application Horizom dans le dossier ",Object(i.b)("inlineCode",{parentName:"p"},"my_app"),". Pour ceci vous pouvez lancer la commande suivante:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"composer create-project --prefer-dist horizom/framework my_app\n")),Object(i.b)("p",null,"Une fois que Composer finit le t\xe9l\xe9chargement du squelette de l\u2019application et des librairies de Horizom, vous aurez une application Horizom qui fonctionne. Assurez-vous de garder les fichiers composer.json et composer.lock et le reste de votre code source."),Object(i.b)("h2",{id:"configuration-rapide"},"Configuration rapide:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ouvrez le fichier config/app.php avec un \xe9diteur de texte et d\xe9finissez votre configuration en suivant les instructions dans les lignes de commentaire qui pr\xe9c\xe8dent."),Object(i.b)("li",{parentName:"ol"},"Dans le cas o\xf9 vous souhaitez utiliser une base de donn\xe9es, ouvrez le fichier config/database.php avec un \xe9diteur de texte et d\xe9finissez les param\xe8tres de votre base de donn\xe9es.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Vous devriez \xeatre maintenant capable de vous rendre sur le lien votre application Horizom et voir la page d\u2019accueil par d\xe9faut.")),Object(i.b)("p",null,"Pour une meilleure s\xe9curit\xe9, le syst\xe8me et tous les dossiers de l'application doivent \xeatre plac\xe9s au-dessus de la racine Web afin qu'ils ne soient pas directement accessibles via un navigateur. Par d\xe9faut, les fichiers ",Object(i.b)("strong",{parentName:"p"},".htaccess")," sont inclus dans chaque dossier pour emp\xeacher l'acc\xe8s direct, mais il est pr\xe9f\xe9rable de les supprimer de l'acc\xe8s public enti\xe8rement au cas o\xf9 la configuration du serveur Web changerait ou ne respecterait pas le ",Object(i.b)("strong",{parentName:"p"},".htaccess"),"."),Object(i.b)("p",null,"Une mesure suppl\xe9mentaire \xe0 prendre dans les environnements de production est de d\xe9sactiver les rapports d'erreur PHP et toute autre fonctionnalit\xe9 de d\xe9veloppement. Dans Horizom, cela peut se faire en suivant les configurations d\xe9crites sur la page de s\xe9curit\xe9 ."),Object(i.b)("p",null,"C'est tout!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Si vous \xeates nouveau sur Horizom, lisez la section Mise en route du ",Object(i.b)("a",{parentName:"p",href:"https://horizom.gitbook.io"},"Guide d'utilisation")," pour commencer \xe0 apprendre comment cr\xe9er des applications PHP dynamiques.")),Object(i.b)("h2",{id:"mise-en-route-de-horizom"},"Mise en route de Horizom"),Object(i.b)("p",null,"Toute application logicielle n\xe9cessite des efforts d'apprentissage. Nous avons fait de notre mieux pour minimiser le processus en le rendant aussi agr\xe9able que possible."),Object(i.b)("p",null,"Horizom est framework ready-to-use ","(","pr\xeat \xe0 l'emploi",")",", l'\xe9tape majeure consiste donc \xe0 l'installer, alors lisez le sujet sur l'installation dans la section ci-dessus."),Object(i.b)("p",null,"Ensuite, lisez chaque page des sujets g\xe9n\xe9raux dans l'ordre. Chaque sujet s'appuie sur le pr\xe9c\xe9dent, et comprend des exemples de code que vous \xeates encourag\xe9s \xe0 essayer."),Object(i.b)("p",null,"Une fois que vous comprenez les bases, vous serez en mesure d'explorer les pages de r\xe9f\xe9rence de classe et de r\xe9f\xe9rence d'aide pour apprendre \xe0 utiliser les diff\xe9rentes biblioth\xe8ques."),Object(i.b)("h2",{id:"journal-des-modifications-et-nouvelles-fonctionnalit\xe9s"},"Journal des modifications et Nouvelles fonctionnalit\xe9s"),Object(i.b)("p",null,"Vous pouvez trouver une liste de toutes les modifications pour chaque version dans le ",Object(i.b)("a",{parentName:"p",href:"https://github.com/horizom/docs/blob/master/CHANGELOG.md"},"journal des modifications")," du guide de l'utilisateur."),Object(i.b)("h2",{id:"vuln\xe9rabilit\xe9s-de-s\xe9curit\xe9"},"Vuln\xe9rabilit\xe9s de s\xe9curit\xe9"),Object(i.b)("p",null,"Si vous d\xe9couvrez une vuln\xe9rabilit\xe9 de s\xe9curit\xe9 au sein de Horizom, veuillez envoyer un courrier \xe9lectronique \xe0 Roland Edi \xe0 ",Object(i.b)("a",{parentName:"p",href:"mailto:info.Horizom@gmail.com."},"info.Horizom@gmail.com.")," Toutes les vuln\xe9rabilit\xe9s de s\xe9curit\xe9 seront trait\xe9es rapidement."),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"Consultez le ",Object(i.b)("a",{parentName:"p",href:"https://github.com/horizom/docs/blob/master/LICENSE.md"},"Contrat de Licence"),"."),Object(i.b)("h2",{id:"reconnaissance"},"Reconnaissance"),Object(i.b)("p",null,"L'\xe9quipe Horizom tient \xe0 remercier tous les contributeurs au projet et vous, l'utilisateur de Horizom."))}l.isMDXComponent=!0}}]);