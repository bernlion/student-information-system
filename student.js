function loadStudent(){

let user=JSON.parse(localStorage.getItem("currentUser"));

let div=document.getElementById("studentDetails");

div.innerHTML=`

<b>Name:</b> ${user.name || "N/A"}<br>
<b>Reg No:</b> ${user.regno}<br>
<b>Dept:</b> ${user.dept}<br>

<b>Address:</b> ${user.address}<br>
<b>Phone:</b> ${user.phone}<br>
<b>Attendance:</b> ${user.attendance}%<br>

<h4>Marks</h4>

${user.subName1}: ${user.subMark1}<br>
${user.subName2}: ${user.subMark2}<br>
${user.subName3}: ${user.subMark3}<br>
${user.subName4}: ${user.subMark4}<br>
${user.subName5}: ${user.subMark5}<br>
${user.subName6}: ${user.subMark6}

`;

}

function logout(){
window.location.href="index.html";
}

window.onload=loadStudent;