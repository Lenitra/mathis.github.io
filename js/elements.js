// AJOUTS DES PROJETS SUR LA HOME-PAGE
function home() {
  let html_a;
  let html_figure;
  let html_img;
  let html_titre;
  let html_figcaption;
  let html_main;

  for (var i = 0; i < data.length; i++) {
    html_main = document.querySelector(".site-section");

    html_figure = document.createElement('figure');
    html_figure.classList.add("projet");

    html_a = document.createElement('a');
    html_a.src = "projet.html";
    html_figure.appendChild(html_a);

    html_img = document.createElement('img');
    html_img.setAttribute('src',data[i].img1);
    html_a.appendChild(html_img);

    html_figcaption = document.createElement('figcaption');
    html_a.appendChild(html_figcaption);
    html_titre = document.createElement('h2');
    html_titre.textContent = data[i].titre;
    html_figcaption.appendChild(html_titre);
    html_main.appendChild(html_figure);

  }
}

// CRÉATION D'UNE PAGE PROJET
function page_project(titre) {
  main = document.querySelector(".site-section")

  html_titre = document.createElement('h1')
  // add textContent "dans data"

  html_descr = document.createElement('p')
  // add textContent "dans data"
}


// <figure class="projet">
//   <a href="projet1.html">
//     <img src="images/projet1/i1.png" class="imagep">
//     <figcaption>
//       <h2>Projet 1</h2>
//     </figcaption>
//   </a>
// </figure>
