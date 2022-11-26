import React from 'react';

const APICall2 = async () => {
    const baseURL = `https://api.github.com/search/repositories?q=`;
    const queryString = encodeURIComponent("portfolio in:topics user:mikef80 colourdle in:name");

    try {
        const firstAPICall = await fetch(baseURL + queryString);
        let json = await firstAPICall.json();
        let items = await json.items;

        // console.log(items[0].languages_url);

        const secondAPICall = await fetch(items[0].languages_url);
        let json2 = await secondAPICall.json();

        console.log(items);
        console.log(json2);

    } catch (error) {
        console.log(`error: ${error}`);
    }
};

export default APICall2;