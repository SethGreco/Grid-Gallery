document.getElementById("container-detail").addEventListener("load", loader());

async function loader() {
  var singleImage = document.getElementById("img1");
  singleImage.setAttribute("src", getParameterByName("id"));
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = getExif;

function getExif() {
  var img1 = document.getElementById("img1");
  EXIF.getData(img1, function() {
    // Exif library calls
    var model = EXIF.getTag(this, "Model");
    var exptime = EXIF.getTag(this, "ExposureTime");
    var fstop = EXIF.getTag(this, "FNumber");
    var iso = EXIF.getTag(this, "ISOSpeedRatings");
    // Grabbing the html elements from file
    var Model = document.getElementById("modelhtml");
    var FStop = document.getElementById("fstophtml");
    var ExpTime = document.getElementById("exposurehtml");
    var ISO = document.getElementById("isohtml");
    // setting the value in the html elements
    Model.innerHTML = `${model}`;
    FStop.innerHTML = `${fstop}`;
    ExpTime.innerHTML = `${exptime}`;
    ISO.innerHTML = `${iso}`;
  });
}

function changeSize(num) {
  var imgRes = document.getElementById("img1");

  if (num === 1) {
    imgRes.setAttribute("class", "small-img");
    console.log("you printed 1");
  }
  if (num === 2) {
    imgRes.setAttribute("class", "med-img");
    console.log("you printed 2");
  }
  if (num === 3) {
    imgRes.setAttribute("class", "large-img");
    console.log("you printed 3");
  }
}
