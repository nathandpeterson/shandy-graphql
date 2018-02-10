const db = require('../db/knex')
const AuthorModel = require('./AuthorModel')

class BookModel {
    static getAll(){
        return db('books')
    }
    static getOne(id){
        console.log('in Modek', id)
        return db('books').where({id}).first()
       .then(bookInfo => {
            return db('author_book').where({book_id: id}).first()
            .then(joinInfo => {
                return db('authors').where({id: joinInfo.author_id})
                    .then(authorInfo => {
                       bookInfo.authors = authorInfo
                       return bookInfo
                    })
            })
       })
    }
}

module.exports = BookModel