let work2 = document.querySelector(".work2");
let clausum_audio = document.getElementById("clausum");
clausum_audio.loop = true;

// Reproducir al entrar con el ratón
work2.addEventListener("mouseenter", () => {
  clausum_audio.currentTime = 0; // Reinicia el audio desde el principi
  clausum_audio.play().catch((error) => {
    console.log(
      "El navegador ha bloquejat la interacció perquè no hi ha hagut interacció prèvia:",
      error,
    );
  });
  if (clausum_audio.paused) {
    work2.addEventListener("click", () => {
      clausum_audio.currentTime = 0; // Reinicia el audio desde el principi
      clausum_audio.play().catch((error) => {
        console.log(
          "El navegador ha bloquejat la interacció perquè no hi ha hagut interacció prèvia:",
          error,
        );
      });
    });
  }
});
work2.addEventListener("click", () => {
  clausum_audio.pause();
  clausum_audio.currentTime = 0;
});

work2.addEventListener("mouseleave", () => {
  clausum_audio.pause();
  clausum_audio.currentTime = 0;
});

let work1 = document.querySelector(".work1");
let euphoria_audio = document.getElementById("euphoria");
euphoria_audio.loop = true;

// Reproducir al entrar con el ratón
work1.addEventListener("mouseenter", () => {
  euphoria_audio.currentTime = 0; // Reinicia el audio desde el principi
  euphoria_audio.play().catch((error) => {
    console.log(
      "El navegador ha bloquejat la interacció perquè no hi ha hagut interacció prèvia:",
      error,
    );
  });
  if (euphoria_audio.paused) {
    work1.addEventListener("click", () => {
      euphoria_audio.currentTime = 0; // Reinicia el audio desde el principi
      euphoria_audio.play().catch((error) => {
        console.log(
          "El navegador ha bloquejat la interacció perquè no hi ha hagut interacció prèvia:",
          error,
        );
      });
    });
  }
});
work1.addEventListener("click", () => {
  euphoria_audio.pause();
  euphoria_audio.currentTime = 0;
});

work1.addEventListener("mouseleave", () => {
  euphoria_audio.pause();
  euphoria_audio.currentTime = 0;
});

const produccio = document.querySelector(".interactive .producció");
const guio = document.querySelector(".interactive .column1");
const overlay_guio = document.querySelector(".interactive .overlay_guió");
const overlay_produccio = document.querySelector(
  ".interactive .overlay_producció",
);
const so = document.querySelector(".interactive .column3");
const overlay_so = document.querySelector(".interactive .overlay_so");
const imatge = document.querySelector(".interactive .imatge");
const overlay_imatge = document.querySelector(".interactive .overlay_imatge");

if (guio && overlay_guio) {
  guio.addEventListener("click", (event) => {
    event.stopPropagation();
    overlay_guio.classList.add("is-visible");
  });
}

if (produccio && overlay_produccio) {
  produccio.addEventListener("click", (event) => {
    event.stopPropagation();
    overlay_produccio.classList.add("is-visible");
  });
}

if (imatge && overlay_imatge) {
  imatge.addEventListener("click", (event) => {
    event.stopPropagation();
    overlay_imatge.classList.add("is-visible");
  });
}

if (so && overlay_so) {
  so.addEventListener("click", (event) => {
    event.stopPropagation();
    overlay_so.classList.add("is-visible");
  });
}

document.querySelectorAll(".overlay-close").forEach((closeButton) => {
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeButton.parentElement?.classList.remove("is-visible");
  });
});
