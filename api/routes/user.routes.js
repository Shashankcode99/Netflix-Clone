const router = require("express").Router();
const userModel = require("../models/User");
const CryptoJs = require("crypto-js");
const verification = require("../verifyToken");

//ALL CRUD OPERATIONS

//UPDATE
router.put("/:id", verification, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    {
      req.body.password = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
});

//DELETE
//GET
//GET ALL
//GET USER STATS

module.exports = router;
