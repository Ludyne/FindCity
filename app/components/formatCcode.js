export default function formatCode(populationNumber) {
  if (populationNumber > 1000000) {
    return `${
      (populationNumber / 1000000).toFixed(2).replace(".", ",") +
      " M".toLocaleString()
    }`;
  } else if (populationNumber > 1000) {
    return `${(populationNumber / 1000).toFixed(2).replace(".", ",") + " k"}`;
  }
  return populationNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
