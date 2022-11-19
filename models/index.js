const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
  usersModel: require(`${pathModels}/users`),
  mentalCareersModel: require(`${pathModels}/mentalCareers`),
  statusLicensesModel: require(`${pathModels}/statusLicenses`),
  sexBirthModel: require(`${pathModels}/sexBirth`),
  instructionYearModel: require(`${pathModels}/instructionYear`),
  careersModel: require(`${pathModels}/careers`),
  tracksModel: require(`${pathModels}/tracks`),
  storageModel: require(`${pathModels}/storage`),
};

module.exports = models;
