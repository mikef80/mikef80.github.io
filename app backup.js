const portfolio = document.querySelector('.github');
const click = document.querySelector('#repos');
const issues = document.querySelector('#issues');
const mclick = document.querySelector('#mrepos');
const display = document.querySelector('#display');
const portItems = document.querySelector('.portItems');

const getRepos = async () => {
  // clear();
  const url = 'https://api.github.com/users/mikef80/repos';
  const response = await fetch(url);
  const result = await response.json();
  // display.innerHTML = 'repos';
  
  console.log(result);
  result.forEach(i => {


    const div = document.createElement('div');
    div.classList.add('col-3');
    div.innerHTML = `<a href="${i.html_url}">
                       <h4>${i.name}</h4>
                       <p>${i.language}</p>
                     </a>`;
    
    portItems.appendChild(div);  
    
  });
}

/* const getRepos = async () => {
  clear();
  const url = 'https://api.github.com/search/repositories?q=stars:>200000';
  const response = await fetch(url);
  const result = await response.json();
  display.innerHTML = 'repos';
  console.log(result);
  result.items.forEach(i => {


    const anchor = document.createElement('a');
    anchor.href = i.html_url;
    anchor.textContent = i.full_name;
    portfolio.appendChild(anchor);
    portfolio.appendChild(document.createElement('br'));

    
  });
} */

/* const getMrepos = async () => {
  clear();
  const url = 'https://api.github.com/users/mikef80/repos';
  // const url = 'https://api.github.com/search/repositories?q=owner[login]:mikef80';
  // const url = 'https://api.github.com/search/repositories?q=name:';
  console.log(url);
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);
  display.innerHTML = 'Mrepos';
  result.forEach(i => {

    console.log(i);
    const anchor = document.createElement('a');
    anchor.href = i.html_url;
    anchor.textContent = i.name;
    portfolio.appendChild(anchor);
    portfolio.appendChild(document.createElement('br'));
   

    
  });
} */

/* const getIssues = async () => {
  clear();
  const url = 'https://api.github.com/search/issues?q=author:mikef80 type:issue';
  const response = await fetch(url);
  const result = await response.json();
  display.innerHTML = 'issues';
  result.items.forEach(i => {


    const anchor = document.createElement('a');
    anchor.href = i.html_url;
    anchor.textContent = i.title;
    portfolio.appendChild(anchor);
    portfolio.appendChild(document.createElement('br'));

    
  });
} */




const clear = () => {
  while(portfolio.firstChild) {
    portfolio.removeChild(portfolio.firstChild);
  }
}

getRepos();
// click.addEventListener('click', getRepos)
// mclick.addEventListener('click', getMrepos)
// issues.addEventListener('click', getIssues)