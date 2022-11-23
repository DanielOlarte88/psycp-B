const { userStatesModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await userStatesModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user_states_id = id;
    const data = await userStatesModel.findOne({
      where: {
        user_states_id,
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
    const data = await userStatesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user_states_id = id;
    const { 
      user_states, 
      user_states_code, 
      institutions_has_profes_institutions_institutions_id,
      institutions_has_profes_profes_profes_id,
      activate 
    } = req.body;
    const data = await userStatesModel.findByPk(user_states_id);
    data.user_states = user_states;
    data.user_states_code = user_states_code;
    data.institutions_has_profes_institutions_institutions_id = institutions_has_profes_institutions_institutions_id;
    data.institutions_has_profes_profes_profes_id = institutions_has_profes_profes_profes_id;
    data.activate = activate;
    await data.save();
    res.status(500);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user_states_id = id;
    const data = await userStatesModel.destroy({
      where: {
        user_states_id,
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
