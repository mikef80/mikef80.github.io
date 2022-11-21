import { data } from "autoprefixer";

const ApiCall = () => {
  const queryString =
    "q=" + encodeURIComponent("portfolio in:topics user:mikef80");

  let items = [];

  try {
    fetch(`https://api.github.com/search/repositories?${queryString}`)
      .then((response) => response.json())
      /* .then((data) => {
        let repos = data;

        repos.map((repo) => {
          items.push({ name: repo.name,  });
        });
      }); */
  } catch (error) {
    console.log(error);
  }
};

export default ApiCall;
