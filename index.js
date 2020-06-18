/* Your Code Here */

function createEmployeeRecord(record) {
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(record) {

    let result = record.map(name => createEmployeeRecord(name))
    return result
}

function createTimeInEvent(dateStamp) {
   
    let [date, hour] = dateStamp.split(" ")

   this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,

    })
    return this
}

function createTimeOutEvent(dateStamp) {

    let [date, hour] = dateStamp.split(" ")


    this.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour, 10)

    })

    return this;
}

function hoursWorkedOnDate(dateStamp) {



    let inTime = this.timeInEvents.find(function(element){
        return element.date === dateStamp
       
    }) 
let outTime = this.timeOutEvents.find(function(element) {
    return element.date === dateStamp
})

let result = (outTime.hour - inTime.hour) / 100 

return result
    
}

function wagesEarnedOnDate(dateStamp) {

    let func = hoursWorkedOnDate.call(this, dateStamp)

    let pay = this.payPerHour

    let result = func * pay 
    
    return result

}

function findEmployeeByFirstName(arr, name) {

    return arr.find(function(names) {
        return names.firstName === name
    })
}

function calculatePayroll(array) {

   return array.reduce(function(accum, value) {
        return accum + allWagesFor.call(value)
    }, 0)

}

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