// 32.
// Checking Usernames: Do the following to create a program that simulates how websites 
// ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username. If a 
//  username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN'
//  should not be accepted
//current user array
var current_users = ['Taha', 'Mariam', 'Arif', 'Bilal', 'Dawood'];
// new_users array
var new_users = ['Mariam', 'Bilal', 'Jameel', 'Salman', 'Dawood'];
// Loop through new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert new_user to lowercase for case insensitivity
    var lowercase_new_user = new_user.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        // Username already exists
        console.log("The username '".concat(new_user, "' is not available. Please choose a different username."));
    }
    else {
        // Username is available
        console.log("The username '".concat(new_user, "' is available."));
    }
}
