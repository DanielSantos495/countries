import error404 from '../pages/error404'
import region from '../pages/region'
import country from '../pages/country'
import home from '../pages/home'
import headerTemplate from '../templates/header';
import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';


const routes = {
  '/': home,
  '/:region': region,
  '/:alpha2Code': country,
}

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await headerTemplate();
  let hash = getHash();
  let route = await resolveRoute(hash);
  let render = routes[route] ? routes[route] : error404;
  content.innerHTML = render();
}

export default router;