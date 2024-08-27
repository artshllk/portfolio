export function getBaseUrl() {
  let isProduction = false;
  let productionUrl = "https://artshllaku-portfolio.vercel.app/";
  let defaultLocalUrl = "http://localhost:3000/";

  return isProduction ? productionUrl : defaultLocalUrl;
}
