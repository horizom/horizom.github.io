# Routes simples
Il existe deux fichiers de routes chez Horizom, un pour les routes `API` et l'autre pour les routes `WEB`, les deux fichiers se trouvent dans le dossier `routes` a la racine de votre projet.

Chaque fois que vous ajoutez une route à la collection, vous récupérez un objet `$router`. L'objet `$router` est assez puissant et vous permet de définir un large éventail de conditions de correspondance. Toutes les méthodes `$router` sont fluides, vous pouvez donc les enchaîner.

### Création d'une route avec pour methode GET
La plus simple des manières de définir une route avec Horizom est en utilisant la syntaxe suivante : 

`$router->get('/chemin', 'Contrôleur')` 


vous avez aussi la possibilité d'ajouter des `{attributs}` à vos routes
```php
<?php

$router->get('/', 'MainController@index');
$router->get('/hello/{name}', 'MainController@hello');

?>
```

### Création d'une route avec pour methode POST
Syntaxe : `$router->post('/chemin', 'Contrôleur')`
```php
<?php

$router->post('/datas', 'MainController@datas');

?>
```

### Création d'une route acceptant plusieurs methodes

Pour créer une route acceptant plusieurs methodes vous n'avez qu'a utiliser la synthaxe suivante : 

`$router->addRoute(['methode1', 'methode2'], '/chemin', 'Contrôleur')`

```php
<?php

$router->addRoute(['GET', 'POST'], '/dashboard', 'MainController@dashboard');

?>
```