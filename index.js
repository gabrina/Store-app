import { fetchData } from "./utils/httpReq.js";
import Products from "./Models/products.js";
import { getCookie } from "./utils/cookie.js";

const buttons = document.querySelectorAll("#index-login-button");
console.log(buttons);

const init = () => {
  const cookie = getCookie();
  if (cookie) {
    buttons[0].classList.add("hidden");
    buttons[1].classList.remove("hidden");
  } else {
    buttons[0].classList.remove("hidden");
    buttons[1].classList.add("hidden");
  }
};

const BASE_URL = "https://fakestoreapi.com/";

const productsNode = document.getElementById("products");

const render = async () => {
  const productsData = await fetchData(`${BASE_URL}products`);
  const productInstances = new Products(productsNode, productsData);
  productInstances.showProducts();
  console.log(productsData);
};

window.addEventListener("DOMContentLoaded", render);
window.addEventListener("DOMContentLoaded", init);
