function add(a:number, b:number): number{
    return a+b
}

function toUpperCase(str: string): string{
    return str.trim().toUpperCase()
}

// Function and ist parameter overloading 
// Call function with different parameters ang get different values

interface MyPosition{
    x: number | undefined,
    y: number | undefined
}

interface MyPositionDefault extends MyPosition{
   default: string
}


function position(): MyPosition
function position(a:number): MyPositionDefault
function position(a: number, b:number): MyPosition

function position(a?: number, b?:number){
    if(!a && !b){
        return {x:undefined, y: undefined}
    }

    if(a && !b){
        return{x:a, y:undefined, default: a.toString()}
    }
     
    return {x: a, y:b}

}

console.log('Empty' ,position())
console.log('One of parameters', position(42))
console.log('Two parameters', position(10, 20))