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
router.delete("/:id", verification, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
});

//GET

router.get("find/:id", async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.id);
    const {password,...info} = getUser._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verification, async (req, res) => {
  const query=req.query.new;
  if (req.user.isAdmin) {
    try {

      const allUsers = query ? await userModel.find().limit(10) : await userModel.find();
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users");
  }
});



//GET USER STATS

module.exports = router;
