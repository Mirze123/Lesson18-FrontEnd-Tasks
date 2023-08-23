// type conversion
let x = 36;

let random = Math.random();
//console.log(Math.round(random * 1000));

const getRandomString = () => {
    let random = Math.round(Math.random() * 100000);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return Array.from(random.toString())
        .map(x => {
            return alphabet.charAt(parseInt(x))
        })
        .join('');

}

console.log(getRandomString());