const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy
};

function find() {
    return db('user').select('id', 'username', 'password');
}

function findById(id) {
    return db('user')
    .where({id})
    .first();
}

async function add(user) {
    return db('user')
    .insert(user)
    .returning('id');
    
}

function findBy(filter) {
    return db('user').where(filter);
  }