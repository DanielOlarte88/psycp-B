const { personsModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await personsModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const persons_id = id;
    const data = await personsModel.findOne({
      where: {
        persons_id,
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
    const data = await personsModel.create(body);
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
      persons_first_name,
      persons_second_name,
      persons_third_name,
      persons_first_surname,
      persons_second_surname,
      persons_identification_num,
      persons_cellphone,
      persons_license_num,
      persons_terms,
      email,
      password,
      persons_role,
      mental_careers_mental_careers_id,
      status_licenses_status_licenses_id,
      activate 
    } = req.body;
    const data = await personsModel.findByPk(user_id);
    data.persons_first_name = persons_first_name;
    data.persons_second_name = persons_second_name;
    data.persons_third_name = persons_third_name;
    data.persons_first_surname = persons_first_surname;
    data.persons_second_surname = persons_second_surname;
    data.persons_identification_num = persons_identification_num;
    data.persons_cellphone = persons_cellphone;
    data.persons_license_num = persons_license_num;
    data.persons_terms = persons_terms;
    data.email = email;
    data.password = password;
    data.persons_role = persons_role;
    data.mental_careers_mental_careers_id = mental_careers_mental_careers_id;
    data.status_licenses_status_licenses_id = status_licenses_status_licenses_id;
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
    const persons_id = id;
    const data = await personsModel.destroy({
      where: {
        persons_id,
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
