const portfolio = document.querySelector('.github');
const click = document.querySelector('#test');

const getRepos = async () => {
  const url = 'https://api.github.com/search/repositories?q=stars:>200000';
  const response = await fetch(url);
  const result = await response.json();

  result.items.forEach(i => {


    const anchor = document.createElement('a');
    anchor.href = i.html_url;
    anchor.textContent = i.full_name;
    portfolio.appendChild(anchor);
    portfolio.appendChild(document.createElement('br'));

    
  });
}

const clear = () => {
  while(portfolio.firstChild) {
    portfolio.removeChild(portfolio.firstChild);
  }
}

click.addEventListener('click', () => {
  clear();
  getRepos();
})