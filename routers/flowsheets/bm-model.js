const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('bm');
}

function findById(id) {
    return db('bm')
    .where({id})
    .first();
}

async function add(bm) {
    return db('bm')
    .insert(bm)
    .returning('id');
    
}

function findBy(filter) {
    return db('bm').where(filter);
  }

function update(id, changes){
return db('bm')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('bm')
            .where({id})
            .first()
    })
}