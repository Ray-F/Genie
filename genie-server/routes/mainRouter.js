const {Router} = require('express');

const router = Router();

router.use("/", (req, res, next) => {
  res.send(`
    <h2>Genie Express API</h2>
    <p>You have reached the express API for Genie. Refer to <a href='https://github.com/Ray-F/Genie'>GitHub repository</a> for access</p>
  `);
});


module.exports = router;
