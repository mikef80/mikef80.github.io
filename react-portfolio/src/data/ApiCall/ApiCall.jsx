const ApiCall = (stuff) => {
  const baseURL = `https://api.github.com/search/repositories?q=`;
  const queryString = encodeURIComponent("portfolio in:topics user:mikef80");

  let items = [];

  // console.log('props:' + setState);

  try {
    fetch(baseURL + queryString)
      .then(response => response.json())
    // .then(result => console.log(result.items[0]))
      .then(result => {
        let array = result.items;
        array.forEach(item => {
          let object = {
            name: item.name,
            url: item.html_url,
            description: item.description
          }
          // console.log(object);
          // stuff(object)
          console.log(object);
          stuff(object)
      })
      })
    
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default ApiCall;
