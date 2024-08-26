export function getBaseUrl() {
  const isProduction = process.env.PRODUCTION === "true";
  const defaultLocalUrl = "http://localhost:3000/";
  const productionUrl = "https://artshllaku-portfolio.vercel.app/";

  return isProduction ? productionUrl : defaultLocalUrl;
}
