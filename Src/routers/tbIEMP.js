const knex = require('../database/dbconnection');
const express = require('express');
const valid = require('../database/joiValidator');
const router = express.Router();
const {tbiempGetData, tbiempPostData, tbiempUpdateData, tbiempDeleteData} = require('../controller/tbIEMP');

// The following routers are for the tbIEMP table.
router.get('/api/getTbiempData',tbiempGetData);
router.post('/api/postTbiempData',valid, tbiempPostData);
router.put('/api/putTbiempData/:ID', tbiempUpdateData);
router.delete('/deleteTbiempData/:ID',  tbiempDeleteData);

module.exports = router
