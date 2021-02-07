const navBar = document.getElementById("navBar")

    async function hendler(){
        const f = await fetch("https://tatev5.github.io/BestChoice/account", {
        method: "GET",
                headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
 
        },
        body: JSON.stringify(
            {
              authorization: localStorage.getItem("authorization")
            })
            
        });
             
              let result = f.json();
              if(result){
              let t = navBar.children;
             t[0].innerHTML = result.name;
             t[1].innerHTML = result.lastname;
             t[2].innerHTML = result.cash;
              }

        }
       
        hendler();
