const setCookie = (token) => {
  document.cookie = `token=${token}; max-age=${24 * 60 * 60}; path=/`;
};

const getCookie = () => {
  const cookie = document.cookie;
  return cookie ? true : false;
};

export { setCookie, getCookie };
