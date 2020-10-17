
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>



<input type="number" id="myNumber" value="2">
<h3>+</h3>
<input type="number" id="myOtherNumber" value="2">

<p>Click the button to add them.</p>

<button onclick="myFunction()">Try it</button>



<p id="demo" style = "color: red" >number will be here !! </p>

<script>
function myFunction() {
  var x = document.getElementById("myNumber").value;
  var y = document.getElementById("myOtherNumber").value;
  var z = (x * 1) + (y * 1 ); 

  document.getElementById("demo").innerHTML = z;
}

</script>

</body>
</html>
