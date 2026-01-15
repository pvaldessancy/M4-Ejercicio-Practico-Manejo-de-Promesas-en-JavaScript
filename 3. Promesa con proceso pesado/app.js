// app.js

console.log("1. Inicio del script. El navegador está respondiendo.");

// Creamos la Promesa que contiene el proceso pesado
const promesaPesada = new Promise((resolve, reject) => {

    console.log("2. Entrando al ejecutor de la promesa (Esto bloqueará el navegador)...");

    // Simulamos un proceso pesado

    const iterations = 5000000000; // 5 mil millones de iteraciones
    const startTime = Date.now();

    // Forzamos un bloqueo de 4 segundos
    while (Date.now() - startTime < 4000) {
    }

    console.log("3. Proceso pesado terminado. El navegador vuelve a responder.");

    resolve("Operación completada");
});

console.log("4. Este mensaje está después de la creación de la promesa (pero aparece tras el bloqueo porque el ejecutor es síncrono).");

// Consumir la promesa
promesaPesada.then((mensaje) => {
    console.log("5. Promesa resuelta con mensaje:", mensaje);
});
