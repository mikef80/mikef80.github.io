// ASYNC AWAIT BOILERPLATE

// BUILD LANGUAGES HTML FOR INSERTION INTO buildHTML FUNCTION
const buildLangs = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      const array = Object.entries(jsonResponse);
      let output1 = [];
      let output2 = [];

      let total = 0;

      array.forEach((item) => {
        total += item[1];
      });

      let length = array.length;

      output1.push(`<p>`);
      output2.push(`<p>`);

      array.forEach((item) => {
        const index = array.indexOf(item);
        output1.push(`${item[0]}`);
        output2.push(`${item[0]}: ${Math.round((item[1] / total) * 100)}%`);

        if (index < length - 1) {
          output1.push(` + `);
          output2.push(` | `);
        }
      });
      output1.push(`</p>`);
      output2.push(`</p>`);

      output1 = output1.join("");
      output2 = output2.join("");

      const finalOutput = [output1, output2];

      return finalOutput;
    }
  } catch (error) {
    console.log(error);
  }
};

// BUILD HTML FOR INDIVIDUAL PORTFOLIO CHILDREN
// NEED TO INCLUDE LANGUAGES YET
const buildHTML = async (input) => {
  let output = [];

  let url = input.html_url;
  let name = input.name;
  let langsURL = input.languages_url;
  let options = {
    /* weekday: 'long',  */ year: "numeric",
    month: "long",
    day: "numeric",
  };
  let updated = new Date(input.updated_at).toLocaleString("en-GB", options);
  const div = document.createElement("div");
  /* div.classList.add('g-col-xl-3', 'g-col-md-4', 'g-col-sm-6', 'g-col-xs-9','portItem', 'p-3', 'rounded'); */
  div.classList.add(
    "col-xl-3",
    "col-md-4",
    "col-sm-6",
    "col-xs-9",
    "portItem",
    "p-3",
    "rounded"
  );

  let langs = await buildLangs(langsURL);

  output.push(`<a href="${url}" target="_blank">
                    <h5>${name}</h5>
                    <h6>Last updated: ${updated}</h6>
                    <p>${langs[0]}</p>
                    <p>${langs[1]}</p>           
                </a>`);

  div.innerHTML = output.join("");

  return div;
};

// INSERT CHILD INTO PORTFOLIO
const insertChild = (input) => {
  const portItems = document.querySelector(".portItems");

  input.items.forEach(async (element) => {
    let output = await buildHTML(element);
    portItems.appendChild(output);
  });
};

const getRepos = async () => {
  // const url = 'https://api.github.com/users/mikef80/repos';
  const repoName = "CA-";
  // const url = `https://api.github.com/search/repositories?q=user:mikef80+CA+in:name+sort:updated`;
  const url = `https://api.github.com/search/repositories?q=user:mikef80+sort:updated`;
  /* const url = {
        url: `https://api.github.com/search/repositories?q=user:mikef80+CA+in:name+sort:updated`,
        headers: {
            'User-agent': 'mikef80'
        }
    } */

  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      insertChild(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

getRepos();
