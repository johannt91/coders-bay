const { Competence } = require('../models');

const competencedata = [
  {
    post_id:1,
    prolang_id:1
  },
  {
    post_id:1,
    prolang_id:2
  },
  {
    post_id:2,
    prolang_id: 2
  },
  {
    post_id:3,
    prolang_id: 1
  },
  {
    post_id:4,
    prolang_id: 5
  },
  {
    post_id:5,
    prolang_id: 6
  },
  {
    post_id:7,
    prolang_id: 6
  },
  {
    post_id:6,
    prolang_id: 6
  }
];

const seedCompetence = () => Competence.bulkCreate(competencedata);

module.exports = seedCompetence;
