---
title: Request
description: HTTP Requests
---

## Accessing The Request

To obtain an instance of the current HTTP request via dependency injection, you should type-hint the `Horizom\Http\Request` class on your controller method. The incoming request instance will automatically be injected.

```php
<?php

namespace App\Controllers;

use Horizom\Http\Request;

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
        $name = $request->getAttribute('name');
        
        return $response->view('user.profile', ['name' => $name]);
    }
}
```
