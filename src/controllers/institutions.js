const { institutionsModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const person = req.person;
    const data = await institutionsModel.findAll({});
    res.send({ data, person });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const institutions_id = id;
    const data = await institutionsModel.findOne({
      where: {
        institutions_id,
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
    const data = await institutionsModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const institutions_id = id;
    const { 
      institutions_order, 
      institutions, 
      institutions_type, 
      institutions_sector, 
      institutions_ubigeo, 
      activate 
    } = req.body;
    const data = await institutionsModel.findByPk(institutions_id);
    data.institutions_order = institutions_order;
    data.institutions = institutions;
    data.institutions_type = institutions_type;
    data.institutions_sector = institutions_sector;
    data.institutions_ubigeo = institutions_ubigeo;
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
    const institutions_id = id;
    const data = await institutionsModel.destroy({
      where: {
        institutions_id,
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
