import error404 from '../pages/error404'
import headerTemplate from '../templates/header';
import home from '../pages/home'
import country from '../pages/country'
import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';


const routes = {
  '/': home,
  '/:name': country,
  // '/:region': region,
}

const router = async () => {

  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await headerTemplate();

  let hash = getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : error404;

  content.innerHTML = await render();
}

export default router;