// 14.Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d 
// like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinne

let Guest_List :string[] = ["murk","kainaat","uzma"];

for(let i=0; i<Guest_List.length; i++){
    console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!")
}