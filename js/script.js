const name = prompt('Come ti chiami?');
console.log('nome:', name);

const surname = prompt('Quale è il tuo cognome?');
console.log('cognome:', surname);

const color = prompt('Quale è il tuo colore preferito?');
console.log('colore preferito:', color);

document.getElementById('info').innerHTML= name + surname + color + 130;