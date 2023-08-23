/*
Task1 = Funksiyaya parametr kimi gonderilen
ededin her bir reqemini kvadrata yukseldib
bunlari birlesdirib geri qaytarmaq lazimdir

*/

function squareDigits(num) {
    let stringNum = num.toString();
    let stringArray = stringNum.split('');
    let squareArray = stringArray.map(x=>{
        return parseInt(x) * parseInt(x);
    });
    let result = squareArray.join('');

    return parseInt(result);

}

squareDigits(5678);


const x = 5;

if(x>5){
    console.log(1);
}
else{
    console.log(1);
}

// ternary operator
x>5 ? console.log(1) : console.log(0);
