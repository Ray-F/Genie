const {Router} = require('express');

const inputController = require('../controllers/InputController');

const router = Router();


router.all('/', inputController.saveChatbotInput);



module.exports = router;
