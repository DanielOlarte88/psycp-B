const { handleHttpError } = require("../database/utils/handleError");
const { profesStudiesModel } = require("../database/models");

const getItems = async (req, res) => {
  try {
    const data = await profesStudiesModel.findAll({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await profesStudiesModel.findAllData({
      where: {
        profes_profes_id: id,
      }
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await profesStudiesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const profes_studies_id = id;
    const { 
      profes_studies_careers_code,
      profes_studies_edu_institution_code,
      profes_studies_instruction_level_code,
      profes_studies_with_mention,
      profes_studies_instruction_year_code,
      profes_studies_studies_area_code,
      profes_profes_id,
      activate } = req.body;
    const data = await profesStudiesModel.findByPk(profes_studies_id);
    data.profes_studies_careers_code = profes_studies_careers_code;
    data.profes_studies_edu_institution_code = profes_studies_edu_institution_code;
    data.profes_studies_instruction_level_code = profes_studies_instruction_level_code;
    data.profes_studies_with_mention = profes_studies_with_mention;
    data.profes_studies_instruction_year_code = profes_studies_instruction_year_code;
    data.profes_studies_studies_area_code = profes_studies_studies_area_code;
    data.profes_profes_id = profes_profes_id;
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
    const profes_studies_id = id;
    const data = await profesStudiesModel.destroy({
      where: {
        profes_studies_id,
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
