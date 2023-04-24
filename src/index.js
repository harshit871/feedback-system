import "./styles.css";

const starContainerEl = document.getElementById("star-container");
const allStars = document.querySelectorAll(".star");
const countEl = document.getElementById("count");
let filledStar = 0;

starContainerEl.addEventListener("click", function (e) {
  let currentRating = e.target.dataset.index;

  for (let i = currentRating - 1; i < 5; i++) {
    allStars[i].classList.remove("star-rated");
  }

  for (let i = 0; i < currentRating; i++) {
    allStars[i].classList.add("star-rated");
  }

  countEl.innerHTML = `<div>Rating Provided: ${currentRating || 0}</div>`;
  filledStar = currentRating;
});

starContainerEl.addEventListener("mouseover", function (e) {
  let mouseOverRating = e.target.dataset.index;

  for (let i = mouseOverRating - 1; i < 5; i++) {
    allStars[i].classList.remove("star-rated");
  }

  for (let i = 0; i < mouseOverRating; i++) {
    allStars[i].classList.add("star-rated");
  }
});

starContainerEl.addEventListener("mouseout", function (e) {
  for (let i = 0; i < 5; i++) {
    allStars[i].classList.remove("star-rated");
  }

  for (let i = 0; i < filledStar; i++) {
    allStars[i].classList.add("star-rated");
  }
});
