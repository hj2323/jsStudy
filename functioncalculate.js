
function cal(command, a, b){
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'divide':
            return a * b;
        case 'divide':
            return a % b;
        default:    
            throw Error('unknown command');
    }
}
