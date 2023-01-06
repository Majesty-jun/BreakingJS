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
    displayLightBox(index);

    nextBtn.addEventListener('click', () => {
      index++;
      displayLightBox(index);
      hideButton(index);
    })

    prevBtn.addEventListener('click', () => {
      index--;
      displayLightBox(index);
      hideButton(index);
    })

  })
})

closeBtn.addEventListener('click', () => {
  lightBox.style.display = "none";
})

function displayLightBox(index) {    
  lightImg.src = img[index].src;
  imgNumber.innerText = `Index ${index + 1} of ${img.length}`;
}

function hideButton(index) {
  if (index === 0) prevBtn.style.display = "none";
  else prevBtn.style.display = "block";
  if(index === img.length -1) nextBtn.style.display = "none";
  else nextBtn.style.display = 'block';
}