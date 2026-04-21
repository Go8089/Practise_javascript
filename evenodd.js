document.querySelector("#myform").addEventListener("submit",(e)=>{
    e.preventDefault();
    let vars = Number(document.querySelector('input').value);
  
   if(vars % 2 == 0){
   alert("even");
   }else {
   alert("odd");
   }
});

