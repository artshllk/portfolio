export function getBaseUrl() {
  const defaultLocalUrl = "http://localhost:3000/";
  const productionUrl = "https://artshllaku-portfolio.vercel.app/";

  return productionUrl || defaultLocalUrl;
}
