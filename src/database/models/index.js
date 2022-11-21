const models = {
  usersModel: require(`../../database/models/users`),
    mentalCareersModel: require(`../../database/models/mentalCareers`),
    statusLicensesModel: require(`../../database/models/statusLicenses`),
  personsModel: require(`../../database/models/persons`),
    birthSexesModel: require(`../../database/models/birthSexes`),
    iso3366n1Model: require(`../../database/models/iso3366n1`),
    iso3366n2Model: require(`../../database/models/iso3366n2`),
    departmentsModel: require(`../../database/models/departments`),
    provincesModel: require(`../../database/models/provinces`),
    districtsModel: require(`../../database/models/districts`),
    instructionYearsModel: require(`../../database/models/instructionYears`),
    instructionLevelsModel: require(`../../database/models/instructionLevels`),
    eduInstitutionsModel: require(`../../database/models/eduInstitutions`),
    careersModel: require(`../../database/models/careers`),
  patientsModel: require(`../../database/models/patients`),

  
  tracksModel: require(`../../database/models/tracks`),
  storageModel: require(`../../database/models/storage`),
};

module.exports = models;
