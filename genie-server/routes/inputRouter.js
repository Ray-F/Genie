const {Router} = require('express');

const inputController = require('../controllers/InputController');

const router = Router();


router.get('/', inputController.saveChatbotInput);



module.exports = router;
