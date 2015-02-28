var controllers = require('./controllers');

// make a new express Router
var router = require('express').Router();

// decorate the router with 4 different listeners
for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

// export the router
module.exports = router;

