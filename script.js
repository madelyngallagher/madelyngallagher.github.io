const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

const title = document.getElementById("lightbox-title");
const desc = document.getElementById("lightbox-desc");

const posters = document.querySelectorAll(".poster-img");

// add your own titles/descriptions here
const data = [
  {
    title: "Mayhem at Coachella",
    desc: "As someone who thoroughly enjoys live music and is a huge Lady Gaga fan, her 2025 Coachella performance was unbelievable. I immediately jumped out of my ongoing creative block and designed a poster to commemorate one of the best Coachella performances I've ever seen. I ensured the eccentric color theme of black and orange matched the concept of her new album, Mayhem.",
  },
  {
    title: "Pride and Prejudice",
    desc: "This piece was a gift for my partner,  who is a big fan of Pride and Prejudice. I experimented with textures beyond my usual use, communicating the bottom image as something sort of 'taped in,' and emphasizing the tension between the two main characters. I also expanded my use of colors, not confining myself to two or three, as many of my other pieces have.",
  },
  {
    title: "Die With A Smile",
    desc: "I designed this poster upon the release of the single Die With a Smile by Lady Gaga and Bruno Mars. I took much inspiration from the music video with the vibrant color scheme and vintage aesthetic. My experimentation with Photoshop's text effects in the word 'smile' made the overall design instantly more interesting, making this design a favorite of mine.",
  },
  {
    title: "Revenge of the Sith",
    desc: "During my senior year of high school, I made this for an assignment in my digital art class. I had been inspired by many movie poster designs I had come across at the time in this graphic novel-esque style. I wanted to keep the dark themes of the film, Revenge of the Sith, with both the colors and images of the movie's main events. Although I included darker colors signifying the darkness of the film, the lighter beige colors signify the small glimpses of hope remaining, building off of those hierarchies.",
  },
  {
    title: "Drama",
    desc: "Inspired by Aespa's Drama music video, I designed this poster in the style of a movie poster. The music video maintained a theme of an action film and was executed incredibly. I once again experimented with replacing the font of certain letters in the title's typography.",
  },
  {
    title: "KUST x The Crest",
    desc: "During my first year working at The Crest, I was assigned a non-news-related design project for KUST (a web-based radio organization at the University of St. Thomas) and The Crest's live music event. This poster promoted the event on multiple social media platforms and was physically displayed throughout the Shoenecker Center at St. Thomas.",
  },
];

posters.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;

    title.textContent = data[index].title;
    desc.textContent = data[index].desc;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
