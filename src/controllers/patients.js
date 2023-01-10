const { handleHttpError } = require("../database/utils/handleError");
const moment = require('moment')
let { AgeFromDateString } = require('age-calculator');
const { patientsModel } = require("../database/models");
const { usersModel } = require("../database/models");
const { clinicalHistoriesModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await patientsModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patientsModel.findOneData(id);

    data.users_birth_ubigeo === null 
      ? data.users_birth_department = null 
      : data.users_birth_department = data.users_birth_ubigeo.substr(0, 2); 
    data.users_birth_ubigeo === null 
      ? data.users_birth_province = null 
      : data.users_birth_province = data.users_birth_ubigeo.substr(0, 4); 
    data.users_birth_ubigeo === null 
      ? data.users_birth_district = null 
      : data.users_birth_district = data.users_birth_ubigeo.substr(0, 6); 

    var birthDate = data.users_birth_date;
    var a = moment();
    var b = moment(birthDate);
    var years = a.diff(b, 'year');
    b.add(years, 'years');
    var months = a.diff(b, 'months');
    b.add(months, 'months');
    var days = a.diff(b, 'days');
    const age = `${years}a  ${months}m  ${days}d`
    data.users_age = age

    console.log(data)
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

// const getItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const patients_id = id;
//     const data = await patientsModel.findOne({
//       where: {
//         patients_id,
//       },
//     });
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_GET_ITEM");
//   }
// };

const createItem = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await patientsModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      users_first_surname,
      users_second_surname,
      users_first_name,
      users_second_name,
      users_third_name,
      birth_sexes_birth_sexes_id,
      users_birth_date,
      users_birth_hour,
      users_birth_iso3366,
      users_birth_ubigeo
    } = req.body;
    console.log(req.body)
    const dataPatients = await patientsModel.findByPk(id);
    const users_id = dataPatients.users_users_id
    const data = await usersModel.findByPk(users_id);
    data.users_first_surname = users_first_surname;
    data.users_second_surname = users_second_surname;
    data.users_first_name = users_first_name;
    data.users_second_name = users_second_name;
    data.users_third_name = users_third_name;
    data.birth_sexes_birth_sexes_id = birth_sexes_birth_sexes_id;
    data.users_birth_date = users_birth_date;
    data.users_birth_hour = users_birth_hour;
    data.users_birth_iso3366 = users_birth_iso3366;
    data.users_birth_ubigeo = users_birth_ubigeo;
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
    const patients_id = id;
    const data = await patientsModel.destroy({
      where: {
        patients_id,
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
