document.getElementById("block-a").addEventListener("load", loader());

async function loader() {
  var singleImage = document.getElementById("img1");
  singleImage.setAttribute("src", getParameterByName("id"));
  var usaState = document.getElementById("state-name");
  usaState.textContent = getParameterByName("loc");
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
    var focal = EXIF.getTag(this, "FocalLength");
    var exptime = EXIF.getTag(this, "ExposureTime");
    var fstop = EXIF.getTag(this, "FNumber");
    var iso = EXIF.getTag(this, "ISOSpeedRatings");
    var date = EXIF.getTag(this, "DateTimeOriginal");
    // Grabbing the html elements from file
    var MODEL = document.getElementById("modelhtml");
    var FOCAL = document.getElementById("focalhtml");
    var FSTOP = document.getElementById("fstophtml");
    var EXPTIME = document.getElementById("exposurehtml");
    var ISO = document.getElementById("isohtml");
    var DATE = document.getElementById("datehtml");
    // setting the value in the html elements
    MODEL.innerHTML = `${model}`;
    FOCAL.innerHTML = `${focal}`;
    FSTOP.innerHTML = `${fstop}`;
    EXPTIME.innerHTML = `${exptime}`;
    ISO.innerHTML = `${iso}`;
    DATE.innerHTML = `${date}`;
  });
}

function changeSize(num) {
  var imgRes = document.getElementById("img1");

  if (num === 1) {
    imgRes.setAttribute("class", "small-img");
  }
  if (num === 2) {
    imgRes.setAttribute("class", "med-img");
  }
  if (num === 3) {
    imgRes.setAttribute("class", "large-img");
  }
}
