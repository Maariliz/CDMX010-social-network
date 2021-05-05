import { onNavigate } from '../lib/routes.js';

export const about = `
  <div class= "aboutContainer">
  <img class="back" id="iconBack href="#" src="assets/img/back.svg">
  <hr>
    <div class = "aboutText">
      <p> Eco App es una comunidad de usuarios interesados en compartir iniciativas y experiencias vinculadas a la ecología y al desarrollo sostenible.
      ¡Únete a esta comunidad y empieza a compartir tus ideas y tips para salvar al planeta!</p>
    </div>
    <div class= "aboutImgContainer">
      <img class="aboutImage" src="assets/img/growing-plant-svgrepo.svg"></img>
    </div>
  </div>
`;

document.addEventListener('click', (e) => {
  if (e.target.matches('.back')) {
    console.log('Dirige a home');
    // about();
    e.preventDefault();
    onNavigate('/');
  }
});
