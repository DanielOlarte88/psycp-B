const { physical_sensoryModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await physical_sensoryModel.findAll({});
    res.send({ data});
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await physical_sensoryModel.findAllData(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_cond_id = id;
    const data = await physical_sensoryModel.findOne({
      where: {
        physic_cond_id,
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
    const data = await physical_sensoryModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_cond_id = id;
    const { physic_cond, activate } = req.body;
    const data = await physical_sensoryModel.findByPk(physic_cond_id);
    data.physic_cond = physic_cond;
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
    const physic_cond_id = id;
    const data = await physical_sensoryModel.destroy({
      where: {
        physic_cond_id,
      },
    });
    res.status(204);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItemsById, getItem, createItem, updateItem, deleteItem };
