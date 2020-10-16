function changeBackground(path) {
  let result = document.querySelector('#content');
  result.style['background-image'] = `url("${path}")`;
}
