var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var hats_controller = require('../controllers/hats');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// HAT ROUTES ///
// POST request for creating a Hat.
router.post('/hats', hats_controller.hats_create_post);
// DELETE request to delete Hat.
router.delete('/hats/:id', hats_controller.hats_delete);
// PUT request to update Hat.
router.put('/hats/:id', hats_controller.hats_update_put);
// GET request for one Hat.
router.get('/hats/:id', hats_controller.hats_detail);
// GET request for list of all Hat items.
router.get('/hats', hats_controller.hats_list);
module.exports = router;
