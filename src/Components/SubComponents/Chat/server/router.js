const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Szia donsus, te kis huncut vadállat itt vagy a szerveren :D").status(200)
})

module.exports = router
