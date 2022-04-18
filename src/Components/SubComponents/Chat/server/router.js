const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("nothing much in there").status(200)
})

module.exports = router
