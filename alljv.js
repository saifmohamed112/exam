
var arr = [];
function SignUp() {
  var userInp = document.getElementById("userInp").value;
  var emailInp = document.getElementById("emailInp").value;
  var inpPass = document.getElementById("inpPass").value;
  var CPass = document.getElementById("inpCpass").value;
  var phnum = document.getElementById("phnum").value;
  var r1 = document.getElementById("r1");
  var r2 = document.getElementById("r2");
  var gender = r1.checked ? r1.value : (r2.checked ? r2.value : "");
  var regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,16}$/;
  if (userInp != "" && emailInp != "" && inpPass != "" && CPass != "") {
    for(var i = 0 ; i <=  arr.length ;i++){
      if (arr[i].username == userInp){
        alert("username is taken")
      }
    }
    if (5 < userInp.length && userInp.length < 16 && regax.test(inpPass) && inpPass === CPass && arr.username != userInp ) {
      let obj = {
        user: userInp,
        email: emailInp,
        pass: inpPass,
        Cpass: CPass,
        gender: gender,
        phonenum: phnum
      };
      arr.push(obj);
      alert("Sign Up successfully!");
      console.log(arr);
    } else {
      alert("The password must be more than 8 chars and have a special character, and confirm pass must match the password. User name must be between 5 and 10 characters.");
    }
   
}



function login(){
  var username = document.getElementById('inpUser');
  var password = document.getElementById('inpPass');
  for(var i = 0 ; i <= arr.length ; i++){    
    if(arr[i].username == username.value && arr[i].password == password.value){
      alert("login successfuly");
    }
  }
}



function forget(){
  var username = document.getElementById('inpUser').value;
  var password = document.getElementById('inpPass').value;
  for(var i = 0; i <= arr.length ; i++)
  {
    if(arr[i].username == username){
      arr[i].password = password
      alert("updated successfuly");
      console.log(arr);
      
    }
    else if(i == arr.length){
      alert("username not found");
    }
   
  }
}
