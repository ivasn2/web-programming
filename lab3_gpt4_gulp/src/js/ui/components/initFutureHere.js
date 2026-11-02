import futureHereData from "../../mockData/futureHereData.js";
import { futureHereTemplate } from "../templates/futureHereTemplate.js";

const initFutureHere = (futureHereNode) => {
  futureHereNode.innerHTML = "";
  futureHereNode.insertAdjacentHTML(
    "beforeend",
    futureHereTemplate(futureHereData)
  );
  setTimeout(() => {
    if (futureHereData.length === 4) { 
      futureHereData.push({
        title: "Новая статья",
        description: "Текст...",
      });
      initFutureHere(futureHereNode);
    }
  }, 4000);
};

export default initFutureHere;
