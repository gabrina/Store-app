import { fetchData } from "./utils/httpReq.js";
import Products from "./Models/products.js";

const BASE_URL = "https://fakestoreapi.com/";

const productsNode = document.getElementById("products");

const render = async () => {
  const productsData = await fetchData(`${BASE_URL}products`);
  const productInstances = new Products(productsNode, productsData);
  productInstances.showProducts();
  console.log(productsData);
};

window.addEventListener("DOMContentLoaded", render);
