const getEmployee = "SELECT * FROM employee ";
const getEmployeeById = "SELECT * FROM employee WHERE id = $1";

module.exports = {
    getEmployee,
    getEmployeeById,
};
