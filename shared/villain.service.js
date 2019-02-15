// @ts-check

const { villains: container } = require('./index').containers;

async function getVillains(context) {
  const { req, res } = context;

  try {
    const { result: villains } = await container.items.readAll().toArray();
    res.status(200).json(villains);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVillain(context) {
  const { req, res } = context;

  const villain = {
    name: req.body.name,
    description: req.body.description
  };
  villain.id = `Villain${villain.name}`;

  try {
    const { body } = await container.items.create(villain);
    res.status(201).json(body);
    context.log('Villain created successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVillain(context) {
  const { req, res } = context;

  const villain = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const { body } = await container.items.upsert(villain);
    res.status(200).json(body);
    context.log('Villain updated successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVillain(context) {
  const { req, res } = context;

  const { id } = req.params;

  try {
    const { body } = await container.item(id).delete();
    res.status(200).json(body);
    context.log('Villain deleted successfully!');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getVillains,
  postVillain,
  putVillain,
  deleteVillain
};
