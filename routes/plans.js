const express = require('express');
const validatePlan = require('../middlewares/validatePlan');
const planController = require('../controllers/plansController');

const router = express.Router();

router.get('/', planController.getPlans);
router.post('/', planController.createPlan); //POST는 유효성 검사 먼저
router.put('/:id', planController.updatePlan); //PUT도 마찬가지
router.delete('/:id', planController.deletePlan);

module.exports = router;