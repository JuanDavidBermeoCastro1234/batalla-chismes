const Chismosa = require('./Chismosa');

class EstudianteEspia extends Chismosa {
    recolectarInfo() {
        console.log(`${this.nombre}: Lee chats ajenos desde el último puesto del salón.`);
        this.modificarNivelChisme(2);
    }

    contarChisme() {
        console.log(`${this.nombre}: Filtra el chisme por estados en WhatsApp.`);
        const esDescubierta = Math.random() < 0.4;
        this.modificarNivelChisme(3);
        this.modificarReputacion(esDescubierta ? -3 : 0);
    }
}

module.exports = EstudianteEspia;
