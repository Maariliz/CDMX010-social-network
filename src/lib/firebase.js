// debugger
const firebaseConfig = {
  apiKey: 'AIzaSyBf_eRK2Cq3fWDgb36pHjg5n_J-soF4HXI',
  authDomain: 'eco-app-73c81.firebaseapp.com',
  projectId: 'eco-app-73c81',
  storageBucket: 'eco-app-73c81.appspot.com',
  messagingSenderId: '408430283117',
  appId: '1:408430283117:web:a051107bcd0ad980b0f264',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();

export default firebase;
