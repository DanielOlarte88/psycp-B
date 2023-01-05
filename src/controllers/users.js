const { handleHttpError } = require("../database/utils/handleError");
const { matchedData } = require("express-validator");
const { usersModel } = require("../database/models");
const { patientsModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const data = await usersModel.findAll({});
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const users_id = id;
    const data = await usersModel.findOne({
      where: {
        users_id,
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
    body.users_license_num = 77991;
    body.users_terms = 0;
    body.email = "anonimo77991@gmail.com";
    body.password = "77991";
    body.users_role = "patient";
    body.users_cellphone = "77991";
    body.mental_careers_mental_careers_id = 1;
    body.status_licenses_status_licenses_id = 1;
    body.users_surnames_order_reverse = null;
    body.users_birth_iso3366 = null;
    body.users_birth_ubigeo = null;
    body.users_residence_iso3366 = null;
    body.users_residence_department = null;
    body.users_residence_province = null;
    body.users_residence_district = null;
    body.users_residence_ubigeo = null;
    body.activate = 1;
    const dataUser = await usersModel.create(body);
    
    const users_users_id = dataUser.users_id;
    const activate = dataUser.activate;
    const patients_internal_code = "";
    const bodyPatient = { users_users_id, activate, patients_internal_code };
    const data = await patientsModel.create(bodyPatient);
    // const dataPatient = await patientsModel.create(bodyPatient);
    // const patients_id = dataPatient.dataValues.patients_id;
    // const patients_code = `NPat-00${patients_id}`;
    // const data = await patientsModel.findByPk(patients_id);
    // data.dataValues.patients_internal_code = patients_code;
    // console.log(data)
    // await data.save();
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const users_id = id;
    const { 
      users_surnames_order_reverse,
      users_birth_date,
      users_birth_hour,
      users_residence_iso3366,
      users_residence_department,
      users_residence_province,
      users_residence_district,
      users_residence_ubigeo,
      birth_sexes_birth_sexes_id,
      activate 
    } = req.body;
    const data = await usersModel.findByPk(users_id);
    data.users_birth_date = users_birth_date;
    data.users_birth_hour = users_birth_hour;
    data.users_residence_iso3366 = users_residence_iso3366;
    data.users_residence_department = users_residence_department;
    data.users_residence_province = users_residence_province;
    data.users_residence_district = users_residence_district;
    data.users_residence_ubigeo = users_residence_ubigeo;
    data.birth_sexes_birth_sexes_id = birth_sexes_birth_sexes_id;
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
    const users_id = id;
    const data = await usersModel.destroy({
      where: {
        users_id,
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
