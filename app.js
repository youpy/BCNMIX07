$(function() {
  (function(global) {
    var App = function() {
      this.init();
    };
    
    $.extend(App.prototype, {
      init     : function() {
        this.instruments = [];
        this.tabs        = [];
        this.timers      = [];
        this.started     = false;
        this.intervals   = [];
      },
      
      register : function(url, options) {
        var options = options || {};

        this.instruments.push([url, options]);
      },

      start    : function() {
        var that = this;

        this.started = true;

        var intervalId = setInterval(function() {
          var tab = that.tabs[Math.floor(Math.random() * that.tabs.length)];

          if(tab.active)
            chrome.tabs.update(tab.id, { active: true });
        }, 500);

        this.intervals.push(intervalId);

        _.each(this.instruments, function(instrument) {
          var url     = instrument[0],
              options = instrument[1],
              timer;

          timer = setTimeout(function() {
            chrome.tabs.create({
              url : url
            }, function(tab) {
              var timer;

              that.tabs.push(tab);

              if(options.closeAfter) {
                timer = setTimeout(function() {
                  if(tab.active)
                    chrome.tabs.remove(tab.id);

                  that.tabs.splice(that.tabs.indexOf(tab), 1);

                  if(options.onClose)
                    options.onClose.apply(null, []);
                }, options.closeAfter);

                that.timers.push(timer);
              }
            });
          }, options.wait || 0);

          that.timers.push(timer);
        });
      },

      stop     : function() {
        this.started = false;

        _.each(this.tabs, function(tab) {
          if(tab.active)
            chrome.tabs.remove(tab.id);
        });

        _.each(this.timers, function(timer) {
          clearTimeout(timer);
        });

        _.each(this.intervals, function(interval) {
          clearInterval(interval);
        });

        this.tabs    = [];
        this.timers  = [];
        this.started = false;
      }
    });

    global.Soundwwwalk = global.Soundwwwalk || {};
    global.Soundwwwalk.App = App;
  })(window);
});

