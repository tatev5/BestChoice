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
              console.log(result);
              } 

        }
       
        hendler();
