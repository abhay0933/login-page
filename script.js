let email = document.querySelector("#email");

email.addEventListener('keyup', (e)=>{
    
      if(email.value.length<4){
           email.style.border= "1px solid red"
           
      }else{
        email.style.border= "1px solid green"
      }
      
})

pass.addEventListener('keyup', (e)=>{
    
    if(pass.value.length<4){
         pass.style.border= "1px solid red"
         
    }else{
      pass.style.border= "1px solid green"
    }
    
})

let form = document.querySelector("#login");
let error= document.querySelector(".error");
form.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(email.value);
    if(email.value.length<4){
        
        error.innerText= "Please fill the required field!!";
        
     } else if(pass.value.length<4){
        
        console.log(error);
        error.innerText= "Please fill the required field!!";
        
     }else{
        alert("Successfully Logged In!");
     }
})
