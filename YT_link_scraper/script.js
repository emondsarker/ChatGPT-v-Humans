// import { youtube } from 'scrape-youtube';
youtube = require("scrape-youtube")
// const { youtube } = require('scrape-youtube');

youtube.search('The Economist', {type: 'video'}).then((results) => {
    // Unless you specify a custom type you will only receive 'video' results
    // console.log(results.videos);
    for(i=0;i<results.videos.length;i++){
        console.log(results.videos[i].title)
        // console.log(results.videos[i].link)
    }
    for(i=0;i<results.videos.length;i++){
        // console.log(results.videos[i].title)
        console.log(results.videos[i].link)
    }
});