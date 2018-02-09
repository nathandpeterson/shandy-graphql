
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('author_book').del()
    .then(function () {
      // Inserts seed entries
      return knex('author_book').insert([
        {author_id: 4, book_id: 1},
        {author_id: 1, book_id: 2},
        {author_id: 7, book_id: 3},
        {author_id: 6, book_id: 4},
        {author_id: 2, book_id: 5},
        {author_id: 2, book_id: 6},
        {author_id: 3, book_id: 7},
        {author_id: 3, book_id: 8}
      ])
    })
}