import { sortData, filterData } from '../src/data.js'; //así se accede a la carpeta data dentro de src.

const data = [ //se establece esta mini data para testear las funciones. Sirve para todas las pruebas.
  { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
  { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
  { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
  { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
  { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
]
//Se han removido las comillas en el rt_score 100 porque en la data oficial igual se hizo así, para que funcione sort en ese caso.

describe('tests for sortData', () => { //Describe es una palabra reservada que da inicio a un bloque o conjunto de pruebas relacionadas.
  //En este caso, está comprobando la función sortData y dentro de él pueden chequearse varios casos, que comienzan con "it.

    it('is a function', () => { //it es el método que se encarga de ejecutar la prueba (también puede ser "test")
    expect(typeof sortData).toBe('function'); //expect es lo que se espera que resulte.
    });
  // se usa toEqual en vez de toBe porque el primero se usa para datos compuestos y el otro para primitivos.
  // toEqual y toBe son "matchers" de Jest. Sirven para testear valores. toEqual compara características y toBe compara identidad exacta. 

    it('should return `an ordered list of films, in descendant alphabetical position`', () => {

    let result = [ //se crea esta variable que contiene el resultado esperado (creo que debería ser let en vez de const. Hay que revisar)
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
    ]

    expect(sortData(data, 'title')).toEqual(result);
    // se da como parámetro de la función sortData la constante declarada inicialmente, luego el value que ocupa sort para llamar al título
    //y luego se repite el mismo value porque determina el orden (deben ser 3 parámetros porque la función original los tiene)
    });

    it('should return `a list of films ordered by launching year, in ascendant numerical position`', () => {

    let result = [ //se crea esta variable que contiene el resultado esperado (creo que debería ser let en vez de const. Hay que revisar)
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },

    ]

    expect(sortData(data, 'release_date')).toEqual(result);
    // se da como parámetro de la función sortData la constante declarada inicialmente, luego el value que ocupa sort para llamar al año
    //y luego se repite el mismo value porque determina el orden (deben ser 3 parámetros porque la función original los tiene)
    });

    it('should return `an ordered list ordered by score, in descendant numerical position`', () => {

    let result = [ //se crea esta variable que contiene el resultado esperado (creo que debería ser let en vez de const. Hay que revisar)
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
    ]

    expect(sortData(data, 'rt_score', 'rt_score')).toEqual(result);
    // se da como parámetro de la función sortData la constante declarada inicialmente, luego el value que ocupa sort para llamar al puntaje
    //y luego se repite el mismo value porque determina el orden (deben ser 3 parámetros porque la función original los tiene)
    });



  describe('test for filterData', () => { //aquí se comprueba que funcione correctamente la función filterData
    it('is a function', () => {
      expect(typeof filterData).toBe('function');
    });

    it('should return `only the films directed by Hayao Miyazaki`', () => {

      const result = [
        { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
        { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      ]

      expect(filterData(data, 'Hayao Miyazaki')).toEqual(result);
      //se da como parámetro de la función filterData la constante declarada inicialmente, y luego el value que gatilla el evento y que
      //hace aparecer las películas de Miyazaki (como usa 2 parámetros, se le da dos)
    });
  });

})
