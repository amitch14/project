const form = document.querySelector('form');
form.addEventListener('click', function (e){
    let feet = document.querySelector('#feet').value;
   let result=document.getElementById("results")
    
   e.preventDefault()
    console.log(feet)
    if(feet>9)
    {
        result.textContent =("No such person exist in record history")
           
    document.getElementById("i2").value=""
    
    document.getElementById("i1").value=""
    }
    
    
    else if(feet<0)
    {
        console.log(result.textContent ="Please enter a valid number")
        
    document.getElementById("i2").value=""
    
    document.getElementById("i1").value=""
    }
    else
    {
        let totalcms = (feet*30.48);
        document.getElementById("i1").value=totalcms
        
        let totalinch = feet*12;
        document.getElementById("i2").value=totalinch;
    console.log(totalcms)
    console.log(totalinch);
    
 
    }
  

})