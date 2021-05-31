# Routes groupées

Vous pouvez ajouter une série de route sous un seul chemin principal à l'aide de la méthode 
`$router->group()` en définissant un prefixe,

```php
<?php

$router->group(['prefix' => 'api'], function ($router) {
    $router->get('/', 'ApiController@index');
    $router->post('/version', 'ApiController@version');
    $router->post('/id/{id}', 'ApiController@name');
    $router->post('/status', 'ApiController@status');
});
?>
```

Chacun des noms de route sera préfixé par «prefix», et chacun des chemins de route sera préfixé par / prefix, de sorte que les chemins deviennent:

* `/prefix/`
* `/prefix/id/{id}`
* `/prefix/status/`

