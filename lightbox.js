const img = document.querySelectorAll('.itemImg');
const container = document.querySelector('.container');
const lightBox = document.querySelector('.lightBox');
const lightImg = document.querySelector('.lightImg');
const imgNumber = document.querySelector('.imgNumber')
const close = document.querySelector('.close');
const [prevBtn, nextBtn, closeBtn] = document.querySelectorAll("button");

img.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    lightBox.style.display = "block";
    lightImg.src = img[index].src;
    imgNumber.innerText = `Index ${index + 1} of ${img.length}`;
  })
})

closeBtn.addEventListener('click', () => {
  lightBox.style.display = "none";
})