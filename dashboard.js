import { getCookie } from "./utils/cookie.js";
import { fetchData } from "./utils/httpReq.js";
import users from "./Models/users.js";

const logoutButton = document.getElementById("logout-button");

const BASE_URL = "https://fakestoreapi.com";

const init = () => {
  //redirect in case that user had not login
  const cookie = getCookie();
  if (!cookie) location.assign("auth.html");
};

const usersNode = document.getElementById("users");

const render = async () => {
  const usersData = await fetchData(`${BASE_URL}/users`);
  const userInstances = new users(usersNode, usersData);
  userInstances.showusers();
};

const logout = () => {
  document.cookie = "token=; max-age=0"; //clearing this site cookie
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", render);
logoutButton.addEventListener("click", logout);
