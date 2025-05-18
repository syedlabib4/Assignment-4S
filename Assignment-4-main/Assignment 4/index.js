//word questions
//Question 1

function processenrollment(enrollment, coursestartdate) {
    return enrollment.map(enroll => {
        const capitalize = str =>
            str.split(' ').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

        let fee = 0;
        switch (capitalize(enroll.course)) {
            case 'Web Development':
                fee = 200;
                break;
            case 'Data Science':
                fee = 250;
                break;
            case 'Graphic Design':
                fee = 150;
                break;
        }

        const enrolldate = new Date(enroll.enrollmentdate);
        const startdate = new Date(coursestartdate);
        const daysbefore = (startdate - enrolldate) / (1000 * 60 * 60 * 24);

        if (daysbefore > 30) {
            fee = fee * 0.1;
        }

        const today = new Date();
        const durationdays = (today - enrolldate) / (1000 * 60 * 60 * 24);

        return {
            name: capitalize(enroll.name),
            course: capitalize(enroll.course),
            fee: `$${fee.toFixed(2)}`,
            enrolledDaysAgo: Math.floor(durationdays)
        };
    });
}

const enrollments = [
    { name: "john doe", course: "web development", enrollmentdate: "2025-04-10" },
    { name: "jane smith", course: "data science", enrollmentdate: "2025-05-10" },
];

const courseStartDate = "2025-06-15";

console.log(processenrollment(enrollments, courseStartDate));



// Question 2
function processPayroll(employees) {
  const payroll = employees.map(e => {
    const name = e.employeeName.trim().toUpperCase();
    const baseRate = e.baseSalary / 40;
    const overtime = Math.max(0, e.hoursWorked - 40) * baseRate * 1.5;
    let bonus = 0;
    switch (e.eligibleForBonus) {
      case true: bonus = e.baseSalary * 0.1; break;
      case false: bonus = 0; break;
    }
    let total = e.baseSalary + overtime + bonus;
    if (total > 100000) total *= 0.7;
    return { employeeName: name, totalSalary: total.toFixed(2) };
  });

  payroll.forEach(p => console.log(`${p.employeeName}: $${p.totalSalary}`));
  const totalPayroll = payroll.reduce((sum, p) => sum + parseFloat(p.totalSalary), 0);
  console.log(`Total Payroll: $${totalPayroll.toFixed(2)}`);
}

const employees = [
  { employeeName: "Alice Smith", baseSalary: 90000, hoursWorked: 45, eligibleForBonus: true },
  { employeeName: "Bob Jones", baseSalary: 105000, hoursWorked: 50, eligibleForBonus: false },
  { employeeName: "Charlie Davis", baseSalary: 80000, hoursWorked: 38, eligibleForBonus: true }
];

processPayroll(employees);


//question 3


function convertTemperature(value, unit) {
  let c, f, k;
  switch (unit.toLowerCase()) {
    case 'celsius':
      c = value;
      f = (value * 9/5) + 32;
      k = value + 273.15;
      break;
    case 'fahrenheit':
      c = (value - 32) * 5/9;
      f = value;
      k = c + 273.15;
      break;
    case 'kelvin':
      c = value - 273.15;
      f = (c * 9/5) + 32;
      k = value;
      break;
    default:
      return "Invalid unit";
  }
  return {
    celsius: c.toFixed(2),
    fahrenheit: f.toFixed(2),
    kelvin: k.toFixed(2)
  };
}

console.log(convertTemperature(100, 'Celsius'));
console.log(convertTemperature(212, 'Fahrenheit'));
console.log(convertTemperature(373.15, 'Kelvin'));

