const { handleHttpError } = require("../database/utils/handleError");
/**
 * Array con los roles permitidos
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    const { person } = req;
    const rolesByPerson = person.persons_role; //TODO ["profes"]  //TODO: ["profes","patient","admin"]
    const checkValueRole = roles.some((roleSingle) =>
      rolesByPerson.includes(roleSingle) //TODO: true, false
    ); 
    if (!checkValueRole) {
      handleHttpError(res, "PERSON_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRole;
