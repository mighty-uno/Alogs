// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  
   return str.split('').reduce((rev,cr)=>cr+rev,'')
}

module.exports = reverse;

// M1

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// M2
// function reverse(str) {
//     let reversed = '';
//     for (const s of str) {
//      reversed = s + reversed;
        
//     }
 
//     return reversed
//  }

// return str.split('').reduce((rev,cr)=>cr+rev,'')