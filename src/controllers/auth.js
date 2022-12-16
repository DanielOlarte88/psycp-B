const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../database/utils/handlePassword");
const { tokenSign } = require("../database/utils/handleJwt");
const { handleHttpError } = require("../database/utils/handleError");
const { usersModel } = require("../database/models");
const { profesModel } = require("../database/models");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    
    const users_users_id = dataUser.users_id
    const bodyProfes = { users_users_id };
    const dataProfes = await profesModel.create(bodyProfes);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      profes_id: dataProfes.profes_id,
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
    };

    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { registerCtrl, loginCtrl };
