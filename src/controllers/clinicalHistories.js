const { clinicalHistoriesModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await clinicalHistoriesModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const clinicalHistories_id = id;
    const data = await clinicalHistoriesModel.findOne({
      where: {
        clinicalHistories_id,
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
    const data = await clinicalHistoriesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const clinicalHistories_id = id;
    const { 
      hcp_internal_code,
      patients_has_user_states_patients_patients_id,
      patients_has_user_states_patients_users_users_id,
      patients_has_user_states_user_states_user_states_id,
      activate 
    } = req.body;
    const data = await clinicalHistoriesModel.findByPk(clinicalHistories_id);
    data.hcp_internal_code = hcp_internal_code;
    data.patients_has_user_states_patients_users_users_id = patients_has_user_states_patients_users_users_id;
    data.patients_has_user_states_patients_patients_id = patients_has_user_states_patients_patients_id;
    data.patients_has_user_states_user_states_user_states_id = patients_has_user_states_user_states_user_states_id;
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
    const clinicalHistories_id = id;
    const data = await clinicalHistoriesModel.destroy({
      where: {
        clinicalHistories_id,
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
