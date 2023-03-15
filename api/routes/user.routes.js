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
    } catch (error) {
      res.status(500).json(error);
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
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
});

//GET

router.get("find/:id", async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.id);
    const { password, ...info } = getUser._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL

router.get("/", verification, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const allUsers = query
        ? await userModel.find().sort({ _id: -1 }).limit(10)
        : await userModel.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to see all users");
  }
});

//GET USER STATS

router.get("/stats", async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const data = await userModel.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },

      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
