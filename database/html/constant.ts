export const table_str = `
<table>
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </tbody>
</table>
`;

export const xhtml_str = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>My XHTML Document</title>
</head>
<body>
<p>This is a paragraph.</p>
</body>
</html>
`;

export const html_str = `
<!DOCTYPE html>
<html>
<head>
<title>My HTML Document</title>
</head>
<body>
<p>This is a paragraph.</p>
</body>
</html>
`;

export const form_string = `
<form action="/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>
`;

export const dropdown_string = `
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
`;

export const list_string_numered_or_bullet = `
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>


`;

export const canvas_string = `
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
Your browser does not support the HTML5 canvas tag.</canvas>
`;

export const canvas_string_javascript = `
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
`;

export const semantic_tags_html_example = `
/* header of the page */
<header>
  <h1>My Website</h1>
</header>

/* navigation bar */
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>

/* main content */
<section>
  <h1>HTML</h1>
  <p>HTML is a markup language for describing web documents.</p>
</section>

/* footer of the page */
<footer>
  <p>Posted by: Hege Refsnes</p>
</footer>
`;

export const inline_style_html_string = `
/*This is blue paragraph with some  left margin*/
<p style="color:blue;margin-left:20px;">hello world!</p>
`;

export const details_summary_string = `
<details>
  <summary>Click to expand</summary>
  <p>Some text in the  details element.</p>
</details>
`;

export const meta_tag_string = `
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML,CSS,XML,JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

export const iframe_tag_string = `
<iframe src="https://www.w3schools.com"></iframe>
`;

export const open_dialog_string = `
<!-- Create the dialog element -->
<dialog id="myDialog">
  <!-- Add content to the dialog -->
  <h1>Hello!</h1>
  <p>This is a modal dialog.</p>
  <!-- Add buttons to the dialog -->
  <button id="closeBtn">Close</button>
</dialog>

<!-- Create the button that opens the dialog -->
<button id="openBtn">Open Dialog</button>

<script>
// Get the dialog element
var dialog = document.getElementById('myDialog');

// Get the button that opens the dialog
var btn = document.getElementById("openBtn");

// Get the  button that closes the dialog
var close_btn = document.getElementById("closeBtn");

// When the user clicks the button, open the dialog
btn.onclick = function() {
  dialog.show();
}

// When the user clicks on button, close the dialog
close_btn.onclick = function() {
  dialog.close();
}
</script>
`;

export const data_value_attributes_example = `

<!-- The data-* attributes is used to store custom data private to the page or application. -->
<p data-info="This is a paragraph.">This is a paragraph.</p>

<!-- value attribute is used to store a default value for the input field. -->
<input type="text" name="firstname" value="Mickey">

<!-- The value attribute is used in the <option> tag to specify the default value of a dropdown list. -->
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

`;

export const web_worker_string = `
<script>
// Create a new worker
var worker = new Worker("demo_workers.js");

// Send message to worker
worker.postMessage("Hello World");

// Receive message from worker
worker.onmessage = function(event) {
  document.getElementById("result").innerHTML = event.data;
}
</script>
`;

export const geolocation_string = `
<script>
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
</script>
`;

export const webrtc_html5_example = `
<script>
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
}
</script>
`;

export const figure_tag_string = `
<figure>
  <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
  <figcaption>Fig.1 - A picture of a mountain.</figcaption>
</figure>
`;

export const datalist_tag_string = `
<input list="browsers">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
`;
