// piLibs.js
(function(global) {
  global.piLibs = {
    formatTime: function(hours, minutes, seconds) {
      function padNumber(num) {
        return num.toString().padStart(2, '0');
      }
      return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    }
  };
})(typeof self !== "undefined" ? self : this);
