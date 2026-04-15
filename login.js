function login(){

let role =
document.getElementById("role").value;

let id =
document.getElementById("loginId").value;

let password =
document.getElementById("loginPassword").value;

/* Staff Login */

if(role==="staff"){

if(id==="admin"
&& password==="123"){

window.location.href="staff.html";

}
else{

alert("Invalid Staff Login");

}

}

/* Student Login */

if(role==="student"){

let users =
JSON.parse(localStorage.getItem("users"))
|| [];

let valid =
users.find(u=>
u.id===id &&
u.password===password
);

if(valid){

localStorage.setItem(
"currentUser",
JSON.stringify(valid)
);

window.location.href="student.html";

}
else{

alert("Invalid Student Login");

}

}

}