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
// deklarasi untuk project
// Inisialisasi Project
const projectTag = document.querySelector("section.project");
const mainImg = document.getElementById("main-project-img");
if (projectTag) {
  setupAccordion(
    projectTag.querySelectorAll(".list"),
    projectTag.querySelectorAll(".desc"),
    "h-fit",
  );
}

// Inisialisasi FAQ
const faqTag = document.querySelector(".faq-items");
if (faqTag) {
  setupAccordion(
    faqTag.querySelectorAll(".list"),
    faqTag.querySelectorAll(".ans"),
    "h-auto",
  );
}

function setupAccordion(triggers, contents, activeClass = "h-fit") {
  triggers.forEach((item, i) => {
    item.addEventListener("click", () => {
      const isOpen = contents[i].classList.contains(activeClass);

      // 1. Reset Semua (Tutup semua konten dan hapus styling trigger)
      contents.forEach((el) => {
        el.classList.remove(activeClass, "py-4", "h-auto"); // gabungkan semua class aktif
        el.classList.add("h-0");
      });
      triggers.forEach((el) => {
        el.classList.remove("ml-5", "font-medium");
        el.classList.add("ml-0");
      });

      // 2. Jika sebelumnya tertutup, sekarang buka
      if (!isOpen) {
        contents[i].classList.add(activeClass, "py-4");
        contents[i].classList.remove("h-0");
        triggers[i].classList.add("font-medium");

        // Khusus untuk section Project (jika ada margin)
        if (triggers[i].closest("section.project")) {
          triggers[i].classList.add("ml-5");
        }

        // Logic ganti gambar khusus untuk Project
        const newImgPath = item.getAttribute("data-img");
        if (newImgPath && mainImg) {
          updateMainImage(newImgPath);
        }
      }
    });
  });
}

// Helper untuk transisi gambar
function updateMainImage(path) {
  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = path;
    mainImg.style.opacity = 1;
  }, 200);
}

const track = document.getElementById("carousel-track");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Fungsi Klik Tombol
nextBtn.addEventListener("click", () => {
  track.scrollLeft += track.offsetWidth / 2;
  track.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  track.scrollLeft -= track.offsetWidth / 2;
  track.scrollBy({ left: -300, behavior: "smooth" });
});

// Logika Drag Mouse (Opsional, gunakan kode drag yang kita bahas sebelumnya)
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener("mouseleave", () => (isDown = false));
track.addEventListener("mouseup", () => (isDown = false));
track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2;
  track.scrollLeft = scrollLeft - walk;
});
