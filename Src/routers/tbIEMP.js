const {authenticateJWT} = require('../authKey/auth');
const express = require('express');
const valid = require('../database/joiValidator');
const router = express.Router();
const {tbiempGetData, tbiempPostData, tbiempUpdateData, tbiempDeleteData} = require('../controller/tbIEMP');

// The following routers are for the tbIEMP table.
router.get('/api/getTbiempData',authenticateJWT,tbiempGetData);
router.post('/api/postTbiempData',valid,tbiempPostData);
router.put('/api/putTbiempData/:ID',authenticateJWT, tbiempUpdateData);
router.delete('/deleteTbiempData/:ID', authenticateJWT, tbiempDeleteData);

module.exports = router
