const {Router} = require('express');

const inputController = require('../controllers/InputController');

const router = Router();


router.get('/instabot', inputController.saveChatbotInput);



module.exports = router;
