let editingIndex = -1;

/* Toggle Marks */
function toggleMarks(){
document.getElementById("marksSection")
.classList.toggle("hidden");
}

/* Calculate % */
function calculatePercentage(s){
let marks=[
+ s.subMark1||0,+ s.subMark2||0,
+ s.subMark3||0,+ s.subMark4||0,
+ s.subMark5||0,+ s.subMark6||0
];
let total=marks.reduce((a,b)=>a+b,0);
return ((total/600)*100).toFixed(2);
}

/* Save */
function saveStudent(){

let users=JSON.parse(localStorage.getItem("users"))||[];

let s={
id:studentId.value,
password:studentPassword.value,

name:studentName.value,

regno:regno.value,
dept:dept.value,

address:address.value,
phone:phone.value,
attendance:attendance.value,

subName1:subName1.value,
subMark1:subMark1.value,

subName2:subName2.value,
subMark2:subMark2.value,

subName3:subName3.value,
subMark3:subMark3.value,

subName4:subName4.value,
subMark4:subMark4.value,

subName5:subName5.value,
subMark5:subMark5.value,

subName6:subName6.value,
subMark6:subMark6.value
};

if(editingIndex>-1){
users[editingIndex]=s;
editingIndex=-1;
alert("Updated");
}else{
users.push(s);
alert("Created");
}

localStorage.setItem("users",JSON.stringify(users));
}

/* Toggle Students */
function toggleStudents(){
let t=document.getElementById("studentTable");
t.innerHTML==="" ? viewStudents() : t.innerHTML="";
}

/* View */
function viewStudents(){

let users=JSON.parse(localStorage.getItem("users"))||[];

let t=document.getElementById("studentTable");

t.innerHTML=`
<tr>
<th>ID</th>
<th>Name</th>
<th>Dept</th>
<th>Attendance</th>
<th>Internal %</th>
<th>Edit</th>
<th>Save</th>
</tr>`;

users.forEach((u,i)=>{

let r=t.insertRow();

r.insertCell(0).innerText=u.id;
r.insertCell(1).innerText=u.name;
r.insertCell(2).innerText=u.dept;
r.insertCell(3).innerText=u.attendance;
r.insertCell(4).innerText=calculatePercentage(u)+"%";

r.insertCell(5).innerHTML=
`<button onclick="editStudent(${i})">Edit</button>`;

r.insertCell(6).innerHTML=
`<button onclick="saveStudent()">Save</button>`;

});

}

/* Edit */
function editStudent(i){

let users=JSON.parse(localStorage.getItem("users"));
let u=users[i];

editingIndex=i;

studentId.value=u.id;
studentPassword.value=u.password;

studentName.value=u.name;

regno.value=u.regno;
dept.value=u.dept;

address.value=u.address;
phone.value=u.phone;
attendance.value=u.attendance;

subName1.value=u.subName1;
subMark1.value=u.subMark1;

subName2.value=u.subName2;
subMark2.value=u.subMark2;

subName3.value=u.subName3;
subMark3.value=u.subMark3;

subName4.value=u.subName4;
subMark4.value=u.subMark4;

subName5.value=u.subName5;
subMark5.value=u.subMark5;

subName6.value=u.subName6;
subMark6.value=u.subMark6;

}

/* Logout */
function logout(){
window.location.href="index.html";
}