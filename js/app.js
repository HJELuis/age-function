var getAge = function (bornDate) {
    var data = bornDate.split("-");
    var year = Number(data[0]);
    var month = Number(data[1]);
    var day = Number(data[2]);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var age = currentYear - year;
    var monthDifference = currentMonth - month;
    var dayDifference = currentDay - day;
    if (monthDifference < 0 || dayDifference < 0) {
        age = age - 1;
    }
    console.log("La edad de la persona es de : ".concat(age, " a\u00F1os."));
};
getAge("1962-04-03");
//YYYY-MM-DD
