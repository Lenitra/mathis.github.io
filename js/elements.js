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
      html_titre.textContent = data[i].titre
      html_main.appendChild(html_titre)

      html_lore = document.createElement('p');
      html_lore.textContent = data[i].lore
      html_main.appendChild(html_lore)

      if (data[i].img1 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img1);
        html_main.appendChild(html_img)
      }

      if (data[i].img2 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img2);
        html_main.appendChild(html_img)
      }

      if (data[i].img3 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img3);
        html_main.appendChild(html_img)
      }

      if (data[i].img4 != "") {
        html_img = document.createElement('img');
        html_img.setAttribute('src',data[i].img4);
        html_main.appendChild(html_img)
      }


    }
  }

}

// <h1>Nom du projet</h1>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue eget volutpat dignissim. Fusce nec pharetra neque. Integer vulputate ligula vitae neque accumsan, ac congue lorem scelerisque. Phasellus ornare ipsum nisi, venenatis commodo risus condimentum non. In hac habitasse platea dictumst. Fusce eu dolor felis. Mauris aliquet ac risus eu rutrum. Cras volutpat, nunc sed bibendum mattis, libero mauris venenatis neque, ullamcorper mollis sapien mauris id odio. Curabitur consectetur nulla a eros auctor, sed rutrum orci maximus. Nulla dictum ante non lorem pretium commodo. Donec fringilla dolor ultrices augue rutrum ultricies. Nulla a felis non est accumsan accumsan.</p>
// <p>Cras tempor sit amet neque eu sollicitudin. Nulla luctus urna urna, non porttitor nisi scelerisque at. Nunc non nisl odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus rhoncus eros id lorem porta, non pulvinar sem ultricies. Pellentesque vitae erat non enim maximus dictum vel pharetra metus. Vestibulum mattis ex eget risus fringilla, sed interdum massa molestie.</p>
// <img src="images/projet1/i1.png" class="illustration">
// <img src="images/projet1/i2.png" class="illustration">
// <img src="images/projet1/i3.png" class="illustration">
// <img src="images/projet1/i4.png" class="illustration">
// <img src="images/projet1/i5.png" class="illustration">


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
    // html_figure.classList.add("projet");
    html_figure.value = dessins[i].titre

    html_main.appendChild(html_figure);

    html_img = document.createElement('img');
    html_img.setAttribute('src',dessins[i].img);
    html_figure.appendChild(html_img);

    // html_figcaption = document.createElement('figcaption');
    // html_figure.appendChild(html_figcaption);
    // html_titre = document.createElement('h2');
    // html_titre.textContent = dessins[i].titre;
    // html_figcaption.appendChild(html_titre);

  }
}
