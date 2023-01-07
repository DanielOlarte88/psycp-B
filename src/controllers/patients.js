const { handleHttpError } = require("../database/utils/handleError");
// const { usersModel } = require("../database/models");
const { patientsModel } = require("../database/models");
const moment = require('moment')
let { AgeFromDateString } = require('age-calculator');

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
    var date = data.users_birth_date
    var EditedDob = moment(date, "YYYY-MM-DD").format('DD-MM-YYYY')
    var age = new AgeFromDateString(EditedDob).age;
    data.users_age = `${age} años`
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
    const patients_id = id;
    const { 
      patients_internal_code, 
      users_users_id,
      activate } = req.body;
    const data = await patientsModel.findByPk(patients_id);
    data.patients_internal_code = patients_internal_code;
    data.users_users_id = users_users_id;
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
