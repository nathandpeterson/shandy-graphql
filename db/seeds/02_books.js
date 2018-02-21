
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { id: 1,
          title: 'Dracula',
          pub_year: '1897'},
        { id: 2,
          title: 'Mrs. Dalloway',
          pub_year: '1925',
          file: '../texts/mrs_dalloway.txt'},
        { id: 3,
          title: 'The Life and Opinions of Tristram Shandy, Gentleman',
          pub_year: '1761-1767'},
        { id: 4,
          title: 'Sentimental Journey',
          pub_year: '1768'},
        { id: 5,
          title: 'Great Expectations',
          pub_year: '1860-1861'},
        { id: 6,
          title: 'Oliver Twist',
          pub_year: '1837-1839'},
        { id: 7,
          title: 'Prufrock and Other Observations',
          pub_year: '1917'},
        { id: 8,
          title: 'Poems',
          pub_year: '1920'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));`
      )
    })
}
