import { getCookie } from "./utils/cookie.js";

const logoutButton = document.getElementById("logout-button");

const init = () => {
  const cookie = getCookie();
  if (!cookie) location.assign("auth.html");
};

const logout = () => {
  document.cookie = "token=; max-age=0";
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", init);
logoutButton.addEventListener("click", logout);
