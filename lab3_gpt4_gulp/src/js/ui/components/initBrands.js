import brandsData from "../../mockData/brandsData.js";
import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = (brandsNode) => {
  brandsNode.innerHTML = "";
  brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));
  setTimeout(() => {
    if (brandsData.length === 5) { 
      brandsData.push({
        src: "./assets/img/brands/google.svg",
        alt: "google_new",
      });
      initBrands(brandsNode);
    }
  }, 4000);
};

export default initBrands;
