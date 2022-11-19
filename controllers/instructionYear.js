const { instructionYearModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await instructionYearModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const instruction_year_id = id;
    const data = await instructionYearModel.findOne({
      where: {
        instruction_year_id,
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
    const data = await instructionYearModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const instruction_year_id = id;
    const { instruction_year, activate } = req.body;
    const data = await instructionYearModel.findByPk(instruction_year_id);
    data.instruction_year = instruction_year;
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
//     const instruction_year_id = id;
//     const body = req.body;
//     const data = await instructionYearModel.update(instruction_year_id, body);
//     res.status(500);
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_UPDATE_ITEMS");
//   }
// };

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const instruction_year_id = id;
    const data = await instructionYearModel.destroy({
      where: {
        instruction_year_id,
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
