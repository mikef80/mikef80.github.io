const portfolio = document.querySelector('.github');
const click = document.querySelector('#repos');
const issues = document.querySelector('#issues');
const mclick = document.querySelector('#mrepos');
const display = document.querySelector('#display');
const portItems = document.querySelector('.portItems');

const getRepos = async () => {
  const url = 'https://api.github.com/users/mikef80/repos';
  const response = await fetch(url);
  const result = await response.json();
  
  console.log(result);
  

  result.forEach(i => {
    let a = i.name;
    let b = a.substring(0,2);
    let c = a.substring(2,3);
    // console.log(c);
    if (b === 'CA' && c !== '-') {
      insertChild(i);
    }
    
  });
}

const insertChild = async i => {

  let langs = await extractLangs(i.languages_url);
  const div = document.createElement('div');
  div.classList.add('col-3');
  div.innerHTML = `<a href="${i.html_url}">
                      <h4>${i.name}</h4>
                      <p>${i.language}</p>
                      <p>${langs}</p>
                    </a>`;
  
  portItems.appendChild(div);
}

const extractLangs = async url => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}



getRepos();
