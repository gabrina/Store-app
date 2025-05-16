import { fetchData } from "./utils/httpReq.js";
import Products from "./Models/products.js";
import { getCookie } from "./utils/cookie.js";

const buttons = document.querySelectorAll(".header-button");
const searchButton = document.getElementById("search-button");
const searchData = document.getElementById("search-product");
const categoryListItem = document.querySelectorAll(".category");

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

const render = async (filterValue = null, filterCategory = "all") => {
  const productsData = await fetchData(`${BASE_URL}products`);
  const productInstances = new Products(productsNode, productsData, "all");
  productInstances.showProducts(
    filterValue.value,
    filterCategory.trim().toLowerCase()
  );
};

const search = () => {
  render(searchData, "all");
};

const categoryHandeler = (event) => {
  //handeling the view of the categories list
  categoryListItem.forEach((item) => {
    item.classList.remove("category-selected");
  });
  event.target.classList.add("category-selected");

  //handeling the products to show

  render(searchData, event.target.innerText);
};

categoryListItem.forEach((li) =>
  li.addEventListener("click", categoryHandeler)
);
searchButton.addEventListener("click", search);
window.addEventListener("DOMContentLoaded", render);
window.addEventListener("DOMContentLoaded", init);
