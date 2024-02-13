const stars = document.querySelectorAll('.star');
const starValues = [1, 2, 3, 4, 5];
const starContainer = document.querySelector('.star-container');

let rating = 0;
let eventType = '';

function getRating() {
  return rating;
}

function setRating(newRating) {
  rating = newRating;
}

function renderChanges(e, value) {
  stars.forEach((star, index) => {
    if (e.type === 'onmouseleave') {
      star.classList.remove('star-filled');
    } else {
      if (index < value) {
        star.classList.add('star-filled');
      }
    }
  });
}

function onMouseCLick(e) {
  const starClicked = e.target;
  const starValue = starClicked.getAttribute('data-rating');
  if (rating === 0) {
    setRating(starValue);
  } else {
    setRating(0);
  }
  renderChanges(e, rating);
}

function onMouseOver(e) {
  const starHovered = e.target;
  const starValue = starHovered.getAttribute('data-rating');
  if (rating === 0) renderChanges(e, starValue);
}

function onMouseLeave(e) {
  if (rating === 0) {
    stars.forEach((star) => {
      star.classList.remove('star-filled');
    });
  }
}

stars.forEach((star) => {
  star.addEventListener('click', onMouseCLick);
  star.addEventListener('mouseover', onMouseOver);
  star.addEventListener('mouseleave', onMouseLeave);
});
