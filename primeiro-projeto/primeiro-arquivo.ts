console.log('Primeiro arquivo Typescript!');

const numberOne: number = 2;
const numberTwo: number = 2;

const text: string = 'A soma dos números é:';

const result = () : number => {
    return numberOne + numberTwo
};

console.log(`${text} ${result()}`);