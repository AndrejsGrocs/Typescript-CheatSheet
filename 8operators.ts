

interface Person{
    name:string
    age:number
}

type PersonKeys = keyof Person //'name' | 'age'


let key: PersonKeys = 'name'
key = 'age'



type User = {
    _id:number
    name:string
    email:string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>  //case we need to exclude some keys from object
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>  // case we need to take some keys from object, make them stay

const user1: UserKeysNoMeta ='name'
