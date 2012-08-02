$(function() {
  var app = new Soundwwwalk.App();

  app.register('http://www.youtube.com/watch?v=yoB0pM2VASg', {
    wait : 0,
    closeAfter : 10000
  });

  app.register('http://www.youtube.com/watch?v=Uq-JdUVhr3Y', {
    wait : 5000,
    closeAfter : 10000
  });

  chrome.browserAction.onClicked.addListener(function() {
    app.started ? app.stop() : app.start();
  });
});
