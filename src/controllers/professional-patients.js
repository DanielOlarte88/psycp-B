const { professional_patientsModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

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
    const data = await professional_patientsModel.findAllData({
    });
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
    const body = req.body;
    const data = await professional_patientsModel.create(body);
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
