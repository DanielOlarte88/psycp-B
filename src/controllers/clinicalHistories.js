const { handleHttpError } = require("../database/utils/handleError");
const moment = require('moment')
let { AgeFromDateString } = require('age-calculator');
const { clinicalHistoriesModel } = require("../database/models");
const { professional_patientsModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await clinicalHistoriesModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await clinicalHistoriesModel.findAllData(id);
    // var createdAtHCP = data[0].createdAt;
    // var birthDateHCP = data[0].users_birth_date;

    // var dateHCP = moment(birthDateHCP, "YYYY-MM-DD").format('YYYY-MM-DD')
    // var ageHCP = new AgeFromDateString(dateHCP).age;
    // console.log(ageHCP)

    // data.dateHCP = `${dateHCP} años`
    // data.ageHCP = `${ageHCP}`
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
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
    const dataProfesPatients = await professional_patientsModel.findOne({ 
      where: {
        institutions_has_profes_institutions_has_profes_id: body.instProfes_id, 
        patients_patients_id: body.patients_id
      } 
    });

    const bodyclinicalHistories = {
      professional_has_patients_professional_has_patients_id: dataProfesPatients.professional_has_patients_id,
      hcp_internal_code: "",
      activate: 1
    }

    const data = await clinicalHistoriesModel.create(bodyclinicalHistories);
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
