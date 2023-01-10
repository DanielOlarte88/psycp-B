const { handleHttpError } = require("../database/utils/handleError");
const { anamnesisModel } = require("../database/models");
const { clinicalHistoriesModel } = require("../database/models");
const { professional_patientsModel } = require("../database/models");
const { patientsModel } = require("../database/models");
const { usersModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await clinicalHistoriesModel.findAll({});
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await clinicalHistoriesModel.findAllData(id);
    console.log(data);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await clinicalHistoriesModel.findOne(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const dataProfesPatients = await professional_patientsModel.findOne({ 
      where: {
        institutions_has_profes_institutions_has_profes_id: body.instProfes_id, 
        patients_patients_id: body.patients_id
      } 
    });

    const bodyClinicalHistories = {
      professional_has_patients_professional_has_patients_id: dataProfesPatients.professional_has_patients_id,
      activate: 1
    }
    const dataClinicalHistories = await clinicalHistoriesModel.create(bodyClinicalHistories);

    const bodyAnamnesis = {
      clinicalHistories_clinicalHistories_id: dataClinicalHistories.clinicalHistories_id,
      activate: 1
    }
    const data = await anamnesisModel.create(bodyAnamnesis);
    
    console.log(data)
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

module.exports = { getItems, getItemsById, getItem, createItem, updateItem, deleteItem };
