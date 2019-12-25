const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy
};

function find() {
    return db('allergy')
}

function findById(id) {
    return db('allergy')
    .where({id})
    .first();
}

async function add(allergy) {
    return db('allergy')
    .insert(allergy)
    .returning('id');
    
}

function findBy(filter) {
    return db('allergy').where(filter);
  }