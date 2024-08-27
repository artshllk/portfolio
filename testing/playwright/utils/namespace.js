export function getBaseUrl() {
  let isProduction = false;
  let productionUrl = "https://artshllaku-portfolio.vercel.app/";
  let defaultLocalUrl = "http://localhost:3000/";

  if (process.env.PRODUCTION_BASE_URL) {
    isProduction = true;
  }

  return isProduction ? productionUrl : defaultLocalUrl;
}
