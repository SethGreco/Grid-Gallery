# Grid-Gallery

A front-end styling attempt using only Vanilla JavaScript & CSS3 (Grid).

It calls a backend Django API made be me previously.

It makes a get request for all the items in the DB,
which has two properties. URL Location & State Name (USA state names).

recieves an array of objects, I iterate over them and create the html elements in JS,
which is inserted into a container.

At this point grid layout is basic and both state name and picture are in individual containers.
May need to make an edit to the DB model and add titles to the photos.

All Photos are taken by me for this project.

#SASS

My second project using Sass, this time however with out the NPM package version.
Installed with brew and ran with sass commands rather then package.json scripts.

#EXIF-js
EXIF library cdn is called to help extract and view the metadata of the photos. Many fields are avaiable to view but only using, Date taken, camera mdoel, aperture, focal length, exposure, & iso.
