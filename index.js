const TiaVecina = require('./classes/TiaVecina');
const CompaneraCuriosa = require('./classes/CompaneraCuriosa');
const EstudianteEspia = require('./classes/EstudianteEspia');

const participantes = [
    new TiaVecina("Doña Rosa", 7, 3),
    new CompaneraCuriosa("Laura", 5, 2),
    new EstudianteEspia("Ana", 8, 1)
];

function simularRonda(chismosa) {
    chismosa.recolectarInfo();
    chismosa.contarChisme();
}

console.log("\n🌸 ¡Inicia la batalla de chismes! 🌸\n");

participantes.forEach(chismosa => {
    console.log(`\n🎙️ Rondas para ${chismosa.nombre}:`);
    simularRonda(chismosa);
    simularRonda(chismosa);
});

console.log("\n📊 Resultados Finales:");

participantes.forEach(chismosa => {
    const rep = chismosa.getReputacion();
    const nivel = chismosa.getNivelChisme();

    console.log(`\n👑 ${chismosa.nombre}`);
    console.log(`Reputación: ${rep} ${rep <= 3 ? "(Baja ⚫)" : rep >= 8 ? "(Alta 🟠)" : ""}`);
    console.log(`Nivel de Chisme: ${nivel} ${nivel >= 8 ? "(Viral 🟣)" : ""}`);
});

const reina = participantes.reduce((mayor, actual) =>
    actual.getNivelChisme() > mayor.getNivelChisme() ? actual : mayor
);

console.log(`\n💥 La reina del chisme viral es: ${reina.nombre} 💥\n`);
