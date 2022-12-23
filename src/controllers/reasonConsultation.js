const { handleHttpError } = require("../database/utils/handleError");
const { reasonConsultationModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await reasonConsultationModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItemsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await reasonConsultationModel.findAllData(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const reason_consultation_id = id;
    const data = await reasonConsultationModel.findOne({
      where: {
        reason_consultation_id,
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
    const data = await reasonConsultationModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const reason_consultation_id = id;
    const { reason_consultation, activate } = req.body;
    const data = await reasonConsultationModel.findByPk(reason_consultation_id);
    data.reason_consultation = reason_consultation;
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
    const reason_consultation_id = id;
    const data = await reasonConsultationModel.destroy({
      where: {
        reason_consultation_id,
      },
    });
    res.status(204);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItemsById, getItem, createItem, updateItem, deleteItem };
