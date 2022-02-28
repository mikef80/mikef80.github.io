const portItems = document.querySelector('.portItems');

const getRepos = async () => {
  const url = 'https://api.github.com/users/mikef80/repos';
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);

  result.sort((a,b) => {
    let timeA = Date.parse(a.updated_at);
    let timeB = Date.parse(b.updated_at);
    return timeB < timeA;
  });

  result.forEach(i => {
    // console.log(i.name);
    let a = i.name;
    let b = a.substring(0,2);
    let c = a.substring(2,3);
    
    if (b === 'CA' && c !== '-') {
      // console.log(i.name);
      insertChild(i);
      // console.log(i.name); 
    }
  });

}

const insertChild = async i => {
  console.log('CHECK ZERO: ' + i.name); //CHECK ZERO - PROBLEM BETWEEN HERE AND CHECK ZERO.1
  let langs = await extractLangs(i.languages_url);
  console.log('CHECK ZERO.1: ' + i.name); //CHECK ZERO.1 - PROBLEM BETWEEN HERE AND CHECK ZERO
  console.log(langs);
  let langsTotal = 0;
  langs.forEach (lang => {
    
    langsTotal += lang[1];
  })

  let url = i.html_url;
  let name = i.name;
  let options = { /* weekday: 'long',  */year: 'numeric', month: 'long', day: 'numeric' };
  let updated = new Date(i.updated_at).toLocaleString('en-GB',options);

  let n = 0;
  let output = [];
  const div = document.createElement('div');
  div.classList.add('col-xl-3', 'col-md-4', 'col-sm-6', 'col-xs-9','portItem', 'p-3', 'rounded');
  output.push(`<a href="${url}" target="_blank">
                <h5>${name}</h5>
                <h6>Last updated: ${updated}</h6>
                <p>`)
  // console.log('CHECK ONE: ' + output); //CHECK ONE
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
  // console.log('CHECK TWO: ' + div.innerHTML); //CHECK TWO
  portItems.appendChild(div);
}

const extractLangs = async url => {
  
  const response = await fetch(url);
  const result = await response.json();
  
  return Object.entries(result);
}

getRepos();