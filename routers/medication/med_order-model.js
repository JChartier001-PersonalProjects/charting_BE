const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('med_order');
}

function findById(id) {
    return db('med_order')
    .where({id})
    .first();
}

async function add(med_order) {
    return db('med_order')
    .insert(med_order)
    .returning('id');
    
}

function findBy(filter) {
    return db('med_order').where(filter);
  }

function update(id, changes){
return db('med_order')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('med_order')
            .where({id})
            .first()
    })
}