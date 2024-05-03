
const getAge = (bornDate:string) => {
    const data:string[] = bornDate.split("-");
    const year:number = Number(data[0]);
    const month:number = Number(data[1]);
    const day: number = Number(data[2]);

    const currentDate:any = new Date();
    const currentYear:number = currentDate.getFullYear();
    const currentMonth:number = currentDate.getMonth();
    const currentDay:number = currentDate.getDate();

    let age:number = currentYear - year;
    const monthDifference:number = currentMonth - month;
    const dayDifference:number = currentDay - day;

    if(monthDifference < 0 || dayDifference < 0) {
        age = age - 1;
    } 

    console.log(`La edad de la persona es de : ${age} años.`);
} 

getAge("1962-04-03");
