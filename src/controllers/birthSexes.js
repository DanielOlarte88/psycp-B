const { birthSexesModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await birthSexesModel.findAll({
      // attributes: ['birth_sexes'],
      // include: {
      //   association: 'user',
      //   attributes: ['birth_sexes_birth_sexes_id']
      // }
    });
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const birth_sexes_id = id;
    const data = await birthSexesModel.findOne({
      where: {
        birth_sexes_id,
      },
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await birthSexesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const birth_sexes_id = id;
    const { birth_sexes, activate } = req.body;
    const data = await birthSexesModel.findByPk(birth_sexes_id);
    data.birth_sexes = birth_sexes;
    data.activate = activate;
    await data.save();
    res.status(200);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const birth_sexes_id = id;
    const data = await birthSexesModel.destroy({
      where: {
        birth_sexes_id,
      },
    });
    res.status(204);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
