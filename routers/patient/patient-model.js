const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('patient')
}

function findById(id) {
    return db('patient')
    .where({id})
    .first();
}

async function add(patient) {
    return db('patient')
    .insert(patient)
    .then(id => {
        return findById(id);    
})
}

function findBy(filter) {
    return db('patient').where(filter);
  }

function update(id, changes){
    return db('patient')
        .where({id})
        .update(changes, "id")
        .then(id => {
            return db('patient')
                .where({id})
                .first()
        })
    }