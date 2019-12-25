const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('vitals');
}

function findById(id) {
    return db('vitals')
    .where({id})
    .first();
}

async function add(vitals) {
    return db('vitals')
    .insert(vitals)
    .returning('id');
    
}

function findBy(filter) {
    return db('vitals').where(filter);
  }

function update(id, changes){
return db('vitals')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('vitals')
            .where({id})
            .first()
    })
}