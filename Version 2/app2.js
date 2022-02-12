const pItems = document.querySelector('portItems');




































// ASYNC AWAIT BOILERPLATE

const getRepos = async () => {
    // const url = 'https://api.github.com/users/mikef80/repos';
    const url = 'https://api.github.com/search/repositories?q=user:mikef80';

    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
            console.log(jsonResponse);
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(error);
    }
}

getRepos();