$(function() {
  var app = new Soundwwwalk.App();

  app.register('http://youtu.be/CsGtzbwXwSo?t=1m35s', {
    closeAfter: (8 * 60 + 19) * 1000
  });

  app.register('http://www.youtube.com/watch?v=6_PLnInsh7E', {
    closeAfter: (5 * 60 + 30) * 1000
  });

  app.register('http://www.youtube.com/watch?v=1iizIulzogs', {
    wait: 60000,
    closeAfter: (5 * 60) * 1000
  });

  app.register('http://youtu.be/3AhSUOiokBs?t=25s', {
    wait: 300000,
    closeAfter: 4 * 60 * 1000
  });

  // app.register('http://www.youtube.com/watch?v=MnPobgmdYXU', {
  //   wait: 400000,
  //   closeAfter: (4 * 60) * 1000
  // });

  app.register('http://www.youtube.com/watch?v=0eQjn8I7G4M', {
    wait: 430000,
    closeAfter: (2 * 60 + 20) * 1000
  });

  app.register('http://youtu.be/lE3N5N-Ueng?t=2m7s', {
    wait: 400000,
    closeAfter: (2 * 60) * 1000
  });

  app.register('http://www.youtube.com/watch?v=vROdVsU_K80', {
    wait: 320000,
    closeAfter: (1 * 60 + 40) * 1000
  });

  // app.register('http://youtu.be/PF7m-ztTRWY?t=24s', {
  //   wait: 500000,
  //   closeAfter: (8 * 60 + 30) * 1000
  // });

  app.register('http://youtu.be/dq6T5BojXc8?t=11s', {
    wait: 500000,
    closeAfter: 3 * 60 * 1000
  });

  app.register('http://youtu.be/PF7m-ztTRWY?t=24s', {
    wait: 600000,
    closeAfter: (8 * 60 + 30) * 1000
  });

  app.register('http://youtu.be/HS56AYVj0mo?t=9s', {
    wait: 650000,
    closeAfter: 2 * 60 * 1000
  });

  app.register('http://youtu.be/4pa5pSOkOus', {
    wait: 660000,
    closeAfter: 2 * 60 * 1000
  });

  app.register('http://www.youtube.com/watch?v=1F_IP5fHAvw', {
    wait: 700000,
    closeAfter: (60 * 7 + 10) * 1000,
    onClose: function() {
      app.stop();
    }
  });

  app.register('http://youtu.be/web4QKwSzS8', {
    wait: 750000,
    closeAfter: 30 * 1000
  });

  app.register('http://youtu.be/ph2U28IidA4?t=24s', {
    wait: 780000,
    closeAfter: (2 * 60 + 20) * 1000
  });

  app.register('http://youtu.be/38Sh2BO6wZs?t=1m3s', {
    wait: 830000,
    closeAfter: (4 * 60 + 30) * 1000
  });

  setTimeout(function() {
    if(app.started)
      app.stop();
  }, 20 * 60 * 1000);

  chrome.browserAction.onClicked.addListener(function() {
    app.started ? app.stop() : app.start();
  });
});

