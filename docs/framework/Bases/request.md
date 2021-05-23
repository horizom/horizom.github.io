---
title: Request
description: HTTP Requests
---

## Accéder à la Request

Pour obtenir une instance de la requête HTTP actuelle via l'injection de dépendances, vous devez ajouter un paramètre ayant le nom de la requête à laquelle vous souhaitez accéder

```php
<?php

namespace App\Controllers;

use Horizom\Http\Response;
use Psr\Http\Message\ResponseInterface;

class MainController
{
    public function hello(Response $response, $name): ResponseInterface
    {
        return $response->view('hello', ["name" => $name]);
    }
}
```
