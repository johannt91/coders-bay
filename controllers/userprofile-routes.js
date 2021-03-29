const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { User, Post, Vote, Comment, ProLang, Competence } = require("../models");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
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
          "(SELECT user.email FROM user WHERE post.id = user.id)"
        ),
        "user_email",
      ],
      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
      //   ),
      //   "vote_count",
      // ],
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
        attributes: [
          "id",
          "first_name",
          "last_name",
          "role",
          "email",
          "knowledgeable_in",
          "image",
        ],
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
      // serialize the data
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      // pass data if logged in
      res.render("userprofile", {
        posts,
        loggedIn: req.session.loggedIn,
        //extra to isolate the coach view
        role: req.session.role,
        var: req.session.var,
        //My profile
        user_id: req.session.user_id,
        first_name: req.session.first_name,
        last_name: req.session.last_name,
        email: req.session.email,
        image: req.session.image,
        knowledgeable_in: req.session.knowledgeable_in,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      },
      {
        model: User,
        attributes: [
          "id",
          "first_name",
          "last_name",
          "role",
          "email",
          "knowledgeable_in",
          "image",
        ],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
