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
      },
      
      register : function(url, options) {
        var options = options || {};

        this.instruments.push([url, options]);
      },

      start    : function() {
        var that = this;

        this.started = true;

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
                  if(tab.index >= 0)
                    chrome.tabs.remove(tab.id);
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
          if(tab.index >= 0) {
            chrome.tabs.remove(tab.id);
          }
        });

        _.each(this.timers, function(timer) {
          clearTimeout(timer);
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
