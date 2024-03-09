//  16.More Guests: You just found a bigger dinner table, so now more space is available.
//   Think of three more guests to invite to dinner.
//  • Start with your program from Exercise 15. Add a print statement to the end of 
//  your program informing people that you found a bigger dinner table.
 
//  • Add one new guest to the beginning of your array


let Guest_List :string[] = ["murk","kainaat","uzma"];

let absent_Guest:string = "murk" ;

let new_Guest:string = "Farhana" ;
Guest_List[0] = new_Guest;





for(let i=0; i<Guest_List.length; i++){
    console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!\n\n")

}

console.log(`Mrs.${absent_Guest} is not coming the party,`)
console.log("Good news we find big table so we are inviting 3 more guests.")

Guest_List.unshift("sir Furqan Behlim ");
Guest_List.splice(2,0, "nida khan");
Guest_List.push("siddiqa baddar")

for(let i=0; i<Guest_List.length; i++){
    console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!\n\n")

}


