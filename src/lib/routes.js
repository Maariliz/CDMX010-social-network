import { home } from '../components/home.js';
import { about } from '../components/about.js';
import { signUp } from '../components/signup.js';
import { login } from '../components/login.js';
import { timelineView } from '../components/timeline.js';
import { emailVerification } from '../components/emailVerification.js';

export const routes = {
  '/': home,
  '/about': about,
  '/signUp': signUp,
  '/login': login,
  '/emailVerification': emailVerification,
  '/timeline': timelineView,
};

export const rootDiv = document.getElementById('root');
// rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  if (pathname === '/timeline') {
    const init = routes[pathname];
    init(rootDiv);
  } else {
    rootDiv.innerHTML = routes[pathname];
  }
};

onNavigate(window.location.pathname);

// window.addEventListener('DOMContentLoaded', () => {
//   routes;
// });
