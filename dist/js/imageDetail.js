document.getElementById("container-detail").addEventListener("load", loader());

async function loader() {
  var singleImage = document.createElement("IMG");
  singleImage.setAttribute("src", getParameterByName("id"));
  document.getElementById("container-detail").appendChild(singleImage);
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
