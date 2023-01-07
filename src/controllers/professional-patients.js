const { handleHttpError } = require("../database/utils/handleError");
const { usersModel } = require("../database/models");
const { patientsModel } = require("../database/models");
const { institutions_profesModel } = require("../database/models");
const { professional_patientsModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await professional_patientsModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await professional_patientsModel.findAllData(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

// const getItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const professional_patients_id = id;
//     const data = await professional_patientsModel.findOne({
//       where: {
//         professional_patients_id,
//       },
//     });
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_GET_ITEM");
//   }
// };

const createItem = async (req, res) => {
  try {
    // const activate = 1;
    // activate = 1; condicionar activate a "0" si es que el user, patient o profesPatient esta desactivado
    const body = req.body;
    body.users_license_num = 88886;
    body.users_terms = 0;
    body.email = "anonimo88886@gmail.com";
    body.password = "88886";
    body.users_role = "patient";
    body.users_cellphone = "88886";
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
    
    const bodyPatient = { 
      users_users_id: dataUser.users_id, 
      patients_internal_code: "",
      activate: 1,
    };
    const dataPatient = await patientsModel.create(bodyPatient);
    // // const dataPatient = await patientsModel.create(bodyPatient);
    // // const patients_id = dataPatient.dataValues.patients_id;
    // // const patients_code = `NPat-00${patients_id}`;
    // // const data = await patientsModel.findByPk(patients_id);
    // // data.dataValues.patients_internal_code = patients_code;
    // // console.log(data)
    // // await data.save();

    const dataInstitutionsProfes = await institutions_profesModel.findOne({ where: {profes_profes_id: body.profes_id} });

    const bodyProfesPatient = { 
      institutions_has_profes_institutions_has_profes_id: dataInstitutionsProfes.institutions_has_profes_id,
      patients_patients_id: dataPatient.patients_id,
      professional_has_patients_state: 1,
      activate: 1
    };
    const data = await professional_patientsModel.create(bodyProfesPatient);
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
    const professional_patients_id = id;
    const { 
      patients_patients_id,
      patients_users_users_id,
      user_states_user_states_id,
      activate } = req.body;
    const data = await professional_patientsModel.findByPk(professional_patients_id);
    data.patients_patients_id = patients_patients_id,
    data.patients_users_users_id = patients_users_users_id,
    data.user_states_user_states_id = user_states_user_states_id,
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
    const professional_patients_id = id;
    const data = await professional_patientsModel.destroy({
      where: {
        professional_patients_id,
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
