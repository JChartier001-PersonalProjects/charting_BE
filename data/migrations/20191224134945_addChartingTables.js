
exports.up = function(knex) {
    return knex.schema
    .createTable(
        'patients', tbl => {
            tbl.increments('id');
            tbl.string('firstName')
            .notNullable();
            tbl.string('lastName')
            .notNullable();
            tbl.string('address')
            .notNullable();
            tbl.string('city')
            .notNullable();
            tbl.string('state')
            .notNullable();
            tbl.integer('zipCode', 5)
            .notNullable();
            tbl.integer('phoneNumber', 10)
            .notNullable();
            tbl.date("d_o_b")
            .notNullable();
            tbl.boolean('code')
            .notNullable()
        })
        .createTable('allergy', tbl => {
            tbl.increments();
            tbl.string('allergy')
            .notNullable();
            tbl.string('reaction')
            .notNullable();
            tbl.integer('pt_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('patient')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        })
        .createTable('emer_contact', tbl => {
            tbl.increments();
            tbl.string('firstName')
            .notNullable();
            tbl.string('lastName')
            .notNullable();
            tbl.string('address')
            .notNullable();
            tbl.string('city')
            .notNullable();
            tbl.string('state')
            .notNullable();
            tbl.integer('zipCode', 5)
            .notNullable();
            tbl.integer('phoneNumber', 10)
            .notNullable();
            tbl.string('email')
            .unique();
            tbl.integer('pt_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('patient')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        })
        .createTable('doctor', tbl => {
            tbl.increments();
            tbl.string('firstName')
            .notNullable();
            tbl.string('lastName')
            .notNullable();
            tbl.string('address')
            .notNullable();
            tbl.string('city')
            .notNullable();
            tbl.string('state')
            .notNullable();
            tbl.integer('zipCode', 5)
            .notNullable();
            tbl.integer('phoneNumber', 10)
            .notNullable();
            tbl.integer('faxNumber', 10)
            .notNullable();
            tbl.string('email')
            .unique();
            tbl.integer('pt_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('patient')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        })
            
        })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('')
  .dropIfTableExists('')
  .dropIfTableExists('doctor')
  .dropIfTableExists('emer_contact')
  .dropIfTableExists('allergy')
  .dropIfTableExists('patient')
 
};
