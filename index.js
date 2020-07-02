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

const createEmployeeRecord = (arr) => {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

const createEmployeeRecords = (employeesData) => {
    return employeesData.map(employee => {
        return createEmployeeRecord(employee)
    })
}

const createTimeInEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })

    return this
}

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this
}

const hoursWorkedOnDate = function(date) {
    const inEvent = this.timeInEvents.find(e => {return e.date === date})
    const outEvent = this.timeOutEvents.find(e => {return e.date === date})
    
    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = function(date) {
    let earned = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return earned
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(e => { return e.firstName === firstName })
}

const calculatePayroll = (employeeRecords) => {
    return employeeRecords.reduce((first, record) => {
        return first + allWagesFor.call(record)
    }, 0)
}

