const { institutions_profesModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await institutions_profesModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const institutions_profes_id = id;
    const data = await institutions_profesModel.findOne({
      where: {
        institutions_profes_id,
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
    const data = await institutions_profesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const institutions_profes_id = id;
    const { 
      institutions_institutions_id,
      profes_profes_id,
      institutions_user_internal_code,
      institutions_user_email,
      institutions_user_password,
      institutions_user_state,
      institutions_user_mode,
      activate } = req.body;
    const data = await institutions_profesModel.findByPk(institutions_profes_id);
    data.institutions_institutions_id = institutions_institutions_id;
    data.profes_profes_id = profes_profes_id;
    data.institutions_user_internal_code = institutions_user_internal_code;
    data.institutions_user_email = institutions_user_email;
    data.institutions_user_password = institutions_user_password;
    data.institutions_user_state = institutions_user_state;
    data.institutions_user_mode = institutions_user_mode;
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
    const institutions_profes_id = id;
    const data = await institutions_profesModel.destroy({
      where: {
        institutions_profes_id,
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
