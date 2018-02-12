
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', table => {
      table.increments()
      table.string('title').notNullable().defaultsTo('')
      table.string('pub_year').notNullable().defaultsTo('')
      table.string('file').notNullable().defaultsTo('')
      table.timestamps(true, true)
    })
  }

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books')
  }
