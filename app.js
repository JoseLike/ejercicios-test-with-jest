// esta es mi funcion que suma dos numeros
const sum = (a,b) =>{
    return a+b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

//exporta la funcion para usarla en otros archivos.
//(similar a la palabra clave export cuando se usa webpack)
module.exports={sum};


const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (USD) =>{
    return (USD/oneEuroIs['USD']*oneEuroIs['JPY'])  
 }

const fromEuroToDollar = (euro) =>{
    return (euro*(oneEuroIs.USD))
}

const fromYenToPound = (JPY) =>{
    return(JPY/oneEuroIs.JPY*oneEuroIs.GBP)
}

module.exports={fromEuroToDollar,fromYenToPound,fromDollarToYen};