const router = require('express').Router();
const itemController = require('../controllers/items_controllers');

router.get('/', itemController.getAllItem);
router.get('/:id', itemController.getByID);
router.put('/:id', itemController.updateItem);
router.post('/', itemController.addItem);


module.exports = router;