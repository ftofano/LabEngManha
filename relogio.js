// Importa o objeto Date
const Data = require('date-fns');

// Obtém o horário atual
const agora = Data.now();

// Formata o horário
const formRelogio = Data.format(agora, 'HH:mm:ss');

// Exibe o horário na div
const divRelogio = document.getElementById('relogio');
divRelogio.innerHTML = formRelogio;