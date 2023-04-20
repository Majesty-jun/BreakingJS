const img = [
  {src: "alone.jpg"},
  {src: "desert.jpg"},
  {src: "jordan1.jpg"},
  {src: "londonStreet.jpg"},
  {src: "mistake.jpg"},
  {src: "river.jpg"},
  {src: "scottJordan.jpg"},
  {src: "travisScott.jpg"}
]

const wrapper = document.querySelector('.slider-item-wrapper');
const [prevBtn, nextBtn] = document.querySelectorAll('.move');

let pressed = false;
let startX = 0;
let endX = 0;
let totalX = 0;
let moveX = 0;
let buttonClicked = 1;

img.forEach((cur, index) => {
  let template = /* html */`
  <li class="slider-item">
    <a class="link" href="#">
      <img class="image" src="./src/${cur.src}"/>
    </a>
  </li>`;
  wrapper.insertAdjacentHTML('beforeend', template);
})

wrapper.addEventListener('mousedown', (e) => {
  e.preventDefault();
  pressed = true;
  startX = e.clientX;
})


document.body.addEventListener('mouseup', (e) => {
  pressed = false;
  endX = e.clientX;
  totalX = totalX + (endX - startX);
})

wrapper.addEventListener('mousemove', (e) => {
  if(!pressed) return;
  moveX = totalX + (e.clientX - startX)
  wrapper.style.transform = `translateX(${moveX}px)`;
})

prevBtn.addEventListener('click', () => {
  buttonClicked--;
  hideButton();
  buttonMove();
})

nextBtn.addEventListener('click', () => {
  buttonClicked++;
  hideButton();
  buttonMove();
})

function hideButton() {
  if (buttonClicked === 0) prevBtn.style.display = "none";
  else prevBtn.style.display = "block";
  if (buttonClicked === (img.length - 3)) nextBtn.style.display = "none";
  else nextBtn.style.display = "block";
}

const buttonMove = () => wrapper.style.transform = `translateX(-${(buttonClicked) * 410}px)`;
