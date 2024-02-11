//crear una  calculadora 

const suma = (numero1 = 0, numero2 = 0) => {
    return `el resultado de la suma es ${numero1 + numero2}`;
};
const resta = (numero1 = 2, numero2 = 8) =>{
    return `el resultado de la resta es ${numero1 - numero2}`;
};
const multiplicacion = (numero1 = 9, numero2 = 0) =>{
    return `el resultado de la multiplicacion es ${numero1 * numero2}`;
};
const division =(numero1 = 40, numero2 = 20) =>{
    return `el resultado de la division es ${numero1 / numero2}`;
};

console.log(multiplicacion());

