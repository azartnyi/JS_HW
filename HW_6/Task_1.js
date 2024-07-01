// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

function getEmployeeInfo(employeeName) {
    employeeNames = ['Ann', 'Mary', 'Antony', 'Alex', 'Boris'];
    employeeSalary = [300, 300, 450, 450, 550];

    const index = employeeNames.indexOf(employeeName);

    if (index === -1) {
        return null;
    }

    return [employeeNames[index], employeeSalary[index]];
}

console.log(getEmployeeInfo('Ann'));
console.log(getEmployeeInfo('Alex'));
console.log(getEmployeeInfo('John'));