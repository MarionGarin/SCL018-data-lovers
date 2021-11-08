# PROYECTO DATA LOVERS: STUDIO GHIBLI

1. INTRODUCCIÓN: DEFINICIÓN DEL PRODUCTO
Nuestro proyecto está enfocado en sistematizar la data referida a Studio Ghibli, mostrándola de 
una forma amigable e intuitiva para la usuaria. Por tanto, nuestro producto consiste en un catálogo 
de películas que permite conocer la obra de dicho estudio de animación, la que se despliega según 
diversos criterios que las usuarias puede elegir.

2. INVESTIGACIÓN UX
Nuestra investigación UX comenzó con la elaboración de una encuesta a través de la herramienta 
Formularios de Google. Esta fue respondida por 13 personas, lo que nos proporcionó información 
relevante para definir a nuestras usuarias y ruta de trabajo.

a) Definición de las usuarias.

A raíz de la implementación de la encuesta indicada concluimos que nuestras usuarias son mujeres, 
de un promedio de 30 años de edad, y que no necesariamente son fans expertas en el Studio Ghibli, 
pero sí son aficionadas interesadas en conocer más acerca de su trabajo. También son personas que 
consideran que el rol femenino de las películas del estudio es un tema muy relevante. En general, 
estas usuarias prefieren páginas webs donde el diseño y la claridad de la información expuesta sea 
prioritaria y cuando buscan información cinematográfica se enfocan esencialmente en obtener la 
reseña, puntuación y el año de lanzamiento de las películas.

b) Objetivos de las usuarias. 

Dichas usuarias quieren tener acceso a una plataforma que les permita conocer cuáles son todas las 
películas del Studio Ghibli, con la finalidad de profundizar sus conocimientos sobre ellas y también 
aprender sobre la fuente de inspiración de Hayao Miyazaki.

c) Resolución del problema. Nuestra solución ofrece a las usuarias una plataforma donde pueden ver 
el catálogo de películas de Ghibli, ordenadas por año, de forma que a primer impacto visual ya pueden 
dimensionar la extensión del trabajo de dicho estudio. Posteriormente, pueden acceder a botones que 
les permiten ordenar la data en base a un criterio de puntuación, por lo que pueden conocer qué 
películas han sido más exitosas. Por último, pueden también filtrar la información para conocer los 
directores de dichas obras.

