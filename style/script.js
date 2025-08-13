function generateText() {
  const letters = ['I Love You', 'Dr.Gifter'];
  const numbers = [];
  const a = "a".charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCharCode(a + i));
    if (i < 9) numbers.push(i + 1);
  }

  return [...letters, ...numbers];
}

function randomText() {
  const texts = generateText();
  return texts[Math.floor(Math.random() * texts.length)];
}

function rainEffect() {
  const cloudEle = document.querySelector(".cloud");
  const textEle = document.createElement("div");

  textEle.innerText = randomText();
  textEle.classList.add("text");
  const cloudWidth = cloudEle.clientWidth;
  const left = Math.random() * (cloudWidth - 20); 
  const fontSize = Math.random() * 1 + 0.5; 

  const duration = 1 + Math.random();

  Object.assign(textEle.style, {
    left: `${left}px`,
    fontSize: `${fontSize}em`,
    animationDuration: `${duration}s`,
  });

  cloudEle.appendChild(textEle);
  setTimeout(() => {
    textEle.remove();
  }, duration * 1000);
}
setInterval(rainEffect, 20);
