const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('nutrition');
}

function findById(id) {
    return db('nutrition')
    .where({id})
    .first();
}

async function add(nutrition) {
    return db('nutrition')
    .insert(nutrition)
    .returning('id');
    
}

function findBy(filter) {
    return db('nutrition').where(filter);
  }

function update(id, changes){
return db('nutrition')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('nutrition')
            .where({id})
            .first()
    })
}