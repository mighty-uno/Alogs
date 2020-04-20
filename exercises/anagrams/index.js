// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   
    if(cleanStrng(stringA) === cleanStrng(stringB)){
        return true
    }else{
        return  false;
    }


}

function cleanStrng(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

function buldCharMap(str){
    let chars = {};
    for (const iterator of str.replace(/[^\w]/g,'').toLowerCase()) {
        chars[iterator] =  chars[iterator]  + 1 || 1
    }

    return chars;
}


/***
 * soln1 
 *  let fStrngA =  buldCharMap(stringA);
    let fStrngB =   buldCharMap(stringB);
    
    if(Object.keys(fStrngA).length !==  Object.keys(fStrngB).length){
        return false;
    }

    for (const char in fStrngA) {
        if (fStrngB[char] !== fStrngA[char]) {
            return false;
            
        }
    }

 */

module.exports = anagrams;
