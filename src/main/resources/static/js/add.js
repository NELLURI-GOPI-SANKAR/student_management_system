const apiUrl="http://localhost:8081";
document.getElementById('add-form').addEventListener("submit",async(e)=>{
	e.preventDefault();
	
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const department = document.getElementById("course").value;
	
	const student={name,email,department};
	
	const res=await fetch(apiUrl,{
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(student),
	});
	
	if(res.ok){
		alert("Student added succesfully..");
		e.target.reset();
	}
	else{
		alert("Student not added");
	}
	
})