
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', table => {
    table.increments()
    table.string('first_name').notNullable().defaultsTo('')
    table.string('last_name').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
}
