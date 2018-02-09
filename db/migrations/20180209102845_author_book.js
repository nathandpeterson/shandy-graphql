
exports.up = function(knex, Promise) {
    return knex.schema.createTable('author_book', (table) => {
        table.integer('author_id').notNullable()
        table.foreign('author_id').references('authors.id')
        table.integer('book_id').notNullable()
        table.foreign('book_id').references('books.id')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author_book')
}
