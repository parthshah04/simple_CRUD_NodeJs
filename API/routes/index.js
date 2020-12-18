var express = require('express');
var router = express.Router();

var ctrDetails = require('../controller/details.controllers.js');

// Details routes

router
    .route('/details')
    .get(ctrDetails.detailsGetAll)
    .post(ctrDetails.detailsAddOne);

router
    .route('/details/:detailId')
    .get(ctrDetails.detailsGetOne)
    .put(ctrDetails.detailsUpdateOne)
    .delete(ctrDetails.detailsDeleteOne);


module.exports = router;