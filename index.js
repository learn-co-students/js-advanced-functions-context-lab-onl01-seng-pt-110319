/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(array) {
    // console.log("data", array)

    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee
}

let createEmployeeRecords = function(arrayOfArrays) {
    // console.log("arrayOfArrays", arrayOfArrays)
    // arrayOfArrays [
    //     [ 'Thor', 'Odinsson', 'Electrical Engineer', 45 ],
    //     [ 'Loki', 'Laufeysson-Odinsson', 'HR Representative', 35 ],
    //     [ 'Natalia', 'Romanov', 'CEO', 150 ],
    //     [ 'Darcey', 'Lewis', 'Intern', 15 ],
    //     [ 'Jarvis', 'Stark', 'CIO', 125 ],
    //     [ 'Anthony', 'Stark', 'Angel Investor', 300 ]
    //   ]

    return arrayOfArrays.map(employee => createEmployeeRecord(employee) )

}

let createTimeInEvent = function(timeInDateStamp) {
    // console.log("timeInDateStamp", timeInDateStamp)
    let data = timeInDateStamp.split(' ')
    let date = data[0]
    let hour = data[1]
    // console.log("hour", parseInt(data[1], 10))

    // console.log("this", this)

    // timeInDateStamp 2018-01-01 0800
    // timeInDateStamp 2018-01-03 0800

    let obj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    }

    this.timeInEvents.push(obj)

    return this
}

let createTimeOutEvent = function(timeOutDateStamp) {
    // console.log("timeOutDateStamp", timeOutDateStamp)
    let data = timeOutDateStamp.split(' ')
    let date = data[0]
    let hour = data[1]
    // console.log("hour", parseInt(data[1], 10))

    // console.log("this", this)

    // timeInDateStamp 2018-01-01 0800
    // timeInDateStamp 2018-01-03 0800

    let obj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    }

    this.timeOutEvents.push(obj)

    return this
}

let hoursWorkedOnDate = function (date) {
//  console.log("hoursWorkedOnDate", date)
//  console.log("this", this)

//  hour 1000
//  this {
//    firstName: 'Rafiki',
//    familyName: '',
//    title: 'Aide',
//    payPerHour: 10,
//    timeInEvents: [ { type: 'TimeIn', hour: 900, date: '2019-01-11' } ],
//    timeOutEvents: [ { type: 'TimeOut', hour: 1300, date: '2019-01-11' } ]
//  }
let timeInHour 
let timeOutHour
let totalHoursWorked

timeInHour = this.timeInEvents.find(e => {
    return e.date === date
})

timeOutHour = this.timeOutEvents.find(e => {
    return e.date === date
})

totalHoursWorked = (timeOutHour.hour - timeInHour.hour)/100
return totalHoursWorked

}

let wagesEarnedOnDate = function(date) {
    // console.log("this", this)
    // this {
    //     firstName: 'Rafiki',
    //     familyName: '',
    //     title: 'Aide',
    //     payPerHour: 10,
    //     timeInEvents: [
    //       { type: 'TimeIn', hour: 900, date: '2019-01-11' },
    //       { type: 'TimeIn', hour: 1000, date: '2019-01-12' }
    //     ],
    //     timeOutEvents: [
    //       { type: 'TimeOut', hour: 1300, date: '2019-01-11' },
    //       { type: 'TimeOut', hour: 1300, date: '2019-01-12' }
    //     ]
    //   }
    let payOwed
    // console.log("answer", hoursWorkedOnDate.call(this, date) * this.payPerHour)
     return hoursWorkedOnDate.call(this, date) * this.payPerHour

    // return payOwed
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

let findEmployeeByFirstName = function(arrayOfEmployeeRecords, firstName) {
    // console.log("arrayOfEmployeeRecords", arrayOfEmployeeRecords)
    // console.log("this", this)
    let employee 

    return arrayOfEmployeeRecords.find(employee => {
       return employee.firstName === firstName
    })
}

let calculatePayroll = function(arrayOfEmployeeRecords) {
    // console.log("this", this)
    return arrayOfEmployeeRecords.reduce(function(accumulator, currentValue) {
        return accumulator + allWagesFor.call(currentValue)
    }, 0)
}

