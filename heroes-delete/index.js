// @ts-check

const { deleteHero } = require('../shared/hero.service');

module.exports = async function (context, req, res) {
    context.log('deleteHero: JavaScript HTTP trigger function processed a request.');
    await deleteHero(context);
};
