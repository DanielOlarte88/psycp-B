const { personsModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await personsModel.findAll({});
    res.send({ data, user });
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
    const persons_id = id;
    const { 
      persons_surnames_order_reverse,
      persons_birth_date,
      persons_birth_hour,
      persons_birth_iso3366,
      persons_birth_ubigeo,
      persons_residence_iso3366,
      persons_residence_ubigeo,
      users_users_id,
      birth_sexes_birth_sexes_id,
      activate 
    } = req.body;
    const data = await personsModel.findByPk(persons_id);
    data.persons_surnames_order_reverse = persons_surnames_order_reverse;
    data.persons_birth_date = persons_birth_date;
    data.persons_birth_hour = persons_birth_hour;
    data.persons_birth_iso3366 = persons_birth_iso3366;
    data.persons_birth_ubigeo = persons_birth_ubigeo;
    data.persons_residence_iso3366 = persons_residence_iso3366;
    data.persons_residence_ubigeo = persons_residence_ubigeo;
    data.users_users_id = users_users_id;
    data.birth_sexes_birth_sexes_id = birth_sexes_birth_sexes_id;
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
