var test = require("prova");
var scrollBottom = require("./");

test('returns a number', function (t) {
  document.body.innerHTML = '<div style="height:5000px; color:white; background:pink;">yolo</div>';

  t.plan(2);
  t.equal(scrollBottom(), 5000);

  window.scrollTo(0, 5000);
  t.equal(scrollBottom(), 0);
});
