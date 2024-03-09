"use strict";
// 19 (17).Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints 
// a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them
//   know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know 
// they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your 
// program.
let Guest_List = ["imran", "nawaz", "zardari"];
let absent_Guest = "imran";
let new_Guest = "kamran";
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!\n\n")
// }
// console.log(`Mrs.${absent_Guest} is not coming the party,`);
// console.log("Good news ! we find Big Table so we are inviting 3 more guests.");
Guest_List.unshift("Sir Furqan Behlim ");
Guest_List.splice(2, 0, "maryum");
Guest_List.push("Bilawal");
// for(let i=0; i<Guest_List.length; i++){
//     console.log("Dear Mrs " + Guest_List[i] +",\n\nIt is our pleasur to invite you in our party.\n\nThank You!\n\n")
//}
// console.log("\nSorry we can not arrange big table, only two people will be invited. ");
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
//  for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
//  }
Guest_List.splice(0, 2);
console.log(Guest_List);
//exercise 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Total no of guest are: ${Guest_List.length}`);
