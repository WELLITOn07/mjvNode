console.log('Hello World!');


/**@type {number} */
const numberOne = 2;
/**@type {number} */
const numberTwo = 2;
/**@type {Date} */
const date = new Date();

/**@type {string} */
const day = date.getDate().toString().padStart(2, '0'); 
/**@type {string} */
const month = (date.getMonth() + 1).toString().padStart(2, '0');
/**@type {string} */
const year = date.getFullYear().toString(); 

const formattedDate = `${day}/${month}/${year}`; 
 
/**@returns {number} */
const some = (n1, n2) => {
    return n1 + n2
};

console.log(`A soma de numberOne e numberTwo é: ${some(numberOne, numberTwo)}`);
console.log(`A data de hoje é ${formattedDate}`);