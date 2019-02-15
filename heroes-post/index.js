// @ts-check

const { postHero } = require('../shared/hero.service');

module.exports = async function(context, req, res) {
  context.log(
    'postHero: JavaScript HTTP trigger function processed a request.'
  );
  await postHero(context);
};
