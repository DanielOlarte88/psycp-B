const { usersModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const users = req.users;
    const data = await usersModel.findAll({});
    res.send({ data, users });
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
    const data = await usersModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = id;
    const { 
      users_identification_num,
      users_first_name,
      users_second_name,
      users_third_name,
      users_first_surname,
      users_second_surname,
      users_cellphone,
      users_license_num,
      users_terms,
      users_internal_code,
      email,
      password,
      mental_careers_mental_careers_id,
      status_licenses_status_licenses_id,
      users_role,
      activate 
    } = req.body;
    const data = await usersModel.findByPk(user_id);
    data.users_identification_num = users_identification_num;
    data.users_first_name = users_first_name;
    data.users_second_name = users_second_name;
    data.users_third_name = users_third_name;
    data.users_first_surname = users_first_surname;
    data.users_second_surname = users_second_surname;
    data.users_cellphone = users_cellphone;
    data.users_license_num = users_license_num;
    data.users_terms = users_terms;
    data.users_internal_code = users_internal_code;
    data.email = email;
    data.password = password;
    data.mental_careers_mental_careers_id = mental_careers_mental_careers_id;
    data.status_licenses_status_licenses_id = status_licenses_status_licenses_id;
    data.users_role = users_role;
    data.activate = activate;
    await data.save();
    res.status(500);
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
