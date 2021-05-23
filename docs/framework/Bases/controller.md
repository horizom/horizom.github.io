---
title: Controller
description: Route Controller
---

## Introduction

Au lieu de définir toute votre logique de traitement des demandes dans les fichiers de routes, vous souhaiterez peut-être organiser ce comportement à l'aide des classes Controller. Les contrôleurs peuvent regrouper la logique de traitement des demandes associées en une seule classe. Les contrôleurs sont stockés dans le répertoire `app/Controller`.


### Création des Controllers

Voici un exemple de classe de contrôleur de base

```php
<?php

namespace App\Controllers;

use Horizom\Http\Response;
use Psr\Http\Message\ResponseInterface;

class MainController
{
    public function index(Response $response): ResponseInterface
    {
        return $response->view('index');
    }
}
```

Vous pouvez définir une route vers l'action du contrôleur comme ceci:

```php
<?php

$router->get('/', 'MainController@index');

```

Désormais, lorsqu'une demande correspondra à l'URI de la route spécifiée, la méthode `index` de la classe `MainController` sera exécutée. Les paramètres de la route seront également transmis à la methode.