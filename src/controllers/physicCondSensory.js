const { physicCondSensoryModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await physicCondSensoryModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_cond_sensory_id = id;
    const data = await physicCondSensoryModel.findAll({
      where: {
        physic_cond_sensory_id,
      },
      include: [{
        model: models.careers,
        as: 'careers_id',
        where: {
          careers,
        }
      }]
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await physicCondSensoryModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_cond_sensory_id = id;
    const { 
      physic_cond_sensory,
      activate } = req.body;
    const data = await physicCondSensoryModel.findByPk(physic_cond_sensory_id);
    data.physic_cond_sensory = physic_cond_sensory;
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
    const physic_cond_sensory_id = id;
    const data = await physicCondSensoryModel.destroy({
      where: {
        physic_cond_sensory_id,
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
