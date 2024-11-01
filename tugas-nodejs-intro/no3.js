export const sumTwoNum = (num1,num2) => {
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        const total = num1 + num2
        return `Total of ${num1} + ${num2} = ${total}`
    } else {
        return 'Not a number'
    }
}