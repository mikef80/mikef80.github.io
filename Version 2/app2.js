const body = document.querySelector('.github');
const myRequest = 'https://api.github.com/users/mikef80/repos';
const langTest = 'https://api.github.com/repos/mikef80/TechncialTest/languages';
const langTestURL = 'https://api.github.com/repos/mikef80/';
const langTestSuffix = '/languages';

const test = async () => {
  await fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      const name = Object.entries(json);
      // console.log(name);
      name.forEach(item => {
        console.log(item);
      })
      
    }) 
      
}

test();

