const resolveRoute = (route) => {
  if (route) {
    let validRoute = route === '/' ? route : `/${route}`;
    return validRoute
  }
}

export default resolveRoute;