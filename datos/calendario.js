// Los 24 mundos del adviento. Diciembre 2026: el día 1 es martes.
// estado: "listo" = jugable · "pronto" = todavía en construcción (muestra mensaje bonito)
window.CALENDARIO = {
  anio: 2026,
  dias: [
    { d: 1,  mundo: "Big Bang",            codigo: "BB-0",   tipo: "Origen",     pagina: "index.html?intro=1",  estado: "listo",
      texto: "Todo universo empieza con una explosión. El nuestro empezó con un mensaje." },
    { d: 2,  mundo: "Planeta Salchi",      codigo: "SX-02",  tipo: "Mascota",    pagina: "dias/02-salchi.html",    estado: "listo",
      texto: "Ha nacido alguien que te va a necesitar cada día. Cuídale." },
    { d: 3,  mundo: "Nebulosa de Palabras",codigo: "NP-03",  tipo: "Palabras",   pagina: "dias/03-palabras.html",  estado: "listo",
      texto: "Entre las letras de esta nebulosa se esconden nuestras palabras." },
    { d: 4,  mundo: "Central Perk-04",    codigo: "CP-04",  tipo: "Friends · T1", pagina: "dias/04-friends.html",   estado: "listo",
      texto: "Se estrena la Temporada 1 del Friends Ultimate Challenge: Central Perk y el apartamento de Monica. Treinta desafíos te esperan en Nueva York." },
    { d: 5,  mundo: "Planeta Memoria",     codigo: "PM-05",  tipo: "Memoria",    pagina: "dias/05-memoria.html",   estado: "listo",
      texto: "Cada recuerdo tiene su pareja. Encuéntralas todas." },
    { d: 6,  mundo: "Mónaco 2023",         codigo: "V33",    tipo: "Fórmula 1",  pagina: "dias/06-monaco.html",    estado: "listo",
      texto: "Vuelta 53. Empieza a llover en Mónaco. Tú eres la ingeniera de Fernando. La 33 depende de ti." },
    { d: 7,  mundo: "Wordle Estelar",      codigo: "WE-07",  tipo: "Palabras",   pagina: "", estado: "pronto" },
    { d: 8,  mundo: "Puzzle Cuántico",     codigo: "PQ-08",  tipo: "Puzzle",     pagina: "", estado: "pronto" },
    { d: 9,  mundo: "Señal Cifrada",       codigo: "SC-09",  tipo: "Enigma",     pagina: "", estado: "pronto" },
    { d: 10, mundo: "¿Quién lo dijo?",     codigo: "QD-10",  tipo: "Nosotros",   pagina: "", estado: "pronto" },
    { d: 11, mundo: "Central Perk · T2",   codigo: "CP-11",  tipo: "Friends · T2", pagina: "dias/04-friends.html", estado: "listo", texto: "Temporada 2: se abren el apartamento de Joey y Chandler y el Museo de Ross." },
    { d: 12, mundo: "Expediente L · I",    codigo: "EXP-1",  tipo: "Investigación", pagina: "", estado: "pronto" },
    { d: 13, mundo: "Expediente L · II",   codigo: "EXP-2",  tipo: "Investigación", pagina: "", estado: "pronto" },
    { d: 14, mundo: "Planeta Trivia",      codigo: "PT-14",  tipo: "Nosotros",   pagina: "", estado: "pronto" },
    { d: 15, mundo: "Frecuencia 15",       codigo: "FQ-15",  tipo: "Música",     pagina: "", estado: "pronto" },
    { d: 16, mundo: "Constelaciones",      codigo: "CN-16",  tipo: "Estrellas",  pagina: "", estado: "pronto" },
    { d: 17, mundo: "Cocina Orbital",      codigo: "CO-17",  tipo: "Juego",      pagina: "", estado: "pronto" },
    { d: 18, mundo: "Central Perk · T3",   codigo: "CP-18",  tipo: "Friends · T3", pagina: "dias/04-friends.html", estado: "listo", texto: "Temporada 3, el gran final: Nueva York entera. Aquí se decide si eres una fan auténtica." },
    { d: 19, mundo: "Tarro de Razones",    codigo: "TR-19",  tipo: "Nosotros",    pagina: "", estado: "pronto" },
    { d: 20, mundo: "Gran Premio Orbital", codigo: "GP-20",  tipo: "Carrera",    pagina: "", estado: "pronto" },
    { d: 21, mundo: "Cápsula del Tiempo",  codigo: "CT-21",  tipo: "Futuro",     pagina: "", estado: "pronto" },
    { d: 22, mundo: "Galaxia III",         codigo: "G3",     tipo: "Recuerdos",  pagina: "", estado: "pronto" },
    { d: 23, mundo: "Horizonte",           codigo: "HZ-23",  tipo: "Cuenta atrás", pagina: "", estado: "pronto" },
    { d: 24, mundo: "Infinito",            codigo: "∞",      tipo: "Nochebuena", pagina: "", estado: "pronto" }
  ]
};
