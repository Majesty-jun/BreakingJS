let data = [
  'searchBarClickHandler',
  'getCryptoKey',
  'Uint32Array',
  'getRandomValues',
  'window',
  'target',
  'searchBar',
  'getAttribute',
  'autoComplete',
  'border',
  'searchSubmitHandler',
  'preventDefault',
  'getCryptoKeys',
  'localStorage',
  'getAutoCompleteList',
  '일어나',
]


const searchButton = document.querySelector('.searchButton');
const searchBar = document.querySelector('.searchbar');
const searchForm = document.querySelector('.searchForm');
const suggestion = document.querySelector('.suggestion');

let searchInput = '';

function styleBorderRadius(node, size) {
  node.style.borderRadius = `${size}`;
}

function renderSuggestion() {
  suggestion.innerHTML = '';
  data.forEach(element => {
    if (searchInput === '') return;
    if (element.startsWith(searchInput)) {
      styleBorderRadius(searchBar, '5px 5px 0 0');
      const template = /* html */`<div class='autosuggestion'>${element}</div>`
      suggestion.insertAdjacentHTML('beforeend', template);
    }
  })
}

function searchInputHandler(e) {
  searchInput = e.target.value;
  styleBorderRadius(searchBar, '5px');
  renderSuggestion();
}

function suggestionHandler(e) {
  const selectedSuggestion = e.target.textContent
  searchInput = selectedSuggestion;
  searchBar.value = selectedSuggestion;
  suggestion.innerHTML = '';
  styleBorderRadius(searchBar, '5px');
}

function searchButtonHandler(e) {
  e.preventDefault();
  open(`https://google.com/search?q=${searchInput}`);
  localStorage.setItem()
}

searchBar.addEventListener('input', searchInputHandler);
searchButton.addEventListener('click', searchButtonHandler);
suggestion.addEventListener('click', suggestionHandler); 