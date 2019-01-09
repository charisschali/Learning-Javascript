const router = require('express').Router();
const logger = require('../../utils/logger');

router.route('/')
.get((req, res) => {
    logger.log('Hello there');
    res.send({ok: true})
})

module.exports = router;