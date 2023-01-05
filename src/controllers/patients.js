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
      // users_first_name: body.users_first_name,
      // users_second_name: body.users_second_name,
      // users_third_name: body.users_third_name,
      // users_first_surname: body.users_first_surname,
      // users_second_surname: body.users_second_surname,
      // users_identification_num: body.users_identification_num,
      // users_birth_date: body.users_birth_date,
      // users_birth_hour: body.users_birth_hour,
      // birth_sexes_birth_sexes_id: body.birth_sexes_birth_sexes_id,
			// activate: 1,
      // users_cellphone: "0",
			// users_license_num: 0,
			// users_terms: false,
			// email: "a@a.com",
			// password: "0",
			// users_role: "patient",
			// mental_careers_mental_careers_id: null,
			// status_licenses_status_licenses_id: null,
			// users_surnames_order_reverse: null,
			// users_birth_iso3366: null,
			// users_birth_ubigeo: null,
			// users_residence_iso3366: "",
		  // users_residence_department: "",
			// users_residence_province: "",
			// users_residence_district: "",
			// users_residence_ubigeo: "",
    // });

    // const dataPatients = await patientsModel.create({
    //   patients_internal_code: body.patients_internal_code,
    //   users_users_id: body.users_users_id,
    //   activate: body.activate
    // });

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
