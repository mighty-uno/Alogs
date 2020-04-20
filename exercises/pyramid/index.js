// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,row=0,level='') {
 if(row  ===n){
     return;
 }

 if(level.length  === 2*n-1){
     console.log(level)
     return pyramid(n,row+1)
 }

 let md =  Math.floor((2*n-1)/2);
 let add;
 if(md - row <= level.length && md+row>=level.length){
     add = '#'
 }else{
     add = ' '
 }

 pyramid(n,row,level + add);


}


/****
 *  SOl 1
 *     let md =  Math.floor((2*n-1)/2);
for (let index = 0; index < n; index++) {
  let level = "";
    for (let index1 = 0; index1 < 2* n-1; index1++) {
        
     if(md - index <= index1 && md + index >= index1){
level += '#'
     }else{
level += ' '

     }

     
    }
    console.log(level)
    
}
 */

module.exports = pyramid;
