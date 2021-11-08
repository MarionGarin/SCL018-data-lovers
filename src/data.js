export const sortData = (newFilms, sortBy, sortOrder) => {

  const movieSort = newFilms.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
      return 0;
  });

    if (sortOrder === "rt_score") {
  // the third parameter it's only used here, as an equivalence that enables reverse method 
      return movieSort.reverse();
  }

  return movieSort;
};


export const filterData = (newFilms, director) => {

  return newFilms.filter(newFilms => newFilms.director === director);

};

