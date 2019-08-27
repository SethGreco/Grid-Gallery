// call Django API and fetch photos
document.getElementById("container-images").addEventListener("load", gallery());

async function gallery() {
  const images = await getPhotos();

  for (i = 0; i < images.length; i++) {
    // <div> that will container both image and name.
    var container = document.createElement("DIV");
    container.setAttribute("id", "div" + [i]);
    container.setAttribute("class", "img-container");
    document.getElementById("container-images").appendChild(container);

    // <img> tag for the image itself
    var thumbnail = document.createElement("IMG");
    thumbnail.setAttribute("src", images[i].model_pic);
    thumbnail.setAttribute("class", "images");
    thumbnail.setAttribute("id", "img" + [i]);
    document.getElementById("div" + [i]).appendChild(thumbnail);

    // <a> tag for name and links.
    var title = document.createElement("A");

    title.setAttribute("class", "tags");
    title.setAttribute("id", "img" + [i]);
    title.setAttribute("href", "imageDisplay.html?id=" + images[i].model_pic);
    var insertContent = "" + images[i].location + "";
    title.textContent = insertContent;
    // var insertContent = "<img src=" + '"' + images[i].model_pic + '"' + ">";
    // title.textContent = insertContent;
    document.getElementById("div" + [i]).appendChild(title);
  }
}

// function expandPhoto(click_id) {
//   document.getElementById(click_id).setAttribute("class", "main");
//   console.log(window.location.href);
// }

function getPhotos() {
  return fetch("http://localhost:8000/api/images").then(results =>
    results.json()
  );
}
