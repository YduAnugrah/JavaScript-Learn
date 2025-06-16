const AccountID = "214834"
let AccountEmail = "youremail@gmail.com"
var AccountPassword = "MyPass1234"
AccountCity = "MyCity"   // It's correct but wrong pratice for proffectional work so try to write in proper way: let AccountCity = "MyCity"
let AccountState;

console.log(AccountID) // This is help for only one output find

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([AccountID, AccountEmail, AccountPassword, AccountCity, AccountState]) // This is help in more than input outputs find in a single time