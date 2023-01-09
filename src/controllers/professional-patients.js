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
    const dataUser = await usersModel.findOne({ where: {users_identification_num: body.users_identification_num} });
    console.log(dataUser)

    if (!dataUser) {
      console.log(body)
      try {
        body.users_license_num = 66693;
        body.users_terms = 0;
        body.email = "anonimo66693@gmail.com";
        body.password = "66693";
        body.users_role = "patient";
        body.users_cellphone = "66693";
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
        const dataUserNew = await usersModel.create(body);
        
        const bodyPatientNew = { 
          users_users_id: dataUserNew.users_id, 
          patients_internal_code: "",
          activate: 1,
        };
        console.log(bodyPatientNew)
        const dataPatientNew = await patientsModel.create(bodyPatientNew);
        // // const dataPatient = await patientsModel.create(bodyPatient);
        // // const patients_id = dataPatient.dataValues.patients_id;
        // // const patients_code = `NPat-00${patients_id}`;
        // // const data = await patientsModel.findByPk(patients_id);
        // // data.dataValues.patients_internal_code = patients_code;
        // // console.log(data)
        // // await data.save();
        console.log(dataPatientNew)

        const instProfesIdNew = parseInt(body.instProfesId, 10)
        console.log(instProfesIdNew)

        const bodyProfesPatientNew = { 
          institutions_has_profes_institutions_has_profes_id: instProfesIdNew,
          patients_patients_id: dataPatientNew.patients_id,
          professional_has_patients_state: 1,
          activate: 1
        };
        console.log(bodyProfesPatientNew)

        const data = await professional_patientsModel.create(bodyProfesPatientNew);
        console.log(data)
        res.status(201);
        res.send({ data });
        return;
      } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
      }
    }

    if (dataUser.users_identification_num === body.users_identification_num) {
      try {
        const dataPatient = await patientsModel.findOne({ where: {users_users_id: dataUser.users_id} });
        const instProfesId = parseInt(body.instProfesId, 10);
        const dataProfesPatients = await professional_patientsModel.findOne({ 
          where: {
            patients_patients_id: dataPatient.patients_id,
            institutions_has_profes_institutions_has_profes_id: instProfesId
          } 
        });
        console.log(dataPatient.patients_id)
        console.log(instProfesId)
        console.log(dataProfesPatients)
        
        if (!dataProfesPatients) {
          try{
            const bodyProfesPatient = { 
              institutions_has_profes_institutions_has_profes_id: instProfesId,
              patients_patients_id: dataPatient.patients_id,
              professional_has_patients_state: 1,
              activate: 1
            };
    
            const data = await professional_patientsModel.create(bodyProfesPatient);
            res.status(201);
            res.send({ data });
            return;
          } catch (e) {
            handleHttpError(res, "ERROR_CREATE_ITEMS");
          }
        }
        
        if (dataProfesPatients.institutions_has_profes_institutions_has_profes_id === instProfesId) {
          handleHttpError(res, "NUM_DNI_ALREADY_EXIST", 404);
          return;
        }
      } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
      }
    }
    // } else {
    //   console.log(body)
    //   try {
    //     body.users_license_num = 666;
    //     body.users_terms = 0;
    //     body.email = "anonimo666@gmail.com";
    //     body.password = "666";
    //     body.users_role = "patient";
    //     body.users_cellphone = "666";
    //     body.mental_careers_mental_careers_id = 1;
    //     body.status_licenses_status_licenses_id = 1;
    //     body.users_surnames_order_reverse = null;
    //     body.users_birth_iso3366 = null;
    //     body.users_birth_ubigeo = null;
    //     body.users_residence_iso3366 = null;
    //     body.users_residence_department = null;
    //     body.users_residence_province = null;
    //     body.users_residence_district = null;
    //     body.users_residence_ubigeo = null;
    //     body.activate = 1;
    //     console.log(body)
    //     const dataUserNew = await usersModel.create(body);
    //     console.log(dataUserNew)
        
    //     const bodyPatientNew = { 
    //       users_users_id: dataUserNew.users_id, 
    //       patients_internal_code: "",
    //       activate: 1,
    //     };
    //     console.log(bodyPatientNew)
    //     const dataPatientNew = await patientsModel.create(bodyPatientNew);
    //     // // const dataPatient = await patientsModel.create(bodyPatient);
    //     // // const patients_id = dataPatient.dataValues.patients_id;
    //     // // const patients_code = `NPat-00${patients_id}`;
    //     // // const data = await patientsModel.findByPk(patients_id);
    //     // // data.dataValues.patients_internal_code = patients_code;
    //     // // console.log(data)
    //     // // await data.save();

    //     const instProfesIdNew = parseInt(body.instProfesIdNew, 10)

    //     const bodyProfesPatientNew = { 
    //       institutions_has_profes_institutions_has_profes_id: instProfesIdNew,
    //       patients_patients_id: dataPatient.patients_id,
    //       professional_has_patients_state: 1,
    //       activate: 1
    //     };
    //     const data = await professional_patientsModel.create(bodyProfesPatientNew);
    //     res.status(201);
    //     res.send({ data });
    //     return;
    //   } catch (e) {
    //     handleHttpError(res, "ERROR_CREATE_ITEMS");
    //   }
    // }
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
