const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
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

function update(id, changes){
return db('diagnosis')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('diagnosis')
            .where({id})
            .first()
    })
}