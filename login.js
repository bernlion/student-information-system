function login(){

let role=document.getElementById("role").value;
let id=document.getElementById("loginId").value;
let pass=document.getElementById("loginPassword").value;

if(role==="staff"){
if(id==="admin" && pass==="123"){
window.location.href="staff.html";
}else alert("Invalid");
}

if(role==="student"){
let users=JSON.parse(localStorage.getItem("users"))||[];

let u=users.find(x=>x.id===id && x.password===pass);

if(u){
localStorage.setItem("currentUser",JSON.stringify(u));
window.location.href="student.html";
}else alert("Invalid");
}

}