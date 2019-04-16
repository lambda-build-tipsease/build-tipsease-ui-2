const homeLink = document.querySelector('.home-selected');
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
})
const links = document.querySelectorAll('a');
for (var i=0; i < links.length; i++) {
   linksin[i].addEventListener('click', (event) => {
       event.preventDefault();
       // prevent default refresh on anchors
       });
    }