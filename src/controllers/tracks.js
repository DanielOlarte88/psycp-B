const { matchedData } = require("express-validator");
const { tracksModel } = require("../database/models");
const { handleHttpError } = require("../database/utils/handleError");

const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.findAllData({});
    res.send({ data, user });
  } catch (e) {
    console.log(e)
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getItem = async (req, res) => {
  try{
    req = matchedData(req); // Limpia el body, se queda con los datos que si hacen match
    const {id} = req;
    const data = await tracksModel.findOneData(id);
    res.send({ data });
  }catch(e){
    handleHttpError(res,"ERROR_GET_ITEM")
  }
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(
      id, body
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

const deleteItem = async (req, res) => {
  try{
    req = matchedData(req);
    const {id} = req;
    const deleteResponse = await tracksModel.delete({_id:id});
    const data = {
      deleted: deleteResponse.matchedCount
    };
    res.send({data});
  }catch(e){
    console.log(e)
    handleHttpError(res,"ERROR_DELETE_ITEM")
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
