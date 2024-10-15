const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

const menoresDeEdad = personajesSimpsons.filter(personaje => personaje.edad < 18);

console.log(menoresDeEdad);

const sumaEdades = personajesSimpsons.reduce((total, personaje) => {
    return total + personaje.edad;
}, 0);

console.log(sumaEdades);

const nombresPersonajes = personajesSimpsons.map(personaje => personaje.nombre);

console.log(nombresPersonajes);

const personajesEstudiantes = personajesSimpsons.map(({ nombre, edad, rol}) => {
    return {
        nombre,
        edad,
        rol: edad < 18 ? "Estudiante" : rol
    };
})

console.log(personajesEstudiantes);

const nuevosPersonajes = [
    { nombre: "Apu", edad: 45, rol: "Propietario"},
    { nombre: "Krusty", edad: 52, rol: "Payaso" },
    { nombre: "Skinner", edad: 44, rol: "Director"}
];

const todosLosPersonajes = [...personajesSimpsons, ...nuevosPersonajes];

console.log(todosLosPersonajes);