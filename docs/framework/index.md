---
id: index
slug: /framework
title: Introduction
sidebar_position: 1
---

[![Total Downloads](https://poser.pugx.org/horizom/framework/downloads)](//packagist.org/packages/horizom/framework) [![Latest Stable Version](https://poser.pugx.org/horizom/framework/v)](//packagist.org/packages/horizom/framework) [![License](https://poser.pugx.org/horizom/framework/license)](//packagist.org/packages/horizom/framework)

## Qu'est-ce que Horizom ?

Horizom est un Framework de développement d'applications - un toolkit \(trousse à outils\) - pour les personnes qui créent des sites Web en PHP. Flexible , et puissant. Son objectif est de vous permettre de développer des projets beaucoup plus rapidement que lorsque vous écrivez un code à partir de zéro, en fournissant un ensemble de bibliothèques enrichis pour les tâches requises, ainsi qu'une interface simple et une structure logique. Horizom permet de vous concentrer de manière créative sur votre projet en minimisant la quantité de code nécessaire pour une tâche donnée.

## Exigences du serveur

* HTTP Server. Par exemple: Apache. mod\_rewrite est préférable, mais en aucun cas nécessaire
* PHP 7.4 ou plus

## Installation

Imaginons que vous souhaitiez créer une nouvelle application Horizom dans le dossier `my_app`. Pour ceci vous pouvez lancer la commande suivante:

```bash
composer create-project --prefer-dist horizom/framework my_app
```

Une fois que Composer finit le téléchargement du squelette de l’application et des librairies de Horizom, vous aurez une application Horizom qui fonctionne. Assurez-vous de garder les fichiers composer.json et composer.lock et le reste de votre code source.

## Configuration rapide:

1. Ouvrez le fichier config/app.php avec un éditeur de texte et définissez votre configuration en suivant les instructions dans les lignes de commentaire qui précèdent.
2. Dans le cas où vous souhaitez utiliser une base de données, ouvrez le fichier config/database.php avec un éditeur de texte et définissez les paramètres de votre base de données.

> Vous devriez être maintenant capable de vous rendre sur le lien votre application Horizom et voir la page d’accueil par défaut.

Pour une meilleure sécurité, le système et tous les dossiers de l'application doivent être placés au-dessus de la racine Web afin qu'ils ne soient pas directement accessibles via un navigateur. Par défaut, les fichiers **.htaccess** sont inclus dans chaque dossier pour empêcher l'accès direct, mais il est préférable de les supprimer de l'accès public entièrement au cas où la configuration du serveur Web changerait ou ne respecterait pas le **.htaccess**.

Une mesure supplémentaire à prendre dans les environnements de production est de désactiver les rapports d'erreur PHP et toute autre fonctionnalité de développement. Dans Horizom, cela peut se faire en suivant les configurations décrites sur la page de sécurité .

C'est tout!

## Mise en route de Horizom

Il vous est possible de démarrer Horizom avec le serveur php local grâce aux commandes ci-dessous
```bash
composer start
```
ou alors

```bash
php -S localhost:8000 -t public
```
Toute application nécessite des efforts d'apprentissage. Nous avons fait de notre mieux pour minimiser le processus en le rendant aussi agréable que possible.

Horizom est framework ready-to-use \(prêt à l'emploi\), l'étape majeure consiste donc à l'installer, alors lisez le sujet sur l'installation dans la section ci-dessus.

Ensuite, lisez chaque page des sujets généraux dans l'ordre. Chaque sujet s'appuie sur le précédent, et comprend des exemples de code que vous êtes encouragés à essayer.

Une fois que vous comprenez les bases, vous serez en mesure d'explorer les pages de référence de classe et de référence d'aide pour apprendre à utiliser les différentes bibliothèques.

## Vulnérabilités

Si vous découvrez une vulnérabilité au sein de Horizom, veuillez le marquer dans [Github Issues](https://github.com/horizom/framework/issues). Toutes les vulnérabilités de sécurité seront traitées rapidement.

## License

Consultez le [Contrat de Licence](https://github.com/horizom/docs/blob/master/LICENSE.md).

## Remerciements

L'équipe Horizom tient à remercier tous les contributeurs et utilisateurs de Horizom.
