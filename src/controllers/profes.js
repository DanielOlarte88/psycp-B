const { profesModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await profesModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

// const getItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await profesModel.findOneData(id);
//     res.send({ data });
//   } catch (e) {
//     handleHttpError(res, "ERROR_GET_ITEM");
//   }
// };

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await profesModel.findOneData(id);
    const profes = data.dataValues;
    const users_first_name = profes.users_first_name;
    const users_second_name = profes.users_second_name;
    const users_third_name = profes.users_third_name;

    if (users_third_name !== null) {
      var users_names = users_first_name.concat(' ', users_second_name, ' ', users_third_name).toUpperCase()
    } else if (users_second_name !== null) {
      var users_names = users_first_name.concat(' ', users_second_name).toUpperCase()
    } else {
      var users_names = users_first_name.toUpperCase()
    };
    profes.users_names = users_names;
    profes.profes_internal_code = `NPro-00${data.profes_id}`;

    const filteredKeys1 = [
            'profes_internal_code',
            'users_first_surname',
            "users_second_surname",
            'users_names',
            "mental_careers_mental_careers_id",
            "status_licenses_status_licenses_id",
            'users_license_num',
          ];
    const group1 = filteredKeys1.reduce((obj, key) => ({ ...obj, [key]: profes[key] }), {});

    const filteredKeys2 = [
          'birth_sexes_birth_sexes_id',
          'users_birth_date',
          'users_birth_hour',
          'users_residence_iso3366',
          "users_residence_department",
          "users_residence_province",
          "users_residence_district",
          'users_residence_ubigeo',
        ];
    const group2 = filteredKeys2.reduce((obj, key) => ({ ...obj, [key]: profes[key] }), {});
    const modelForm = { group1, group2 };

    data.dataValues = modelForm;
    data.dataValues.users_id = profes.users_id;
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await profesModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const profes_id = id;
    const { 
      profes_internal_code,
      profes_residence_ubigeo,
      users_users_id,
      activate 
    } = req.body;
    const data = await profesModel.findByPk(profes_id);
    data.profes_internal_code = profes_internal_code;
    data.profes_residence_ubigeo = profes_residence_ubigeo;
    data.users_userss_id = users_users_id;
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
    const profes_id = id;
    const data = await profesModel.destroy({
      where: {
        profes_id,
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
