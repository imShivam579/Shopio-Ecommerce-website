const track = document.querySelector(".carousel__track");
console.log(track);
const slides = Array.from(track.children);
console.log(slides);
// const slides = Array.from(track.children);
// const nextButton = document.querySelector(".carousel__button--right");
// const previousButton = document.querySelector(".carousel__button--left");
// const Navdots = document.querySelector(".carousel__nav");
// const dots = Array.from(Navdots.children);
// const slideWidth = slides[0].getBoundingClientRect().width;

// //arrange the slide next to one another
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// //move slide  when i clicked on right button
// nextButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current-Slide");
//   console.log(currentSlide);
//   const nextSlide = currentSlide.nextElementSibling;
//   const amountToMove = nextSlide.style.left;
//   //   move to the next slide
//   track.style.transform = "translateX(-" + amountToMove + ")";
//   currentSlide.classList.remove("current-slide");
//   nextSlide.classList.add("current-slide");
// });
