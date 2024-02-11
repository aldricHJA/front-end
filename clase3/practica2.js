const datos = [
    {
        nombre: "jose",
        apellido: "ayala",
        fecha_nacimiento: "10/05/2000",
        puesto: "sistemas",
        matricula: 201190056
    },{
        nombre: "marlon",
        apellido: "talabera",
        fecha_nacimiento: "11/06/2001",
        puesto: "sistemas",
        matricula: 201190066
    },{
        nombre: "marlon",
        apellido: "flores",
        fecha_nacimiento: "15/05/2005",
        puesto: "sistemas",
        matricula: 201190086
    },
    ['carrera', 2010, 12, 6]
];

// let [persona1, persona2, persona3, carreraData] = datos;

// let {nombre: nombre1, apellido: apellido1, fecha_nacimiento: fecha_nacimiento1, puesto: puesto1, matricula: matricula1} = persona1;
// let {nombre: nombre2, apellido: apellido2, fecha_nacimiento: fecha_nacimiento2, puesto: puesto2, matricula: matricula2} = persona2;
// let {nombre: nombre3, apellido: apellido3, fecha_nacimiento: fecha_nacimiento3, puesto: puesto3, matricula: matricula3} = persona3;

// let [carrera, anio, mes, dia] = carreraData;

// console.log(nombre);

datos.map((persona) => {
    let{nombre, apellido, fecha_nacimineto, puesto, matricula} = persona
    console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimineto}, ${puesto}, ${matricula}`);
});
