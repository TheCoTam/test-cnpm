const express = require('express');
const router = express.Router();

const popController = require('../app/controllers/PopController');

router.get('/:id/create', popController.create);
router.get('/:id/restore', popController.restore);
router.post('/store', popController.store);
router.get('/renter', popController.renter);
// router.get('/deleted-pops', popController.delete);
router.get('/deleted-pops', popController.bin);
router.get('/:id/edit', popController.edit);
router.get('/:residentId/edit-2', popController.edit_2);
router.get('/:houseId/detail', popController.detail);
router.put('/:id', popController.update);
router.put('/:residentId/admin', popController.update_2);
router.get('/', popController.show);
router.delete('/:id', popController.delete);
router.delete('/:id/permanent', popController.destroy);
router.post('/search', popController.search);

module.exports = router;
