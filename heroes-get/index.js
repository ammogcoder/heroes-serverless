// @ts-check

const { getHeroes } = require('../shared/hero.service');

// TODO: use req and res, instead of context.req and context.res

module.exports = async function(context, req, res) {
  context.log(
    'getHeroes: JavaScript HTTP trigger function processed a request.'
  );
  await getHeroes(context, req, res);
};
