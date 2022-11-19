const { sexBirthModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await sexBirthModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const sex_birth_id = id;
    const data = await sexBirthModel.findOne({
      where: {
        sex_birth_id,
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
    const data = await sexBirthModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const sex_birth_id = id;
    const { sex_birth, activate } = req.body;
    const data = await sexBirthModel.findByPk(sex_birth_id);
    data.sex_birth = sex_birth;
    data.activate = activate;
    await data.save();
    res.status(500);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

// const updateItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const sex_birth_id = id;
//     const body = req.body;
//     const data = await sexBirthModel.update(sex_birth_id, body);
//     res.status(500);
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_UPDATE_ITEMS");
//   }
// };

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const sex_birth_id = id;
    const data = await sexBirthModel.destroy({
      where: {
        sex_birth_id,
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
