(function(global) {
  global.initializeEventCountdown = function(canvas) {
    const ctx = canvas.getContext('2d');
    const effect = global.effectInit(canvas);

    function updateCountdown() {
      // 清除畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 更新和繪製粒子效果
      effect.update();
      requestAnimationFrame(updateCountdown);
    }

    updateCountdown();

    return {
      destroy: function() {
        document.body.removeChild(textContainer);
        document.head.removeChild(style);
      }
    };
  };
})(typeof self !== "undefined" ? self : this);
