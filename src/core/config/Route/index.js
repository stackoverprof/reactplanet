const RouteName = {
  dashboard: "/beranda",
  Error404: "*",
};

const generateUrlWithParams = (data, oldUrl) => {
  let newUrl = oldUrl;
  let key;
  for (key in data) {
    newUrl = newUrl.replace(`:${key}`, data[key]);
  }
  return newUrl;
};

const generateRouteSet = () => {
  let resRouteSet = {};
  for (let key in RouteName) {
    resRouteSet[key] = (data) => {
      return generateUrlWithParams(data, RouteName[key]);
    };
  }
  return resRouteSet;
};

export const routeSet = generateRouteSet();

export default RouteName;
