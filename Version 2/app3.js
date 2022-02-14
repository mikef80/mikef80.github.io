// ASYNC AWAIT BOILERPLATE

// BUILD LANGUAGES HTML FOR INSERTION INTO buildHTML FUNCTION
const buildLangs = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            let output = [];
            
            const array = Object.entries(jsonResponse);
            output.push(`<p>${array}</p>`)
            console.log(output.join(''));
            return output.join('');

        }
    } catch (error) {
        console.log(error);
    }
}

// BUILD HTML FOR INDIVIDUAL PORTFOLIO CHILDREN
// NEED TO INCLUDE LANGUAGES YET
const buildHTML = async (input) => {
    let output = [];
    console.log(input);
    
    let url = input.html_url;
    let name = input.name;
    let langsURL = input.languages_url;
    let options = { /* weekday: 'long',  */year: 'numeric', month: 'long', day: 'numeric' };
    let updated = new Date(input.updated_at).toLocaleString('en-GB',options);
    const div = document.createElement('div');
    div.classList.add('col-xl-3', 'col-md-4', 'col-sm-6', 'col-xs-9','portItem', 'p-3', 'rounded');

    let langs = await buildLangs(langsURL);
    
    // let breakdown = langsBreakdown();

    output.push(`<a href="${url}" target="_blank">
                    <h4>${name}</h4>
                    <h6>Last updated: ${updated}</h6>
                    <p>${langs}</p>
                    
                </a>`);

    div.innerHTML = output.join('');
    // console.log(div);

    return div;
}

// INSERT CHILD INTO PORTFOLIO
const insertChild = (input) => {
    const portItems = document.querySelector('.portItems');

    input.items.forEach(async element => {
        let output = await buildHTML(element);
        // console.log(output);
        portItems.appendChild(output);
    });
}

const getRepos = async () => {
    // const url = 'https://api.github.com/users/mikef80/repos';
    const repoName = 'CA-';
    const url = `https://api.github.com/search/repositories?q=user:mikef80+CAR+in:name+sort:updated`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
            // console.log(jsonResponse); //USE TO CHECK RAW JSON RESPONSE

            insertChild(jsonResponse);

        }
    } catch (error) {
        console.log(error);
    }
}

getRepos();