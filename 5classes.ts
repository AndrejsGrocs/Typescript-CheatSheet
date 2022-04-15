

class TypeScript {
    version: string

    constructor(version: string){
         this.version = version

    }
    info(name:string){
        return `[${name}]: Typescript version is ${this.version}`
    }
}

/* class Car {
    readonly model:string
    readonly numberOfWheels: number = 4

    constructor(theModel:string){
        this.model = theModel
        
    }
} */


// More elegant way to implement this.
// Absolutely equal to the code we have before lines 15 - 23

class Car1 {
    readonly numberOfWheels: number =4
    constructor(readonly model:string){}
}


// =========================
// Modifiers


class Animal {
       protected voice: string=''                 // if we are not use any modifier the default will be public
       public color: string = 'black'             // public is available for all instances

       constructor(){
           this.go()
       }
       
       private go(){
           console.log('Go')
       }//'black' is default in this case
}

class Cat extends Animal {
    public setVoice(voice:string):void{
        this.voice = voice
        //this.go()            Not available here because property is private
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)
// cat.voice not available here because it is protected 
// here we can work only through the function setVoice


//===============================
// Abstract classes

abstract class Component{
    abstract render():void
    abstract info():string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}