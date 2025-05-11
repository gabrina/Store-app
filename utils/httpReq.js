const fetchData = async (URL) => {
  try {
    const data = await fetch(URL);
    const json = await data.json();
    return json;
  } catch (error) {
    alert("Somehing went wrong, try again!");
  }
};

export { fetchData };
