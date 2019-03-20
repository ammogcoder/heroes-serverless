// @ts-check

const { heroes: container } = require('./index').containers;

async function getHeroes(context) {
  let { req, res } = context;
  try {
    const { result: heroes } = await container.items.readAll().toArray();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getHeroById(context, id) {
  let { req, res } = context;
  try {
    //TODO: refactor to get 1
    const { result: heroes } = await container.items.readAll().toArray();
    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postHero(context) {
  const { req, res } = context;
  const hero = {
    name: req.body.name,
    description: req.body.description
  };
  hero.id = `Hero${hero.name}`;

  try {
    const { body } = await container.items.create(hero);
    res.status(201).json(body);
    context.log('Hero created successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putHero(context) {
  const { req, res } = context;
  const hero = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const { body } = await container.items.upsert(hero);
    res.status(200).json(body);
    context.log('Hero updated successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteHero(context) {
  const { req, res } = context;
  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
    context.log('Hero deleted successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getHeroes,
  getHeroById,
  postHero,
  putHero,
  deleteHero
};
