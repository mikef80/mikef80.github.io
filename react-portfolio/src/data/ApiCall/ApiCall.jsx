const ApiCall = async () => {
  const baseURL = `https://api.github.com/search/repositories?q=`;
  const queryString = encodeURIComponent("portfolio in:topics user:mikef80");

  let items = [];

  try {
    const firstAPICall = await fetch(baseURL + queryString);
    const json = await firstAPICall.json();

    json.items.forEach(async element => {
      console.log(element);
      const secondAPICall = await fetch(element.languages_url);
      const detail = await secondAPICall.json();
      console.log(detail);

      let output = {
        name: element.name,
      };

      items.push({name:'test'});
    });

    console.log(items);
    return items;
      
    
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export default ApiCall;
