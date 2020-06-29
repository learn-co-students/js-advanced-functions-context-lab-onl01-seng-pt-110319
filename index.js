/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });
  return this
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let timeIn = this.timeInEvents.find(dayworked => dayworked.date == dateStamp);
  let timeOut = this.timeOutEvents.find(dayworked => dayworked.date == dateStamp);
  let hoursWorked = (timeOut.hour - timeIn.hour) / 100;
  
  return hoursWorked;
}

function wagesEarnedOnDate(dateStamp) {
  let wage = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
  return wage;
}
  
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(function(name) {
    return name.firstName === firstName;
  });
}



function calculatePayroll(arr) {
  return arr.reduce(function(amount, record) {
    return amount + allWagesFor.call(record);
  }, 0);
}


