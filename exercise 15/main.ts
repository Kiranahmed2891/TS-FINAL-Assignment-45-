// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of 
//  someone else to invite

// • Start with your program from Exercise 14. Add a print statement at 
// the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it 
// with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still 
// in your list







let Guest_List :string[] = ["murk","kainaat","uzma"];

let absent_Guest:string = "murk" ;

let new_Guest:string = "Farhana" ;
Guest_List[0] = new_Guest;





for(let i=0; i<Guest_List.length; i++){
    console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!\n\n")

}

console.log(`Mrs.${absent_Guest} is not coming the party,`)

