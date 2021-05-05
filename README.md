# Red Social- ECOAPP

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Retrospectiva de aprendizajes](#4-retrospectiva-de-aprendizaje)

***

## 1. Preámbulo  🪴
Ante el flujo masivo de información general y la publicación de “fake news”, los usuarios interesados en temas sobre el cuidado al medio ambiente y sustentabilidad buscan información oportuna y veraz. Este grupo de usuarios es extenso y diverso, sus temas frecuentes de búsqueda son los siguientes:
Legislación sobre manejo de residuos sólidos en la Ciudad de México.
Centros o lugares de reciclaje.
Cómo realizar un huerto urbano.
Cómo captar agua.
Consumo y mercado local.
Transporte sustentable.
Eco App es una aplicación que permite la concentración de usuarios interesados en los temas mencionados, información que muchas veces pasa desapercibida en el timeline de otras redes sociales.

## 2. Resumen del proyecto 📋
ECOAPP, nuestra red social, surge con el  objetivo de fomentar el diálogo e intercambio de información sobre temas de sustentabilidad.
Nuestros principales usuarios son personas preocupadas por el medio ambiente e interesadas en compartir experiencias e iniciativas vinculadas a la ecología y al desarrollo sostenible

## 3. Historias de usuario 🤳

Las historias de usuario que desarrollamos para nuestra red social son:
1. Yo como usuario quiero saber de qué va esta red social para decidir si registrarme o irme
2. Yo como usuario quiero poder registrarme usando mi nombre, correo y contraseña para ser usuario de la red social
3. Yo como usuario quiero recibir un correo de validación al registrarme con mi correo y contraseña para saber que me he suscrito correctamente
4. Yo como usuario ya registrado quiero poder iniciar sesión con mi correo y contraseña para empezar  a ver y compartir publicación
5. Yo como usuario quiero poder compartir una idea en un post
6. yo como usuario quiero poder eliminar una publicación que hice

## 4. Proceso 🛠️
#### Prototipado 📲
El diseño de nuestra aplicación fue desarrollado a partir de la metodología mobile first, esto fue esencial para mejorar la experiencia de usuario.  Después de diseñar las pantallas para la versión móvil los elementos se adaptaron para un navegador de escritorio.

<img src="/README ECOAPP/testab.JPG" alt="Prototipo para el AB test" width="850" height="510"/>
<img src="/README ECOAPP/prototipobaja1.jpg" alt="Primeros prototipos" width="850" height="510"/>
<img src="/README ECOAPP/prototipobaja2.jpg" alt="Primeros prototipos" width="850" height="510"/>
<img src="/README ECOAPP/prototipobaja3.jpg" alt="Primeros prototipos" width="850" height="510"/>

#### Prototipos de alta fidelidad 🖥
Nuestros prototipos de baja fidelidad fueron testeados mediante un A/B test con un grupo de 6 potenciales usuarios ajenos a Laboratoria. Con base en estos resultados, iteramos hasta obtener la versión final y  poder continuar con el prototipado de alta fidelidad.
Puedes ver el [resultado final en Figma](https://www.figma.com/proto/UEqZ6uWdkdEGeXjc8rdZv8/Untitled?node-id=6%3A10&scaling=min-zoom)

<img src="/README ECOAPP/prototipos-altafidelidad.png" alt="Prototipos de alta fidelidad" width="950" height="400"/>

### Retrospectiva 💛
A lo largo de este proyecto, nos encontramos constantemente con retos y desafíos.
El primero de ellos fue desarrollar por primera vez una `SPA`, y con ello el correcto routing.
Uno de los primeros retos a los que nos enfrentamos fue establecer mediante Vanilla Javascript la lógica del router de una Single Page Application, para lograrlo usamos los métodos: `history.pushState()` y la propiedad `location.origin` del objeto. Esta implementación funciona exitosamente.
Para la creación y gestión de datos en una red social basamos las funcionalidades de la aplicación en `CRUD` (create, read, update and delete data), siguiendo la propuesta de Laboratoria para este proyecto, usamos una base de datos no relacional: Firebase. A través de esta plataforma logramos registrar a los usuarios con correo electrónico y contraseña, las cuentas registradas son autenticadas a partir de un enlace enviado al correo electrónico del usuario. Para que  los usuarios puedan realizar publicaciones, borrarlas o editarlas usamos Cloud Firestore. En el equipo de desarrollo reconocemos como área de oportunidad el conteo de likes en una publicación.
