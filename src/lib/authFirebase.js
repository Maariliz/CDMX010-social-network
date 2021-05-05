import { auth } from './firebase.js';

import { onNavigate } from './routes.js';

// función para registrar usuario con email y contraseña
export const createNewUser = () => {
  const email = document.querySelector('#mailNewUser').value;
  const password = document.querySelector('#passwordNewUser').value;
  console.log(`${email + password}`);
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user.user);
      if (user.user.emailVerified === true) {
        onNavigate('/timeline');
      } else {
        onNavigate('/emailVerification');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(`opss, ${errorMessage}`);
    });
  // añadiendo este .then se enviaba el correo de validación automaticamente
  // .then((res) => {
  //   userValidation();
  // });
};

// función para loguear con correo y contraseña
export const loginUser = () => {
  const emailUser = document.querySelector('#mailUser').value;
  const passwordUser = document.querySelector('#passwordUser').value;
  console.log(emailUser);
  console.log(passwordUser);
  auth.signInWithEmailAndPassword(emailUser, passwordUser)
    .then((user) => {
      console.log(user.user);
      if (user.user.emailVerified) {
        onNavigate('/timeline');
      } else {
        onNavigate('/emailVerification');
      }
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
// observador que nos diga sobre el email verificado o usuario logueado
export const stateObserver = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      const email = user.email;
      const emailVerified = user.emailVerified;
      let textVerified = '';
      if (emailVerified === false) {
        textVerified = 'email no verificado';
      } else {
        textVerified = 'email verificado';
      }
      document.querySelector('.errorAlert').innerHTML = `
      logueado, ${email} + ${textVerified}`;
    } else {
      document.querySelector('.errorAlert').innerHTML = `
      no estas logueado`;
    }
  });
};
// función para enviar correo de validación
export const userValidation = () => {
  const user = auth.currentUser;
  user.sendEmailVerification()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// autentificación con cuenta google
export const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider)
    .then((result) => {
      if (result.credential) {
        const credential = result.credential;
        console.log(`estas dentro, ${credential}`);
      }
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(`el email es, ${errorMessage}`);
      // The email of the user's account used.
      const email = error.email;
      console.log(`el email es, ${email}`);
      // ...
    });
};
