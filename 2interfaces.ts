interface Rect {
    readonly id:string
    color?: string               /* ? makes parameter unnecessary */
    size:{
        width:number
        height: number
    }
}

const rect1: Rect ={
    id: '1234',
    size :{
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2 : Rect = {
    id: '12345',
    size :{
        width: 10,
        height: 5,
    },
    

}

rect2.color = 'black'





const rect3 = {} as Rect   // assigning object to existing type
const rect4 = <Rect>{}     // Classic way to implement the same thing

//========================


// Interface inheritance

interface ReactWithArea extends Rect {
    getArea:() => number                              /*adding function to inherited component, this function returns number */
}


const rect5: ReactWithArea = {
    id:'123',
    size:{
        width:20,
        height:20,

    },
    getArea(): number {
         return this.size.width * this.size.height
    }

}

// ==============================

interface IClock {
    time:Date,
    setTime(date: Date):void
}                                            // Uppercase I in variable name shows us that we are creating an interface 

class Clock implements IClock{
    time:Date= new Date()
    setTime(date: Date):void {
        this.time = date
    }
}


 //===============================


 interface Styles {
     [key: string]: string                      // It makes that key is inserted in css: Styles object and does not maker errors about missing some keys in css:styles object
 }                                              // We are making an interface with parameters and than we are able to add any string keys in css: Styles component

 const css: Styles ={
     border: '1px solid black',
     marginTop: '2px',
     borderRadius: '5px', 
 }


