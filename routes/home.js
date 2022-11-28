const express = require('express');
const router = express.Router();
const {about_get}= require('../controllers/controllertest')
// console.log(about_get);
router.get('/', about_get);

module.exports = router;
