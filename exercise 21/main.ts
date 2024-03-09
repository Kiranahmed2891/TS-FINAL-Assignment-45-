//21.They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items

import { kStringMaxLength } from "buffer"

//data type of women

interface women {
    name: string
    age: number
    nationalty: string
    student:boolean
}
//object women
let women = {
    name: 'kiran',
    age: 30,
    nationalty:'pakistani',
    student: false
}
//print women
console.log(women);