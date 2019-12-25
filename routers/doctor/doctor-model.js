const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('doctor');
}

function findById(id) {
    return db('doctor')
    .where({id})
    .first();
}

async function add(doctor) {
    return db('doctor')
    .insert(doctor)
    .returning('id');
    
}

function findBy(filter) {
    return db('doctor').where(filter);
  }

function update(id, changes){
return db('doctor')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('doctor')
            .where({id})
            .first()
    })
}