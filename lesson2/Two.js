function createCounter() 
{
    let count = 0;
    // count = count + 1;
    
    return function () 
    {
        count = count + 1;
        console.log(count);
    }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2
const counter2 = createCounter()
counter2()