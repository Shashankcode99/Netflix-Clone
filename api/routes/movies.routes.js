const router = require("express").Router();
const movieModel = require("../models/Movie");

const verification = require("../verifyToken");

//ALL CRUD OPERATIONS

//CREATE A NEW MOVIE
router.post("/", verification, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new movieModel(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowedn to add movie!");
  }
});

//UPDATE A NEW MOVIE
router.put("/:id", verification, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await movieModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to add movie!");
  }
});

//DELETE A NEW MOVIE
router.delete("/:id", verification, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await movieModel.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to delete a movie!");
  }
});

//GET A MOVIE
router.get("/find/:id", async (req, res) => {
  try {
    const getMovie = await movieModel.findById(req.params.id);
    res.status(200).json(getMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET RANDOM A MOVIE
router.get("/random", async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await movieModel.aggregate([
        {
          $match: { isSeries: true },
        },
        {
          $sample: { size: 1 },
        },
      ]);
    } else {
      movie = await movieModel.aggregate([
        {
          $match: { isSeries: false },
        },
        {
          $sample: { size: 1 },
        },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL

router.get("/", verification, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const allMovies = await movieModel.find();
      res.status(200).json(allMovies.reverse());
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
    const data = await movieModel.aggregate([
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
