// ASYNC AWAIT BOILERPLATE

const insertChild = (input) => {
    input.items.forEach(element => {
        console.log(element.name);
        
    });
    
}

const getRepos = async () => {
    // const url = 'https://api.github.com/users/mikef80/repos';
    const repoName = 'CA-';
    const url = `https://api.github.com/search/repositories?q=user:mikef80+CA+in:name+sort:updated`;

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