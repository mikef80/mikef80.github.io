const ApiCall = () => {
  try {
    fetch("https://api.github.com/users/mikef80/repos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

export default ApiCall;
