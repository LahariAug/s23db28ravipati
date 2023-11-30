var express = require('express');
const hats_controlers= require('../controllers/hats');
var router = express.Router();
/* GET Hats */
router.get('/', hats_controlers.hats_view_all_Page );
/* GET detail Hats page */
router.get('/detail', hats_controlers.hats_view_one_Page);
/* GET create Hats page */

/* GET create update page */
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
    }
router.get('/create',secured, hats_controlers.hats_create_Page);
router.get('/update',secured, hats_controlers.hats_update_Page);
router.get('/delete',secured, hats_controlers.hats_delete_Page);
module.exports = router;
