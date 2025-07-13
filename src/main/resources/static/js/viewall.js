const apiUrl="http://localhost:8081";

async function loadStudents(){
	const res=await fetch(apiUrl);
	const students=await res.json();
	
    const list=document.getElementById("student-list");
	list.innerHTML="";
	
	students.forEach(s=>{
		const li=document.createElement("li");
		li.textContent=`${s.id} - ${s.name} - ${s.email} - ${s.department}`;
		list.appendChild(id);
	});
}
loadStudents();