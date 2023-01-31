const get_sum = require('./src/sub-to-sum.js')
const get_sub_str = require('./src/get_sub.js')

get_sub_str('Y6bbMQXQ180').then((videoScript) => {
    get_sum(videoScript).then((res) => {
        console.log(res.data.choices);
    })
})