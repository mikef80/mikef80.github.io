const body = document.querySelector('.github');
const myRequest = 'https://api.github.com/users/mikef80/repos';
const langTest = 'https://api.github.com/repos/mikef80/TechncialTest/languages';
const langTestURL = 'https://api.github.com/repos/mikef80/';
const langTestSuffix = '/languages';

body.innerHTML = 'Hello, World!';

const test = async () => {
  await fetch(myRequest)
    .then(response => response.json())
    .then(json => console.log(json))
    /* .then(array => {
      array.forEach(element => {
          // console.log(element);
          let name = element.name.slice(0,2);
          // console.log(name)
          if (name === 'CA') {
            console.log(element.name);
          }
      });
    }) */
    
}


// LANGUAGE BREAKDOWN PER REPO
const lang = async () => {
  await fetch(langTest)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let sum = 0;
      let cssTot = json.CSS;
      let htmlTot = json.HTML;
      let jsTot = json.JavaScript;

      sum = cssTot + htmlTot + jsTot;

      console.log(sum);

      cssTot = cssTot / sum;
      htmlTot = htmlTot / sum;
      jsTot = jsTot / sum;

      console.log(cssTot);
      console.log(htmlTot);
      console.log(jsTot);
      console.log(jsTot + cssTot + htmlTot);


    })    
}



// LANGUAGE BREAKDOWN PER REPO TEST
const lang2 = async () => {
  await fetch(langTest)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let sum = 0;
      let cssTot = json.CSS;
      let htmlTot = json.HTML;
      let jsTot = json.JavaScript;

      sum = cssTot + htmlTot + jsTot;

      console.log(sum);

      cssTot = cssTot / sum;
      htmlTot = htmlTot / sum;
      jsTot = jsTot / sum;

      console.log(cssTot);
      console.log(htmlTot);
      console.log(jsTot);
      console.log(jsTot + cssTot + htmlTot);


    })    
}




test();
// lang();
