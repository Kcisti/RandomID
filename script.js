const DOM = {
  container : document.querySelector('.container'),
  endName : document.querySelector('.name'),
  endDate : document.querySelector('.dates'),
  endYear : document.querySelector('.years'),
  endCountry : document.querySelector('.country'),
  chooseButton : document.querySelector('.choose'),
}

const nomiCasuali = [
  'Abele',
  'Andrea',
  'Aurelio',
  'Alessio',
  'Alberto',
  'Agostino',
  'Adolfo',
  'Aldo',
  'Angelo',
  'Arturo',
  'Armando',
  'Aristotele',
  'Antonio',
  'Antimo',
  'Alvaro',

  'Battista',
  'Bastiano',
  'Benito',
  'Benedetto',
  'Bernardo',
  'Biagio',
  'Bruno',
  'Brando',
  'Basilio',
  'Benigno',
  'Boris',
  'Bartolomeo',

  'Caino',
  'Caio',
  'Carlo',
  'Camillo',
  'Calogero',
  'Carmelo',
  'Carmine',
  'Cecco',
  'Cesare',
  'Claudio',
  'Clemente',
  'Corrado',
  'Cosimo',
  'Costantino',
  'Cristiano',

  'Danilo',
  'Dario',
  'Dino',
  'Diego',
  'Domenico',
  'Donato',
  'Damiano',
  'Daniele',
  'Davide',

  'Edoardo',
  'Emanuele',
  'Enzo',
  'Ercole',
  'Eraldo',
  'Ernesto',
  'Ettore',
  'Eugenio',
  'Ezio',

  'Fausto',
  'Fabrizio',
  'Fabio',
  'Federico',
  'Felice',
  'Fernando',
  'Filippo',
  'Fiorenzo',
  'Flavio',
  'Francesco',
  'Franco',
  'Fulvio',

  'Gabriele',
  'Gaetano',
  'Giacomo',
  'Giacinto',
  'Gianni',
  'Gianluca',
  'Gianmarco',
  'Gianluigi',
  'Gianfranco',
  'Giancarlo',
  'Gianpiero',
  'Gianpaolo',
  'Gioele',
  'Giovanni',
  'Gino',
  'Giorgio',
  'Giulio',
  'Giuliano',
  'Giuseppe',
  'Gregorio',
  'Guido',

  'Iacopo',
  'Ignazio',
  'Ilario',
  'Igor',
  'Ivan',
  'Italo',

  'Leonardo',
  'Lorenzo',
  'Luca',
  'Lucio',
  'Loris',
  'Luigi',
  'Ludovico',
  'Lino',
  'Livino',
  'Livio',

  'Manuele',
  'Marcello',
  'Marco',
  'Mariano',
  'Marino',
  'Martino',
  'Mario',
  'Massimo',
  'Matteo',
  'Maurizio',
  'Mauro',
  'Mattia',
  'Michele',
  'Mirco',
  'Moreno',

  'Narciso',
  'Napoleone',
  'Nicola',
  'Nicolò',

  'Omar',
  'Orazio',
  'Oscar',
  'Orlando',
  'Osvaldo',
  'Ottavio',

  'Paolo',
  'Pasquale',
  'Patrizio',
  'Piero',
  'Piergiorgio',
  'Pierluigi',
  'Pio',

  'Raffaele',
  'Raimondo',
  'Remo',
  'Renato',
  'Renzo',
  'Riccardo',
  'Roberto',
  'Rocco',
  'Romeo',
  'Rosario',
  'Ruggero',

  'Salvatore',
  'Samuele',
  'Sandro',
  'Saverio',
  'Sebastiano',
  'Sergio',
  'Silvio',
  'Silvano',
  'Stefano',

  'Teodoro',
  'Tiziano',
  'Tommaso',

  'Ubaldo',
  'Ugo',

  'Walter',
  'Zefiro',

]
var numNomiCasuali = nomiCasuali.length;
console.log('nomiCasuali: ' + numNomiCasuali);

