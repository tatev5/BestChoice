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
		 localStorage.setItem('auth',result)
		  }
     
     
       }
    form.addEventListener("submit", hendler);





    //    async function formSignup(ev){
      
    //         const fs = await  fetch("https://tatev5.github.io/BestChoice/signup", {
    //             method: "POST",
    //               headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(
    //                 {   name: ev.target.name.value, 
    //                     lastname: ev.target.lastname.value,
    //                     email: ev.target.email.value, 
    //                     password: ev.target.password.value,

                       
    //                 })
    // ​
    //           })

    //           let result = await fs.json();
    //           if(result.token){
    //             localStorage.setItem('authorization', JSON.stringify(result.token));
    //             redirect(account);
    //                  }
         
    //     }
        
    //    formSign.addEventListener("submit", formSignup);