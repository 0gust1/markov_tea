/* eslint-disable */
const metr = require('metriques');
const markov = require('markov'),
  GEN_LEN = 15;

let m = null;

function magicMarkov () {
  return m.forward(m.pick(), GEN_LEN);
}

function initializeGen (order) {
    m = order ? markov(order) : markov();
}

function generateHaiku () {
  let i = 0;
  let haiku = [];

  let res,
    cinq1,
    cinq2,
    sept1;

  res = magicMarkov();
  if (metr.elision(res).nb !== 5) {
    while (metr.elision(res).nb !== 5) {
      i++;
      res = magicMarkov();
    }
  }

  cinq1 = res;

  // console.log('cinq1 |' + i + '| : ' + res.join(' ') + ' : ' + metr.elision(res).nb);

  haiku.push(cinq1);

  i = 0;

  while (metr.elision(res).nb !== 7) {
    i++;
    res = magicMarkov();
    // console.log('sept1 |' + i + '| : ' + res.join(' ') + ' : ' + metr.elision(res).nb);
    sept1 = res;
  }

  haiku.push(sept1);

  i = 0;
  while (metr.elision(res).nb !== 5) {
    i++;
    res = magicMarkov();
    // console.log('cinq2 |' + i + '| : ' + res.join(' ') + ' : ' + metr.elision(res).nb);
    cinq2 = res;
  }

  haiku.push(cinq2);

  // console.log('> ' + cinq1.join(' '));
  // console.log('> ' + sept1.join(' '));
  // console.log('> ' + cinq2.join(' '));

  return haiku;
}

function initializeGenerator (order,text, cb) {
  //initializeGen(order);
  m = order ? markov(order) : markov();
  m.seed(text, cb);
}

module.exports = {
  initializeGenerator: initializeGenerator,
  generateHaiku: generateHaiku
};

// m.seed(s, generateHaiku);
