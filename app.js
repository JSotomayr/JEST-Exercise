console.log("Hello World");

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = function (valueInDollar){

    return Math.floor((valueInDollar * oneEuroIs.USD)*oneEuroIs.JP) 
    
}

const fromEuroToDollar = function(valueInEuro){
    
     return  valueInEuro * oneEuroIs.USD;
   
}


const fromYenToPound = function (valueInYen){
    return (valueInYen*oneEuroIs.GBP)/oneEuroIs.JP
    
}
module.exports = { fromDollarToYen , fromYenToPound , fromEuroToDollar };