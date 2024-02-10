document.addEventListener("DOMContentLoaded", function() {
    refreshCaptcha();
  });

  function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }

    return captcha;
  }

  function refreshCaptcha() {
    const captchaElement = document.querySelector(".words");
    const captchaInput = document.querySelector(".input");

    const captchaText = generateCaptcha();
    captchaElement.textContent = captchaText;
    captchaInput.value = "";
  }

  function validateCaptcha() {
    const captchaElement = document.querySelector(".words");
    const captchaInput = document.querySelector(".input");

    const captchaText = captchaElement.textContent;
    const userInput = captchaInput.value.trim();

    if (userInput === captchaText) {
      alert("CAPTCHA is correct! You can proceed.");
      refreshCaptcha();
    } else {
      alert("CAPTCHA is incorrect. Please try again.");
      refreshCaptcha();
    }
  }

