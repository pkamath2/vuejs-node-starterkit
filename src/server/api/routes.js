const express = require('express');
const router = express.Router();

const testApi = require('./test-api');

// Defines routes
router.get('/test-api', testApi.getTest);

module.exports = router;