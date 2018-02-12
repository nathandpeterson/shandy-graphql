const db = require('../db/knex')
// const fs = require('fs')

class BookModel {
    static getAll(){
        return db('books')
    }
    static getOne(id){
        return db('books').where({id}).first()
       .then(bookInfo => {
            return this.getAuthorInfo(id)
            .then(authorInfo => {
              bookInfo.authors = authorInfo
              return bookInfo
            })
       })
    }
    static getAuthorInfo(book_id){
      return db('author_book').where({book_id}).first()
      .then(joinInfo => {
          return db('authors').where({id: joinInfo.author_id})
      })
    }
}

module.exports = BookModel

// BookModel.getOneText('../texts/mrs_dalloway.txt')
//   .then(res => console.log(res))
