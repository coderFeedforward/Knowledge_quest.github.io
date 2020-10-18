var myList = [null, null];
function myFunction() {
  var x = document.getElementById("myNumber").value;
  var y = document.getElementById("myOtherNumber").value;
  var z = (x * 1) + (y * 1 ); 
  myList[0] = z;
  document.getElementById("demo").innerHTML = myList;
}


function Function() {
  var x = document.getElementById("myText").value;
  myList[1] = x;
  document.getElementById("demooo").innerHTML = myList ;
}
