// var login_username="admin";
// var login_password="123";
// function load(){
//     $(document).ready(function(){
//        $(".signin-option").show(); //show class login when you load the page
//        $(".my-account").hide(); //hide class logout when you load the page
//     });	
//   }

//   function authenticate_login()
//   {
//     var v1, v2;
//     v1 = document.getElementById("defaultForm-email").value;
//     //v1 = document.form1.firstname.value;
//     v2 = document.getElementById("defaultForm-pass").value;

//     $(document).ready(function(){

//     if ((v1 == login_username) && (v2 == login_password))
//       {
//         alert('Welcome to our website');
//         // parent.frames.Menu_Frame.location.href = "Menu.htm";
//         document.getElementById("myaccount").innerHTML = "Welcome " + login_username + "<br>";
//       setCookieD('cname',login_username,1);
//       window.open("index.html")
//           $(".signin-option").hide(); //hide class login
//           $(".my-account").show(); //show class logout
//       }
//       else
//       {
//           $(".signin-option").show(); //show class login
//           $(".my-account").hide(); //hide class logout
//         alert('Invalid User or Password Login (use admin and 12345)');
//         document.getElementById("pwd").value="";
//         document.getElementById("pwd").focus();
//         // parent.frames.Menu_Frame.location.href ="MenuT.htm";

//       }
//     });	
//   }

// cookie

function setCookie(cname, cvalue, exdays) {

    var d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    var expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cvalue + "; " + expires;

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
function load() {
    //alert("local storage"+localStorage.getItem("all_users"));
    // let cookieVal=getCookie('name');
    // alert(cookieVal);
    //alert(document.cookie);
    $(document).ready(function () {
        if (localStorage.getItem("name") != null)
        // if (cookieVal != null && cookieVal!="")
        {
            //alert(cookieVal);
            //alert("local storage"+localStorage.getItem("name"));
            $(".signin-option").hide();
            $(".my-account").show();

        }
        else {
            //alert("null local storage");
            $(".signin-option").show();
            $(".my-account").hide();
        }
    });
}

function authenticate_login() {
    var a = new Array();
    up1 = new Object();

    up1 = {
        name: 'admin',
        password: btoa('123')
    };
    a.push(up1);
    var username = document.getElementById('defaultForm-email').value;
    var password = document.getElementById('defaultForm-pass').value;

    //sessionStorage.setItem("currentloggedin",username);
    //localStorage.setItem('all_users',JSON.stringify(a));

    //a=JSON.parse((localStorage.getItem("all_users")));
    if (a[0].name == username && atob(a[0].password) == password) {
        a.push({ name: username, password: password });
        localStorage.setItem('name', JSON.stringify(a));
        //setCookie("name", username, 1 ); // setting cookie
        for (var i = 0; i < a.length; i++) {
            $(".signin-option").hide();
            $(".my-account").show();
            document.getElementById("userlogin").innerHTML = a[i]['name'];
            $("#userlogin").show();
        }
    }
    else {
        alert("Enter only username : admin and Password : 123 ");
        document.getElementById("defaultForm-email").value = "";
        document.getElementById("defaultForm-pass").value = "";
    }

}

function authenticate_logout() {
    alert('Thank you!');
    localStorage.removeItem('name');
    //setCookie('name',"",-1);
    document.getElementById("defaultForm-email").value = "";
    document.getElementById("defaultForm-pass").value = "";
    document.getElementById("defaultForm-email").focus();
    if (localStorage.getItem("name") == null) {
        //alert("local storage"+localStorage.getItem("name"));
        $(".signin-option").show();
        $(".my-account").hide();

    }
}

$(document).ready(function(){

load();

});