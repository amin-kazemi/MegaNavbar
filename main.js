// const selectElement = (element) => document.querySelector(element);
// selectElement ('.menu-icons').addEventListener('click',() =>{
//   selectElement('nav').classList.toggle('active');
// })

//My way
const selectorElement = document.querySelector('nav');
selectorElement.addEventListener('click', run);

function run(){
  selectorElement.classList.toggle('active');
}