// AJOUTS DES PROJETS SUR LA HOME-PAGE

function projet(event) {
  while (document.querySelectorAll(".projet").length != 0){
    document.querySelector(".projet").remove()
  }

  console.log(event.currentTarget.value);

  for (var i = 0; i < data.length; i++) {
    if (data[i].titre == event.currentTarget.value) {
      html_main = document.querySelector(".site-section");

      html_titre = document.createElement('h2');
      html_titre.textContent = data[i].titre;
      html_titre.style.margin= "5%";
      html_main.appendChild(html_titre);

      // html_br = document.createElement('hr');
      // html_br.style.margin = "3%";
      // html_main.appendChild(html_br);

      html_lore = document.createElement('p');
      html_lore.textContent = data[i].lore;
      html_main.appendChild(html_lore);

      if (data[i].img1 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img1);
        html_img.setAttribute('class',"imgbitemathispetit");
        html_main.appendChild(html_img);
      }

      if (data[i].img2 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('class',"imgbitemathispetit");
        html_img.setAttribute('src',data[i].img2);
        html_main.appendChild(html_img);
      }

      if (data[i].img3 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img3);
        html_img.setAttribute('class',"imgbitemathispetit");
        html_main.appendChild(html_img);
      }

      if (data[i].img4 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img4);
        html_img.setAttribute('class',"imgbitemathispetit");
        html_main.appendChild(html_img);
      }


    }
  }

}




function home() {
  let html_a;
  let html_figure;
  let html_img;
  let html_titre;
  let html_figcaption;
  let html_main;
  let count = -1
  for (var i = 0; i < data.length; i++) {
    html_main = document.querySelector(".site-section");

    html_figure = document.createElement('figure');
    html_figure.classList.add("projet");
    html_figure.value = data[i].titre

    html_main.appendChild(html_figure);

    html_img = document.createElement('img');
    html_img.setAttribute('src',data[i].img1);
    html_img.setAttribute('class',"imgbitemathispetit");
    html_figure.appendChild(html_img);

    html_figcaption = document.createElement('figcaption');
    html_figure.appendChild(html_figcaption);
    html_titre = document.createElement('h2');
    html_titre.textContent = data[i].titre;
    html_figcaption.appendChild(html_titre);

    html_figure.addEventListener('click', projet);

  }
}

// CRÉATION D'UNE PAGE PROJET
function dras() {
  let html_a;
  let html_figure;
  let html_img;
  let html_titre;
  let html_figcaption;
  let html_main;
  let count = -1
  for (var i = 0; i < dessins.length; i++) {
    html_main = document.querySelector(".site-section");

    html_figure = document.createElement('figure');
    html_figure.value = dessins[i].titre;

    html_main.appendChild(html_figure);
    html_figcaption = document.createElement('figcaption');
    html_figcaption.textContent = dessins[i].titre
    html_figure.appendChild(html_figcaption);

    html_img = document.createElement('img');
    html_img.setAttribute('src',dessins[i].img);
    html_figure.appendChild(html_img);

  }
}
