const { handleHttpError } = require("../database/utils/handleError");
/**
 * Array con los roles permitidos
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.users_role; //TODO ["profess"]  //TODO: ["profess","patient","admin"]
    const checkValueRole = roles.some((roleSingle) =>
      rolesByUser.includes(roleSingle) //TODO: true, false
    ); 
    if (!checkValueRole) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }
    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403);
  }
};

module.exports = checkRole;
