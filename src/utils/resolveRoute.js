const resolveRoute = (route) => {
  let validRoute = null;
  if (route) {
    if(route === '/') {
      validRoute = route;
    } else  {
      validRoute = `/:name`;
    console.log(route);

    }
    // let validRoute = route === '/home' ? route : `/:name`;
    return validRoute
  }
  return `/${route}`
}

export default resolveRoute;