const { Configuration, OpenAIApi } = require("openai");
const { __esModule } = require("youtube-captions-scraper");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function get_sum(textScript){
    story = `voici le texte d'une vidéo youtube ci-dessous,
    fais moi un récapitulatif de ce qu'il faut apprendre de cette vidéo`;
    story += ('\n ' + textScript);
    return response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: story,
        max_tokens: 1000,
      });
}

module.exports = get_sum;
