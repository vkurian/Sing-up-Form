document.addEventListener('DOMContentLoaded',function(){
    const password=document.querySelector("#password");
    const confirm_password=document.querySelector("#ConfirmPassword")
    const btn= document.querySelector("#submit")

   function myfunction(){

    if(password.value!=confirm_password.value){
        confirm_password.setCustomValidity("Passwords Don't Match");

    }
    else{
        confirm_password.setCustomValidity("")

    }
   
}
btn.addEventListener("click",myfunction);
})

//password.onChange=myfunction
//password.onkeyup=myfunction