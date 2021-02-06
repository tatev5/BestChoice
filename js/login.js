const formLog = document.getElementById("formLogin");
const formSign = document.getElementById("formSignup");

       async function formLogin(event){
        event.preventDefault();
        console.log(event.target.email.value);
         const f = await  fetch("https://tatev5.github.io/BestChoice/login", {
            method: "POST",
			  headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email: event.target.email.value, password: event.target.password.value})
​
          }).then(res=>res.json())
			.then(res => console.log(res));
       }
       formLog.addEventListener("submit", formLogin);



       
    

       async function formSignup(ev){
      
            const fs = await  fetch("https://tatev5.github.io/BestChoice/signup", {
                method: "POST",
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {   name: ev.target.name.value, 
                        lastname: ev.target.lastname.value,
                        email: ev.target.email.value, 
                        password: ev.target.password.value,
                        confirmPass:ev.target.cconfirmPassword.value
                    })
    ​
              }).then(res=>res.json())
                .then(res => console.log(res));
                
         
        }
        
       formSign.addEventListener("submit", formSignup);