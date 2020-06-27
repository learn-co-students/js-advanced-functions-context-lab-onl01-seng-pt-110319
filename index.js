/* Your Code Here */
 
let createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployeeRecords = function(employeeRecord) {
    return employeeRecord.map(function(array) {
        return createEmployeeRecord(array)
    });
};

let createTimeInEvent = function(datestamp) {
    let [date, hour] = datestamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this
}

let createTimeOutEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });

    return this
};

let hoursWorkedOnDate = function(date) {
    let eventIN = this.timeInEvents.find(function(event) {
        return event.date === date
    });

    let eventOut = this.timeOutEvents.find(function(event) {
        return event.date === date
    });
    return (eventOut.hour - eventIN.hour) / 100
};

let wagesEarnedOnDate = function(date) {
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wage
};


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
let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(employeeRecord) {
        return employeeRecord.firstName === firstName
    });
};

let calculatePayroll = function(employeeRecords) {
    return employeeRecords.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0);
};