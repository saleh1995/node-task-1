// Initial Data Structure
let employees = [
  { id: 1, name: "Alice Chen", department: "Engineering", salary: 80000, performanceRating: 4, yearsAtCompany: 3 },
  { id: 2, name: "Bob Smith", department: "Sales", salary: 60000, performanceRating: 3, yearsAtCompany: 2 },
  { id: 3, name: "Carol Davis", department: "Engineering", salary: 90000, performanceRating: 5, yearsAtCompany: 5 },
  { id: 4, name: "David Wilson", department: "Marketing", salary: 55000, performanceRating: 2, yearsAtCompany: 1 },
  { id: 5, name: "Eva Brown", department: "HR", salary: 50000, performanceRating: 4, yearsAtCompany: 4 }
];

// --- Functions to Implement ---

// a) addEmployee
function addEmployee(id, name, department, salary, performanceRating, yearsAtCompany) {
  const exists = employees.some(emp => emp.id === id);
  if (exists) {
    return `Error: Employee with ID ${id} already exists.`;
  }
  
  const newEmployee = { id, name, department, salary, performanceRating, yearsAtCompany };
  employees.push(newEmployee);
  return newEmployee;
}

// b) findEmployeesByDepartment
function findEmployeesByDepartment(departmentName) {
  return employees.filter(emp => emp.department === departmentName);
}

// c) calculateTotalSalary
function calculateTotalSalary() {
  return employees.reduce((total, emp) => total + emp.salary, 0);
}

// d) calculateDepartmentSalary
function calculateDepartmentSalary(departmentName) {
  return employees
    .filter(emp => emp.department === departmentName)
    .reduce((total, emp) => total + emp.salary, 0);
}

// e) giveBonus
function giveBonus(minRating, bonusPercentage) {
  employees = employees.map(emp => {
    if (emp.performanceRating >= minRating) {
      return {
        ...emp,
        salary: emp.salary + (emp.salary * (bonusPercentage / 100))
      };
    }
    return emp;
  });

  return employees
    .filter(emp => emp.performanceRating >= minRating)
    .map(emp => ({ id: emp.id, name: emp.name, newSalary: emp.salary }));
}

// f) getExperiencedEmployees
function getExperiencedEmployees(minYears) {
  return employees.filter(emp => emp.yearsAtCompany >= minYears);
}

// g) updateEmployee
function updateEmployee(id, updates) {
  employees = employees.map(emp => {
    if (emp.id === id) {
      return { ...emp, ...updates };
    }
    return emp;
  });
  return employees;
}

// --- Display Functions ---

// a) displayAllEmployees
function displayAllEmployees() {
  console.log("=== All Employees ===");
  employees.forEach(emp => {
    console.log(
      `ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.department} | Salary: $${emp.salary} | Rating: ${emp.performanceRating} | Years: ${emp.yearsAtCompany}`
    );
  });
}

// b) displayEmployeeSummary
function displayEmployeeSummary() {
  const totalEmployees = employees.length;
  
  const deptCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});

  const averageSalary = totalEmployees > 0 ? calculateTotalSalary() / totalEmployees : 0;

  console.log("=== Employee Summary ===");
  console.log(`Total Employees: ${totalEmployees}`);
  console.log("Employees by Department:", deptCounts);
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
}

// ==========================================
// --- TESTS FOR EVERY FUNCTION ---
// ==========================================

console.log("------------------------------------------");
console.log("TEST 1: addEmployee()");
console.log("------------------------------------------");
// Add valid employee
console.log("Adding ID 6:", addEmployee(6, "Frank Green", "Sales", 65000, 4, 2));
// Attempt adding duplicate ID
console.log("Adding duplicate ID 1:", addEmployee(1, "Clone Alice", "HR", 50000, 1, 1));

console.log("\n------------------------------------------");
console.log("TEST 2: findEmployeesByDepartment()");
console.log("------------------------------------------");
console.log("Engineering Dept:", findEmployeesByDepartment("Engineering"));
console.log("Finance Dept (Non-existent):", findEmployeesByDepartment("Finance"));

console.log("\n------------------------------------------");
console.log("TEST 3: calculateTotalSalary()");
console.log("------------------------------------------");
console.log("Total Salary of all employees: $" + calculateTotalSalary());

console.log("\n------------------------------------------");
console.log("TEST 4: calculateDepartmentSalary()");
console.log("------------------------------------------");
console.log("Total Salary for Engineering: $" + calculateDepartmentSalary("Engineering"));
console.log("Total Salary for Non-existent Dept: $" + calculateDepartmentSalary("Legal"));

console.log("\n------------------------------------------");
console.log("TEST 5: giveBonus()");
console.log("------------------------------------------");
console.log("Giving 10% bonus to ratings >= 4:");
console.log(giveBonus(4, 10));

console.log("\n------------------------------------------");
console.log("TEST 6: getExperiencedEmployees()");
console.log("------------------------------------------");
console.log("Employees with 3+ years experience:", getExperiencedEmployees(3));

console.log("\n------------------------------------------");
console.log("TEST 7: updateEmployee()");
console.log("------------------------------------------");
console.log("Updating ID 2's department to 'Marketing' and performance rating to 4:");
updateEmployee(2, { department: "Marketing", performanceRating: 4 });
console.log("Updated ID 2 details:", employees.find(emp => emp.id === 2));

console.log("\n------------------------------------------");
console.log("TEST 8: displayAllEmployees()");
console.log("------------------------------------------");
displayAllEmployees();

console.log("\n------------------------------------------");
console.log("TEST 9: displayEmployeeSummary()");
console.log("------------------------------------------");
displayEmployeeSummary();