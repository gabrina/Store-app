import { postData } from "./utils/httpReq.js";
import { setCookie, getCookie } from "./utils/cookie.js";

const loginButton = document.getElementById("login-button");

const init = () => {
  const cookie = getCookie();
  if (cookie) location.assign("dashboard.html");
};

const authenticate = async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const credentials = { username, password };
  const path = "/auth/login";
  const data = await postData(path, credentials);

  //insert tokrn into the cookies
  //with path=/ ,we can use the token in every path of the site
  setCookie(data.token);

  location.assign("index.html"); //redirect user to main page
};

loginButton.addEventListener("click", authenticate);
document.addEventListener("DOMContentLoaded", init);
