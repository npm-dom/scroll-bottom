module.exports = scrollBottom;

function scrollBottom () {
  var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  var windowHeight = Math.max(window.innerHeight, document.body.clientHeight, document.documentElement.clientHeight);
  return documentHeight - (scrollTop + windowHeight);
}
