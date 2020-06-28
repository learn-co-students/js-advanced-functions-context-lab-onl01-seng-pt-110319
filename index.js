/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord([firstName ="", familyName = "", title, payPerHour]) {
	let newEmployee = Object.create({
		firstName: firstName,
		familyName: familyName,
		title: title,
		payPerHour: payPerHour,
		timeInEvents: [],
		timeOutEvents: []
	})
	return newEmployee
};

function createEmployeeRecords(employees) {
	let employee = employees.map(function(e) {
		return createEmployeeRecord(e)
	})
	return employee
};

function createTimeInEvent(date) {
	let splitDate = date.split(" ")
	let day = splitDate[0]
	let time = parseInt(splitDate[1],10)
	this.timeInEvents.push(Object.assign({}, {type: "TimeIn", date: day, hour: time}))
	return this
};

function createTimeOutEvent(date) {
	let splitDate = date.split(" ")
	let day = splitDate[0]
	let time = parseInt(splitDate[1],10)
	this.timeOutEvents.push(Object.assign({}, {type: "TimeOut", date: day, hour: time}))
	return this
};

function hoursWorkedOnDate(date) {
	let timeIn = this.timeInEvents.find(function(e) {
		if (e.date === date) {
			return e
		}
	})
	let timeOut = this.timeOutEvents.find(function(o) {
		if (o.date === date) {
			return o
		}
	})
	let hoursWorked = (timeOut.hour - timeIn.hour)/100
	return hoursWorked
};

function wagesEarnedOnDate(date) {	
	let hours = hoursWorkedOnDate.call(this, date)
	let wages = hours * this.payPerHour
	return wages
};

function allWagesFor(date) {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employees, name) {
	let person = employees.find(function(e) {
		if (e.firstName === name) {
			return e
		}
	})
	return person
};

function calculatePayroll(employees) {
	return employees.reduce(function(a,b) { 
		return a + allWagesFor.call(b)
	}, 0)
}
