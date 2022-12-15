const { handleHttpError } = require("../database/utils/handleError");
const { profesSpec_themesAgesModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const data = await profesSpec_themesAgesModel.findAll({});
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await profesSpec_themesAgesModel.findAllData({
      where: {
        profes_profes_id: id,
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
    const data = await profesSpec_themesAgesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const profesSpec_themesAges_id = id;
    const { 
      themes_ages_themes_ages_id,
      activate } = req.body;
    const data = await profesSpec_themesAgesModel.findByPk(profesSpec_themesAges_id);
    data.themes_ages_themes_ages_id = themes_ages_themes_ages_id,
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
    const profesSpec_themesAges_id = id;
    const data = await profesSpec_themesAgesModel.destroy({
      where: {
        profesSpec_themesAges_id,
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
