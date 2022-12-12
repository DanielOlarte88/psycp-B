
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
    studiesAreaModel: require(`../../database/models/studiesArea`),
  institutionsModel: require(`../../database/models/institutions`),
    healthServicesModel: require(`../../database/models/healthServices`),
    institutions_healthServicesModel: require(`../../database/models/institutions-healthServices`),
    institutions_profesModel: require(`../../database/models/institutions-profes`),
  profesModel: require(`../../database/models/profes`),
    profesStudiesModel: require(`../../database/models/profesStudies`),
    themesModel: require(`../../database/models/themes`),
    themesGroupsModel: require(`../../database/models/themesGroups`),
    themesAgesModel: require(`../../database/models/themesAges`),
    profes_themesAgesModel: require(`./profes-themesAges`),
    intensityModel: require(`./intensity`),
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
      bondModel: require(`../../database/models/bond`),
    
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
      physicCondBodyModel: require(`../../database/models/physicCondBody`),
      physicCond_Body_LateralityModel: require(`../../database/models/physicCond-Body-Laterality`),
      body_lateralityModel: require(`../../database/models/body-laterality`),
      bodyModel: require(`../../database/models/body`),
      physicCondSensoryModel: require(`../../database/models/physicCondSensory`),
      physicCond_Sensory_LateralyModel: require(`../../database/models/physicCond-Sensory-Lateraly`),
      sensory_lateralityModel: require(`../../database/models/sensory-laterality`),
      sensoryModel: require(`../../database/models/sensory`),
      lateralityModel: require(`../../database/models/laterality`),

      physicalPsychomotricityModel: require(`../../database/models/physicalPsychomotricity`),
      physicPsychomotBodyPositionModel: require(`../../database/models/physicPsychomotBodyPosition`),
      physicPsychomotForwardBackModel: require(`../../database/models/physicPsychomotForwardBack`),
      physicPsychomotRightLeftModel: require(`../../database/models/physicPsychomotRightLeft`),
      physicPsychomotDisplaCondiModel: require(`../../database/models/physicPsychomotDisplaCondi`),
      physicPsychomotDisplacementModel: require(`../../database/models/physicPsychomotDisplacement`),
      physicPsychomotMuscleCondiModel: require(`../../database/models/physicPsychomotMuscleCondi`),
      physicPsychomotMuscleToneModel: require(`../../database/models/physicPsychomotMuscleTone`),
      physicPsychomotMotorSkillsModel: require(`../../database/models/physicPsychomotMotorSkills`),
      physicPsychomotKinetCondiModel: require(`../../database/models/physicPsychomotKinetCondi`),
      physicPsychomotKinetHarmo_physicPsychomotKinetCondiModel: require(`../../database/models/physicPsychomotKinetHarmo-physicPsychomotKinetCondi`),
      physicPsychomotKinetHarmoModel: require(`../../database/models/physicPsychomotKinetHarmo`),
      physicPsychomotSkillsTypeModel: require(`../../database/models/physicPsychomotSkillsType`),
      levelDescriptionModel: require(`../../database/models/levelDescription`),

      
      
    
    
  
};

module.exports = models;














// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);

// // Configuración
// const config = require('../../config/database');

// // Declaración de objeto DB
// const db = {};

// // Inicializar la conexión
// const sequelize = new Sequelize(
//   config.database,
//   config.username,config.password,
//   config);


// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = sequelize['import'](path.join(__dirname, file));
    
//     // Cada modelo que hay en el directorio lo vinculamos a nuestro objeto DB
//     db[model.name] = model;
//   });

// // Realizar las asociaciones de los modelos
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


