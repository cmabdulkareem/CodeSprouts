$(function () {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear()+1;

    var nextyear = '03/31/2025 23:59:59'; // Set a specific date (MM/DD/YYYY HH:MM:SS)


    $('#timer').countdown({
        date: nextyear, //TODO Date format: 07/27/2017 17:00:00
        offset: +2,
        day: 'Day',
        days: 'Days'
    }, function () {
    });
});