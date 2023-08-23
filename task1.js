// Write a function that returns random string
// with lower and Uppercases
// if random value's each digit greater than 5
// then according char must be in uppercase
// and string length must be 6;

// const randomStringGenerator = () => {
//     let random = Math.floor(100000 + Math.random() * 899999);
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return Array.from(random.toString())
//         .map(x => {
//             let convertedX = parseInt(x);
//             return convertedX > 5
//                 ? alphabet.charAt(convertedX).toUpperCase()
//                 : alphabet.charAt(convertedX);
//         })
//         .join('');
// }
// console.log(randomStringGenerator());


/// funksiya string parametr qebul edir
/// gelen parametring her bir herfinin elifbadaki indexini
// tapib hemin indexi kvadrata yukseldib
// alinan neticeni string kimi geri qaytarmaq lazimdir



// const task = (str) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return Array.from(str).map(x => {
//         return Math.pow(alphabet.indexOf(x), 2);
//     }).join('');

// }

// console.log(task('bcd'));




/// funksiya parametr olaraq number qebul edir
// parametrin reqemlerinin cemi
// tek reqemliye dusene qeder
// funksiyani davam etdirib geriye son
// netice qaytarmaq lazimdir


// const sumEachDigit = (num) => {
//     const helperSumMethod = (nm) => {
//         return Array.from(nm.toString()).reduce((pr, cr) => pr + parseInt(cr), 0);
//     }

//     const result = helperSumMethod(num);
//     if (result < 10) {
//         return result;
//     }
//     else {
//         return sumEachDigit(result);
//     }
// }

// console.log(sumEachDigit(493193));

/// Elivizde alfabet var ==> const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// funskiya parametr olaraq string array qebul edir
// meselen  ['a','b','c','d','f'] ==> bu arrayde
// elifba sirasina gore 1 herf buraxilib ==> burda herf e olur
// ele bir funksiya yazin ki hemin buraxilan herfi qaytarsin
// ve nezere alin ki gonderilen arrayde yalniz 1 herf buraxila biler


const findMissingLetter = (arr) => {
    //['a','c','d']
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let startPosition = alphabet.indexOf(arr[0]) - 1;
    let missingChar = '';
    for (item of arr) {
        let idx = alphabet.indexOf(item);
        if ((idx - startPosition) === 1) {
            startPosition++;
        }
        else {
            missingChar = alphabet.charAt(idx - 1);
            break;
        }
    }

    return missingChar;


}

findMissingLetter(['a','b','c','d','f']);