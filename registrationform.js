function Rvalidate(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatpassword = document.getElementById("repeatpassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject").value;
    var courseselect = document.getElementById("courseselect").value;
    var error_message = document.getElementById("error_message");

    error_message.padding = "10px";

    var text;
    if((name.length==0) && (email.length==0) && (phoneNumber.length==0) && (password.length==0) && (repeatpassword.length==0))
      {
        text="Please fill the details!";
        error_message.innerHTML = text;
        return false;
      }
    else if(name.length==0)
    {
        text = "Please Enter Name";
        error_message.innerHTML = text;
        return false;
    }
   else if(subject.length==0){
    text = "Please Enter Gender";
    error_message.innerHTML = text;
    return false;
  }
   else if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter a valid Email";
        error_message.innerHTML = text;
        return false;
      }
     else if(isNaN(phoneNumber) || phoneNumber.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
      }
     else if((password.length==0) && (password.length<=8)){
        text = "Set the password  of 8 characters";
        error_message.innerHTML = text;
        return false;
      }
      else if((repeatpassword.length==0) || (repeatpassword!=password))
      {
        text="Confirm password not matched";
        error_message.innerHTML = text;
        return false;
      }
      else if(courseselect.length==""){
        text = "Please Select Course";
        error_message.innerHTML = text;
        return false;
      }
      else
      {
      
      alert("Your Registered Sucessfully");
      return true;
}
}


resetfun()
{
  document.getElementById("myForm").reset();
}