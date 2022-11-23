const ApiCall = (stuff) => {
  const baseURL = `https://api.github.com/search/repositories?q=`;
  const queryString = encodeURIComponent("portfolio in:topics user:mikef80");

  let items = [];

  try {
    fetch(baseURL + queryString)
      .then(response => response.json())
      .then(result => {
        let array = result.items;
        array.forEach(item => {
          // console.log(item);

          let object = {
            name: item.name,
            description: item.description,
            url: item.svn_url
          };

          // console.log(object);
          // items.push(object)
          stuff(object);
        });

        console.log(items);
        // stuff(items);
      })
    
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default ApiCall;
