const { physicPsychomotDisplacementModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await physicPsychomotDisplacementModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_psychomot_displacement_id = id;
    const data = await physicPsychomotDisplacementModel.findOne({
      where: {
        physic_psychomot_displacement_id,
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
    const data = await physicPsychomotDisplacementModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const physic_psychomot_displacement_id = id;
    const { physic_psychomot_displacement, activate } = req.body;
    const data = await physicPsychomotDisplacementModel.findByPk(physic_psychomot_displacement_id);
    data.physic_psychomot_displacement = physic_psychomot_displacement;
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
    const physic_psychomot_displacement_id = id;
    const data = await physicPsychomotDisplacementModel.destroy({
      where: {
        physic_psychomot_displacement_id,
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
