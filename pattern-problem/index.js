
/**
 * 
 * O/P *
 *     **
 *     ***
 */

function pyramid1(n) {

    const str= '*';
    for (let i = 0; i < n; i++) {
        
        let strToPrint = ''
        for (let j = 0; j <= i; j++) {
           
            strToPrint += str;
            
        }

        console.log(strToPrint);
    }
}

function pyramid2(n) {

    const str= ' ';
    for (let i = 0; i < n; i++) {
        
        let strToPrint = '';
        let k =0;
        for (let j = 0; j < n-i; j++) {
            strToPrint += str;
        }

        while (k < i+1) {
            strToPrint += '* ';
            k++
        }

        console.log(strToPrint);
    }
}

pyramid2(4);