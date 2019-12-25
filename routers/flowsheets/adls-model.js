
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('adls');
}

function findById(id) {
    return db('adls')
    .where({id})
    .first();
}

async function add(adls) {
    return db('adls')
    .insert(adls)
    .returning('id');
    
}

function findBy(filter) {
    return db('adls').where(filter);
  }

function update(id, changes){
return db('adls')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('adls')
            .where({id})
            .first()
    })
}