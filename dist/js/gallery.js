// call Django API and fetch photos
document.getElementById("container-images").addEventListener("load", gallery());

async function gallery() {
  const images = await getPhotos();

  for (i = 0; i < images.length; i++) {
    var thumbnail = document.createElement("IMG");
    thumbnail.setAttribute("src", images[i].model_pic);
    thumbnail.setAttribute("class", "images");
    thumbnail.setAttribute("id", "img" + [i]);
    document.getElementById("container-images").appendChild(thumbnail);

    var title = document.createElement("A");
    title.setAttribute("href", "#");
    title.setAttribute("class", "tags");
    title.setAttribute("data-content", images[i].location);
    // document.getElementById("container-images").appendChild(title);
  }
}

function getPhotos() {
  return fetch("http://localhost:8000/api/images").then(results =>
    results.json()
  );
}
