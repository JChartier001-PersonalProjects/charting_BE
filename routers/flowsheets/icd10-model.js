const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('icd_10');
}

function findById(id) {
    return db('icd_10')
    .where({id})
    .first();
}

async function add(icd_10) {
    return db('icd_10')
    .insert(icd_10)
    .returning('id');
    
}

function findBy(filter) {
    return db('icd_10').where(filter);
  }

function update(id, changes){
return db('icd_10')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('icd_10')
            .where({id})
            .first()
    })
}