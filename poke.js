let pokeball = document.querySelectorAll(".box");
let pokemon = document.querySelectorAll(".pokemon");

pokeball.forEach(
  addEventListener("click", (event) => {
    let target = event.target;
    if (target.id === "poke-tilt") {
      event.target.classList.toggle("hidden");
    }
  })
);
