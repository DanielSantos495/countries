import './scss/main.scss';
import router  from './router/router';
import searchForm from './js/searchForm';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('load',() => {

  searchForm();
  
})

// const form = null || document.getElementById('form');

// function searchCountry(event) {
  
//   event.preventDefault();

//   alert('Hola!');
// }

// form.addEventListener('submit', searchCountry);