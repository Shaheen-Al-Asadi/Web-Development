var username = prompt("Enter username","");
var password=prompt("Enter password");


//Validating length
do {
  if(password.length<6){
    var password=prompt("Password too short. Re-Input 6-16 Characters Long");
   }
  if(password.length>16){
    var password=prompt("Password too long. Re-Input 6-16 characters long.");
  }
}while(password.length<6||password.length>16)
  
var passlower=/^(?=.*[a-z]).+$/;
var passupper=/^(?=.*[A-Z]).+$/;
var passdigit=/^(?=.*\d).+$/;
var passspeci=/^(?=.*[-_]).+$/;
var passother=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

//pass strength formula
var strpass=0; 
if(passlower.test(password)===true){
   strpass=strpass+20;
}
if(passupper.test(password)===true){
  strpass=strpass+20;
}
if(passdigit.test(password)===true){
  strpass=strpass+20;
}
if(passspeci.test(password)===true){
   strpass=strpass+20;
}
if(passother.test(password)===false){
  strpass=strpass+20;
}
   
//password strength checking  
 if(strpass<33){
   alert(username+ "," + " " + "Your password is weak.")
 }
 if(strpass>33 && strpass<66){
   alert(username+ "," + " " + "Your password is medium.")
 }
if(strpass>66){
  alert(username+ "," + " " + "Your password is strong.")
}

