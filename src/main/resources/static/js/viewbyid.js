const apiUrl="http://localhost:8081";

async function findStudent(){
	const id = document.getElementById("search-id").value;
	const res=await fetch(`${apiUrl}/${id}`);
	
	if(!res.ok){
		documnet.getElementById("result").textContent="Student Not found"
		return;
	}
	
	const student=await res.json();
	document.getElementBy("result").textContent=`${student.id} - ${student.name} - ${student.email} - ${student.department}`;
}