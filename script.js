function display(val) {
    document.getElementById("result").value += val;
  }
  
  function solve(){
    let x= document.getElementById("result").value
    let y= eval(x);
    document.getElementById("result").value =y
  } 
  
  function clearScreen(){
    document.getElementById("result").value=""
  } 
  
   var backspace = function() {
      
      var newstring  = document.getElementById('result').value;
      document.getElementById('result').value=newstring.substring(0,newstring.length -1);
   }