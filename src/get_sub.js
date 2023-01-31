var getSubtitles = require('youtube-captions-scraper').getSubtitles;

function get_sub(videoId, lang){
    return getSubtitles({
        videoID: videoId,
        lang: lang
    });
}

function get_sub_str(videoID){
    return new Promise((resolve, reject) => {
        end_str = ""
        get_sub(videoID, 'en').then((res)=>{
        for (var line of res){
            end_str += line.text;
        }
        resolve(end_str);
    })
    })
    
}

module.exports = get_sub_str;
