const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('med_record');
}

function findById(id) {
    return db('med_record')
    .where({id})
    .first();
}

async function add(med_record) {
    return db('med_record')
    .insert(med_record)
    .returning('id');
    
}

function findBy(filter) {
    return db('med_record').where(filter);
  }

function update(id, changes){
return db('med_record')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('med_record')
            .where({id})
            .first()
    })
}