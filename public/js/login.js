const formSign = document.getElementById("formSignup");

const form = document.getElementById("formLogin")

         async function hendler(event,res){
          event.preventDefault();
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

       if(result.message === 'okey')  {
     localStorage.setItem('authorization',result.toke)

        window.location.href = 'account.html'
         } else{
          window.location.href = 'error.html'
         }
          
		  
        
       
		  

     
       }
    form.addEventListener("submit", hendler);




async function formSignup(ev){
            const fs = await  fetch("https://bestchoicenode.herokuapp.com/users", {
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
                    })
              })
        }
       formSign.addEventListener("submit", formSignup);
