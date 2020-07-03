/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(answer) {
    return {
        firstName: answer[0],
        familyName: answer[1],
        title: answer[2],
        payPerHour: answer[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(answer) {
    const map1 = answer.map(x => createEmployeeRecord(x));
    return map1
}

function createTimeInEvent(employee) {
    let [day, hour] = employee.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: day,
    })
    return this
}

function createTimeOutEvent(employee) {
    let [day, hour] = employee.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: day,
    })
    return this
}

function hoursWorkedOnDate(day) {
    let i = this.timeInEvents.find(function(x){
        return x.date === day
    })

    let b = this.timeOutEvents.find(function(x){
        return x.date === day
    })

    const answer = (b.hour - i.hour) / 100
    return answer

}

function wagesEarnedOnDate(day) {
    return parseInt((hoursWorkedOnDate.call(this, day) * this.payPerHour), 10)
}

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
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }
  
  let calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor.call(rec)
      }, 0)
  }