const router = require("express").Router();
const mw = require("./users-middleware.js");
const userModel = require("./users-model");

router.get("/", (req, res, next) => {
  try {
    let allUsers = userModel.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu" });
  }
});

router.post("/register", mw.validatePayload, (req, res, next) => {
  try {
    let userObj = {
      username: req.body.username,
      password: req.body.password,
    };
    const insertedUser = userModel.insert(userObj);
    res.status(201).json(insertedUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login",mw.validatePayload,mw.validateLogin,(req,res,next)=>{
    try {
        res.status(200).json({message:`Hoş geldiniz ${req.existUser.username} - userId:${req.existUser.user_id}`});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
