const { physicCond_LateralityModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await physicCond_LateralityModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physicCond_Laterality_id = id;
    const data = await physicCond_LateralityModel.findOne({
      where: {
        physicCond_Laterality_id,
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
    const data = await physicCond_LateralityModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physicCond_Laterality_id = id;
    const { 
      patients_patients_id,
      patients_users_users_id,
      user_states_user_states_id,
      activate } = req.body;
    const data = await physicCond_LateralityModel.findByPk(physicCond_Laterality_id);
    data.patients_patients_id = patients_patients_id,
    data.patients_users_users_id = patients_users_users_id,
    data.user_states_user_states_id = user_states_user_states_id,
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
    const physicCond_Laterality_id = id;
    const data = await physicCond_LateralityModel.destroy({
      where: {
        physicCond_Laterality_id,
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
