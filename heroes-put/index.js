// @ts-check

const { putHero } = require('../shared/hero.service');

module.exports = async function(context, req, res) {
  context.log('putHero: JavaScript HTTP trigger function processed a request.');
  await putHero(context);
};
