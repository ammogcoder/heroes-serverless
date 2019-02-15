// @ts-check

const { getHeroes } = require('../shared/hero.service');

module.exports = async function(context, req, res) {
  context.log(
    'getHeroes: JavaScript HTTP trigger function processed a request.'
  );
  // await getHeroes(context.req, context.res);
  await getHeroes(context);

  // no need for context done when using async/await
};
