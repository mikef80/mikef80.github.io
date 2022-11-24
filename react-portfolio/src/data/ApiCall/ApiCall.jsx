const ApiCall = () => {
  const baseURL = `https://api.github.com/search/repositories?q=`;
  const queryString = encodeURIComponent("portfolio in:topics user:mikef80");

  let items = [];

  try {
    return fetch(baseURL + queryString)
      .then(response => response.json());
    /* .then(result => {
      let array = result.items;
      array.forEach(item => {
        let object = {
          name: item.name,
          description: item.description,
          url: item.svn_url
        };
        items.push(object);
      });
      console.log(items);
    }); */
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default ApiCall;
