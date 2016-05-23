var Timer = (function() {
  var instance;

  function createInstance() {
    var countdown;

    return {
      font: '30px monospace',
      time: 0,
      isStop: false,

      start: function() {
        if (this.isStop) {
          return;
        }

        countdown = setInterval(function() {
          this.time -= 1;

          if (this.time === 0) {
            this.stop();
          }
        }.bind(this), 1000);
      },

      stop: function() {
        this.isStop = true;
        clearInterval(countdown);
      },

      resume: function() {
        this.start();
      },

      draw: function(context) {
        context.save();
        context.font = this.font;
        context.fillText(this.time, 30, 50);
        context.restore();
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();