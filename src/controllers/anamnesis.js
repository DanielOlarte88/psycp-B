const { handleHttpError } = require("../database/utils/handleError");
const moment = require('moment')
let { AgeFromDateString } = require('age-calculator');
const { anamnesisModel } = require("../database/models");
const { clinicalHistoriesModel } = require("../database/models");
const { professional_patientsModel } = require("../database/models");
const { patientsModel } = require("../database/models");
const { usersModel } = require("../database/models");
const { birthSexesModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await anamnesisModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const dataHCP = await clinicalHistoriesModel.findOne({ where: {clinicalHistories_id: id} });
    const dataProfesPatients = await professional_patientsModel.findOne({ where: {professional_has_patients_id: dataHCP.professional_has_patients_professional_has_patients_id} });
    const dataPatients = await patientsModel.findOne({ where: {patients_id: dataProfesPatients.patients_patients_id} });
    const dataUsers = await usersModel.findOne({ where: {users_id: dataPatients.users_users_id} });
    const users_fullname = dataUsers.users_first_surname.concat(' ', 
                            dataUsers.users_second_surname, ' ', 
                            dataUsers.users_first_name, ' ', 
                            dataUsers.users_second_name,  ' ', 
                            dataUsers.users_third_name)
    const dataSexes = await birthSexesModel.findOne({ where: {birth_sexes_id: dataUsers.birth_sexes_birth_sexes_id} });

    // calcula la edad actual del Paciente
    var birthDate = dataUsers.users_birth_date;
    var a = moment();
    var b = moment(birthDate);
    var years = a.diff(b, 'year');
    b.add(years, 'years');
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    var days = a.diff(b, 'days');
    const ageUser = `${years}a  ${months}m  ${days}d`

    // calcula la edad cuando se creó la HCP
    var createdHCP = dataHCP.createdAt;
    var a = moment();
    var b = moment(createdHCP);
    var years = a.diff(b, 'year');
    b.add(years, 'years');
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    var days = a.diff(b, 'days');
    const ageHCP = `${years}a  ${months}m  ${days}d`

    const group1 = {
      patients_id: dataPatients.patients_id,
      clinicalHistories_id: dataHCP.clinicalHistories_id,
    }

    const group2 = {
      users_fullname: users_fullname,
      users_birth_sex: dataSexes.birth_sexes,
      users_birth_date: dataUsers.users_birth_date,
      users_age: ageUser,
      users_ageHCP: ageHCP,
    }
    
    const data = { group1, group2 };
    console.log(data)
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await anamnesisModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const anamnesis_id = id;
    const { 
      clinicalHistories_clinicalHistories_id,
      activate
    } = req.body;
    const data = await anamnesisModel.findByPk(anamnesis_id);
    data.clinicalHistories_clinicalHistories_id = clinicalHistories_clinicalHistories_id;
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
    const anamnesis_id = id;
    const data = await anamnesisModel.destroy({
      where: {
        anamnesis_id,
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
