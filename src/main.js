import { routes, rootDiv, onNavigate } from './lib/routes.js';

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
