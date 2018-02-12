const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const txt = require('txt')

class TextModel {
  static async getOneText(path){
    return await fs.readFileSync(path, 'utf-8')
  }
  static async breakIntoParagraphs(text){
    const lines = text.split('\n')
    const paragraphs = {}
    let counter = 0
    for(let i = 0; i < lines.length; i++) {
      if(!lines[i]) {
        counter++
        continue
      }
      if(paragraphs[counter]) {
        paragraphs[counter].push(lines[i])
      } else {
          paragraphs[counter] = []
          paragraphs[counter].push(lines[i])
      }
    }
    return paragraphs
  }
}


TextModel.getOneText('../texts/mrs_dalloway.txt')
  .then(text => {
      const paragraphs = TextModel.breakIntoParagraphs(text)
      console.log(paragraphs)
})
