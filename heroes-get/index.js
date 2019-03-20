// @ts-check

const { getHeroes } = require('../shared/hero.service');

// TODO: use req and res, instead of context.req and context.res
// Why? because it matches node express more and I want to try it :)
module.exports = async function(context, req, res) {
  context.log(
    'getHeroes: JavaScript HTTP trigger function processed a request.'
  );

  // Alternatively I could have passed in the req and res
  // await getHeroes(context.req, context.res);
  // But decided to pass context so I can use context.log, too
  await getHeroes(context);
};
