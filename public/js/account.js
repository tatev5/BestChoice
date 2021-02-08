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
				
                
             let result = await f.json();
				
             if(result){
              let t = navBar.children;
            navBar.children[0][0].innerHTML = result.name
             t[1].innerHTML = result.lastname;
             t[2].innerHTML = result.email;
              } 

        }
       
        hendler();
