---
title: Controller
description: Route Controller
---

## Introduction

Instead of defining all of your request handling logic as Closures in route files, you may wish to organize this behavior using Controller classes. Controllers can group related request handling logic into a single class. Controllers are stored in the `app/Controller` directory.

### Defining Controllers

Below is an example of a basic controller class. Note that the controller extends the base controller class included with Horizom.

```php
<?php

namespace App\Controller;

use Horizom\Http\Request;
use Horizom\Http\Response;

class User
{
    /**
     * Show the profile for the given user.
     *
     * @param  Request  $id
     * @param  Response  $id
     * @param  array  $args
     * @return Response
     */
    public function show(Request $request, Response $response, array $args)
    {
        return $response->view('user.profile', ['name' => $args['name']);
    }
}
```

You can define a route to this controller action like so:

```php
<?php

use Horizom\Http\Route;

Route::get('user.profile', '/user/{name}', 'user@show');
```

Now, when a request matches the specified route URI, the `show` method on the `User` Controller class will be executed. The route parameters will also be passed to the method.

### Nested Controllers

Sometimes you may need to define routes to a nested controllers. For example, Controllers are stored in the `app/Controller/Api` directory:

```php
<?php

namespace App\Controller\Api;

use Horizom\Http\Request;
use Horizom\Http\Response;

class User
{
    /**
     * Show the profile for the given user.
     *
     * @param  Request  $id
     * @param  Response  $id
     * @param  array  $args
     * @return Response
     */
    public function login(Request $request, Response $response, array $args)
    {
        return $response->json(['name' => "John Doe"]);
    }
}
```

You can define a route to this controller action like so:

```php
<?php

use Horizom\Http\Route;

Route::get('api.user/login', '/api/user/login', 'api/user@login');
```



