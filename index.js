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

let createEmployeeRecord = function (arr) {
    return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

let createEmployeeRecords = function (arr) {
    return arr.map(function(e){
        return createEmployeeRecord(e)
    })
}

let createTimeInEvent = function (date){
    let dateHour = date.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateHour[1], 10),
        date: dateHour[0]
    })

    return this
}

let createTimeOutEvent = function (date){
    let dateHour = date.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateHour[1], 10),
        date: dateHour[0]
    })

    return this
}

let hoursWorkedOnDate = function (date) {
    let timeIn = this.timeInEvents.find(function(d){
        return d.date === date
    })

    let timeOut = this.timeOutEvents.find(function(d){
        return d.date === date
    })

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function (date) {
    let hours = hoursWorkedOnDate.call(this,date)
    return hours * this.payPerHour
}

let calculatePayroll = function(arr){
    let total = arr.reduce(function(memo,e){
        return memo = memo + allWagesFor.call(e)        
    }, 0)
    return total
}

let findEmployeeByFirstName = function(arr,name){
    return arr.find(function(e){
        return e.firstName === name
    })
}
