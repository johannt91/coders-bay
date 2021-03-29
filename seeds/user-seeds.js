const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    image: 'img/11.jpg',
    data: '',
    role: 'coach',
    first_name: 'Rose	',
    last_name: 'Bond',
    email: 'rose@gmail.com',
    password: 'rose',
    knowledgeable_in: 'R'   
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Harry',
    last_name: 'Nash',
    email: 'harry@gmail.com',
    password: 'harry',
    knowledgeable_in: 'python'   
  },
  {
    image: 'img/10.jpg',
    data: '',
    role: 'coach',
    first_name: 'Dominic',
    last_name: 'Duncan',
    email: 'dominic@cbc.ca',
    password: 'dominic',
    knowledgeable_in: 'CSS'   
  },
  {
    image: 'img/13.jpg',
    data: '',
    role: 'coach',
    first_name: 'Richard',
    last_name: 'Mackenzie',
    email: 'richard@sogou.com',
    password: 'richard',
    knowledgeable_in: 'excel'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Elizabeth',
    last_name: 'Davies',
    email: 'elizabeth@last.fm',
    password: 'elizabeth',
    knowledgeable_in: 'JavaScript'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Bella',
    last_name: 'Gibson',
    email: 'bella@goo.ne.jp',
    password: 'bella',
    knowledgeable_in: 'python'
  },
  {
    image: 'img/12.png',
    data: '',
    role: 'coach',
    first_name: 'James',
    last_name: 'Bower',
    email: 'james@weather.com',
    password: 'james',
    knowledgeable_in: 'sequelize'
  },
  {
    image: '',
    data: '',
    role: 'coach',
    first_name: 'Alison',
    last_name: 'Grant',
    email: 'alison@imdb.com',
    password: 'alison',
    knowledgeable_in: 'bootstrap'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Austin',
    last_name: 'Vaughan',
    email: 'austin@feedburner.com',
    password: 'austin',
    knowledgeable_in: 'express'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Benjamin',
    last_name: 'Sutherland',
    email: 'benjamin@china.com.cn',
    password: 'benjamin',
    knowledgeable_in: 'MySql'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Alexander',
    last_name: 'Wilkins',
    email: 'alexander@google.ru',
    password: 'alexander',
    knowledgeable_in: 'CSS'
  },
  {
    image: '',
    data: '',
    role: 'user',
    first_name: 'Theresa',
    last_name: 'Morgan',
    email: 'theresa@epa.gov',
    password: 'theresa',
    knowledgeable_in: 'semantic-UI'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
