const express = require('express');
const validatePlan = require('../middlewares/validatePlan');

const {
    getPlans, 
    createPlan, 
    updatePlan, 
    deletePlan
} = require('../controllers/plansController');

const router = express.Router();

router.get('/', getPlans);
router.post('/', validatePlan, createPlan); //POST는 유효성 검사 먼저
router.put('/:id', validatePlan, updatePlan); //PUT도 마찬가지
router.delete('/:id', deletePlan);

module.exports = router;