const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");
const Comment = require("./Comment");
const Competence = require("./Competence");
const ProLang = require("./ProLang");

//model associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

//using a Through table
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

//using a Through table
Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

//Comment.....
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//Programs...
Post.belongsToMany(ProLang, {
  through: Competence,
  as: "competence_posts",
  foreignKey: "post_id"
});

Post.hasMany(Competence, {
  foreignKey:"post_id"
});

ProLang.hasMany(Competence, {
  foreignKey:"prolang_id"
});

Competence.belongsTo(Post, {
  foreignKey: "post_id"
});

Competence.belongsTo(ProLang, {
  foreignKey: "prolang_id"
});

module.exports = {
   User,
   Post, 
   Vote, 
   Comment,
   Competence,
   ProLang
};
