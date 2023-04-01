function sum(){
  var A = Number(document.getElementById("value1").value);
  var B = Number(document.getElementById("value2").value);
  
  let X = A + B;
  let Y = Number(X.toFixed(2));
  
  document.getElementById("placeholderresult").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("Result").style.display = "block";
  document.getElementById("Result").innerHTML = Y;
  }
  
  function difference(){
  var A = Number(document.getElementById("value1").value);
  var B = Number(document.getElementById("value2").value);
  
  let X = A - B;
  let Y = Number(X.toFixed(2));
  
  document.getElementById("placeholderresult").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("Result").style.display = "block";
  document.getElementById("Result").innerHTML = Y;
  }
  
  function product(){
  var A = Number(document.getElementById("value1").value);
  var B = Number(document.getElementById("value2").value);
  
  let X = A * B;
  let Y = Number(X.toFixed(2));
  
  document.getElementById("placeholderresult").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("Result").style.display = "block";
  document.getElementById("Result").innerHTML = Y;
  }
  
  function quotient(){
  var A = Number(document.getElementById("value1").value);
  var B = Number(document.getElementById("value2").value);
  
  let X = A/B;
  let Y = Number(X.toFixed(2));
  
  document.getElementById("placeholderresult").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("Result").style.display = "block";
  document.getElementById("Result").innerHTML = Y;
  }