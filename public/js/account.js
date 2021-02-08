const navBar = document.getElementById("navBar")

    async function hendler(){
        const f = await fetch("https://bestchoicenode.herokuapp.com/users/auth", {
        method: "POST",
                headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
 
        },
        body: JSON.stringify(
            {
              authorization: localStorage.getItem("authorization")
            })
            
        });
             
            let result = await f.json();
				
		if(result){
             	console.log(result)
              let t = navBar.children;
                t[0][0].innerHTML = result.name;
  	            t[1][0].innerHTML = result.lastname;
				 t[2][0].innerHTML = result.email;
              }

        }
       
        hendler();
