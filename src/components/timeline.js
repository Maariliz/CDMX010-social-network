import { onNavigate } from '../lib/routes.js';
import { store } from '../lib/firebase.js';

export const timeline = `
  <header class="timelineHeader">
    <div class = "headTimeline">
      <img class="iconApp" src="assets/img/imagendeportada.png">
      <img class="iconUser" src="assets/img/woman.svg">
    </div>
  </header>
  <section id="section">
    <div class="divTextArea" id="postForm">
      <div class= "textAreaPostBlue">
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="¿Qué te gustaría compartir?"></textarea>
        <button class="buttonNewPost" id="buttonNewPost"> Compartir </button>
      </div>
    </div>
    <div class="postSection">
      <div class="containerPost" id="allPost"></div>
    </div>
  </section>
    <nav class="menuNavigate">
      <img class="iconAppTwo" src="assets/img/imagendeportada.png">
      <div class="textAppNavigate">
        <h3>ECO APP</h3>
      </div>
        <img class="menuImg" id="goTimeline" src="assets/img/home-page.svg">
        <img class="menuImg" id="close" src="assets/img/on-off-button.svg">
    </nav>
`;

// almacene el estado de la aplicación
let editStatus = false;
let id = '';

const getPost = (ids) => store.collection('post').doc(ids).get();
const updatePost = (ids, updatedPost) => store.collection('post').doc(ids).update(updatedPost);

// Esta es la función que guarda la data en Firestore
export const savePost = () => {
  const myPost = document.querySelector('#textPost').value;
  store.collection('post').add({
    note: myPost,
  })
    .then((docRef) => {
      // para que limpie el campo del textarea al enviar
      document.querySelector('.textPost').value = '';
      console.log('ID del documento: ', docRef.id);
    })
    .catch((error) => {
      console.error('no se creo documento: ', error);
    });
};

// Esta es la función que crea el post
export const getDataOne = () => {
  const renderData = document.querySelector('#allPost');
  while (renderData.firstChild) {
    renderData.removeChild(renderData.firstChild);
  }
  store.collection('post').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        renderData.innerHTML += `
        <div class="postCard" data-id='${doc.id}'>
          <div class="textContainer">
            <p id=${doc.id}>${doc.data().note}</p>
          </div>
          <div class="oldPostMenu">
            <img class="likeImg" id="likeImage" src="assets/img/growing-plant-svgrepo.svg">
            <p class="numLike"> </p>
              <div class="buttonEdit">
                <button class="editText" data-id='${doc.id}'> Editar </button>
              </div>
              <div class="buttonDelete">
                <button class="deleteText" data-id='${doc.id}'> Eliminar </button>
              </div>
          </div>
        </div>`;

        const btnEdit = document.querySelectorAll('.buttonEdit');
        btnEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            try {
              const docPost = await getPost(e.target.dataset.id);
              console.log(docPost.data());
              document.getElementById('textPost').value = docPost.data().note;
              editStatus = true;
              id = docPost.id;
              document.getElementById('buttonNewPost').innerText = 'Actualizar';
            } catch (error) {
              console.log(error);
            }
          });
        });
      });
    });
};

export function timelineView(container) {
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = timeline;
  getDataOne();
}

// función para editar data
const btnEdit = document.querySelectorAll('.buttonEdit');
btnEdit.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset.id);
  });
});

const deleteDataOne = (postId) => {
  store.collection('post').doc(postId).delete()
    .then(() => {
      console.log('post eliminado: ', postId);
    })
    .catch((error) => {
      console.error('error moving document: ', error);
    });
};

document.addEventListener('click', async (e) => {
  // guardar post
  if (e.target.matches('#buttonNewPost')) {
    e.preventDefault();
    const note = document.getElementById('textPost');
    try {
      // editar post
      if (!editStatus) {
        await savePost(note.value);
      } else {
        await updatePost(id, {
          note: note.value,
        });
        editStatus = false;
        id = '';
        document.getElementById('buttonNewPost').innerText = 'compartir';
      }
      document.getElementById('textPost').value = '';
      note.focus();
    } catch (error) {
      console.log(error);
    }
    getDataOne();
  }
  // borrar post
  if (e.target.matches('.deleteText')) {
    const postId = e.target.dataset.id;
    deleteDataOne(postId);
    getDataOne();
  }
  // dar like en post
  if (e.target.matches('#close')) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Sign-out successful');
        onNavigate('/');
      })
      .catch((error) => {
        alert(`An error happened , ${error}`);
      });
  } // si manda a la pantalla perfil
  if (e.target.matches('#goTimeline')) {
    console.log('Dirige al timeline');
    onNavigate('/timeline');
  }
});
