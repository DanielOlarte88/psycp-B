const { filiationModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await filiationModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

// const getItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const filiation_id = id;
//     const data = await filiationModel.findOne({
//       where: {
//         filiation_id,
//       },
//     });
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_GET_ITEM");
//   }
// };

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const data = await filiationModel.findOneData(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await filiationModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const filiation_id = id;
    const { 
      filiation_iso3366,
      filiation_residence_ubigeo,
      careers_code,
      edu_institution_code,
      occupation_id,
      marital_status_marital_status_id,
      filiation_children_num,
      religion_religion_id,
      institution_hcp_num,
      health_service_code,
      hcp_date,
      institution_referral_code,
      health_service_referral_code,
      socioeconomic_level_description_id,
      anamnesis_anamnesis_id,
      activate
    } = req.body;
    const data = await filiationModel.findByPk(filiation_id);
    data.filiation_iso3366 = filiation_iso3366;
    data.filiation_residence_ubigeo = filiation_residence_ubigeo;
    data.careers_code = careers_code;
    data.edu_institution_code = edu_institution_code;
    data.occupation_id = occupation_id;
    data.marital_status_marital_status_id = marital_status_marital_status_id;
    data.filiation_children_num = filiation_children_num;
    data.religion_religion_id = religion_religion_id;
    data.institution_hcp_num = institution_hcp_num;
    data.health_service_code = health_service_code;
    data.hcp_date = hcp_date;
    data.institution_referral_code = institution_referral_code;
    data.health_service_referral_code = health_service_referral_code;
    data.socioeconomic_level_description_id = socioeconomic_level_description_id;
    data.anamnesis_anamnesis_id = anamnesis_anamnesis_id;
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
    const filiation_id = id;
    const data = await filiationModel.destroy({
      where: {
        filiation_id,
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
