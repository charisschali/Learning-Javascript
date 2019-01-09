const router = require('express').Router();
const userRouter = require('./user/userRouter');
const categoryRouter = require('./category/categoryRouter');
const postRouter = require('./post/postRouter');

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router .use('/posts', postRouter);

module.exports  = router;