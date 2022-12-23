var formInitializationTime;
 $('#contact_form input').bind('keypress change click', function () {

    if (!formInitializationTime) formInitializationTime = new Date();
    
});

function validate() {
   
    var name = document.getElementById('contact_form_name');
    var emailid = document.getElementById('contact_form_email');
    //let regexemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexemail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailResult = regexemail.test(emailid.value);
    var phoneNumber = document.getElementById('contact_form_phone');
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber.value);
    var validatename=validateemail=validatephone = true;
    
    if (name.value==null || name.value==""){  
        //alert("Name can't be blank"); 
        name.focus(); 
        name.style.borderColor = "#ff0000";
        validatename = false;  
    }
    else{
        validatename=true;
        name.style.borderColor = "#000000";
    }
    if(emailResult == false && emailid.value==""){
        emailid.focus();
        emailid.style.borderColor = "#ff0000";
        validateemail =false;  
    }
    else{
        validateemail=true;
        name.style.borderColor = "#000000";
    }

    if (phoneResult == false) {
        phoneNumber.focus();
        phoneNumber.style.borderColor = "#ff0000";
        validatephone =false;  
    }
    else{
        validatephone=true;
        name.style.borderColor = "#000000";
    }
    
    if (validatename && validateemail && validatephone) {
        
        // var time = new Date();
        var time =  (new Date() - formInitializationTime)/1000;
        setCookie("name", name.value, 20);
        setCookie("email", emailid.value, 20);
        setCookie("phone", phoneNumber.value, 20);
        setCookie("time", time, 20);
        window.open("usercookie.html","_blank",true);

    }

}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {

    var domainName = window.location.hostname;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "EXPIRES=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "path=/; secure; domain=" + domainName;
}

function getData() {

    var data = [getCookie("name"), getCookie("email"), getCookie("phone"), getCookie("time")];

    var mytable = "<tr>";
    for (var item of data) { mytable += "<td>" + item + "</td>"; }
    mytable += "</tr>";

    console.log(mytable);
    document.getElementById("dataitem").innerHTML = mytable;


}