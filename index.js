class Formatter {
  static capitalize(str){
    let firstLetter = str[0].toUpperCase()
    let newStr = firstLetter + str.slice(1)
    return newStr
  }
  static sanitize(str){
    return str.replace(/[!#@$%^&*(){}_+~]/g, '')
  }
  static titleize(str){
    let words = str.split(' ')
    let titleStr = ''
    let i = 0
    words.forEach(word => {
      console.log(i)
     if(word.match(/(by|for|the|but|of|at|and|from|a|an)\b/) && i != 0){
       if(i === 0){
        titleStr += word
       }else{
         console.log('yeet')
         titleStr += ' ' + word
       }
       
     }else{
      let firstLetter = word[0].toUpperCase()
      let newStr = firstLetter + word.slice(1)
      console.log(i)
      if(i === 0){
        titleStr += newStr
       }else{
         titleStr += ' ' + newStr
       }
     }
     i += 1
    })
    console.log(titleStr)
    return titleStr
  }
}