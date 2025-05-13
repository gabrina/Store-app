const fetchData = async (URL) => {
  try {
    const data = await fetch(URL);
    const json = await data.json();
    return json;
  } catch (error) {
    alert("Somehing went wrong, try again!");
  }
};

const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, credentials) => {
  try {
    const data = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await data.json();
    return json;
  } catch (error) {
    alert("Somehing went wrong, try again!");
  }
};

export { fetchData, postData };
