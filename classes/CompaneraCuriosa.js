const Chismosa = require('./Chismosa');

class CompaneraCuriosa extends Chismosa {
    recolectarInfo() {
        console.log(`${this.nombre}: Hace preguntas aparentemente profesionales a los compañeros de trabajo.`);
        this.modificarNivelChisme(1);
    }

    contarChisme() {
        console.log(`${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo.`);
        this.modificarNivelChisme(1);
        this.modificarReputacion(2);
    }
}

module.exports = CompaneraCuriosa;
