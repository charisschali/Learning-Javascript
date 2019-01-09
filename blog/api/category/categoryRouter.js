const router = require('express').Router();
const logger = require('../../utils/logger');

router.route('/')
.get((req, res, next) => {
    logger.log('Hello there');
    // return next(new Error('something went wrong '));
    res.send({ok: true})
})

module.exports = router;