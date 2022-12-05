const { lateralityModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person 
    const data = await lateralityModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const laterality_id = id;
    const data = await lateralityModel.findOne({
      where: {
        laterality_id,
      },
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const laterality = req.laterality;
    const data = await lateralityModel.create(laterality);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const laterality_id = id;
    const { laterality, laterality_area, activate } = req.laterality;
    const data = await lateralityModel.findByPk(laterality_id);
    data.laterality = laterality;
    data.laterality_area = laterality_area;
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
    const laterality_id = id;
    const data = await lateralityModel.destroy({
      where: {
        laterality_id,
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
