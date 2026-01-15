// Creamos la promesa
const promesaSegundos = new Promise((resolve, reject) => {
    // Obtenemos la fecha actual
    const ahora = new Date();
    // Extraemos los segundos
    const segundos = ahora.getSeconds();
    // Obtenemos la hora actual legible para enviarla si resolvemos
    const horaActual = variableHora = ahora.toLocaleTimeString();

    console.log(`Segundos actuales obtenidos: ${segundos}`);

    // LOGICA PRINCIPAL

    // Caso 1: Si son más de 30 segundos
    if (segundos > 30) {
        // Verificamos si es PAR (el resto de dividir por 2 es 0)
        if (segundos % 2 === 0) {
            resolve(`¡Éxito! Son más de 30 (${segundos}) y es PAR. Hora: ${horaActual}`);
        } else {
            // Si es IMPAR
            reject(`Error: Son más de 30 (${segundos}) y es IMPAR.`);
        }
    }
    // Caso 2: Si son 30 segundos o menos
    else {
        // Verificamos si es IMPAR (el resto de dividir por 2 NO es 0)
        if (segundos % 2 !== 0) {
            resolve(`¡Éxito! Son 30 o menos (${segundos}) y es IMPAR. Hora: ${horaActual}`);
        } else {
            // Si es PAR
            reject(`Error: Son 30 o menos (${segundos}) y es PAR.`);
        }
    }
});

// Consumimos (ejecutamos) la promesa para ver el resultado
promesaSegundos
    .then((mensajeExito) => {
        console.log("%c Promesa Resuelta ", "background: green; color: white", mensajeExito);
    })
    .catch((mensajeError) => {
        console.error("%c Promesa Rechazada ", "background: red; color: white", mensajeError);
    });