d) Historias de Usuario: ![alt text](/path/img.jpg "Title" 
Considerando lo ya expresado, definimos cuatro historias de usuaria, que son las siguientes:

1° "Yo como usuaria aficionada de studio Ghibli quiero una plataforma web que pueda MOSTRAR un 
listado de todas las películas del Studio Ghibli, para saber cuál es la extensión de la obra del 
estudio y de esa manera saber qué películas me falta por ver". 
Criterios de aceptación definidos para esta historia:
- Que las películas estén desplegadas por completo en la página web.
- Que la interfaz de usuario (UI) esté de acuerdo al prototipo de alta fidelidad.
- Que en cada tarjeta aparezca el título de la película y el año de esta.
- Que no haya paginación, sino solamente un scroll.
- Que el test de usabilidad sea aprobado satisfactoriamente por dos personas externas.

2° "Yo como usuaria aficionada de studio Ghibli quiero poder ORDENAR las películas por su puntuación,
en orden ascendente a descendente, para saber cuáles han tenido mejor evaluación y de esa manera 
comenzar viendo las que han sido más exitosas". 
Criterios de aceptación definidos para esta historia:
- Añadir un botón de estilo combo-box.
- Que el botón sea explicativo.
- Que el botón tenga un hover.
- Que el menú tenga dos botones diferenciados y transparentes: FILTRAR y ORDENAR.
- Que se desplieguen películas por puntuación de mejor evaluada a peor evaluada.
- Que el test de usabilidad sea aprobado satisfactoriamente por dos personas externas.

3° "Yo como usuaria aficionada de studio Ghibli quiero poder FILTRAR las películas que tienen roles 
protagónicos femeninos, para poder conocer a las heroínas creadas por el estudio y de esa manera 
ver películas a las que puedo dar una lectura feminista". 
Criterios de aceptación definidos para esta historia:
- Implementación de la función filter.
- Filtrar por director Hayao Miyazaki.
- Añadir slider.
- Añadir estrellita.
- Añadir cursor con imagen.
- Añadir menú explicativo.
- Que el test de usabilidad sea aprobado satisfactoriamente por dos personas externas.

3. DEFINICIÓN DE TERMINADO.
Definimos los siguientes criterios para considerar terminado el trabajo relativo a nuestras historias
de usuaria:

 1.- Se programó de forma idéntica a lo diseñado en nuestro prototipo de alta fidelidad.
 2.- Se trabajó en modalidad pair programming y se hizo code review al menos una vez.
 3.- Se han incorporado las sugerencias indicadas por las personas que participaron en los tests de usabilidad.
 4.- El código pasa los testeos unitarios con al menos un 70% de cobertura de statements, 
 functions, lines y branches.
 5.- El diseño es responsivo para celulares y tablets.
 6.- El código se ha subido al repositorio main de la forkeadora.
 7.- Se hizo el Deploy de la página.


4. DISEÑO DE PROTOTIPO

a) Definición en baja fidelidad. 
Comenzamos esbozando un prototipo de baja fidelidad para visualizar qué era lo esencial que debería 
tener nuestra página web. Luego realizamos un diagrama de flujo para definir los puntos de interacción 
de las usuarias con la página, intentando propiciar la menor cantidad de "clicks" posible.

b) Definición en alta fidelidad. Posteriormente, elaboramos un prototipo de alta fidelidad empleando 
Figma, pensado como nuestra solución ideal y definitiva al problema de las usuarias. Nos inspiramos 
en la página oficial del Studio Ghibli al momento de elegir los colores y el estilo general 
(https://ghiblicollection.com/) Sin embargo, luego decidimos modificar nuestro prototipo pues 
comprobamos que varias páginas dedicadas a Ghibli compartían una estética muy similar. Ante eso, 
nos pareció que la obra de Ghibli es tan vasta y versátil que no podíamos limitarnos a un solo 
camino visual y cromático, por lo que reformulamos nuestra propuesta para lograr un diseño que 
plasmara nuestra visión como equipo respecto de las películas. Como en nuestra perspectiva el rol 
femenino de las historias era prioritario, decidimos utilizar la imagen de la princesa Mononoke 
como eje central de la UI. En cuanto a los colores, concluimos que el estudio emplea tonalidades 
celestes y verdosas al momento de describir la naturaleza, pero cambia a colores más cálidos cuando 
se trata de personajes, por lo que nos inspiramos en la gama de colores anaranjados y marrones 
existente en la película sobre Mononoke y así llegamos a nuestra versión definitiva del nuevo 
prototipo.

c) Referencias visuales. 
Tuvimos en cuenta tres páginas web que nos inspiraron. La primera de ellas es 
https://mujeresbacanas.com/ porque nos gustó la forma ordenada y minimalista en que despliega 
la información. Nos agradó en particular su menú explicativo pues nos pareció muy claro y también 
su eficiente calidad responsive. Posteriormente, consideramos dos catálogos de películas, y los 
analizamos para comprender su estructura y forma de exhibir la data. El primero de ellos es 
https://www.filmin.es/ y de él tomamos como referencia la forma de mostrar sus filtros, ya que 
nos pareció muy sencilla de visualizar y comprender para las usuarias. El segundo es 
https://www.thefilmcatalogue.com/ del cual destacamos la forma en que utiliza el espacio, dando 
como resultado una interfaz agradable y elegante, por lo que decidimos basarnos en esa forma de 
distribución de los elementos.