const cognomiCasuali = [
  'Rossi',
  'Russo',
  'Ferrari',
  'Esposito',
  'Bianchi',
  'Romano',
  'Colombo',
  'Ricci',
  'Marino',
  'Greco',
  'Bruno',
  'Gallo',
  'Conti',
  'De luca',
  'Mancini',
  'Costa',
  'Giordano',
  'Rizzo',
  'Lombardi',
  'Moretti',
  'Barberi',
  'Fontana',
  'Santoro',
  'Mariani',
  'Rinaldi',
  'Caruso',
  'Ferrara',
  'Galli',
  'Martini',
  'Leone',
  'Longo',
  'Gentile',
  'Martinelli',
  'Vitale',
  'Lombardo',
  'Serra',
  'Coppola',
  'De Santis',
  "D'angelo",
  'Marchetti',
  'Parisi',
  'Villa',
  'Conte',
  'Ferri',
  'Fabbri',
  'Marini',
  'Grasso',
  'Valentini',
  'Messina',
  'Sala',
  'De Angelis',
  'Gatti',
  'Pellegrini',
  'Palumbo',
  'Sanna',
  'Farina',
  'Rizzi',
  'Monti',
  'Cattaneo',
  'Morelli',
  'Amato',
  'Silvestri',
  'Mazza',
  'Testa',
  'Grassi',
  'Pellegrino',
  'Carbone',
  'Giuliani',
  'Benedetti',
  'Barone',
  'Conte',
  'Benedetti',
  'Barone',
  'Rossetti',
  'Caputo',
  'Montanari',
  'Guerra',
  'Palmieri',
  'Bernardi',
  'Martino',
  'Fiore',
  'De rosa',
  'Ferretti',
  'Bellini',
  'Basile',
  'Riva',
  'Donati',
  'Piras',
  'Vitali',
  'Battaglia',
  'Sartori',
  'Neri',
  'Costantini',
  'Pagano',
  'Orlando',
  'Damico',
]
var numCognomiCasuali = cognomiCasuali.length;
console.log('cognomiCasuali: ' + numCognomiCasuali);

const dayCasuali = [
  '01','02','03','04','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25',
]
var numDayCasuali = dayCasuali.length;
console.log('dayCasuali: ' + numDayCasuali);

const monthCasuali = [
  '01','02','03','04','05','06','07','08','09','10','11','12',
]
var numMonthCasuali = monthCasuali.length;
console.log('monthCasuali: ' + numMonthCasuali);

const yearCasuali = [
  1985,1986,1987,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2001,2002,2003,2004,2005,2006,2007,2008
]
var numYearCasuali = yearCasuali.length;
console.log('yearCasuali: ' + numYearCasuali);

const yearWorldFour = new Date().toLocaleString(undefined, {year: "numeric"});
console.log('yearWorld:' + yearWorldFour);

const countryCasuali = [
  'Rome',
  'Milan',
  'Naples',
  'Turin',
  'Palermo',
  'Genoa',
  'Bologna',
  'Florence',
  'Bari',
  'Catania',
  'Venice',
  'Verona',
  'Messina',
  'Padova',
  'Trieste',
  'Taranto',
  'Brescia',
  'Parma',
  'Prato',
  'Modena',
  'Perugia',
  'Bergamo',
  'Novara',
  'Ancona',
  'Forlì',
]
var numCountryCasuali = countryCasuali.length;
console.log('countryCasuali: ' + numCountryCasuali);

function chooseIdentity(){
  var nomeScelto = nomiCasuali[Math.floor(Math.random()*numNomiCasuali)];
  var cognomeScelto = cognomiCasuali[Math.floor(Math.random()*numCognomiCasuali)];

  var dayScelto = dayCasuali[Math.floor(Math.random()*numDayCasuali)];
  var monthScelto = monthCasuali[Math.floor(Math.random()*numMonthCasuali)];
  var yearScelto = yearCasuali[Math.floor(Math.random()*numYearCasuali)];

  var yearsOld = yearWorldFour - yearScelto;

  var countryScelto = countryCasuali[Math.floor(Math.random()*numCountryCasuali)];

  if (nomeScelto === cognomeScelto) {
    DOM.endName.innerText = 'err888:Try again';
  } else{
    DOM.endName.innerText = nomeScelto + ' ' + cognomeScelto;
    DOM.endDate.innerText = dayScelto + '/' + monthScelto + '/' + yearScelto.toString().slice(-2);
    DOM.endYear.innerText = yearsOld + ' Y';
    DOM.endCountry.innerText = 'Italy, ' + countryScelto;
  }
}

DOM.chooseButton.addEventListener('click', chooseIdentity);
