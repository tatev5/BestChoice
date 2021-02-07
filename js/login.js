const formSign = document.getElementById("formSignup");

const form = document.getElementById("formLogin")

         async function hendler(event){
        event.preventDefault();
        console.log(event.target.email.value);
		 const f = await fetch("https://bestchoicenode.herokuapp.com/users/login", {
            method: "POST",
			  headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
        {
          email: event.target.email.value, 
          password: event.target.password.value
        })
      
    });
 
       let result = await f.json();
		  console.log(result);
		  if(result){
		  console.log("yes")
		  }
       }
       form.addEventListener("submit", hendler);
       





       
