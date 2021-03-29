const { ProLang } = require('../models');

const prolangdata = [
  { //1
    program:'Python'
  },
  { //2
    program:'HTML'   
  },
  { //3
    program:'CSS'
  },
  { //4
    program:'JavaScript'
  },
  { //5
    program:'TypeScript'
  },
  { //6
    program:'Java'
  },
  { //7
    program:'Ruby'
  }
];

const seedProLang = () => ProLang.bulkCreate(prolangdata);

module.exports = seedProLang;
