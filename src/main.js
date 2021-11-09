import data from "./data/ghibli/ghibli.js";
import { sortData, filterData } from "./data.js";

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); 
}


const films = data.films;
// this variable contains all the movies of the data file
let newFilms = [...films]; 
// this variable contains a copy of films variable, using destructuring
const printedMovies = document.getElementById("posterFilms");


const drawCard = (films) => {
  return `
  <section class="movieCard">
        <img class= "moviePoster" alt="Studio Ghibli film's poster" src="${films.poster}">
        <figcaption class="movieName">${films.title}</figcaption>
        <figcaption class="movieYear">(${films.release_date})</figcaption>
        <span class="fa fa-star checked">
        <i class="movieScore">${films.rt_score}</i>
        </span>
     </section>`;
};

const displayMovies = (filmsSelected) => {
  printedMovies.innerHTML = "";
  filmsSelected.forEach((newFilms) => {
    printedMovies.innerHTML += drawCard(newFilms);
  });
};
displayMovies(newFilms)

const orderSelected = document.querySelector(".combo-box-order");
orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  displayMovies(chosenOrder);
});

const filterSelected = document.querySelector(".combo-box-filter");
filterSelected.addEventListener("change", (event) => {
  const chosenFilter = filterData(newFilms, event.target.value);
  displayMovies(chosenFilter);
});

