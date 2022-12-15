const { physicalConditionModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await physicalConditionModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physical_condition_id = id;
    const data = await physicalConditionModel.findOne({
      where: {
        physical_condition_id,
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
    const data = await physicalConditionModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physical_condition_id = id;
    const { 
      glasses,
      hearing_aids,
      physic_cond_none,
      physical_condition_physical_condition_id,
      activate } = req.body;
    const data = await physicalConditionModel.findByPk(physical_condition_id);
    data.glasses = glasses;
    data.hearing_aids = hearing_aids;
    data.physic_cond_none = physic_cond_none;
    data.physical_condition_physical_condition_id = physical_condition_physical_condition_id;
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
    const physical_condition_id = id;
    const data = await physicalConditionModel.destroy({
      where: {
        physical_condition_id,
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
