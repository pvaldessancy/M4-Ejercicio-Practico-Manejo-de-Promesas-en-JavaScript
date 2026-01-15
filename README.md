# M4-Ejercicio-Practico-Manejo-de-Promesas-en-JavaScript

Este repositorio contiene 3 ejercicios prácticos diseñados para entender el funcionamiento, flujo y comportamiento de las Promesas en JavaScript.

## Descripción de los Ejercicios

### 1. Promesa con setTimeout
**Ubicación:** `1. Promesa con setTimeout/`
Este ejercicio simula una petición asíncrona básica (como consultar una base de datos) utilizando `setTimeout`.
- **Objetivo:** Entender la sintaxis básica `new Promise`, `resolve` y `.then`.
- **Comportamiento:** La promesa espera 3 segundos antes de entregar un objeto `Persona`, mostrando mensajes de estado durante la espera.

### 2. Promesa condicional (Segundos)
**Ubicación:** `2. Promesa que depende de los segundos actuales/`
Una promesa que evalúa una condición dinámica basada en la hora del sistema (segundos actuales).
- **Objetivo:** Practicar la lógica condicional (`if/else`) dentro del ejecutor para decidir si llamar a `resolve` (éxito) o `reject` (error).
- **Lógica:**
    - > 30seg: Par = Éxito / Impar = Error
    - <= 30seg: Impar = Éxito / Par = Error

### 3. Promesa con proceso pesado (Blocking Code)
**Ubicación:** `3. Promesa con proceso pesado/`
Este ejercicio está diseñado para demostrar un concepto crítico: el asincronismo vs. el bloqueo del hilo principal.

#### Comentarios sobre el Delay y el Bloqueo Observado
En el ejercicio 3 al cargar la página el navegador se **"congela"** completamente durante unos segundos y no puedes interactuar con él (no funcionan los clics ni la selección de texto).

1. **El Ejecutor es Síncrono:** La función que pasamos al constructor `new Promise((resolve, reject) => { ... })` se ejecuta **inmediatamente** y de forma **síncrona** en el momento en que se crea la promesa.
2. **Hilo Único (Single Thread):** JavaScript se ejecuta en un solo hilo principal. Al colocar un proceso intensivo (un bucle `while` largo) dentro del ejecutor, este ocupa el 100% de la capacidad del hilo principal.
3. **Consecuencia:** Hasta que el bucle no termina, el navegador no puede continuar leyendo las siguientes líneas de código del script, ni tampoco puede actualizar la interfaz gráfica o escuchar eventos del usuario (clics).
