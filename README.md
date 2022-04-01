# hello-world-http-node

Simple project using built-in Node.js `http` module.

Implements a routes structure, that chooses the appropriate controller to handle request. Also adds syntactic sugar for reponse types.

## How to start

1. Clone this repo:

        git clone https://github.com/dkostmii/hello-world-http-node.git && cd hello-world-http-node

2. Install dependencies:

        yarn

    or

        npm install

3. Run server:

        npm run start

    or

        yarn start

4. Open [http://localhost/](http://localhost/) (default) in your browser.

    There is also a `helloworld` route: [http://localhost/helloworld](http://localhost/helloworld)

    Any other route you go to will response `Not found`, try [http://localhost/123](http://localhost/123)

5. Application will output requests in console:

        Server is listening on http://localhost:80/
        200 GET: /helloworld
        404 GET: /favicon.ico
        404 GET: /123


## Project structure

```JavaScript
        hello-world-http-node
        |   .gitignore
        |   example.env // rename to .env to set environment variables
        |   index.js // startup code
        |   package-lock.json // machine-readable project info for NPM
        |   package.json // user-readable project info
        |   README.md // THIS FILE
        |   yarn.lock // machine-readable project info for Yarn
        |
        \---src
            |   App.js // Application entry point
            |   Router.js // Route definitions for HTTP server
            |
            +---controllers // Each controller is assigned for specific route to process request
            |       helloworld.js
            |       index.js // exports all controllers as default module
            |       notfound.js
            |
            \---types
                    |   index.js // defines Ok() and NotFound() as response types available at global scope
                    |
                    \---response
                            notfound.js // sets 404 response
                            ok.js // sets 200 response
```
