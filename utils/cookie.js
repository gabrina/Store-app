const setCookie = (token) => {
  document.cookie = `token=${token}; max-age=${24 * 60 * 60}; path=/`;
};

const getCookie = () => {
  const cookie = document.cookie;
  if (cookie) {
    return true;
  } else {
    return false;
  }
};

export { setCookie, getCookie };
