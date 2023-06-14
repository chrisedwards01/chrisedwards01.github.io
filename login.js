let check=document.getElementById("Password");
function showpoassword(){
    if(check.type=="password"){
        check.type="text";
    }
    else{
        check.type="password";
    }
}

function formvalidation(){
    let name=document.getElementById('login');
    if(name.value.trim()==""||name.vakue.trim()==null){
        alert("Enter the name.");
        return false;
    }
    else{
        return true;
    }
}