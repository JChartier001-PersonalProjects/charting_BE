const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy
};

function find() {
    return db('diagnosis');
}

function findById(id) {
    return db('diagnosis')
    .where({id})
    .first();
}

async function add(diagnosis) {
    return db('diagnosis')
    .insert(diagnosis)
    .returning('id');
    
}

function findBy(filter) {
    return db('diagnosis').where(filter);
  }