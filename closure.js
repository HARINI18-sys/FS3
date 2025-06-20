function outer() {
    let c = 5;
    return function() {
        c++;
        console.log(`count: ${c}`);
    };
}

const counter = outer();
counter();  
counter();  
