const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]


function pickPropArray(students, prop)
{
    const res = [];
    for (let i =0; i<students.length; i++)
    {
        if (students[i][prop] !== undefined)
        {
            res.push(students[i][prop]);
        }
    }
    return res;
}

const result = pickPropArray(students, 'name')

console.log(result) 