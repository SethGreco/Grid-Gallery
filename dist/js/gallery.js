// call Django API and fetch photos
document.getElementById("container-images").addEventListener("load", gallery());

async function gallery() {
  const images = await getPhotos();

  for (i = 0; i < images.length; i++) {
    var container = document.createElement("DIV");
    container.setAttribute("id", "div" + [i]);
    container.setAttribute("class", "img-container");
    document.getElementById("container-images").appendChild(container);

    var thumbnail = document.createElement("IMG");
    thumbnail.setAttribute("src", images[i].model_pic);
    thumbnail.setAttribute("class", "images");
    thumbnail.setAttribute("id", "img" + [i]);
    document.getElementById("div" + [i]).appendChild(thumbnail);

    var title = document.createElement("A");
    title.setAttribute("href", "#");
    title.setAttribute("class", "tags");
    var insertContent = "" + images[i].location + "";
    title.textContent = insertContent;
    document.getElementById("div" + [i]).appendChild(title);
  }
}

function getPhotos() {
  return fetch("http://localhost:8000/api/images").then(results =>
    results.json()
  );
}
