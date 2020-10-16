let fs = require('fs');

// Writing New HTML
let imageFileNames = fs.readdirSync('site/images');

function renderLayout(content) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>TK Photo Gallery</title>
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <header id="page-header">
      <h1>TK Photo Gallery</h1>
    </header>
    <main class="grid" id="content">
      ${content}
    </main>
    <script>
      let allImages = document.querySelectorAll('#content img');
      for (let image of allImages) {
      image.addEventListener('mouseover', function() {
        changeBackground(image.src)
      })
      }
    </script>
    <script src="../gallery.js"></script>
  </body>
</html>
`;
}

function generateGallery(imageFileNames) {
  let html = '';

  for (let i = 0; i < imageFileNames.length; i++) {
    let fileName = imageFileNames[i];
    html += `<img src="images/${fileName}">\n\t\t\t`;
  }
  return html;
}

let newPage = renderLayout(generateGallery(imageFileNames))

fs.writeFileSync('site/index.html', newPage);

console.log('File written successfully.');



// Changing Background
function changeBackground(path) {
  let result = document.querySelector('#content');
  result.style['background-image'] = `url("${path}")`;
}
