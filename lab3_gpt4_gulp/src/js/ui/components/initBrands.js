import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = async (brandsNode) => {
  const response = await fetch("./files/brands.json");
  const brandsData = await response.json();
  brandsNode.innerHTML = "";
  brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));
};

export default initBrands;
