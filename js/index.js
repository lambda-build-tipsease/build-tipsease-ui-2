const homeLink = document.querySelector('.home-selected');
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
})
// const logo = document.querySelector('.logo');
// logo.addEventListener('click', (event) => {
//     event.preventDefault();
// })
const logoText = document.querySelector('.logo-text');
logoText.addEventListener('click', (event) => {
    event.preventDefault();
})
const logo = document.querySelector('.logo');
logo.addEventListener('click', (event) => {
    event.preventDefault();
})

// class Dropdown {
//     constructor(element) {
      
//       this.element = element;
      
//       this.button = this.element.querySelector('.dropdown-button');
      
//       this.content = this.element.querySelector('.dropdown-content');
      
//       this.button.addEventListener('mouseenter', () => {
//         this.toggleContent();
//       })
//     }
  
//     toggleContent() {
      
//       this.content.classList.toggle('dropdown-hidden');
//     }
//   }
  
//   let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));