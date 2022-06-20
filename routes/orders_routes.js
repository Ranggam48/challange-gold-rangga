const router = require('express').Router();
const orderController = require('../controllers/orders_controllers');

router.get('/', orderController.getAllOrder);
router.get('/:id', orderController.getOrder);
router.post('/', orderController.createOrder);
router.post('/update/', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;