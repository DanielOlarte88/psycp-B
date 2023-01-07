const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../database/utils/handlePassword");
const { tokenSign } = require("../database/utils/handleJwt");
const { handleHttpError } = require("../database/utils/handleError");
const { usersModel } = require("../database/models");
const { profesModel } = require("../database/models");
const { profesTuitionModel } = require("../database/models");
const { institutions_profesModel } = require("../database/models");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const users_license_num = body.users_license_num;
    const users_first_surname = body.users_first_surname;
    const users_second_surname = body.users_second_surname;
    const users_surnames = users_first_surname.concat(' ', users_second_surname);

    const profesTuition = await profesTuitionModel.findOne({ where: {profes_tuition_code: users_license_num} });
    if (profesTuition === null) {
      handleHttpError(res, "NUM_LICENSES_NOT_EXIST", 404);
      return;
    }

    const profes_tuition_surnames = profesTuition.profes_tuition_surnames;
    if (users_surnames !== profes_tuition_surnames) {
      handleHttpError(res, "SURNAMES_NOT_MATCH", 404);
      return;
    }
    body.users_role = "profes";
    body.activate = 1;
    
    const dataUser = await usersModel.create(body);
    const users_users_id = dataUser.users_id;
    const bodyProfes = { users_users_id };
    const dataProfes = await profesModel.create(bodyProfes);
    dataUser.set("password", undefined, { strict: false });

    const bodyInstProfes = {
      institutions_institutions_id: 1,
      profes_profes_id: dataProfes.profes_id,
      institutions_user_internal_code: 1,
      institutions_user_email: dataUser.email,
      institutions_user_password: password,
      institutions_user_state: 1,
      user_mode_user_mode_id: 1,
      activate: 1
    }
    const dataInstProfes = await institutions_profesModel.create(bodyInstProfes);

    const data = {
      token: await tokenSign(dataUser),
      profes_id: dataProfes.profes_id,
      users_first_name: dataUser.users_first_name,
      institutions_profes_id: dataInstProfes.institutions_has_profes_id,
    };
    res.status(201);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ where: {email: req.email} });
    const dataProfes = await profesModel.findOne({ where: {users_users_id: user.users_id} });
    const dataInstProfes = await institutions_profesModel.findOne({ where: {institutions_user_email: req.email} });

    if (!user) {
      handleHttpError(res, "USER_NOT_EXISTS", 404);
      return;
    }

    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      profes_id: dataProfes.profes_id,
      users_first_name: user.users_first_name,
      institutions_profes_id: dataInstProfes.institutions_has_profes_id,
    };

    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { registerCtrl, loginCtrl };
