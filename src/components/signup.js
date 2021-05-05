import { createNewUser } from '../lib/authFirebase.js';

export const signUp = `
<div class="mobileSignup">
  <div class ="signUp">
    <div class ="signUpText">
      <h2>¡Regístrate!</h2>
      <h3>Es rápido y fácil</h3>
    </div>
    <div class="dataNewUser">
      <input type="text" id="nameNewUser" class="nameNewUser" placeholder="Nombre"> </input>
      <input type="text" id="mailNewUser" class="mailNewUser" placeholder="Correo"> </input>
      <input type="password" id="passwordNewUser" class="passwordNewUser" placeholder="Contraseña"></input>
      <div class ="errorAlert">
    </div>
      <button class="buttonSend" id="signUpSend">enviar</button>
    </div>
    <div class="buttonContainer">

    </div>
  </div>
</div>
<div class="desktopSignup">
    <div class ="signUp">
      <div class="containerRight">
       <div class="containerSignup">
         <img class="imageSignup" src="assets/img/imagendeportada.png"></img>
       </div>
        <div class="signUpTextButtons">
        <header>
        <h1>ECO APP</h1>
       </header>
          <h2>¡Regístrate!</h2>
          <p>Es rápido y fácil</p>
          <input type="text" id="nameNewUserD" class="nameNewUser" placeholder="Nombre"> </input>
          <input type="text" id="mailNewUserD" class="mailNewUser" placeholder="Correo"> </input>
          <input type="password" id="passwordNewUserD" class="passwordNewUser" placeholder="Contraseña"></input>
          <div class="buttonContainer">
          </div>
          <button class="buttonSend" id="signUpSend">Enviar</button>
        </div>
      </div>
      <div="containerLeft">
        <div class= "aboutTextSignup">
          <p> Eco App es una comunidad de usuarios interesados en compartir iniciativas y experiencias vinculadas a la ecología y al desarrollo sostenible.
            ¡Únete a esta comunidad y empieza a compartir tus ideas y tips para salvar al planeta!</p>
        </div>
    </div>
  </div>
</div>
      `;

document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonSend')) {
    console.log('se esta registrando nuevo usuario');
    e.preventDefault();
    createNewUser();
  }
});
