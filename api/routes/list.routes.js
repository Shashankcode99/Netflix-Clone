const router = require("express").Router();
const listModel = require("../models/List");

const verification = require("../verifyToken");

//ALL CRUD OPERATIONS

//CREATE A NEW LIST
router.post("/", verification, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new listModel(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to add List!");
  }
});

//DELETE A LIST
router.delete("/:id", verification, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await listModel.findByIdAndDelete(req.params.id);
      res.status(200).json("List has been deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed to add List!");
  }
});

//GET LISTS

router.get("/", verification, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let allList = [];
  {
    try {
      if (typeQuery) {
        if (genreQuery) {
          allList = await listModel.aggregate([
            {
              $sample: { size: 10 },
            },
            {
              $match: { type: typeQuery, genre: genreQuery },
            },
          ]);
        } else {
          allList = await listModel.aggregate([
            {
              $sample: { size: 10 },
            },
            {
              $match: { type: typeQuery },
            },
          ]);
        }
      } else {
        allList = await listModel.aggregate([
          {
            $sample: { size: 10 },
          },
        ]);
      }
      res.status(200).json(allList);
    } catch (error) {
      res.status(403).json("You are not authorized");
    }
  }
});

//UPDATE A NEW MOVIE

//GET RANDOM A MOVIE

//GET ALL

//GET USER STATS

module.exports = router;
