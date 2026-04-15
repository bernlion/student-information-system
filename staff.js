let editingIndex = -1;

/* Toggle Marks */

function toggleMarks(){

document
.getElementById("marksSection")
.classList.toggle("hidden");

}

/* Calculate Internal % */

function calculatePercentage(s){

let marks=[

Number(s.subMark1)||0,
Number(s.subMark2)||0,
Number(s.subMark3)||0,
Number(s.subMark4)||0,
Number(s.subMark5)||0,
Number(s.subMark6)||0

];

let total =
marks.reduce((a,b)=>a+b,0);

return ((total/600)*100).toFixed(2);

}

/* Save Student */

function saveStudent(){

let users =
JSON.parse(localStorage.getItem("users"))
|| [];

let student={

id: studentId.value,
password: studentPassword.value,

name: studentName.value,

regno: regno.value,
dept: dept.value,

address: address.value,
phone: phone.value,
attendance: attendance.value,

subName1: subName1.value,
subMark1: subMark1.value,

subName2: subName2.value,
subMark2: subMark2.value,

subName3: subName3.value,
subMark3: subMark3.value,

subName4: subName4.value,
subMark4: subMark4.value,

subName5: subName5.value,
subMark5: subMark5.value,

subName6: subName6.value,
subMark6: subMark6.value

};

/* EDIT MODE */

if(editingIndex>-1){

users[editingIndex]=student;
editingIndex=-1;

alert("Student Updated");

}

/* CREATE MODE */

else{

users.push(student);

alert("Student Created");

}

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

/* Toggle Students */

function toggleStudents(){

let table =
document.getElementById("studentTable");

if(table.innerHTML===""){

viewStudents();

}
else{

table.innerHTML="";

}

}

/* View Students */

function viewStudents(){

let users =
JSON.parse(localStorage.getItem("users"))
|| [];

let table =
document.getElementById("studentTable");

table.innerHTML=`
<tr>
<th>ID</th>
<th>Name</th>
<th>Dept</th>
<th>Attendance</th>
<th>Internal %</th>
<th>Edit</th>
<th>Save</th>
</tr>
`;

users.forEach((u,index)=>{

let percent =
calculatePercentage(u);

let row =
table.insertRow();

row.insertCell(0).innerText=u.id;
row.insertCell(1).innerText=u.name;
row.insertCell(2).innerText=u.dept;
row.insertCell(3).innerText=u.attendance;

row.insertCell(4).innerText=
percent+"%";

/* EDIT */

row.insertCell(5).innerHTML=
"<button onclick='editStudent("
+index+")'>Edit</button>";

/* SAVE */

row.insertCell(6).innerHTML=
"<button onclick='saveStudent()'>Save</button>";

});

}

/* Edit */

function editStudent(index){

let users =
JSON.parse(localStorage.getItem("users"));

let u = users[index];

editingIndex=index;

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

/* Toggle Reports */

function toggleReports(){

let div =
document.getElementById("reportSection");

div.classList.toggle("hidden");

viewReports();

}

/* View Reports */

function viewReports(){

let reports =
JSON.parse(localStorage.getItem("reports"))
|| [];

let div =
document.getElementById("reportSection");

div.innerHTML="";

reports.forEach((rep,index)=>{

let p =
document.createElement("p");

p.innerHTML=
rep.id+" : "+rep.issue+

"<br><button onclick='reply("
+index+")'>Reply</button>";

div.appendChild(p);

});

}

/* Reply */

function reply(index){

let reports =
JSON.parse(localStorage.getItem("reports"));

reports[index].reply=
"Your report was reviewed. Changes appear in 2–3 days";

localStorage.setItem(
"reports",
JSON.stringify(reports)
);

alert("Reply Sent");

}

/* Logout */

function logout(){

window.location.href="index.html";

}