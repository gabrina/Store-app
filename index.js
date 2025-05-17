import { fetchData } from "./utils/httpReq.js";
import Products from "./Models/products.js";
import { getCookie } from "./utils/cookie.js";

const buttons = document.querySelectorAll(".header-button");
const searchButton = document.getElementById("search-button");
const searchData = document.getElementById("search-product");
const categoryListItem = document.querySelectorAll(".category");
const productsNode = document.getElementById("products");

const BASE_URL = "https://fakestoreapi.com/";
let currentCategorry = "all"
let productsData = [];

const init = async () => {
  const cookie = getCookie();
  if (cookie) {
    buttons[0].classList.add("hidden");
    buttons[1].classList.remove("hidden");
  } else {
    buttons[0].classList.remove("hidden");
    buttons[1].classList.add("hidden");
  }
  productsData = await fetchData(`${BASE_URL}products`);
  render()
};



const render = () => {
  const productInstances = new Products(productsNode, productsData, "all");
  productInstances.showProducts(
    searchData.value,
    currentCategorry.trim().toLowerCase()
  );
};

const categoryHandeler = (event) => {
  //handeling the view of the categories list
  categoryListItem.forEach((item) => {
    item.classList.remove("category-selected");
  });
  event.target.classList.add("category-selected");

  //handeling the products to show

  currentCategorry = event.target.innerText;

  render();
};

categoryListItem.forEach((li) =>
  li.addEventListener("click", categoryHandeler)
);
searchButton.addEventListener("click", render);
window.addEventListener("DOMContentLoaded", init);