const get_sum = require('./src/sub-to-sum.js')
const get_sub_str = require('./src/get_sub.js')
/*
get_sum("j'ai marché hier sur des escargots").then((response) => {
    console.log(response.data.choices[0])
})
*/

get_sub_str('vVGoHyE5S3M').then((videoScript) => {
    get_sum(videoScript).then((res) => {
        console.log(res);
    })
})
