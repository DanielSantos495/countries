import error404 from '../pages/error404'
// import region from '../pages/region'
import headerTemplate from '../templates/header';
import searchTemplate from '../templates/search';
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
  const search = null || document.getElementById('search');

  header.innerHTML = await headerTemplate();
  search.innerHTML = await searchTemplate();

  let hash = getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : error404;

  console.log(route);
  content.innerHTML = await render();
}

export default router;