// app.js

// 1. Muestra mensaje inicial en consola
console.log("Creando promesa");

// Definimos la Promesa
// Usamos "new Promise" y pasamos una función con "resolve" y "reject"
const miPromesa = new Promise((resolve, reject) => {
    
    // Usamos setTimeout para simular una petición a una base de datos que tarda un tiempo
    setTimeout(() => {
        // 3. Este mensaje aparece justo antes de que tengamos la "respuesta"
        console.log("Esperando respuesta");

        // Creamos el objeto Persona con los datos solicitados
        const persona = {
            nombre: "Mario",
            apellido: "Ross",
            edad: 55,
            lugar: "Mushroom Kingdom"
        };

        // Completamos (resolvemos) la promesa entregando el objeto
        resolve(persona);

    }, 3000); // 3000 milisegundos = 3 segundos de espera
});

// 2. Muestra mensaje indicando que la promesa ya fue definida
console.log("Registrando promesa");

// Cuando la promesa se resuelva exitosamente, ejecutamos esta función
miPromesa.then((datos) => {
    // 4. Mostramos la respuesta final
    console.log("Respuesta:", datos);
});
