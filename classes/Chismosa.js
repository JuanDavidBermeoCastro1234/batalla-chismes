class Chismosa {
    #reputacion;
    #nivelChisme;

    constructor(nombre, reputacion, nivelChisme) {
        if (new.target === Chismosa) {
            throw new Error("No puedes instanciar directamente la clase Chismosa");
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme;
    }

    recolectarInfo() {
        throw new Error("Método abstracto recolectarInfo() no implementado");
    }

    contarChisme() {
        throw new Error("Método abstracto contarChisme() no implementado");
    }

    getReputacion() {
        return this.#reputacion;
    }

    getNivelChisme() {
        return this.#nivelChisme;
    }

    modificarReputacion(valor) {
        this.#reputacion = Math.max(0, Math.min(10, this.#reputacion + valor));
    }

    modificarNivelChisme(valor) {
        this.#nivelChisme = Math.max(0, Math.min(10, this.#nivelChisme + valor));
    }
}

module.exports = Chismosa;
