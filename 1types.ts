const str: string = 'Hello'

console.log(str)


const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10


const message: string = 'Hello Typescript'

const numberArray: number[] = [1,1,2,3,5,8,13]  // One of the types to show the array of numbers
const numberArray2: Array<number>= [1,1,2,3,5,8,13] // Generic type of record

const words: string[] =['Hello', 'typescript']

// Tuple data type special in TypeScript

const contact: [string, number] = ['Andrey', 1234567]

// Any, redeclaring the variable

let variable:any = 42 // if we assign :sny type to the variable than we can change the type of data in this variable
//..
variable = 'New String'
variable = []

// ====

/* function sayMyName(name: string): void {
   console.log(name)
}

sayMyName(name: 'Heisenberg') */


// Never

/* function throwError(message: string): never {   
 
        throw new Error (message)
    }

function infinite(): never {                          // Dont run this function because it will overload your computer
    while (true){

    }
} */

//Type 

type Login = string   //Creating a personal data type

const login: Login = 'admin'

type ID = string | number  //Creating own type to use a different data types
const id1: ID = 1234
const id2: ID = '1234'
//const id3: ID = true  Will not work because it can be only string or a number like we was assigning it in line number 60

type SomeType = string|null|undefined 








