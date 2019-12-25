const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('emer_contact');
}

function findById(id) {
    return db('emer_contact')
    .where({id})
    .first();
}

async function add(emer_contact) {
    return db('emer_contact')
    .insert(emer_contact)
    .returning('id');
    
}

function findBy(filter) {
    return db('emer_contact').where(filter);
  }

  function update(id, changes){
    return db('emer_contact')
        .where({id})
        .update(changes, "id")
        .then(id => {
            return db('emer_contact')
                .where({id})
                .first()
        })
    }