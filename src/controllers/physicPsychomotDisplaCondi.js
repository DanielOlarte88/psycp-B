const { physicPsychomotDisplaCondiModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await physicPsychomotDisplaCondiModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_psychomot_displa_condi_id = id;
    const data = await physicPsychomotDisplaCondiModel.findOne({
      where: {
        physic_psychomot_displa_condi_id,
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
    const data = await physicPsychomotDisplaCondiModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_psychomot_displa_condi_id = id;
    const { displacement_condition, activate } = req.body;
    const data = await physicPsychomotDisplaCondiModel.findByPk(physic_psychomot_displa_condi_id);
    data.displacement_condition = displacement_condition;
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
    const physic_psychomot_displa_condi_id = id;
    const data = await physicPsychomotDisplaCondiModel.destroy({
      where: {
        physic_psychomot_displa_condi_id,
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
