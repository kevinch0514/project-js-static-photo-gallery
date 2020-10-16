let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

function renderLayout(content) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>A website!</title>
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <header id="page-header">
      <h1>Amazing Photo Gallery</h1>
    </header>
    <main class="grid" id="content">
      ${content}
    </main>
  </body>
</html>
`;
}

// This code is just here to demonstrate how fs.readdirSync works

console.log('sites/images contains the following files:');

function generateGallery(imageFileNames) {
  let html = '';
  // let photoArray = [];

  for (let i = 0; i < imageFileNames.length; i++) {
    let fileName = imageFileNames[i];
    // photoArray.push(fileName);
    // console.log(`${i + 1}. ${fileName}`);
    html += `\t<img src="images/${fileName}>\n`;
    // console.log(`${i + 1}. ${fileName}`);
  }
  return html;
}

console.log(renderLayout(generateGallery(imageFileNames)));


// // Changing Background
// function changeBackground(path) {
//   let result = document.querySelector('#content');
//   result.style['background-image'] = `url("${path}")`;
// }

// let allImages = document.querySelectorAll('#content img');

// for (let image of allImages) {
// image.addEventListener('mouseover', function() {
//   changeBackground(image.src)
// })
// }
