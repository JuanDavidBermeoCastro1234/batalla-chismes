const Chismosa = require('./Chismosa');

class TiaVecina extends Chismosa {
    recolectarInfo() {
        console.log(`${this.nombre}: Aprovecha la reunión del barrio para escuchar discretamente.`);
        this.modificarNivelChisme(3);
    }

    contarChisme() {
        console.log(`${this.nombre}: Difunde el chisme mientras ofrece café.`);
        const exagera = Math.random() < 0.5;
        this.modificarNivelChisme(3);
        this.modificarReputacion(exagera ? -2 : 1);
    }
}

module.exports = TiaVecina;
