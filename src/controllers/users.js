const { handleHttpError } = require("../database/utils/handleError");
const { usersModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const data = await usersModel.findAllData({});
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
    const users_id = id;
    const { 
      users_surnames_order_reverse,
      users_birth_date,
      users_birth_hour,
      users_birth_iso3366,
      users_birth_ubigeo,
      users_residence_iso3366,
      users_residence_department,
      users_residence_province,
      users_residence_district,
      users_residence_ubigeo,
      birth_sexes_birth_sexes_id,
      persons_persons_id,
      activate 
    } = req.body;
    const data = await usersModel.findByPk(users_id);
    data.users_surnames_order_reverse = users_surnames_order_reverse;
    data.users_birth_date = users_birth_date;
    data.users_birth_hour = users_birth_hour;
    data.users_birth_iso3366 = users_birth_iso3366;
    data.users_birth_ubigeo = users_birth_ubigeo;
    data.users_residence_iso3366 = users_residence_iso3366;
    data.users_residence_department = users_residence_department;
    data.users_residence_province = users_residence_province;
    data.users_residence_district = users_residence_district;
    data.users_residence_ubigeo = users_residence_ubigeo;
    data.birth_sexes_birth_sexes_id = birth_sexes_birth_sexes_id;
    data.persons_persons_id = persons_persons_id;
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
