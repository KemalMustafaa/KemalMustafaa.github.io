var type = document.getElementById("title-intro");

var typewriter = new Typewriter(type, {
  loop: true,
});
typewriter
  .typeString(
    "I'm Mustafa Kemal <br> Fullstack Developer<span class='text-2xl'>©</span>",
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm also Designer")
  .pauseFor(2500)
  .deleteAll()
  .start();

// untuk membuat project li
// Tambahkan titik (.) sebelum nama class
const tag = document.querySelector("section.project");
const projects = tag.querySelectorAll(".list");
const descs = tag.querySelectorAll(".desc");

projects.forEach((item, i) => {
  item.addEventListener("click", () => {
    const isCurrentlyOpen = descs[i].classList.contains("h-fit");

    // 1. Tutup SEMUA list terlebih dahulu
    descs.forEach((el) => {
      el.classList.remove("h-fit", "py-4");
      el.classList.add("h-0");
    });

    // 2. Jika yang diklik tadi tidak sedang terbuka, maka buka
    if (!isCurrentlyOpen) {
      descs[i].classList.add("h-fit", "py-4");
      descs[i].classList.remove("h-0");
    }
  });
});
