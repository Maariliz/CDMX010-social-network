import { onNavigate } from '../lib/routes.js';

import { userValidation } from '../lib/authFirebase.js';

export const emailVerification = `
  <div class= "verification">
    <p>Revisa tu correo o haz click para enviarte un enlace de validación</p>
      <div class = "sendVerification">
      <button class= "emailVerified">Enviar email de Verificación</button>
      </div>
    <div class="goLoginContainer">
      <p>¿Ya tienes una cuenta verificada? Mira aquí</p>
      <a class="goLogin" href="">Iniciar Sesión</a>
    </div>
  </div>
  <div class= "verifiedImg">
    <img class="verifiedImage" src="assets/img/growing-plant-svgrepo.svg"></img>
  </div>
`;
document.addEventListener('click', (e) => {
  if (e.target.matches('.emailVerified')) {
    userValidation();
  }
  if (e.target.matches('.goLogin')) {
    console.log('Dirige al Login');
    onNavigate('/login');
  }
});
