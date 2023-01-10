const { handleHttpError } = require("../database/utils/handleError");
const { profesModel } = require("../database/models");
const { usersModel } = require("../database/models");

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

    profes.profes_internal_code = `NPro - ${data.profes_id}`;

    profes.users_residence_ubigeo === null 
      ? profes.users_residence_department = null 
      : profes.users_residence_department = profes.users_residence_ubigeo.substr(0, 2); 
    profes.users_residence_ubigeo === null 
      ? profes.users_residence_province = null 
      : profes.users_residence_province = profes.users_residence_ubigeo.substr(0, 4); 
    profes.users_residence_ubigeo === null 
      ? profes.users_residence_district = null 
      : profes.users_residence_district = profes.users_residence_ubigeo.substr(0, 6); 

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
        ];
    const group2 = filteredKeys2.reduce((obj, key) => ({ ...obj, [key]: profes[key] }), {});
    const modelForm = { group1, group2 };

    data.dataValues = modelForm;
    data.dataValues.users_id = profes.users_id;
    console.log(data)
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
    const { 
      users_birth_date,
      users_birth_hour,
      users_residence_iso3366,
      users_residence_department,
      users_residence_province,
      users_residence_district,
      users_residence_ubigeo,
      birth_sexes_birth_sexes_id,
    } = req.body;
    const dataProfes = await profesModel.findByPk(id);
    const users_id = dataProfes.users_users_id
    const data = await usersModel.findByPk(users_id);
    data.users_birth_date = users_birth_date;
    data.users_birth_hour = users_birth_hour;
    data.users_residence_iso3366 = users_residence_iso3366;
    data.users_residence_department = users_residence_department;
    data.users_residence_province = users_residence_province;
    data.users_residence_district = users_residence_district;
    data.users_residence_ubigeo = users_residence_ubigeo;
    data.birth_sexes_birth_sexes_id = birth_sexes_birth_sexes_id;
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
