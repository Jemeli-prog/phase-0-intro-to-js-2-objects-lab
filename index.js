// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: 123,
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newData= {...employee};
 
    newData[key] = value;

    return newData;

}
newEmployee = updateEmployeeWithKeyAndValue(
    newEmployee,
    "streetAddress",
    "11 Broadway"
)


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;

}
function deleteFromEmployeeByKey(employee, key){
 const newEmployee= {...employee};
 delete newEmployee[key];
 return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key ){
    delete employee[key];
    return employee;

}
