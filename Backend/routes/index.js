const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./authorization'));
router.use('/posts', require('./post'));
router.use('/users', require('./user'));

module.exports = router;
