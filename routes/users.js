const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("user test sucess");
});

module.exports = router;


