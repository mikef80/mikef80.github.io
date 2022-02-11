const portItems = document.querySelector('.portItems');

const getRepos = async () => {
  const url = 'https://api.github.com/users/mikef80/repos';
  const response = await fetch(url);
  const result = await response.json();

  const sorted = result.sort((a,b) => {
    let timeA = Date.parse(a.updated_at);
    let timeB = Date.parse(b.updated_at);
    return timeB - timeA;
  });

  // console.log(sorted);

  sorted.forEach(i => {
    let a = i.name;
    let b = a.substring(0,2);
    let c = a.substring(2,4);
    
    // if (b === 'CA') {
      insertChild(i);
    // }
  });
}

const insertChild = async i => {

  let langs = await extractLangs(i.languages_url);
  
  let langsTotal = 0;
  langs.forEach (lang => {
    langsTotal += lang[1];
  })

  let n = 0;
  let output = [];
  const div = document.createElement('div');
  div.classList.add('col-4', 'portItem', 'p-3', 'rounded');
  output.push(`<a href="${i.html_url}" target="_blank">
                <h4>${i.name}</h4>
                <h6>Last updated: ${i.lastupdated}</h6>
                <p>`)
  
  langs.forEach(lang => {
    output.push(`${lang[0]}`)

    if (n !== langs.length - 1) {
      output.push(` + `);
    }
    n++;
  })

  output.push(`</p><p>`);

  n = 0;
  langs.forEach(lang => {
    output.push(`${lang[0]}: ${Math.round((lang[1] / langsTotal) * 100)}%`)
    
    if (n !== langs.length - 1) {
      output.push(` | `);
    }
    n++
  })

  output.push(`</p></a>`);

  div.innerHTML = output.join('');
  portItems.appendChild(div);
}

const extractLangs = async url => {
  
  const response = await fetch(url);
  const result = await response.json();
  
  return Object.entries(result);
}

getRepos();