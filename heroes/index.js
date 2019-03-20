// @ts-check

const {
  getHeroes,
  getHeroById,
  putHero,
  deleteHero,
  postHero
} = require('../shared/hero.service');

module.exports = async function(context, req) {
  switch (context.req.method) {
    case 'GET':
      if (context.req.params['id']) {
        const id = context.req.params['id'];
        await getHeroById(context, id);
      } else {
        await getHeroes(context);
      }
      break;
    case 'DELETE':
      await deleteHero(context);
      break;
    case 'PUT':
      await putHero(context);
      break;
    case 'POST':
      await postHero(context);
      break;

    default:
      // TODO: error out
      break;
  }
};
