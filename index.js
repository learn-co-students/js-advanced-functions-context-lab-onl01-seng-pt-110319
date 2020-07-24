/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
};

function createEmployeeRecords(employees) {
  let employeeRecords = employees.map(employee=>createEmployeeRecord(employee));
  return employeeRecords;
};

function createTimeInEvent(dateStamp) {
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(dateStamp.split(" ")[1],10),
    date: dateStamp.split(" ")[0]
  })
  return this;
};

function createTimeOutEvent(dateStamp) {
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(dateStamp.split(" ")[1],10),
    date: dateStamp.split(" ")[0]
  })
  return this;
};

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find(record=>record.date === date);
  let timeOut = this.timeOutEvents.find(record=>record.date === date);
  let hours = (timeOut.hour-timeIn.hour)/100;
  return hours;
};

function wagesEarnedOnDate(date) {
  let hours = hoursWorkedOnDate.call(this,date);
  let earned=hours*this.payPerHour;
  return earned;
};

function findEmployeeByFirstName(source,firstName) {
  return source.find(employee=>employee.firstName===firstName);
};

function calculatePayroll(employees) {
  let payroll = employees.reduce(function (memo,d) {
      return memo + allWagesFor.call(d)
  },0);
  return payroll;
};
