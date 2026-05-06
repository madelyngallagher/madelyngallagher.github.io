const crestToggle = document.getElementById("crestToggle");
const crestYears = document.getElementById("crestYears");

if (crestToggle && crestYears) {
  crestToggle.addEventListener("click", (e) => {
    // prevent link from jumping to thecrest.news
    e.preventDefault();

    crestYears.classList.toggle("show");
    crestToggle.classList.toggle("open");
  });

  // optional: close when clicking outside
  document.addEventListener("click", (e) => {
    if (!crestToggle.contains(e.target) && !crestYears.contains(e.target)) {
      crestYears.classList.remove("show");
      crestToggle.classList.remove("open");
    }
  });
}

const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");

  const posters = document.querySelectorAll(".poster-img");

  // works across ALL pages
  if (posters.length > 0) {
    posters.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

        // pull text from HTML instead of JS array
        title.textContent = img.dataset.title || "";
        desc.textContent = img.dataset.desc || "";
      });
    });
  }

  // close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // click outside to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}
