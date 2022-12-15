const { intervAttitudeModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await intervAttitudeModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const interv_attitude_id = id;
    const data = await intervAttitudeModel.findOne({
      where: {
        interv_attitude_id,
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
    const data = await intervAttitudeModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const interv_attitude_id = id;
    const { attitude, activate } = req.body;
    const data = await intervAttitudeModel.findByPk(interv_attitude_id);
    data.attitude = attitude;
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
    const interv_attitude_id = id;
    const data = await intervAttitudeModel.destroy({
      where: {
        interv_attitude_id,
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
