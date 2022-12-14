const { intervSessionModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await intervSessionModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await intervSessionModel.findAllData(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const interv_session_id = id;
    const data = await intervSessionModel.findOne({
      where: {
        interv_session_id,
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
    const data = await intervSessionModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const interv_session_id = id;
    const { 
      session_num,
      interv_accessibility_interv_accessibility_id,
      interv_eye_contact_interv_eye_contact_id,
      actual_condition_actual_condition_id,
      activate } = req.body;
    const data = await intervSessionModel.findByPk(interv_session_id);
    data.session_num = session_num;
    data.interv_accessibility_interv_accessibility_id = interv_accessibility_interv_accessibility_id;
    data.interv_eye_contact_interv_eye_contact_id = interv_eye_contact_interv_eye_contact_id;
    data.actual_condition_actual_condition_id = actual_condition_actual_condition_id;
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
    const interv_session_id = id;
    const data = await intervSessionModel.destroy({
      where: {
        interv_session_id,
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
