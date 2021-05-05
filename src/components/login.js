import { loginUser } from '../lib/authFirebase.js';

export const login = `
<div class="mobileLogin">
  <div class ="logContainer">
          <div class ="logText">
              <p> Inicia sesión en</p>
              <h3>ECO APP</h3>
          </div>
          <div class="dataUser">
              <input type="text" id="mailUser" class="mailUser" placeholder="Escribe tu correo" autofocus> </input>
              <input type="password" id="passwordUser" class="passwordUser" placeholder="Contraseña"> </input>
          </div>
          <div class="buttonLogContainer">
              <button class="buttonLog" id="login" href="#">Iniciar Sesión</button>

          </div>
          <div class="forgottenPass">
              <a class="newPass" href="#">¿Olvidaste tu contraseña?</a>
          </div>
          </div>
  </div>
<div class="desktopLogin">
  <div class ="Login">
    <div class="containerLoginOne">
      <div class="containerImageInputs">
        <img class="imageLogin" src="assets/img/imagendeportada.png"></img>
      </div>
      <div class ="loginTextButtons">
        <h2>Inicia sesión en</h2>
        <h3>ECO APP</h3>
        <div class="dataUser">
        <input type="text" id="mailUserD" class="mailUser" placeholder="Escribe tu correo" autofocus> </input>
        <input type="password" id="passwordUserD" class="passwordUser" placeholder="Contraseña"> </input>
        </div>
      <div class="buttonLogContainer">
        <button class="buttonLog" id="login" href="#">Iniciar Sesión</button>

      </div>
      </div>
      </div>
      <div class="containerText">
      <div class= "aboutTextLogin">
        <p> Eco App es una comunidad de usuarios interesados en compartir iniciativas y experiencias vinculadas a la ecología y al desarrollo sostenible.
        ¡Únete a esta comunidad y empieza a compartir tus ideas y tips para salvar al planeta!</p>
      </div>
    </div>
  </div>
</div>
`;

document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonLog')) {
    console.log('usuario iniciando sesión de forma manual');
    e.preventDefault();
    loginUser();
  }
});

// // login con cuenta google en redirección
document.addEventListener('click', (e) => {
  if (e.target.matches('.buttonLogGoogle')) {
    console.log('login con google');
    e.preventDefault();

    const GoogleAuth = new firebase.auth.GoogleAuthProvider();
    // registro con cuenta google
    firebase.auth().signInWithRedirect(GoogleAuth).then((result) => {
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      // ..
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(credential);
      // ...
      alert('oops! intentalo de nuevo');
    });
  }
});
