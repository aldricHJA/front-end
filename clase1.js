//const nombres = ['aldrich' , 'marlom' , 'karla' , 'juan' , 'lisandro'];

//let [nombre1, nombre2, nombre3, nombre4, nombre5] = nombres;

//console.log(nombres)

const datos_personales = {
    nombre: "aldrich",
    ap_paterno: "jimenez",
    ap_materno: "ayala"
}

console.log(datos_personales[`nombre`])
console.log(datos_personales.nombre)
let {nombtr, ap_materno, ap_paterno} = datos_personales;
console.log(ap_materno)