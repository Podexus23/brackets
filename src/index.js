module.exports = function check(str, brackets){
 if(str.length == 0){
   return true
 }
 for(let i = 0;i<str.length; i++){
   for(let bracket of brackets){
     if(bracket[0] == str[i] && bracket[1] == str[i+1]){
       let stringo = str.slice(0, i) + str.slice(i+2)
       return check(stringo, brackets)
     }
   }
 }

 return false
}
