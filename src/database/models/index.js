
const models = {
  personsModel: require(`../../database/models/persons`),
    mentalCareersModel: require(`../../database/models/mentalCareers`),
    statusLicensesModel: require(`../../database/models/statusLicenses`),
  usersModel: require(`../../database/models/users`),
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
  institutionsModel: require(`../../database/models/institutions`),
    healthServicesModel: require(`../../database/models/healthServices`),
    institutions_healthServicesModel: require(`../../database/models/institutions-healthServices`),
    institutions_profesModel: require(`../../database/models/institutions-profes`),
  profesModel: require(`../../database/models/profes`),
    profesStudiesModel: require(`../../database/models/profesStudies`),
    themesModel: require(`../../database/models/themes`),
    themesGroupsModel: require(`../../database/models/themesGroups`),
    themesAgesModel: require(`../../database/models/themesAges`),
    themes_themesAges: require(`../../database/models/themes-themesAges`),
    profes_themes_themesAgesModel: require(`../../database/models/profes-themes-themesAges`),
  patientsModel: require(`../../database/models/patients`),
    userStatesModel: require(`../../database/models/userStates`),
    patients_userStatesModel: require(`../../database/models/patients-userStates`),

  clinicalHistoriesModel: require(`../../database/models/clinicalHistories`),

    reasonConsultationModel: require(`../../database/models/reasonConsultation`),
    
    filiationModel: require(`../../database/models/filiation`),
      occupationModel: require(`../../database/models/occupation`),
      maritalStatusModel: require(`../../database/models/maritalStatus`),
      religionModel: require(`../../database/models/religion`),
      filiationInformantModel: require(`../../database/models/filiationInformant`),
    
    actualConditionModel: require(`../../database/models/actualCondition`),
      
    intervSessionModel: require(`../../database/models/intervSession`),
      intervSession_intervAttitudeModel: require(`../../database/models/intervSession-intervAttitude`),
      intervAccessibilityModel: require(`../../database/models/intervAccessibility`),
      intervAttitudeModel: require(`../../database/models/intervAttitude`),
      intervEyeContactModel: require(`../../database/models/intervEyeContact`),

    physicalAspectModel: require(`../../database/models/physicalAspect`),
      physicalConditionModel: require(`../../database/models/physicalCondition`),
      physicCleanlinessModel: require(`../../database/models/physicCleanliness`),
      physicComplexionModel: require(`../../database/models/physicComplexion`),
      physicVestmentModel: require(`../../database/models/physicVestment`),
      physicVestmentColorModel: require(`../../database/models/physicVestmentColor`),

      physicCondModel: require(`../../database/models/physicCond`),
      
    
    
    
    

  



  tracksModel: require(`../../database/models/tracks`),
  storageModel: require(`../../database/models/storage`),
};

module.exports = models;
