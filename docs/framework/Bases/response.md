---
title: Response
description: HTTP Responses
---

## Création de réponses

### View

Toutes les routes et contrôleurs doivent renvoyer une réponse à renvoyer au navigateur de l'utilisateur. Horizom propose plusieurs façons différentes de renvoyer des réponses. La réponse la plus basique renvoie une chaîne depuis une route ou un contrôleur. Le framework convertira automatiquement la chaîne en une réponse HTTP complète:

```php
return $response->view('index');

return $response->view('home.index');

return $response->view('home/index');
```

### JSON

En plus de renvoyer des vues, vous pouvez également renvoyer du JSON:

```php
return $response->json(['version' => 1.1]);
```

### Redirect

Vous avez aussi la possibilité de renvoyer une redirection comme reponse.

```php
return $response->redirect('/index');

return $response->redirect('/index', 301);
```