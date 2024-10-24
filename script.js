let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error"; 
        string = ""; // 
      }
    } 
    // If the "AC" (All Clear) button is clicked
    else if (e.target.innerHTML == "AC") {
      string = ""; 
      input.value = string;
    } 
    // If the "DEL" (Delete) button is clicked
    else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1); 
      input.value = string;
    } 
    // If the "F" (Factorial) button is clicked
    else if (e.target.innerHTML == "F"){
        let number = parseInt(string);
      if (number >= 0) {
        string = factorial(number).toString(); 
        input.value = string;
      } else {
        input.value = "Error"; 
        string = "";
      }
    }
    //calculate square of given number
    
    else if(e.target.innerHTML == "Square"){
     let number = parseFloat(string);
     if(number >= 0)
     {
        string =(number ** 2).toString();
        input.value = string;
     }
     
    }
    //calculate SquareRoot og given number 
    else if (e.target.innerHTML == "SquareRoot") {
        let number = parseFloat(string);
        if (number >= 0) {
           
            string = Math.sqrt(number).toString(); 
            input.value = string; 
        } else {
            
            input.value = "Enter postive value"; 
            string = ""; 
        }
    }
    //calculate cube of given number 
    else if(e.target.innerHTML == "cube"){
        let number = parseFloat(string);
        if(number >= 0)
        {
           string =(number ** 3).toString();
           input.value = string;
        }else{
            input.value = "Enter postive value";
            string = "";
        }        
       }
    //calculate cuberoot of given number 
    else if (e.target.innerHTML == "cubeRoot")
       {
        let number = parseFloat(string);
        if(number >= 0)
        {
            string = Math.cbrt(number).toString();
            input.value = string;
        }
        else{
            input.value ="Enter postive value";
            string = "";
        }
       }
       
     
    else {
      string += e.target.innerHTML; 
      input.value = string; 
    }
  });
});
// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // 0! and 1! are both 1
    }
    return n * factorial(n - 1); // Recursively calculate factorial
  }

  for(let i = 0; i>= 10;i++)
  {
    console.log(i);
  }