const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../database/utils/handlePassword");
const { tokenSign } = require("../database/utils/handleJwt");
const { handleHttpError } = require("../database/utils/handleError");
const { personsModel } = require("../database/models");

 const registerCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataPerson = await personsModel.create(body);
    dataPerson.set("password", undefined, { strict: false });
  
    const data = {
      token: await tokenSign(dataPerson),
      person: dataPerson,
    };
    res.status(201)
    res.send({ data });
  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_REGISTER_PERSON")
  }
};

const loginCtrl = async (req, res) => {
  try{
    req = matchedData(req);
    const person = await personsModel.findOne({email:req.email})

    if(!person){
      handleHttpError(res, "PERSON_NOT_EXISTS", 404);
      return
    }

    const hashPassword = person.get('password');

    const check = await compare(req.password, hashPassword)

    if(!check){
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return
    }

    person.set('password', undefined, {strict:false})
    const data = {
      token: await tokenSign(person),
      person
    }

    res.send({data})

  }catch(e){
    console.log(e)
    handleHttpError(res, "ERROR_LOGIN_PERSON")
  }
}

module.exports = { registerCtrl, loginCtrl };
