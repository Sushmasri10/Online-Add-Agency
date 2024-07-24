function loginform()
{
    var uname=document.getElementById("username").value;
    var psw=document.getElementById("password").value;

    if(uname=='')
    {
        alert("please enter username!");
        return false;
    }
    else if(psw=='')
    {
        alert("please enter password!");
        return false;
    }
    else if(psw.length > 6)
		{
			alert("Password max should be 6.");
            return false;
		}
    else{
        return true;
    }
}

