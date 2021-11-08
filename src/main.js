/*IMPORTACIÓN DE MÓDULOS*/
import data from "./data/ghibli/ghibli.js";
import { sortData, filterData } from "./data.js";
//Los módulos ES permiten importar y exportar datos entre distintos ficheros JS

//función que hace correr las imágenes del Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let  i;
  let  slides = document.getElementsByClassName("slider");
  //esta variable toma las fotos del slider y las guarda en un array
  let  dots = document.getElementsByClassName("dot");
  
//esta variable toma los puntos del html y los guarda en un array
  for (i = 0; i < slides.length; i++) {
//es un bucle que recorre todo el array de imágenes
    slides[i].style.display = "none";  
    // la propiedad display permite ocultar un elemento del dom cuando es "none"
  }
  slideIndex++;
  if (slideIndex > slides.length)  {
     slideIndex = 1
    }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //el ciclo for va activando cada punto mientras itera el array dots
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // imagen cambia cada 3 segundos
}



//ESTABLECIMIENTO DE VARIABLES
const films = data.films; 
// variable que contiene las películas de la data
const printedMovies = document.getElementById("posterFilms"); 
// variable que contiene la section en html
let newFilms = [...films]; //variable que contiene una copia de las películas de la data, hecha con "destructuring", que es ...
// ... una forma de capturar datos de un objeto o array y asignarlos a variables. Disponible desde ES2015


/*CREACIÓN DE LAS TARJETAS QUE SE MOSTRARÁN EN EL HTML*/
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
//esto es una Template String , que es una forma de crear html desde Javascript
console.log(Object.values(films[4].people[3]))
// FUNCIÓN QUE IMPRIME LAS CARTAS
const displayMovies = (filmsSelected) => {
  printedMovies.innerHTML = "";
  filmsSelected.forEach((newFilms) => {
    printedMovies.innerHTML += drawCard(newFilms); 
  });
};
displayMovies(newFilms);

//con el innerHTML declaramos que el contenido de la section printedMovies sea vacío
//luego tomamos las películas seleccionadas (en filmsSelected) y les aplicamos el método forEach
//forEach esa una función que ejecuta una acción sobre cada elemento del parámetro dado
//y la instrucción dice que el HTML se vaya llenando con cada película de newFilms, dibujada según
//la plantilla que creamos con la variable drawCard



//INSTRUCCIONES PARA IMPRIMIR CARTAS ORDENADAS
const orderSelected = document.querySelector(".combo-box-order");

orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  displayMovies(chosenOrder);
});
/*
orderSelected.addEventListener("change", (event) => {
  const chosenOrder = sortData(newFilms, event.target.value, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
  };
 
  print(chosenOrder);
  
});
*/

//con addEventListener registramos un evento a un objeto en específico

//INSTRUCCIONES PARA IMPRIMIR CARTAS FILTRADAS
const filterSelected = document.querySelector(".combo-box-filter");

filterSelected.addEventListener("change", (event) => {
const chosenFilter = filterData(newFilms, event.target.value);
displayMovies(chosenFilter);
});


/*
filterSelected.addEventListener("change", (event) => {
  const chosenFilter = filterData(newFilms, event.target.value);
  const print = (newFilms) => {
    displayMovies(newFilms);
    console.log(chosenFilter);
  };


  print(chosenFilter);
 
});
*/



/* FUNCIÓN QUE EXTRAE PERSONAJES FEMENINAS
data.films.forEach(function(e){
    
  const females = e.people.filter( (element) => element.gender === "Female");
  console.log(females);
});
*/

/* FILTRANDO PERSONAJES FEMENINOS DE MIYAZAKI

const drawCardPerson = (films) => {
  return `
  <section class="movieCardFilter">
  
        <h3>${films.people.map((x)=>  `<img src= "${x.img}" class= "character"/>`)};<h3>
        <h3> ${films.people.map((x)=>  `<img src= "${x.name}" class= "name"/>`)};<h3>
        </section>`
    
};

const femenineGender = document.querySelector(".combo-box-filter");

femenineGender.addEventListener("change", (event) => {
  const genderPerson = genderFilter(data, event.target.value);
  console.log(genderPerson);

  const print = (femalePerson) => {
      printedMovies.innerHTML = "";
      for (let i = 0; i < femalePerson.length; i++) {
  printedMovies.innerHTML += drawCardPerson(femalePerson[i]);
}
    };
    print(genderPerson);
  });
  */

  /*const drawCard = (films) => {
  return `
  <section class="movieCard">
  /* <div class="flip-card">
  <div class="flip-card-inner">
   <div class="flip-card-front"> */
    
   /*
   <div class="flip-card-back"
   <h3> ${films.description}<h3>
   </div>
 </div>
</div> 
</section>`;
};
*/