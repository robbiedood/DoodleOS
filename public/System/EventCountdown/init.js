(function(global) {
  global.initializeEventCountdown = function(canvas, targetDate) {
    const ctx = canvas.getContext('2d');
    const effect = global.effectInit(canvas);

    const texts = [
      "👋🏻 Welcome!",
      "👉🏻 See more features?",
      "👉🏻 Join the waitlist!",
    '📝 Release will be 7/27',
    ];
    let currentTextIndex = 0;
    let textOpacity = 0;
    let lastTextChangeTime = 0;

    function updateCountdown() {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingMilliseconds = distance % (1000 * 60 * 60 * 24);
      const sixDigitMilliseconds = Math.floor((remainingMilliseconds / (1000 * 60 * 60 * 24)) * 1000000);

      // 清除畫布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和繪製粒子效果
      effect.update();

      // 繪製倒計時
      ctx.fillStyle = 'white';
      ctx.font = 'bold 72px Arial, sans-serif';
      ctx.textAlign = 'center';

      // 倒數計時demo day
      const formattedTime = `${days.toString().padStart(2, '0')}.${sixDigitMilliseconds.toString().padStart(6, '0')}`;
      ctx.fillText(formattedTime, canvas.width / 2, canvas.height / 2);
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.fillText('days till release', canvas.width / 2, canvas.height / 2 + 40);

      // 繪製文字
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity})`;
      ctx.fillText(texts[currentTextIndex], 100, 40);

      // 更新文字動畫
      if (now - lastTextChangeTime > 3000) {
        textOpacity -= 0.05;
        if (textOpacity <= 0) {
          textOpacity = 0;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          lastTextChangeTime = now;
        }
      } else {
        textOpacity += 0.05;
        if (textOpacity >= 1) {
          textOpacity = 1;
        }
      }
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
