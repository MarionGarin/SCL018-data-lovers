import { sortData, filterData } from '../src/data.js'; 

const data = [
  { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
  { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
  { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
  { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
  { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
]
// rt_score value is a number because we removed its quotation marks in ghibli.js


describe('tests for sortData', () => {

  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('should return `an ordered list of films, in descendant alphabetical position`', () => {

    const result = [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
    ]

    expect(sortData(data, 'title')).toEqual(result);

  });

  it('should return `a list of films ordered by launching year, in ascendant numerical position`', () => {

    const result = [
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },

    ]

    expect(sortData(data, 'release_date')).toEqual(result);

  });

  it('should return `an ordered list ordered by score, in descendant numerical position`', () => {

    let result = [
      { title: 'The Tale of the Princess Kaguya', director: 'Isao Takahata', release_date: '2013', rt_score: 100 },
      { title: 'Only Yesterday', director: 'Isao Takahata', release_date: '1991', rt_score: 100 },
      { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
      { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      { title: 'The Cat Returns', director: 'Hiroyuki Morita', release_date: '2002', rt_score: 89 },
    ]

    expect(sortData(data, 'rt_score', 'rt_score')).toEqual(result);
//this test uses three parameters because ´rt_score" is used as SortBy and SortOrder in the original function
  });



  describe('test for filterData', () => {
    it('is a function', () => {
      expect(typeof filterData).toBe('function');
    });

    it('should return `only the films directed by Hayao Miyazaki`', () => {

      const result = [
        { title: 'Spirited Away', director: 'Hayao Miyazaki', release_date: '2001', rt_score: 97 },
        { title: 'My Neighbor Totoro', director: 'Hayao Miyazaki', release_date: '1988', rt_score: 93 },
      ]

      expect(filterData(data, 'Hayao Miyazaki')).toEqual(result);

    });
  });

})