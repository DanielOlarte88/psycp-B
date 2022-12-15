const { check } = require("express-validator");
const validateResults = require("../../src/database/utils/handleValidator");

const validatorRegister = [
  check("users_first_name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("users_second_name").exists(),
  check("users_third_name").exists(),
  check("users_first_surname").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("users_second_surname").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("users_identification_num").exists().notEmpty().isNumeric(),
  check("users_cellphone").exists().notEmpty().isNumeric(),
  check("mental_careers_mental_careers_id").exists().isNumeric(),
  check("status_licenses_status_licenses_id").exists().isNumeric(),
  check("users_license_num").exists().notEmpty().isNumeric(),
  check("users_terms").exists().notEmpty().isNumeric(),
  check("users_role").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("activate").exists().notEmpty().isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorRegister, validatorLogin };
