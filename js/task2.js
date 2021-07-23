// function myFunc(requiredArg, optionalArg = 'defaultValue') {
// do stuff
// }

let monthCheck = document.querySelector('.monthCheck');

DateDisplayFormatter = new Object();
DateDisplayFormatter.showCurrentDate = function showCurrentDate(format, regexp = undefined) {
    let currentDate = new Date(); // текущая дата


    const month = [
        'Januar',
        'February',
        'March',
        'Aprik',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let currentDay = currentDate.getDate();
    console.log(currentDay);

    let currentMonth = currentDate.getMonth();
    console.log(currentMonth);

    let currentYear = currentDate.getFullYear();
    console.log(currentYear);
    return `${currentDay}-${month[currentMonth]}-${currentYear}`;

}

console.log(DateDisplayFormatter.showCurrentDate());