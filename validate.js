function validate()
{
    //window.alert("called");
    var admin=document.getElementById('admin').value;
    var password=document.getElementById('password').value;
    //window.alert("stored");
    if((admin=="admin")&&(password=="12345"))
    {
        //window.alert("login");
        return true;
    }
    else
        window.alert("Admin or Password Incorrect");
        return false;
}