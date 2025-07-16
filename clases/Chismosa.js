// class chismosa{
//     constructor(reputacion,nivelChisme){
//         if (this.constructor=== chismosa) {
//             throw new Error("no puedes acceder a estas propiedades")
//         }
//         this.reputacion=reputacion
//         this.nivelChisme=nivelChisme
//     }
//     crearClase(){
//         throw new Error("no ees posible hacer esto implementear crearclase()")
//     }
// }


class chismosa {
    constructor (nombre,reputacion,nivelChisme){
        this.nombre=nombre;
        this.#reputacion=reputacion;
        this.#nivelChisme=nivelChisme;

    }
    recolectarInfo(){
        throw new Error("no puedes acceder a este metodo recolectarInfo()")
    }
    contarChisme(){
        throw new Error("no puedes acceder a este metodo contarChisme()")
    }
    reputacion(){
        console.log(`${this.reputacion} esta es la repuacion`)
    }
    nivelChisme(){
        console.log(`${this.nivelChisme} este es el nivel de chisme`)
    }
}

class tiaVecina extends chismosa{
    constructor(nombre,reputacion,nivelChisme){
        super(nombre,reputacion,nivelChisme)
    }
    recolectarInfo(){
        console.log(`${this.nombre}Aprovecha la reunión del barrio para escuchar discretamente`)
    }
    contarChisme(){
        console.log(`${this.nombre}Difunde el chisme mientras ofrece café`)
    }
}
// ## Especificaciones de clases

//### Clase abstracta `Chismosa`
//  Propiedades privadas: #reputacion, #nivelChisme


// ## Especificaciones de clases

// ### Clase abstracta `Chismosa`

// - Propiedades privadas: `#reputacion`, `#nivelChisme`
// - Constructor: `nombre, reputacion, nivelChisme`
// - Métodos:
//     - `recolectarInfo()` → ❌ abstracto
//     - `contarChisme()` → ❌ abstracto
//     - `getReputacion()` → retorna reputación
//     - `getNivelChisme()` → retorna nivel del chisme

// > No se puede instanciar directamente. Los métodos abstractos deben ser sobreescritos por las subclases.

// ### Subclase `TiaVecina`

// - `recolectarInfo()` imprime: `Aprovecha la reunión del barrio para escuchar discretamente`
// - `contarChisme()` imprime: `Difunde el chisme mientras ofrece café`
// - Aumenta mucho el nivel del chisme, pero también su reputación puede verse afectada si exagera.

// ---

// ### Subclase `CompaneraCuriosa`

// - `recolectarInfo()` imprime: `Hace preguntas aparentemente profesionales a los compañeros de trabajo`
// - `contarChisme()` imprime: `Comenta el chisme como ejemplo de vida en el trabajo`
// - Gana reputación, pero su chisme sube lento de nivel.

// ---

// ### Subclase `EstudianteEspia`

// - `recolectarInfo()` imprime: `Lee chats ajenos desde el último puesto del salón`
// - `contarChisme()` imprime: `Filtra el chisme por estados en WhatsApp`
// - Su nivel de chisme sube rápido, pero puede perder reputación si es descubierta.
