function loadStudent(){

let user = JSON.parse(localStorage.getItem("currentUser"));

let div = document.getElementById("studentDetails");

div.innerHTML=`

<b>Name:</b> ${user.name}<br>
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

showReply();
}

/* SEND REPORT */
function reportIssue(){

let issueText =
document.getElementById("issue").value;

let user =
JSON.parse(localStorage.getItem("currentUser"));

let reports =
JSON.parse(localStorage.getItem("reports")) || [];

reports.push({
id: user.id,
issue: issueText,
reply: ""
});

localStorage.setItem("reports", JSON.stringify(reports));

alert("Report Sent");
}

/* SHOW REPLY */
function showReply(){

let reports =
JSON.parse(localStorage.getItem("reports")) || [];

let user =
JSON.parse(localStorage.getItem("currentUser"));

let box =
document.getElementById("replyBox");

box.innerHTML = "";

reports.forEach(r=>{
if(r.id===user.id && r.reply){
box.innerHTML += "<p>"+r.reply+"</p>";
}
});

}

function logout(){
window.location.href="index.html";
}

window.onload = loadStudent;