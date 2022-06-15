const router = require('express').Router();
const postController = require('../controllers/posts_controllers');

router.get('/', postController.getAllPost);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;