5. TESTEOS DE USABILIDAD
Durante nuestros testeos de usabilidad recibimos el siguiente feedback de nuestras usuarias:
1.- Nos sugirieron que nuestros botones selectores fueran más notorios.
2.- El slider tuvo buena acogida entre nuestras usuarias.



6. FUNCIONALIDAD
La página muestra por defecto un catálogo inicial con 20 películas del Studio Ghibli, desplegadas 
en tarjetas que muestran el título, el año y el puntaje o score del público. Decidimos mostrar
dicha información de inmediato pues nuestra encuesta reveló que esos eran los criterios preferidos
por nuestras usuarias a la hora de evaluar una película. Y, considerando la premisa de que debíamos
ser eficientes al diseñar la ruta digital seguida por las usuarias al navegar por nuestra página
y evitar que hicieran un número innecesario de clicks en nuestro contenido, optamos por desplegar 
esos datos de inmediato.
En la esquina superior DERECHA? hay dos botones de estilo "combo-box", que contienen la opción
de ordenar las películas y también de filtrarlas. 

a) BOTÓN DE ORDEN.
En cuanto al botón de orden, permite ordenar por los criterios que nos parecieron más adecuados
al momento de revisar este tipo de información. La primera opción permite ordenar las películas en orden alfabético descendente, es decir, de la A a la Z, que sería lo más lógico al momento de querer
revisar un catálofo de obras. 
La segunda opción permite ordenar las películas por puntaje, de forma ascendente a descendente, 
pues nos pareció que el camino lógico lleva a un usuario a querer conocer primeramente cuáles
son las películas más exitosas en cuanto a la crítica y luego conocer las menos aclamadas.
Finalmente, la tercera opción permite ordenar por año de lanzamiento, en orden cronológico, pues
de esa manera puede observarse la progresión en el tiempo que ha tenido el trabajo de Studio Ghibli. 
Este botón trabaja en base a una función llamada sortOrder, que contiene la aplicación del método
sort, el cual itera sobre una duplicación del array de películas, con la finalidad de realizar
las comparaciones que le son inherentes. En base al resultado de dicha comparación se van determinando las distintas formas de ordenar la información. 

b) BOTÓN DE FILTRO.
Dado que el enfoque de nuestra página busca resaltar la mirada de Hayao Miyazaki en relación con 
las protagonistas femeninas, este fue el único filtro que implementamos y está destinado a conocer
todas las películas que él ha dirigido. Nos inspiramos en una frase suya que señala que "cualquier
mujer es tan capaz de ser una heroína como un hombre lo es de ser un héroe". Eso nos llevó a pensar
que su concepción de las protagonistas femeninas podía ser un aspecto a destacar, que podría
diferenciar nuestra página de otras que utilizan la misma data. De hecho, incluimos una pregunta en
este sentido dentro de nuestra encuesta, y obtuvimos una respuesta favorable de parte de las usuarias, quienes señalaron creer en la importancia de este tema dentro de las películas de Miyazaki.

Este botón opera en base a una función llamada filterData, que aplica el método filter sobre una 
duplicación del array de películas, y selecciona el criterio "director" para mostrar el filtro 
seleccionado. En nuestro caso, el evento que gatilla el filtro es la selección del value contenido 
dentro del botón de selección, el cual nos lleva específicamente a las películas dirigidas por Miyazaki. 
De todas maneras, como hemos establecido nuestro filtro de manera genérica, es perfectamente 
factible establecer más botones de selección con values referidos a los nombres de otros directores, 
para poder ampliar los filtros elegidos. 

c) ASPECTOS ADICIONALES.
Por último, nuestra página cuenta con un slider, que busca resaltar a tres personajes femeninas 
importantes dentro de las películas de Miyazaki, además de su llamativa estética. 
Además el cursor tiene la imagen de Totoro, personaje emblemático de Studio Ghibli. 



