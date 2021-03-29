const router = require("express").Router();
const { Post, User, Vote, Comment } = require("../models");
const sequelize = require("../config/connection");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  if (req.session.role == "coach") {
    req.session.var = true;
  } else {
    req.session.var = false;
  }

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    var: req.session.var,
    first_name: req.session.first_name,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

//Filter skills
router.get("/post/:id", (req, res) => {

  Post.findAll({
    where: {
      type: "forum",
      // Get the value from the
      skills: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "type",
      "skills",
      "content",
      "user_id",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      //including the comment here
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        order: [["created_at", "DESC"]], //Newest comment are shown first
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      },
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbPostData) => {

      if (!dbPostData) {
        res
          .status(404)
          .json({ message: "No post found with this type of post" });
        return;
      }

      //Result where there isn't data to display
      if(dbPostData == ''){
        res.render("blank");
      }else{

      // serialize the data
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      // pass data if logged in
      res.render("forum", {
        posts,
        loggedIn: req.session.loggedIn,
        role: req.session.role,
        var: req.session.var,
        image: req.session.image,
        //for the skill selection
        skills: req.session.skills, //<- no need anymore
      });
    }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
